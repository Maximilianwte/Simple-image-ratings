<template>
  <div
    :class="ui_dark ? 'theme_dark' : 'theme_light'"
    class="min-h-screen w-screen flex-col relative text-main bg-bg pb-4"
  >
    <div class="logo absolute text-2xl top-0 md:left-0 mt-6 md:ml-6">
      <router-link class="flex items-center" to="/">
        <div class="logo flex items-center">
          <div class="mx-1 h-8 w-1 bg-main rounded-full"></div>
          <div class="mx-1 h-10 w-1 bg-main rounded-full"></div>
          <div class="mx-1 h-6 w-1 bg-main rounded-full"></div>
          <div class="mx-1 h-4 w-1 bg-main rounded-full"></div>
          <div class="mx-1 h-6 w-1 bg-main rounded-full"></div>
          <div class="mx-1 h-8 w-1 bg-main rounded-full"></div>
        </div>
        <h1 class="ml-4">The audio analyzer</h1></router-link
      >
    </div>
    <div
      class="
        header
        flex
        absolute
        top-0
        md:right-0
        mt-20
        md:mt-4 md:mr-4 md:text-2xl
        font-black
        items-center
      "
    >
      <button
        title="Toggle Dark Mode"
        id="toggleUIDarkMode"
        @click="ui_toggleDarkMode"
        class="w-4 h-4 mr-2 rounded-full bg-main"
      />
      <router-link class="mx-1 md:mx-4 hover:text-focus" to="/"
        >Method</router-link
      >
      <router-link
        class="mx-4 w-24 md:w-auto text-center hover:text-focus"
        to="/variable_description"
        >Variable Description</router-link
      >
      <router-link
        class="
          mx-1
          md:mx-4
          px-4
          py-2
          border-2
          rounded-lg
          border-main
          hover:text-focus hover:text-alternative hover:border-alternative
        "
        to="/app"
        >Analyzer</router-link
      >
    </div>
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