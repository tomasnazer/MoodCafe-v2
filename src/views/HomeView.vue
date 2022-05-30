<template>
<section class="box">
    <picture class="coffe-img-container">
       <a href=""><img src="../assets/images/Menú-CAFETERIA.png" alt="coffe-picture" class="coffe-menu"></a>
    </picture>
    <picture class="container-lunch-menu">
       <a href=""><img src="../assets/images/Menú-CENA.png" alt="lunch-menu" class="lunch-menu"></a>
    </picture>
    <picture>
      <a href=""><img src="../assets/images/Menú-TRAGOS.png" alt="drinks-menu" class="drinks-menu"></a>
    </picture>
  </section>

</template>

<script>



export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scoped>
.box {
    margin-top: 0px;
    display: flex;
    justify-content: center;
    padding-top: 3rem;
    flex-direction: column;
    align-items: center;
    width: 100vw;
}

.coffe-menu{
    width: 220px;
    height: 200px;
    border-radius: 70%;
    display: flex;
}

.lunch-menu, .drinks-menu {
    width: 220px;
    height: 200px;
    border-radius: 70%;
    display: flex;
    margin-top: 3rem;
}
</style>