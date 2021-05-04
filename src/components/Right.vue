<template>
  <h2 class="text-lg text-center text-gray-400">RIGHT</h2>
  <pre>{{ store.state }}</pre>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
// import {state} from "../state/store";

export default defineComponent({
  name: "Right",

  inject: ["store"]

});
</script>