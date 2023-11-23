<template>
<div class="d-flex justify-content-center flex-column p-5 mt-5" id="count">
  <h1 class="text-center">{{ countdown }}</h1>
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
    border: solid 1px #D0C1E0;
    border-radius: 20px;
  }
  #count h1{
    color: #D0C1E0;
    font-weight: bold;
  }
  .btn-group button{
    border: none;
  }

  .btn-group button:first-child{
    background-color: #CCE5CE;

  }
  .btn-group button:nth-child(2){
    background-color: #FAE484;

  }
  .btn-group button:last-child{
    background-color: #D0C1E0;
  }

  </style>
  