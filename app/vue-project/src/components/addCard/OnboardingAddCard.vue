
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
    <div class="d-flex justify-content-center">

        <BButton @click="modal1 = !modal1"> Explication of add a brand in a game </BButton>
    </div>
    <BModal v-model="modal1" title="Onboarding" v-if="modal1" ok-title="Next" @ok="nextStep">
        <h3>
            Vous souhaitez rajouter votre marque ?
        </h3>
        <p>
            Pour cela preparé 3 élèments :
            <ul>
                <li>Un logo iconographic</li>
                <li>Un logo pixelisé</li>
                <li>Un pictogramme/élément visuel représentant la marque</li>
            </ul>
        </p>
        

    </BModal>

    <BModal v-model="modal2" title="Onboarding" v-if="modal2" cancel-title="Precedent" @cancel="lastStep">
        <h3>Condition pour les images</h3>
        <ul>
            <li>Le logo doit être de format carré</li>
            <li>Il doit être dans le bon sens</li>
        </ul>
    </BModal>
</template>
  

<style>
</style>