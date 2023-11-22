<template>
<div class="d-flex justify-content-center flex-column p-5 mt-5" id="count">
  <h3 class="text-center">{{ countdown }}</h3>
  <BButtonGroup class="d-flex justify-content-aroud">
    <BButton @click="startCountdown" >Start</BButton>
    <BButton @click="stopCountdown">Stop</BButton>
    <BButton @click="resetCountdown" >Reset</BButton>
  </BButtonGroup>
</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';

  const countdown = ref(30);
  let intervalId: number | undefined;
  
  const startCountdown = () => {
    if (!intervalId) {
      intervalId = setInterval(() => {
        if (countdown.value > 0) {
          countdown.value--;
        } else {
          clearInterval(intervalId);
          intervalId = undefined;
          // Le compte à rebours est terminé, vous pouvez ajouter du code ici
        }
      }, 1000);
    }
  };
  
  const stopCountdown = () => {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = undefined;
    }
  };
  
  const resetCountdown = () => {
    stopCountdown();
    countdown.value = 30;
  };
  

  
  </script>
  
  <style scoped>
  #count{
    border: solid 1px gray;
    border-radius: 20px;
  }
  #count h3{
    color: pink;
  }
  /* Ajoutez vos styles CSS au besoin */
  </style>
  