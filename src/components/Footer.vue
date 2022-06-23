<template>
    <footer class="footer-page">
            <div class="icon-container">
                <div class="ig">
                    <a href="https://www.instagram.com/mood_caferesto/" target="_blank">
                    <picture><img src="../assets/images/igicon.png" alt="ig-icon"></picture>
                    </a>
                </div>
                <div class="fb">
                    <a href="https://www.facebook.com/moodcafeyresto" target="_blank">
                    <picture><img src="../assets/images/fbicon.png" alt="fb-icon"></picture>
                    </a>
                </div>
                <div class="wsp">
                    <a href="https://api.whatsapp.com/send?phone=543625292384&text=Hola%20%F0%9F%91%8B%20" target="_blank">
                    <picture><img src="../assets/images/wsp.png" alt="wsp-icon"></picture>
                    </a>
                </div>
                
            </div> 
            <div class="direction-container">
                    <p class="direction">Encontramos en Guemes 154 Resistencia Chaco</p>
                </div>
        </footer>
</template>


<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
.footer-page {
    display: inline-block;
    margin-top: 10px;
    background-color: rgb(155, 117, 60);
    height: 100px;
    width: 100vw;
    margin: auto;
}

.icon-container {
    display: flex;
    justify-content: space-around;
    margin-top: 5px;
    width: 100vw;
}
.ig img{
    width: 45px;
    height: 45px;
}

.fb img {
    width: 45px;
    height: 45px;
}

.wsp img {
    width: 40px;
    height: 40px;
}

.direction-container {
    margin-top: 10px;
    text-align: center;
    color: rgb(255, 254, 254);
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-size: .9rem;
    margin-left: 5px;
    margin-right: 5px;
    font-display: swap,
}
</style>