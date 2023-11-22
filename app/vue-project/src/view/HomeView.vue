<script lang="ts">
import AddCard from '@/components/addCard/AddCard.vue';
import OnboardingAddCard from '@/components/addCard/OnboardingAddCard.vue';
// import MicrosoftTeams-image1 from "@/"

export default{
  name: "HomeView",
  components: {
    AddCard,
    OnboardingAddCard,
  },
}
</script>

<template>
  <OnboardingAddCard />
  <AddCard/> 
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
