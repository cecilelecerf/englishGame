<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

</script>

<template>
  <HeaderComponent />
  <main>
    <RouterView/>
  </main>
  <FooterComponent />
</template>

<style>

#app{
  padding: 0 !important;
  margin: 0;
  width: 100%;
  display: block;
}
main, header {
  padding: 20px 2rem;
}
body {
  background-color: rgb(241, 241, 241) !important;
}

</style>
