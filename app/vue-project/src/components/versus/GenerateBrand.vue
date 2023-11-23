<script setup lang="ts">
import { Brands } from '@/data/Brands';
import { onMounted, ref } from 'vue';

const getRandomInt = (max :number) =>{
  return Math.floor(Math.random() * max);
};

    const brandName = ref('');

onMounted(() => {
  brandName.value = Brands[getRandomInt(Brands.length)].name;
});
const regenerate = ()=>{
  brandName.value = Brands[getRandomInt(Brands.length)].name;
}
</script>

<template >
  <div id="versus">

    <h6 class="text-center">Cockfighters, you have 30sec to draw this logo !</h6>
    <h1 class="text-center">{{ brandName}}</h1>
    <BButton @click="regenerate">Regenerate a Brand</BButton>
  </div>
</template>

<style scoped>
#versus{
  margin : auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#versus .btn-secondary{

  font-weight: bold;
  background: rgb(208,193,224);
  background: linear-gradient(142deg, rgba(208,193,224,1) 0%, rgba(208,193,224,1) 41%, rgba(250,228,132,1) 94%, rgba(204,229,206,1) 100%);
  border: none;
}

</style>
