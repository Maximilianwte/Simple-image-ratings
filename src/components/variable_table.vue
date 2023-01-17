<template>
  <div class="table text-lg w-full px-12 py-4 flex-col">
    <h2 class="text-2xl">{{ data.title }}</h2>
    <!-- Mobile -->
    <table class="w-full mt-8 lg:hidden">
      <colgroup>
        <col span="1" style="width: auto" />
        <col span="1" style="width: auto" />
      </colgroup>
      <tr class="text-left">
        <th>Name (Name in output)</th>
        <th>Description</th>
      </tr>
      <tr v-for="(variable, i) in data.variables" :key="i">
        <td>{{ variable.title }} ({{ variable.titleOutput }})</td>
        <td>{{ variable.description }}</td>
      </tr>
    </table>
    <!-- Tablet and desktop -->
    <table class="mt-8 w-156 hidden lg:block">
      <colgroup>
        <col span="2" style="min-width: 16rem" />
        <col span="1" style="width: auto" />
      </colgroup>
      <tr class="text-left">
        <th>Name</th>
        <th>Name in output</th>
        <th>Description</th>
      </tr>
      <tr v-for="(variable, i) in data.variables" :key="i">
        <td>{{ variable.title }}</td>
        <td>{{ variable.titleOutput }}</td>
        <td>{{ variable.description }}</td>
      </tr>
    </table>
  </div>
</template>
  
  <script>
export default {
  props: ["data"],
};
</script>
  