<template>
    <footer>
      <BNav class="justify-content-around">
        <RouterLink to="/">
          <BNavItem><img src="../assets/Exclude.svg" alt=""></BNavItem>
        </RouterLink>
        <RouterLink to="/rules">
            <BNavItem>
                <font-awesome-icon icon="book-bookmark" />
            </BNavItem>
        </RouterLink>
        
        <RouterLink to="/versus">
            <BNavItem>
                <font-awesome-icon icon="mobile" />
            </BNavItem>
        </RouterLink>
      </BNav>
    </footer>
  </template>
  
  <style scoped>
  footer{
    position: fixed;
    z-index: 6;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #D0C1E0; 
    padding: 5px; 
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1); 
  }
    .nav{
        --bs-nav-link-color: #f8f8f8  !important;
        font-size: 30px;
        width: 100%;
    }
    img{
      height: 35px;
    }
  </style>
  