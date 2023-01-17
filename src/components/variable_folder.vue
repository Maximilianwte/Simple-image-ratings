<template>
  <div class="folder text-xl w-full px-12 py-4 flex-col">
    <h2 class="text-2xl">{{data.title}}</h2>
    <ul v-for="variable, i in data.variables" :key="i" class="mt-6 w-full text-left">
        <li class="mt-2"><p>{{(i+1)}}. {{variable.title}}</p>
        <p class="italic text-gray-600">{{variable.description}}</p></li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ["data"]

}
</script>
