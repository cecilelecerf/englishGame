<script lang="ts">
import CountComponent from "@/components/versus/CountComponent.vue";
import GenerateBrand from "@/components/versus/GenerateBrand.vue"

export default{
  name: "RulesView",
  components:{
    GenerateBrand,
    CountComponent
}
}

</script>

<template >
  <GenerateBrand />
  <CountComponent />
</template>

<style>
#app{
  padding: 0 !important;
  background-color: rgb(241, 241, 241);
  margin-bottom: 110px;
}
main, header {
  padding: 20px 2rem;
}

</style>
