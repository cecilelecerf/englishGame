<template>
    <button @click="generatePDF">Générer le PDF</button>
</template>

<script lang="ts">
import { createPdf } from "@/services/PdfService.js"

export default {
  methods: {
    async generatePDF() {
      const imagePaths = ['MicrosoftTeams-image (1).png', 'MicrosoftTeams-image (2).png', 'MicrosoftTeams-image (3).png'];
      const outputPath = 'output.pdf';

      await createPdf(imagePaths, outputPath);
    },
  },
};
</script>
