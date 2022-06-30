<template>
  <section>
        <picture class="logo-container">
            <img src="../assets/images/local2.jpg" alt="mood-logo">
        </picture>
        <h2>Sobre Nosotros</h2>
        <div class="text">
            <p>Bienvenidos a Mood Café & Resto, un nuevo espacio para nuevos momentos , con una gran Gastronomía.</p>
            <p>En esta cafetería vas a poder encontrar una gran variedad de opciones para disfrutar un buen desayuno o una rica merienda. </p>
            <p>También vas a poder disfrutar de los productos de la franquicia balcarce</p>
        </div>
        <picture class="logo-container">
            <img src="../assets/images/local1.jpg" alt="mood-logo">
        </picture>
        <h2>Trabajá con nosotros</h2>
        <div class="text">
            <p>Si tenes experiencia siendo mozo, cafetero, personal de cocina</p>
            <p>Envíanos un mail con tu curriculum a moodcafe154@gmail.com</p>
        </div>
       
    </section>
</template>


<style scoped>
section{
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 120px;
}

img{
    height: 300px;
    width: 300px;
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 50px;
    box-shadow: rgba(17,12,46,0.15) 0px 48px 
    100px 0px;
}

h2{
    font-size: 2.2rem;
    color: rgb(0, 0, 0);
    font-weight: bolder;
    margin-bottom: 5px;
    text-align: center;
}

.text{
    font-size: 1.5rem;
    margin: 20px 10px;
    color: rgb(8, 8, 8);
    font-weight: bold;
    text-align: center;
}
</style>