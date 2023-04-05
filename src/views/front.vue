<template>
    <div id="app" class="flex">
        <div v-if="image_name == null" class="no_image_left flex-col">
            <p>No image left to rate</p>
        </div>
        <div v-else class="image_container flex">
            <img :src="image_url + '/' + image_name + '.jpg'" alt="" class="w-96 mr-4">
        <div id="survey" class="flex-col ml-4">
            <div id="q1">
                <p class="text-2xl">How well do you know this influencer?</p>
                <div class="buttons mt-4 flex">
                    <button v-for="index in 10" :key="index" @click="send('q1', index)"
                        class="button-1 bg-alternative rounded-full h-6 w-6 text-bg flex-col ml-1">{{index}}</button>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import backend_functions from "../data/backend_functions";
    export default {
        data() {
            return {
                answer_count: 0,
                max_answer_count: 10,
                user_id: null,
                image_name: null,
                image_url: 'https://image-survey-1.s3.eu-central-1.amazonaws.com',
                images_already_rated: [],
                questions: {
                    prominence: null
                }
            }
        },
        methods: {
            send(question, index) {
                var data = {
                    'user_id': this.user_id,
                    'image_name': this.image_name,
                    'question': question,
                    'rating': index
                }

                this.images_already_rated.push(this.image_name);

                backend_functions.send_answer(data).then((response) => {
                    this.answer_count = this.answer_count+1;
                    this.get_next_image();
                });
            },
            get_next_image() {
                if (this.answer_count < this.max_answer_count) {
                    backend_functions.get_open_image({images_already_rated: this.images_already_rated}).then((response) => {
                        this.image_name = response.data.image;
                    });
                } else {
                    // redirect back if more then X questions answered
                }
            }
        },
        mounted() {
            this.user_id = Math.floor(Math.random() * 1e+6);
            this.get_next_image();
        }
    }
</script>

<!-- 

    ToDo:

    - Add cookie to save user_id
    - Add max timelimit of 10 mins or so, and return user back after the time
    - add attention check
    - add all the redirects: 1. no image left to rate, 2. more than X minutes spent, 3. more than X images rated
    - maybe add speeder back route?
    - make more beautiful


 -->