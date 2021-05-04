<template>
  <h2 class="text-lg text-center text-gray-400">LEFT</h2>
  <pre>{{ store.state }}</pre>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import store from "../state/store";
// import {state} from "../state/store";

export default defineComponent({
  name: "Left",

  // setup: () =>({state}),
  inject: ["store"],


  mounted() {
    // setTimeout(() =>{
    //   store.UPDATE_FOO("Sound Gang")
    //   store.UPDATE_COUNT(200)
    // }, 1000)
  }


});
</script>