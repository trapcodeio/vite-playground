<template>
  <h2 class="text-2xl text-center mt-10">Vite Project</h2>
  <div class="max-w-xl border-2 mx-auto my-5 p-5 rounded">
    <div class="grid grid-cols-2">
      <div class="col-span-1 p-3">
        <Left/>
      </div>
      <div class="col-span-1 border-l-2 p-3">
        <Right/>
      </div>
    </div>

    <div class="mt-5">
      <input v-model="inputForm" class="border-2 rounded p-2"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import Left from "./components/Left.vue";
import Right from "./components/Right.vue";
import store, {setState} from "./state/store";

export default defineComponent({
  name: 'App',
  components: {Right, Left},

  setup: () => {

    setState().then((r) => store.SET_STATE(r));

    return {
      store,
      inputForm: ref("")
    }
  },


  watch: {
    inputForm(value){
      store.UPDATE_FOO(value);
    }
  },

  provide: {store}

})
</script>
