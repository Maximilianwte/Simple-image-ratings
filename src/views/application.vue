<template>
  <div id="front" class="flex-col text-2xl mb-32 lg:px-24 w-full">
    <h6 class="mt-40 w-12 h-12 bg-main text-bg flex-col rounded-full">1</h6>
    <div class="input mt-4 px-6 flex-col w-full" @dragover.prevent @drop.prevent>
      <h6 class="mt-6 mb-6 w-full md:w-128 px-2 text-xl text-justify">
        Upload all audio files you want to get analyzed as .zip folders. Drag in
        the files below or click on the gray field to open the upload menu.
      </h6>
      <input type="file" id="files" multiple @change="uploadFile" style="display: none" />
      <label for="files">
        <div @drop="dragFile" class="
            file_drop
            cursor-pointer
            bg-gray-100
            text-gray-600
            flex-col
            text-center
            px-6
            md:px-0 md:w-128
            py-12
            rounded-lg
            shadow-md
            border-gray-200 border
            md:border-0
          ">
          <div v-if="data.files == null" id="message-empty" class="flex-col">
            <div class="icon svg-gray">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-12" version="1.0" viewBox="0 0 512 512">
                <path
                  d="M3.4 29.4 0 32.8v202.6c0 154.9.3 203.1 1.2 205.1 2.6 5.9-9.9 5.5 196.1 5.5h189.4l.5 7.9c.8 14.1 7.2 23.7 19.5 29.4 7.1 3.2 18.8 3.1 26.3-.4 7.9-3.7 11.5-7.1 15.1-14.4 2.4-4.9 3.2-8.1 3.6-14.4l.6-8.1h25.9c28.1 0 30.3-.4 32.6-5.5 1.7-3.6 1.7-360.6.1-363.8-.6-1.2-2.1-3-3.3-3.9-2-1.6-11.2-1.8-147.1-1.8h-145l-22.2-22.3L171 26.5l-82.1-.3L6.8 26l-3.4 3.4zm181.3 38.8L207 90.5l101 .3 101 .2v19h-5.5c-9.4 0-13.5 3.3-13.5 10.8 0 3.3.6 4.5 3.1 6.6 2.6 2.2 4 2.6 9.5 2.6h6.4v25h-6.1c-9.2 0-12.8 2.6-12.9 9.3 0 2.1.5 4.7 1.1 5.9 1.5 2.8 6.9 4.8 12.9 4.8h5v23.8l-7.1.4c-6.3.3-7.4.7-9.5 3.1-3.5 4.1-3.3 10 .5 13.8 2.7 2.6 3.6 2.9 9.5 2.9h6.6v24h-4.2c-6.1 0-11.5 1.7-13.3 4.3-2.5 3.6-1.9 10 1.1 13.1 2.4 2.3 3.5 2.6 9.5 2.6h6.9v25h-6.6c-5.9 0-6.8.3-9.5 2.9-3.8 3.8-4 9.7-.5 13.8 2.1 2.4 3.2 2.8 9.5 3.1l7.1.4V332h-5c-6 0-11.4 2-12.9 4.8-.6 1.2-1.1 3.9-1.1 6 0 3.3.6 4.5 3.1 6.6 2.6 2.2 4 2.6 9.5 2.6h6.4v25.5l-4.5 2.4c-5.7 3-12 9.9-14.8 15.9-1.7 3.8-2.2 7.1-2.5 17.4l-.4 12.8H20V46h142.5l22.2 22.2zM492 258.5V426h-39.8l-.4-12.8c-.3-10.3-.8-13.6-2.5-17.4-2.8-6-9.1-12.9-14.8-15.9-6.2-3.3-5.9-4.9 1-4.9 9.3 0 13.5-3.3 13.5-10.5 0-2.7-.8-4.4-2.9-6.6-2.7-2.6-3.6-2.9-9.5-2.9H430v-25h6.9c6 0 7.1-.3 9.5-2.6 3-3.1 3.6-9.5 1.1-13.1-1.8-2.6-7.2-4.3-13.2-4.3H430v-23.8l7.1-.4c6.3-.3 7.4-.7 9.5-3.1 3.5-4.1 3.3-10-.5-13.8-2.7-2.6-3.6-2.9-9.5-2.9H430v-24h4.3c6 0 11.4-1.7 13.2-4.3 2.5-3.6 1.9-10-1.1-13.1-2.4-2.3-3.5-2.6-9.5-2.6H430v-25h6.6c5.9 0 6.8-.3 9.5-2.9 2.1-2.2 2.9-3.9 2.9-6.6 0-7.2-4.2-10.5-13.5-10.5H430v-24h5c6 0 11.4-2 12.9-4.8.6-1.2 1.1-3.9 1.1-6 0-3.3-.6-4.5-3.1-6.6-2.6-2.2-4-2.6-9.5-2.6H430V91h62v167.5zm-67.5 138.9c1.9.8 4.4 3 5.5 4.8 1.9 3.1 2 5 2 28.9 0 25-.1 25.7-2.3 29-3 4.5-6.3 6.1-11.6 5.6-3.2-.4-5.2-1.3-7.5-3.6l-3.1-3.1-.3-26.8c-.2-25.4-.1-26.9 1.8-30 2-3.2 6.7-6.1 10.3-6.2 1 0 3.3.6 5.2 1.4z" />
                <path
                  d="m48.4 224.4-3.4 3.4v82.6c0 61.8.3 83.2 1.2 85.1 2.6 5.8-3.9 5.5 128.8 5.5 132.7 0 126.2.3 128.8-5.5.9-1.9 1.2-23.3 1.2-85.1v-82.6l-3.4-3.4-3.4-3.4H51.8l-3.4 3.4zM285 311v70H65V241h220v70z" />
                <path
                  d="M95.1 267.4c-4.7 2.6-6.3 8.4-3.7 13.5 2.2 4.1 5.5 5.1 17.2 5.1H119l-14.5 29c-8 15.9-14.5 29.9-14.5 31 0 3.3 2.6 7.5 5.5 8.8 4 1.8 40.7 1.6 44.4-.2 6.6-3.5 6.6-13.7 0-17.2-1.9-.9-6.2-1.4-13.4-1.4H116l14.5-29c8-15.9 14.5-30.2 14.5-31.6 0-1.6-1.3-3.9-3.4-6l-3.4-3.4h-20.3c-15 .1-21 .4-22.8 1.4zM166.3 267c-1.2.5-3 2.1-4 3.6-1.6 2.5-1.8 6-2.1 36.9-.2 18.7 0 36 .3 38.4 1.8 12.1 16.3 13.8 19.5 2.3 1.2-4.6 1.3-68.1 0-73.6-.5-2.1-1.7-4.7-2.7-5.8-2.3-2.2-7.9-3.2-11-1.8zM203.5 269.3l-3.5 3.5v37.6c0 40.9.1 42 5.5 44.4 5.1 2.3 10.7.7 13.1-3.9 1-1.9 1.4-6.2 1.4-13.7v-11l8.8-.4c10.4-.5 17.2-3.1 22.5-8.6 8.5-8.8 10.8-23.3 5.4-34.4-3.2-6.4-8-11.1-14.6-14.2-3.8-1.7-7.1-2.1-19.8-2.4l-15.3-.4-3.5 3.5zm31.5 18.4c4.7 2.7 6.1 7.7 3.8 12.8-1.7 3.8-5.8 5.5-12.8 5.5h-6v-20h6.1c3.9 0 7.1.6 8.9 1.7z" />
              </svg>
            </div>
            <h4 class="mt-2">Upload your audio file .zip</h4>
          </div>
          <div v-else class="text-xl flex-col">
            <h3 class="mb-8">Uploaded files</h3>
            <div class="container flex">
              <div v-for="(file, i) in data.files" :key="i">
                <div class="flex-col w-48">
                  <div class="icon svg-gray">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-12" version="1.0" viewBox="0 0 512 512">
                      <path
                        d="M3.4 29.4 0 32.8v202.6c0 154.9.3 203.1 1.2 205.1 2.6 5.9-9.9 5.5 196.1 5.5h189.4l.5 7.9c.8 14.1 7.2 23.7 19.5 29.4 7.1 3.2 18.8 3.1 26.3-.4 7.9-3.7 11.5-7.1 15.1-14.4 2.4-4.9 3.2-8.1 3.6-14.4l.6-8.1h25.9c28.1 0 30.3-.4 32.6-5.5 1.7-3.6 1.7-360.6.1-363.8-.6-1.2-2.1-3-3.3-3.9-2-1.6-11.2-1.8-147.1-1.8h-145l-22.2-22.3L171 26.5l-82.1-.3L6.8 26l-3.4 3.4zm181.3 38.8L207 90.5l101 .3 101 .2v19h-5.5c-9.4 0-13.5 3.3-13.5 10.8 0 3.3.6 4.5 3.1 6.6 2.6 2.2 4 2.6 9.5 2.6h6.4v25h-6.1c-9.2 0-12.8 2.6-12.9 9.3 0 2.1.5 4.7 1.1 5.9 1.5 2.8 6.9 4.8 12.9 4.8h5v23.8l-7.1.4c-6.3.3-7.4.7-9.5 3.1-3.5 4.1-3.3 10 .5 13.8 2.7 2.6 3.6 2.9 9.5 2.9h6.6v24h-4.2c-6.1 0-11.5 1.7-13.3 4.3-2.5 3.6-1.9 10 1.1 13.1 2.4 2.3 3.5 2.6 9.5 2.6h6.9v25h-6.6c-5.9 0-6.8.3-9.5 2.9-3.8 3.8-4 9.7-.5 13.8 2.1 2.4 3.2 2.8 9.5 3.1l7.1.4V332h-5c-6 0-11.4 2-12.9 4.8-.6 1.2-1.1 3.9-1.1 6 0 3.3.6 4.5 3.1 6.6 2.6 2.2 4 2.6 9.5 2.6h6.4v25.5l-4.5 2.4c-5.7 3-12 9.9-14.8 15.9-1.7 3.8-2.2 7.1-2.5 17.4l-.4 12.8H20V46h142.5l22.2 22.2zM492 258.5V426h-39.8l-.4-12.8c-.3-10.3-.8-13.6-2.5-17.4-2.8-6-9.1-12.9-14.8-15.9-6.2-3.3-5.9-4.9 1-4.9 9.3 0 13.5-3.3 13.5-10.5 0-2.7-.8-4.4-2.9-6.6-2.7-2.6-3.6-2.9-9.5-2.9H430v-25h6.9c6 0 7.1-.3 9.5-2.6 3-3.1 3.6-9.5 1.1-13.1-1.8-2.6-7.2-4.3-13.2-4.3H430v-23.8l7.1-.4c6.3-.3 7.4-.7 9.5-3.1 3.5-4.1 3.3-10-.5-13.8-2.7-2.6-3.6-2.9-9.5-2.9H430v-24h4.3c6 0 11.4-1.7 13.2-4.3 2.5-3.6 1.9-10-1.1-13.1-2.4-2.3-3.5-2.6-9.5-2.6H430v-25h6.6c5.9 0 6.8-.3 9.5-2.9 2.1-2.2 2.9-3.9 2.9-6.6 0-7.2-4.2-10.5-13.5-10.5H430v-24h5c6 0 11.4-2 12.9-4.8.6-1.2 1.1-3.9 1.1-6 0-3.3-.6-4.5-3.1-6.6-2.6-2.2-4-2.6-9.5-2.6H430V91h62v167.5zm-67.5 138.9c1.9.8 4.4 3 5.5 4.8 1.9 3.1 2 5 2 28.9 0 25-.1 25.7-2.3 29-3 4.5-6.3 6.1-11.6 5.6-3.2-.4-5.2-1.3-7.5-3.6l-3.1-3.1-.3-26.8c-.2-25.4-.1-26.9 1.8-30 2-3.2 6.7-6.1 10.3-6.2 1 0 3.3.6 5.2 1.4z" />
                      <path
                        d="m48.4 224.4-3.4 3.4v82.6c0 61.8.3 83.2 1.2 85.1 2.6 5.8-3.9 5.5 128.8 5.5 132.7 0 126.2.3 128.8-5.5.9-1.9 1.2-23.3 1.2-85.1v-82.6l-3.4-3.4-3.4-3.4H51.8l-3.4 3.4zM285 311v70H65V241h220v70z" />
                      <path
                        d="M95.1 267.4c-4.7 2.6-6.3 8.4-3.7 13.5 2.2 4.1 5.5 5.1 17.2 5.1H119l-14.5 29c-8 15.9-14.5 29.9-14.5 31 0 3.3 2.6 7.5 5.5 8.8 4 1.8 40.7 1.6 44.4-.2 6.6-3.5 6.6-13.7 0-17.2-1.9-.9-6.2-1.4-13.4-1.4H116l14.5-29c8-15.9 14.5-30.2 14.5-31.6 0-1.6-1.3-3.9-3.4-6l-3.4-3.4h-20.3c-15 .1-21 .4-22.8 1.4zM166.3 267c-1.2.5-3 2.1-4 3.6-1.6 2.5-1.8 6-2.1 36.9-.2 18.7 0 36 .3 38.4 1.8 12.1 16.3 13.8 19.5 2.3 1.2-4.6 1.3-68.1 0-73.6-.5-2.1-1.7-4.7-2.7-5.8-2.3-2.2-7.9-3.2-11-1.8zM203.5 269.3l-3.5 3.5v37.6c0 40.9.1 42 5.5 44.4 5.1 2.3 10.7.7 13.1-3.9 1-1.9 1.4-6.2 1.4-13.7v-11l8.8-.4c10.4-.5 17.2-3.1 22.5-8.6 8.5-8.8 10.8-23.3 5.4-34.4-3.2-6.4-8-11.1-14.6-14.2-3.8-1.7-7.1-2.1-19.8-2.4l-15.3-.4-3.5 3.5zm31.5 18.4c4.7 2.7 6.1 7.7 3.8 12.8-1.7 3.8-5.8 5.5-12.8 5.5h-6v-20h6.1c3.9 0 7.1.6 8.9 1.7z" />
                    </svg>
                  </div>
                  <p class="mt-2">{{ returnNLetters(file.name, 40) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </label>
      <div class="bar w-full md:w-128 mt-6 mb-4 rounded-full bg-gray-200" style="height: 3px"></div>
      <div id="selectSampleFile" class="flex-col w-full md:w-128">
        <h2 class="text-gray-400">or select the sample file:</h2>
        <div id="sampleFile" @click="sampleAudio_toggle()" class="flex cursor-pointer items-center mt-4">
          <div class="squareIcon w-4 h-4 border-2" :class="sampleAudio_squareGetColored" />
          <h4 class="ml-2" :class="sampleAudio_textGetColored">
            Obama_Voting.wav
          </h4>
        </div>
      </div>

      <h6 class="mt-32 w-12 h-12 bg-main text-bg flex-col rounded-full">2</h6>
      <h3 class="mt-4 mb-4" @click="VariableSelector_toggle('structure', 0)">
        Variable selection
      </h3>
      <p class="w-full md:w-128 text-justify text-xl mb-16">
        Click on the variables to select which variables the AI should compute
        for your files. For more information about the variables see the
        <router-link class="italic hover:text-focus" to="/variable_description">variable description.</router-link>
      </p>
      <div class="
          container
          md:w-156
          flex-col
          items-start
          md:flex-row
          justify-between
          md:px-20
        ">
        <div id="left flex-col">
          <button @click="VariableSelectorAll_toggleAll('structure')" class="
              flex
              md:flex-col
              lg:flex-row
              items-center
              font-medium
              mt-12
              mb-4
              md:mt-0
            ">
            <div class="squareIcon w-4 h-4 border-2 border-main"
              :class="VariableSelectorAll_Icon_GetColored('structure')" />
            <h2 class="ml-2 md:ml-0 lg:ml-2">Structure variables</h2>
          </button>
          <variable_selector class="mt-2" v-for="variable in data.variableSelection.structure" :key="variable.index"
            type="structure" @toggle="VariableSelector_toggle" :data="variable" />
        </div>
        <div id="mid flex-col">
          <button @click="VariableSelectorAll_toggleAll('audio')" class="
              flex
              md:flex-col
              lg:flex-row
              items-center
              font-medium
              mt-12
              mb-4
              md:mt-0
            ">
            <div class="squareIcon w-4 h-4 border-2 border-main"
              :class="VariableSelectorAll_Icon_GetColored('audio')" />
            <h2 class="ml-2 md:ml-0 lg:ml-2">Audio variables</h2>
          </button>
          <variable_selector class="mt-2" v-for="variable in data.variableSelection.audio" :key="variable.index"
            type="audio" @toggle="VariableSelector_toggle" :data="variable" />
        </div>
        <div id="right flex-col">
          <button @click="VariableSelectorAll_toggleAll('transcription')" class="
              flex
              md:flex-col
              lg:flex-row
              items-center
              font-medium
              mt-12
              mb-4
              md:mt-0
            ">
            <div class="squareIcon w-4 h-4 border-2 border-main"
              :class="VariableSelectorAll_Icon_GetColored('transcription')" />
            <h2 class="ml-2 md:ml-0 lg:ml-2">Audio transcription</h2>
          </button>
          <variable_selector class="mt-2" v-for="variable in data.variableSelection.transcription" :key="variable.index"
            type="transcription" @toggle="VariableSelector_toggle" :data="variable" />
        </div>
      </div>
      <div v-if="ui.results" class="output-download mt-24 flex-col">
        <h3 class="w-64 text-center">Output file ready to download</h3>
        <button @click="downloadResults" title="Download results" id="download-results" class="
            mt-4
            w-12
            h-12
            px-2
            py-2
            flex-col
            rounded-full
            border-main border-2
            svg-white-on-hover
            hover:bg-main
          ">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 512 512">
            <path
              d="M246 45.2c-2.5 1.4-5.8 4.4-7.5 6.7l-3 4.3-.3 116.4c-.1 64-.6 116.4-1 116.4s-16.9-16.2-36.7-36.1c-19.8-19.8-37.1-36.6-38.5-37.3-3.9-2.1-10.4-2.8-14.7-1.7-9.2 2.5-15.2 9.7-16.1 19.4-.9 9.7-1.9 8.6 60 70.3 56.3 56.2 57.4 57.2 62.6 58.4 4.1.9 6.3.9 10.5 0 5.1-1.2 6.2-2.2 62-57.9 37.7-37.6 57.4-58 58.7-60.7 7.7-15.9-7.7-34-25-29.4-4 1-8.4 5-41.5 38.1-20.4 20.3-37.4 36.9-37.8 36.9-.4 0-.8-52.4-.9-116.3l-.3-116.4-2.7-3.9c-4.4-6.2-9-8.8-16.7-9.2-5.5-.3-7.4.1-11.1 2zM59 405.9c-10.4 3.2-16 10.6-16 21.1 0 8.4 5.3 16.1 13.2 19.4 3.3 1.4 24.8 1.6 200 1.6 188.9 0 196.5-.1 200.3-1.9 7.7-3.6 12.5-11.1 12.5-19.6 0-8.3-3.9-14.8-11.5-18.8l-4-2.2-196-.2c-107.8-.1-197.1.2-198.5.6z" />
          </svg>
        </button>
      </div>
      <div v-else class="analyze-ui flex-col">
        <div id="while_analyzing" v-if="ui.analyzing" class="mt-24 flex-col">
          <div class="soundwave-animation flex">
            <div class="stroke mx-1 h-10 bg-main rounded-full"></div>
            <div class="stroke mx-1 h-10 bg-main rounded-full"></div>
            <div class="stroke mx-1 h-10 bg-main rounded-full"></div>
            <div class="stroke mx-1 h-10 bg-main rounded-full"></div>
            <div class="stroke mx-1 h-10 bg-main rounded-full"></div>
            <div class="stroke mx-1 h-10 bg-main rounded-full"></div>
          </div>
          <p class="mt-4 mb-4">{{ ui.whileAnalyzing_displayText }}</p>
        </div>
        <p v-else class="mt-24">
          You have {{ ui.nCalculationVariablesSelected }} variable selected
        </p>
        <button @click="calculate" class="
            rounded-lg
            bg-alternative
            shadow-md
            hover:bg-focus
            text-white
            px-8
            py-2
            mt-4
          ">
          Analyze
        </button>
      </div>
    </div>
    <p class="text-alternative mt-6 px-4 text-center text-lg">
      {{ ui.information }}
    </p>
  </div>
</template>

<script>
  import backend_functions from "../data/backend_functions";
  import variable_selector from "../components/variable_selector";
  export default {
    components: {
      variable_selector
    },
    metaInfo: {
      title: "App",
    },
    data() {
      return {
        // all data and user selection variables
        data: {
          files: null,
          results: null,
          variableSelection: {
            structure: [{
                index: 0,
                title: "BPM",
                titleAnalysis: "bpm",
                active: true
              },
              {
                index: 1,
                title: "Duration",
                titleAnalysis: "duration_in_s",
                active: true
              },
              {
                index: 2,
                title: "Sample rate",
                titleAnalysis: "sample_rate",
                active: true
              },
              {
                index: 3,
                title: "Filesize",
                titleAnalysis: "size_kB",
                active: true
              },
              {
                index: 4,
                title: "Speaker binary",
                titleAnalysis: "speaker_detected",
                active: true
              },
            ],
            audio: [{
                index: 0,
                title: "Language spoken",
                titleAnalysis: "transcribed_OA_whisper_lang",
                active: false
              },
              {
                index: 1,
                title: "Length speech",
                titleAnalysis: "total_speech",
                active: false
              },
              {
                index: 2,
                title: "Number voice breaks",
                titleAnalysis: "voice_breaks",
                active: false
              },
              {
                index: 3,
                title: "Max share speaker",
                titleAnalysis: "max_speaker_share",
                active: false
              },
              {
                index: 4,
                title: "Avg share speaker",
                titleAnalysis: "avg_speaker_share",
                active: false
              },
              {
                index: 5,
                title: "Sd share speaker",
                titleAnalysis: "sd_speaker_share",
                active: false
              },
              {
                index: 6,
                title: "Emotion of audio",
                titleAnalysis: "Emotion_audio",
                active: false
              },
            ],
            transcription: [{
                index: 0,
                title: "Word count",
                titleAnalysis: "word_count",
                active: false
              },
              {
                index: 1,
                title: "Sum of syllables",
                titleAnalysis: "sum_syl",
                active: false
              },
              {
                index: 2,
                title: "Mean of syllables",
                titleAnalysis: "mean_syl",
                active: false
              },
              {
                index: 3,
                title: "Emotion of text",
                titleAnalysis: "emotion_text",
                active: false
              },
            ],
          },
        },
        sampleAudio: {
          active: false,
        },
        // only backend helper variables to help state management of ui
        ui: {
          information: null,
          analyzing: false,
          results: false,
          nCalculationVariablesSelected: 5,
          whileAnalyzing_step: 0,
          whileAnalyzing_displayText: "",
          variableSelectorAllOn: {
            structure: true,
            audio: false,
            transcription: false,
          },
        },
      };
    },
    computed: {
      sampleAudio_squareGetColored() {
        return this.sampleAudio.active ?
          "border-main bg-main" :
          "border-gray-400 bg-bg";
      },
      sampleAudio_textGetColored() {
        return this.sampleAudio.active ? "text-main" : "text-gray-400";
      },
    },
    methods: {
      uploadFile(e) {
        this.data.files = e.target.files;
        this.ui.results = false;
        this.ui.information = "";
      },
      dragFile(e) {
        this.data.files = e.dataTransfer.files;
        this.ui.results = false;
        this.ui.information = "";
      },
      async calculate() {
        if (this.sampleAudio.active) {
          this.ui.analyzing = true;

          var vars_filter = this.get_variables_filterout();

          let response = await backend_functions.send_request(vars_filter);
          var data = response.data;
          this.data.results = data;

          this.whileAnalyzing_changeDisplayText();
          setTimeout(this.whileAnalyzing_changeDisplayText, 3000);
          setTimeout(this.whileAnalyzing_changeDisplayText, 7000);
          setTimeout(this.whileAnalyzing_finish, 10000);
        }
        else {
          this.ui.information = "Please upload an audio file.";
        }
      },
      get_variables_filterout() {
        var data = [];
        var var_levels = ['structure', 'audio', 'transcription']
        for (var ind_var_level in var_levels) {
          for (var ind_var = 0; ind_var < this.data.variableSelection[var_levels[ind_var_level]].length; ind_var++) {
            if (!this.data.variableSelection[var_levels[ind_var_level]][ind_var].active) {
              data.push(this.data.variableSelection[var_levels[ind_var_level]][ind_var].titleAnalysis);
            }
          }
        }
        return data;
      },
      whileAnalyzing_changeDisplayText() {
        switch (this.ui.whileAnalyzing_step) {
          case 0: {
            this.ui.whileAnalyzing_displayText = "Importing audio files";
            break;
          }
          case 1: {
            this.ui.whileAnalyzing_displayText = "Analyzing files";
            break;
          }
          case 2: {
            this.ui.whileAnalyzing_displayText = "Generating output";
            break;
          }
        }
        this.ui.whileAnalyzing_step++;
      },
      whileAnalyzing_finish() {
        this.ui.analyzing = false;
        this.ui.results = true;
      },
      downloadResults() {
        this.ui.results = false;

        /* Create file and download */
        const anchor = document.createElement("a");
        anchor.href = 'data:attachment/text,' + encodeURI(this.data.results); //"results.csv" - I guess I need a path
        anchor.download = "output_analysis.csv";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      },
      VariableSelector_toggle(variableSection, variableIndex) {
        this.ui.nCalculationVariablesSelected =
          this.data.variableSelection[variableSection][variableIndex].active ==
          true ?
          this.ui.nCalculationVariablesSelected - 1 :
          this.ui.nCalculationVariablesSelected + 1;
        this.data.variableSelection[variableSection][variableIndex].active = !this.data.variableSelection[
          variableSection][variableIndex].active;
      },
      VariableSelectorAll_Icon_GetColored(name) {
        return this.ui.variableSelectorAllOn[name] ? "bg-main" : "bg-bg";
      },
      VariableSelectorAll_toggleAll(variableSection) {
        this.ui.variableSelectorAllOn[variableSection] = !this.ui.variableSelectorAllOn[variableSection];
        if (this.ui.variableSelectorAllOn[variableSection]) {
          for (
            var i = 0; i < this.data.variableSelection[variableSection].length; i++
          ) {
            this.ui.nCalculationVariablesSelected = !this.data.variableSelection[
                variableSection
              ][i].active ?
              this.ui.nCalculationVariablesSelected + 1 :
              this.ui.nCalculationVariablesSelected;
            this.data.variableSelection[variableSection][i].active = true;
          }
        } else {
          for (
            i = 0; i < this.data.variableSelection[variableSection].length; i++
          ) {
            this.ui.nCalculationVariablesSelected = this.data.variableSelection[
                variableSection
              ][i].active ?
              this.ui.nCalculationVariablesSelected - 1 :
              this.ui.nCalculationVariablesSelected;
            this.data.variableSelection[variableSection][i].active = false;
          }
        }
      },
      returnNLetters(text, nLetters) {
        return text.length < nLetters ? text : text.slice(0, nLetters) + "..";
      },
      sampleAudio_toggle() {
        this.sampleAudio.active = !this.sampleAudio.active;
        this.ui.information = "";
      },
    },
  };
</script>