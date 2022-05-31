<template>
    <section>
        <div class="Product-box" id="Product">  
        </div>
    </section>
</template>

<script>
import axios from "axios"

export default {
  name: "Coffepage",
  data(){
      return {
          products: null,
      }
  },
  mounted(){
      this.getProducts()
  },
  methods: {
    async  getProducts () {
        const res = await axios.get('http://localhost:5000/Coffe')
        console.log(res)   
    }
  }
}
</script>