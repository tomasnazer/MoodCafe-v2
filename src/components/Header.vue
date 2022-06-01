<template>
    <nav class="navcontainer">
        <ul class="nav">
            <li><a href="" class="logo-company">
                <picture >
                    <router-link to="/"><img src="../assets/images/logo.png" alt="logo" class="logo-c"></router-link>
                </picture>
                </a>
            </li>
            <li @click.prevent="isMenuOpen = !isMenuOpen"><a href="" id="menu-icon"><span class="material-icons-outlined">
                reorder</span></a>
            </li>
        </ul>
        <ul id="smenu" class="submenu" :class="{'show': isMenuOpen == true}">
            <li><a href="" class="menu_link">Contacto</a></li>
            <li><router-link to="/coffemenu" class="menu_link">Menú Cafetería</router-link></li>
            <li><a href="" class="menu_link">Menú Comida</a></li>
            <li><a href="" class="menu_link">Menú Bebidas</a></li>
            <li><router-link to="/about" class="menu_link">Sobre Nosotros</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    data(){ 
        return {
        isMenuOpen: false,
        }
    }}
</script>

<style scoped>
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html{
    font-size: 62.5%;
    background-color: rgb(199, 191, 172);
}

.nav {
    background-color: rgb(155, 117, 60);
    width: 100%;
    display: flex;
    justify-content:space-between;
    flex-direction: row-reverse;
    align-items: center;
}

ul {
    list-style-type: none;
    display: flex;
}

.logo-c {
    width: 150px ;
    height: 90px;
    display: flex;
    margin: 0 auto;
    justify-content: flex-end;
}

.material-icons-outlined {
    display: flex;
    font-size: 3rem;
    margin-left: 6px;
}

#menu-icon {
    text-decoration: none;
    color: white;
 
} 
.submenu{
    display: flex;
    flex-direction: column;
    text-decoration: none;
    list-style: none;
    text-align: center;
    background-color: rgb(155, 117, 60);
    margin-top: -130%;
    margin-bottom: 90px;
    transition: all .5s;
}

.show{
    margin-top: 0%;
    
}

.menu_link{
    display: block;
    padding: 20px;
    color: white;
    text-decoration: none;
    font-size: 1.6rem;
}
</style>