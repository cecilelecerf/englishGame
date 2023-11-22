


<template class="">
  <header class="d-flex shadow-sm align-items-center justify-content-center">
      <img src="../assets/logo.png" alt="logo Kokoriko">
  </header>
</template>

<style scoped>
  img{
    height: 60px;
  }

  .desktop {
    @media screen and (max-width : 700px) {
      display: none;
    }
  }
  .burger-menu {
    display: none;
    @media screen and (max-width : 700px) {
      display : block
    }
    
  }
  .burger-menu .nav {
    @media screen and (max-width : 700px) {
      display : none
    }
  }


</style>
