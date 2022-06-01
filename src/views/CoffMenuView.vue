<template>
    <div  >
        <ProductsCoffee :products="products" />
    </div>
</template>

<script>
import ProductsCoffee from "../components/ProductsCoffee.vue"

export default {
  name: "Coffepage",
  components: {
      ProductsCoffee,
  },

  data(){
      return {
          products: [],

      }
      
  },
  mounted() {
          this.fetchProducts(),
          this.existing()
      },

  methods: {
       created(){
        this.products = []

      },

     async  fetchProducts () {
      const res = await fetch('http://localhost:5000/products')
        const data = await res.json()
        
        return data       
     },

     async existing() {
        this.products = await this.fetchProducts()
     }
    
  }
}
</script>

<style scoped>


</style>