


<template class="">
  <header class="d-flex shadow-sm align-items-center justify-content-between">
    <div class="d-flex align-items-center">

      <img src="../assets/logo.png" alt="logo Kokoriko">
      <h1 class="ms-3">Kokoriko</h1>
    </div>
    <BNav class="desktop">
      <RouterLink to="/">
        <BNavItem>Home</BNavItem>
      </RouterLink>
      <RouterLink to="/rules">
        <BNavItem>Rules</BNavItem>
      </RouterLink>
      <BNavItem>Information</BNavItem>
    </BNav>
    <div class="burger-menu">

      <font-awesome-icon icon="bars" />
      <BNav vertical>
        <BNavItem>Home</BNavItem>
        <BNavItem>Rules</BNavItem>
        <BNavItem>Information</BNavItem>
      </BNav>
    </div>
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
