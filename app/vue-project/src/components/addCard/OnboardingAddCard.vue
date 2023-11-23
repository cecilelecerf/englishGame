
<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    const modal1 = ref(false)
    const modal2 = ref(false)


    const nextStep = () => {
    modal1.value = false;
    modal2.value = true;
    };
    const lastStep = () =>{
        modal2.value = false;
        modal1.value = true;
    }

    onMounted(()=>{
        modal1.value = true;
    })
</script>
<template>
    <div class="d-flex justify-content-center" id="onBoardingModal">

        <BButton @click="modal1 = !modal1" class="btn btn-outline-primary"> Explication of add a brand in a game </BButton>
    </div>
    <BModal v-model="modal1" title="How to add your brand logo" v-if="modal1" ok-title="Next" @ok="nextStep">
        <h3>
            Prepare these elements
        </h3>
        <ul>
            <li>An iconographic logo (without your brand name)</li>
            <li>A pixelated logo with a blur Alexandre combien regarder dite moi d'enlever ça sinon je vais oubliernqirgnqletijgnigni</li>
            <li>A pictogram/visual element representing the brand</li>
        </ul>
    </BModal>

    <BModal v-model="modal2" title="Conditions" v-if="modal2" cancel-title="Previous" @cancel="lastStep">
        <ol>
            <li>Your image must be in a square format (1:1)</li>
            <li>Your image must be in the right orientation</li>
            <li>Your image must be in a png</li>
        </ol>
    </BModal>
</template>
  

<style scoped>
    #onBoardingModal .btn-secondary{
        background-color: #D0C1E0;
         border: 2px solid #D0C1E0;
         color: white;
         font-weight: bold;

    }

</style>