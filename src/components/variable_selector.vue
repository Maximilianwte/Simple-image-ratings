<template>
  <button @click="VariableSelector_toggle" class="flex items-center">
    <div class="squareIcon w-4 h-4 border-2 border-main" :class="Icon_GetColored" />
    <h4 class="ml-2">{{data.title}}</h4>
  </button>
</template>

<script>
export default {
    props: ["data", "type"],
    computed: {
        Icon_GetColored() {
            return this.data.active ? "bg-main" : "bg-bg";
        }
    },
    methods: {
    VariableSelector_toggle() {
      this.$emit("toggle", this.type, this.data.index);
    },
    }

}
</script>