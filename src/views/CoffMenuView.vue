<template>
    <div class="search-input">
            <input type="text" 
                    placeholder="Buscá tu producto..."
                    name="uname" v-model="search" @focus="isInputOpen = !isInputOpen" @blur="isInputOpen= false"> 
            <font-awesome-icon class="icono" icon="search" />
    </div>
    <div class="Product-box" v-for="product in filteredProducts" :key="product.id">
            <h1 v-show="product.Titulo != ''">{{ product.Titulo }}</h1>
            <img v-show="product.img != ''" :src="'/static/' + product.img" :alt="product.nombre" class="img-box">
            <p class="product">{{product.nombre}} ${{product.precio}}</p>
            <p class="description">{{product.descripcion}}</p>
            <p class="stock" v-show="product.stock != 'true'">Sin stock!</p>
    </div>
    <div v-if="isInputOpen === true">
        <ProductsCoffee :products="products" />
    </div>
</template>

<script>
import ProductsCoffee from "../components/ProductsCoffee.vue"
import { ref } from "vue";

export default {
  name: "Coffepage",
  components: {
      ProductsCoffee,
  },

  data(){
      return {
          search: '',
          products: [],
          isInputOpen: false,

      }
      
  },
  computed: {
    filteredProducts() {
        return this.products.filter(product => product.nombre.toLowerCase().includes(this.search.toLowerCase()))
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
input { 
            width: 100%; 
            padding: 12px 40px;  
            display: inline-block; 
            border: 1px solid #ccc; 
            box-sizing: border-box; 
            outline: none;
} 
.search-input {
            position: relative;
}
          
.icono {
            position: absolute;
            left: 10px;
            top: 10px;
            color: gray;
            font-size: 20px;
            text-align: center;
}
    
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
    height: 300px;
    width: 300px;
    border-radius: 50%;
    margin-top: 10px;
    margin-bottom: 50px;
    box-shadow: rgba(17,12,46,0.15) 0px 48px 
    100px 0px;
}

.product {
    text-align: center;
    font-weight: bold;
    font-size: 1.6rem;
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