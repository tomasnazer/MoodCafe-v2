<template>
<div class="container">
    <picture class="logo-container">
            <img src="../assets/images/logobiig.png" alt="mood-logo">
        </picture>
        <div class="form-container">
            <form id="contact-form" action="">
                <input type="text" name="from_name" placeholder="Ingrese su nombre..." required>
                <input type="email" name="from_email" placeholder="Ingrese su mail...">
                <textarea class="text-input" name="message" placeholder="..." required cols="30" rows="10"></textarea>
                <input class="button-input" type="submit" value="Enviar">
            </form>
        </div>
</div>
</template>



<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 160px;
}

img{
    padding: 0;
    max-width: 100vw;
}

input{
    display: flex;
    flex-direction: column;
    margin: 30px;
    width: 60vw;
    height: 25px;
    color: black;
}


textarea{
    height: 100px;
    color: black;
    width: 80vw;
    margin-bottom: 10px;  
}

.button-input{
    width: 20vw;
    height: 25px;
    display: block;
    margin: auto;
    padding: auto;
    color: black;
    text-align: center;
    align-items: center;
}
</style>