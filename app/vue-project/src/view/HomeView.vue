<script lang="ts">
import CardTemplate from '@/components/addCard/BackCardTemplate.vue';
import AddCard from '@/components/addCard/AddCard.vue';
import OnboardingAddCard from '@/components/addCard/OnboardingAddCard.vue';
import { createPdf } from "@/services/PdfService.js";
// import MicrosoftTeams-image1 from "@/"
import CardLevel1 from "@/assets/CardLevel1.png"

export default{
  name: "HomeView",
  components: {
    AddCard,
    OnboardingAddCard,
    CardTemplate
  },
  methods: {
    async generatePDF() {
      const imagePaths = [CardLevel1, 'MicrosoftTeams-image (2).png', 'MicrosoftTeams-image (3).png'];
      const outputPath = 'output.pdf';

      await createPdf(imagePaths, outputPath);
    },
  },
}
</script>

<template>
  <OnboardingAddCard />
  <button @click="generatePDF">Générer le PDF</button>
  <CardTemplate title="test" />
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
