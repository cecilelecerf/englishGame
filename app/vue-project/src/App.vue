<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderComponent from './components/HeaderComponent.vue';

</script>

<template>
  <HeaderComponent />

  <main>
    <RouterView/>
  </main>
</template>

<style>

#app{
  padding: 0 !important;
  background-color: rgb(241, 241, 241);
}
main, header {
  padding: 20px 2rem;
}

</style>
