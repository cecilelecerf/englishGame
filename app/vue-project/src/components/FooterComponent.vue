<template>
    <footer>

      <BNav class="justify-content-around">
        <RouterLink to="/">
          <BNavItem><font-awesome-icon icon="puzzle-piece" /></BNavItem>
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
    padding: 10px; /* Ajoutez un espacement intérieur au besoin */
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1); /* Ajoutez une ombre au besoin */

  }
    .nav{
        --bs-nav-link-color: #f8f8f8  !important;
        font-size: 40px;
        width: 100%;
    }
    

  
  
  </style>
  