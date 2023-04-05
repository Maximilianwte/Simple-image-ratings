<template>
  <div
    :class="ui_dark ? 'theme_dark' : 'theme_light'"
    class="min-h-screen w-screen flex-col relative text-main bg-bg pb-4"
  >
    <div
      id="footer"
      class="absolute bottom-0 right-0 mr-6 md:left-0 md:ml-8 mb-4 md:mb-4"
    >
      <router-link to="/imprint">Imprint</router-link>
      <router-link class="ml-4" to="/privacy">Data privacy</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Method",
    titleTemplate: "%s - The Audio Analyzer",
    htmlAttrs: {
      lang: "de",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content:
          "Der Wahl-O-Bot. Nutze die künstliche Intelligenz, um die Partei zu finden, die am ehesten deine Themen unterstützt. Benutze die App, um jeden möglichen Text einzugeben.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "keywords",
        content:
          "Wahl, Wahlen, Wahl-o-Mat, Wahl-o-Bot, Bundestag, Deutschland, Politik, Parteien, Wahlhilfe, KI, AI",
      },
    ],
  },
  data() {
    return {
      ui_dark: false,
    };
  },
  methods: {
    ui_toggleDarkMode() {
      this.ui_dark = !this.ui_dark;
    },
  },
};
</script>

<style src="./main.css" />