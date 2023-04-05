// https://jackwhiting.co.uk/posts/using-firebase-admin-sdk-with-netlify-lambda-functions/
const express = require("express");
const serverless = require("serverless-http");

// Firestore

var admin = require("firebase-admin");

var serviceAccount = {
  "type": "service_account",
  "project_id": "image-survey-app",
  "private_key_id": process.env.VUE_APP_FIREBASE_PRIVATE_ID,
  "private_key": process.env.VUE_APP_FIREBASE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
  "client_email": "firebase-adminsdk-kt2mc@image-survey-app.iam.gserviceaccount.com",
  "client_id": "105194716233218549586",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kt2mc%40image-survey-app.iam.gserviceaccount.com"
}
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://image-survey-app.firebaseio.com"
  });
}
let db = admin.firestore();

// Express App
const app = express();
const router = express.Router();

// Settings

var SURVEY_NAME = "images-survey-1";
var MAX_ANSWERS = 10;

// Firestore Routes

router.get("/", (req, res) => {
  res.send("This route only user related requests.");
});

router.post("/get_open_image", function (req, res) {
  var inFile = JSON.parse(req.body);
  var open_ids = [];
  let docRef = db
    .collection(SURVEY_NAME + '.images')
    .where("n_rated", "<", MAX_ANSWERS)
  docRef
    .get()
    .then((snapshot) => {
      if (snapshot.empty) {
        res.status(401).send("No images left");
      }
      snapshot.forEach((doc) => {
        var data = doc.data();
        if (inFile.images_already_rated.includes(data.image_name) == false) {
          open_ids.push(data.image_name);
        }
      });

      if (open_ids.length == 0) {
        res.status(200).send({
          'image': null
        });
      }
      else {
        var random_int = Math.floor(Math.random() * open_ids.length)
        var selected_image = open_ids[random_int];
        res.status(200).send({
          'image': selected_image
        });
      }
    })
    .catch((err) => {
      res.status(401).send("Error while retreiving usage");
    });
});

router.post("/send_answer", function (req, res) {
  var inFile = JSON.parse(req.body);
  // add answer
  var docRef = db.collection(SURVEY_NAME + '.survey');
  docRef
    .add({
      user_id: inFile.user_id,
      image_name: inFile.image_name,
      question: inFile.question,
      rating: inFile.rating,
      time: new Date(),
    })
    .then((ref) => {
      
      // add that image has been rated
      var docRef = db.collection(SURVEY_NAME + '.images')
      .where("image_name", "==", inFile.image_name)
      .limit(1);
      docRef.get().then((snapshot) => {
      if (snapshot.empty) {
        res.status(401).send("No such image");
      }
      docRef
        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            db.collection(SURVEY_NAME + '.images')
              .doc(doc.id)
              .update({
                n_rated: doc.data().n_rated + 1
              })
              .then(function () {
                res.status(200).send("Answer sent");
              });
          })
        })
      })


    });
});

app.use("/.netlify/functions/data", router);

module.exports.handler = serverless(app);