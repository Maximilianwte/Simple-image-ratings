<template id="variabledesc">
  <div class="w-full mb-20 mt-40 md:mt-32 md:px-16 lg:px-40">
    <variable_table :data="variables.structure" />
      <variable_table class="mt-10" :data="variables.speech" />
      <variable_table class="mt-10" :data="variables.transcription" />
      
    <!-- <div id="topRow" class="md:flex mt-20 items-start justify-between">
      <variable_table :data="variables.structure" />
      <variable_table class="mt-10 md:mt-0" :data="variables.speech" />
      <variable_table :data="variables.transcription" />
    </div>
    <div id="botRow" class="md:w-1/2 mt-10 md:mt-20 mb-32">
      <variable_table :data="variables.transcription" />
    </div> -->
  </div>
</template>

<script>
import variable_table from "../components/variable_table.vue";
export default {
  components: { variable_table },
  metaInfo: {
    title: "Variable description",
  },
  data() {
    return {
      variables: {
        structure: {
          title: "Structural audio features",
          variables: [
            {
              title: "BPM",
              titleAnalysis: "bpm",
              description: "Average beats per minute.",
            },
            {
              title: "Duration",
              titleAnalysis: "duration_in_s",
              description: "Total duration of the audio file in seconds - minimum 30 seconds as Whisper pads shorter audio files to that duration.",
            },
            {
              title: "Sample rate",
              titleAnalysis: "sample_rate",
              description: "Sample rate of the analyzed audio file in Hz.",
            },
            {
              title: "Filesize",
              titleAnalysis: "size_kB",
              description: "File size in kilobytes.",
            },
            {
              title: "Speaker binary",
              titleAnalysis: "speaker_detected",
              description: "Flag whether or not a speaker has been detected.",
            },
          ],
        },
        speech: {
          title: "Voice features",
          variables: [
            {
              title: "Language spoken",
              titleAnalysis: "transcribed_OA_whisper_lang",
              description: "Dominant language detected by Whisper.",
            },
            {
              title: "Length speech",
              titleAnalysis: "total_speech",
              description: "Number of seconds where speech was detected.",
            },
            {
              title: "Number voice breaks",
              titleAnalysis: "voice_breaks",
              description: "Number of pauses between speech segments.",
            },
            {
              title: "Max share speaker",
              titleAnalysis: "max_speaker_share",
              description: "Largest share (%) an individual speaker has of the total speech duration - speech time speaker X / total_speech.",
            },
            {
              title: "Avg share speaker",
              titleAnalysis: "avg_speaker_share",
              description: "Average share (%) an individual speaker has of the total speech duration - speech time speaker X / total_speech / num_speakers.",
            },
            {
              title: "Sd share speaker",
              titleAnalysis: "sd_speaker_share",
              description: "Standard deviation of the shares (%) individual speakers have of the total speech duration - indicator how (un)balanced a conversation is (?).",
            },
            {
              title: "Emotion in audio",
              titleAnalysis: "Emotion_audio",
              description: "'Disgust' score computed based on the audio file.",
            },
          ],
        },
        transcription: {
          title: "Text analysis features",
          variables: [
            {
              title: "Word count",
              titleAnalysis: "word_count",
              description: "Length of the audio transcription in number of words.",
            },
            {
              title: "Sum of syllables",
              titleAnalysis: "sum_syl",
              description: "Length of the audio transcription in number of syllables.",
            },
            {
              title: "Mean of syllables",
              titleAnalysis: "mean_syl",
              description: "Mean number of syllables per word.",
            },
            {
              title: "Emotion text",
              titleAnalysis: "emotion_text",
              description: "Emotion scores computed based on the English Whisper transcription.",
            },
          ],
        },
      },
    };
  },
};
</script>
