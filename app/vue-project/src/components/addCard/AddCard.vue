<template>
    <BForm @submit="onSubmit" @reset="onReset" v-if="show">
      <BFormGroup class="my-3">
        <BFormInput id="brand" v-model="form.brand" placeholder="Enter your brand" />
      </BFormGroup>
        <BFormGroup  class="mb-3" label="Your iconographic logo for level 1">
            <BFormFile id="icon" v-model="form.icon" />
        </BFormGroup>
        <BFormGroup class="mb-3" label="Your pixelised logo for level 2">
            <BFormFile id="icon" v-model="form.logo" />
        </BFormGroup>
        <BFormGroup class="mb-3" label="Your icon that represents your business for level 3">
            <BFormFile id="icon" v-model="form.iconBusiness" />
        </BFormGroup>
      <BButton type="submit" variant="primary" class="me-3">Submit</BButton>
      <BButton type="reset" variant="danger">Reset</BButton>
    </BForm>
  
  </template>
  
  <script setup lang="ts">
import { nextTick, reactive, ref } from 'vue';

  const form = reactive({
    level : null,
    brand: '',
    icon : ref<null | File>(null),
    logo : ref<null | File>(null),
    iconBusiness : ref<null | File>(null),
  })
  const show = ref(true)
  
  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    // alert(JSON.stringify(form))

  }
  
  const onReset = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    // Reset our form values
    form.level = null;
    form.brand = '';
    form.icon = null;
    form.logo = null;
    form.iconBusiness = null

    // Trick to reset/clear native browser form validation state
    show.value = false
    nextTick(() => {
      show.value = true
    })
  }



  </script>