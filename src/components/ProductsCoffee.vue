<template>
    
    <div class="Product-box" :key="product.id" v-for="product in products">
        <h1>{{ product.nombre }}</h1>
        
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