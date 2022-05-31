<template>
<div class="styles">
  <Header />
  <!-- <nav>    
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <Footer />
</div>
  
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}


</script>

<style scoped>

.styles {
    font-size: 62.5%;
    background-color: rgb(199, 191, 172);
    font-family: 'Montserrat', sans-serif;
}
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
