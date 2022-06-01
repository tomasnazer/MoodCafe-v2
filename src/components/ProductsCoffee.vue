<template>
    
    <div class="Product-box" :key="product.id" v-for="product in products">
        <h1 v-show="product.Titulo != ''">{{ product.Titulo }}</h1>
        <img v-show="product.img != ''" src="{{product.img}}" alt="{{product.nombre}}">
        <p class="product">{{product.nombre}} ${{product.precio}}</p>
        <p class="description">{{product.descripcion}}</p>
        <p class="stock" v-show="product.stock != 'true'">Sin stock!</p>
    </div>
</template>


<script>
export default {
    name: 'Products',
    props: {
       products: Array 
    },
}
</script>

<style scoped>
.Product-box {
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-bottom: 30px;
}
h1 {
    margin-top: 20px;
    margin-bottom: 5px;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
}
.img-box {
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 50px;
    box-shadow: rgba(17,12,46,0.15) 0px 48px 
    100px 0px;
}

.product {
    font-weight: bold;
    font-size: 1.6rem;
    /* background-color: rgb(255, 255, 255); */
    margin-bottom: 5px;
}

.description {
    text-align: center;
    margin-left: 9px;
    margin-right: 9px;
    color: black;
    font-weight: bold;
    margin-bottom: 5px;
    
}

.stock {
    color: white;
    background: red;
    font-size: 1.3rem;
    font-weight: bold;
}

</style>
