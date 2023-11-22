<template>
  <BForm @submit="onSubmit" @reset="onReset" v-if="show" enctype="multipart/form-data">
    <BFormGroup class="my-3">
      <BFormInput id="brand" v-model="form.brand" placeholder="Enter your brand" />
    </BFormGroup>
      <BFormGroup  class="mb-3" label="Your iconographic logo for level 1">
          <BFormFile v-model="form.iconographicLogo" @change="onIconographicLogoChange"/>
      </BFormGroup>
      <BFormGroup class="mb-3" label="Your pixelised logo for level 2">
          <BFormFile v-model="form.pixalisedLogo" @change="onPixalisedLogoChange"/>
      </BFormGroup>
      <BFormGroup class="mb-3" label="Your icon that represents your business for level 3">
          <BFormFile v-model="form.iconBusiness" @change="onIconBusinessChange"/>
      </BFormGroup>
      <div class="mb-3 d-flex justify-content-center">
        <BButton type="submit" variant="primary" class="me-3">Submit</BButton>
        <BButton type="reset" variant="danger">Reset</BButton>
      </div>
  </BForm>

  <div class="border-top" id="allCard">
    <h1 class="my-3 text-center">Your futur cards</h1>
    <div >
      <div id="card-level1">
        <BackCardTemplate :image1="icon" :image2="Brands[getRandomInt(Brands.length)].iconBrand" :image3="Brands[getRandomInt(Brands.length)].iconBrand"  :image4="Brands[getRandomInt(Brands.length)].iconBrand"    />
      </div>
      <div id="card-level2">
        <BackCardTemplate :image1="pixel" :image2="Brands[getRandomInt(Brands.length)].pixalisedLogo" :image3="Brands[getRandomInt(Brands.length)].pixalisedLogo"  :image4="Brands[getRandomInt(Brands.length)].pixalisedLogo"     />
      </div>
      <div id="card-level3">
        <BackCardTemplate :image1="iconographic" :image2="Brands[getRandomInt(Brands.length)].iconographicLogo" :image3="Brands[getRandomInt(Brands.length)].iconographicLogo"  :image4="Brands[getRandomInt(Brands.length)].iconographicLogo"     />
      </div>
    </div>
    <!-- <BButton @click="generatePdf()">Télécharger le pdf</BButton> -->
  </div>
  </template>
  
  <script setup lang="ts">
    import { nextTick, reactive, ref } from 'vue';
    import html2canvas from 'html2canvas'
    import jspdf from "jspdf"
    import BackCardTemplate from './BackCardTemplate.vue';
    import { Brands } from "@/data/Brands"

    function getRandomInt(max :number) {
      return Math.floor(Math.random() * max);
    }


    const form = reactive({
      level : null,
      brand: '',
      iconographicLogo : ref<null | File>(null),
      pixalisedLogo : ref<null | File>(null),
      iconBusiness : ref<null | File>(null),
    })
    const onIconBusinessChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files) {
        form.iconBusiness = input.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          const base64Data = fileReader.result as string;
          // Sauvegarder l'image convertie en base64 dans le localStorage
          localStorage.setItem('iconBusiness', base64Data);
        };
        fileReader.readAsDataURL(form.iconBusiness);
      }
    };

    const onPixalisedLogoChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files) {
        form.pixalisedLogo = input.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          const base64Data = fileReader.result as string;
          // Sauvegarder l'image convertie en base64 dans le localStorage
          localStorage.setItem('pixalisedLogo', base64Data);
        };
        fileReader.readAsDataURL(form.pixalisedLogo);
      }
    };
    const onIconographicLogoChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files) {
        form.iconographicLogo = input.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
          const base64Data = fileReader.result as string;
          // Sauvegarder l'image convertie en base64 dans le localStorage
          localStorage.setItem('iconographicLogo', base64Data);
        };
        fileReader.readAsDataURL(form.iconographicLogo);
      }
    };
    const show = ref(true)

    const onSubmit = async (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      generatePdf()
    };

    const icon = localStorage.getItem('iconBusiness') || undefined;
    const pixel = localStorage.getItem('pixalisedLogo') || undefined
    const iconographic = localStorage.getItem('iconographicLogo') || undefined

    const generatePdf = async (
      form ?: { level: number | null; brand: string; icon: File | null; logo: File | null; iconBusiness: File | null }) => {
    
      const pdf = new jspdf();
      const level1 = document.getElementById("card-level1");
      const level2 = document.getElementById("card-level2");
      const level3 = document.getElementById("card-level3");

      console.log(form);

      // Fonction pour ajouter une image au PDF
      const addImageToPdf = async (element: HTMLElement | null, x: number, y: number) => {
        if (element) {
          console.log(element)
          await html2canvas(element, {}).then(
            (canvas) => {
              const imgWidthMm = 80; // Largeur en mm pour une feuille A4
              const imgWidthPx = 300 * (imgWidthMm / 25.4); // Largeur en pixels à 300 dpi
              const imgHeightPx = (imgWidthPx / canvas.width) * canvas.height;

              pdf.addImage(
                canvas.toDataURL("image/png"),
                "PNG",
                x,
                y,
                imgWidthPx, imgHeightPx
              );
            },
            (error) => {
              console.error("html2canvas error:", error);
            }
          );
        }
      };

      // Ajouter les images de chaque niveau
      await addImageToPdf(level1, 10, 10);
      await addImageToPdf(level2, 80, 10); // Ajustez ces coordonnées selon vos besoins
      await addImageToPdf(level3, 150, 10); 

      // Enregistrer le document PDF
      pdf.save("document.pdf");
    };
    
    const onReset = (event: { preventDefault: () => void; }) => {
      event.preventDefault()
      // Reset our form values
      form.level = null;
      form.brand = '';
      form.iconographicLogo = null;
      form.pixalisedLogo = null;
      // form.iconBusiness = null

      // Trick to reset/clear native browser form validation state
      show.value = false
      nextTick(() => {
        show.value = true
      })
    } 
  </script>

<style scoped >
#allCard{
  margin-bottom: 90px;
}
  #allCard > div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (max-width: 580px){
    #allCard > div{
      flex-direction: column;

    align-items: center;
    }
  }

  #card-level1, #card-level2, #card-level3{
    width: fit-content;
    height: fit-content;
  }
</style>