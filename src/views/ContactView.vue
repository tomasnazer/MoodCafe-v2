<template>
           <form @submit.prevent="sendEmail">
            <h2>CONTACTANOS</h2>
            <p type="Nombre"><input 
              type="text" 
              v-model="name"
              name="name"
              placeholder="Nombre"
              required
            ></p>
            <p type="Email"><input
              type="email" 
              v-model="email"
              name="email"
              placeholder="Mail"
              ></p>
            <p type="Mensaje">
              <input type="text"
              v-model="message"
              name="Mensaje"
              placeholder="Escribí tu mensaje"
              required>
            </p>
            <input class="button-input" type="submit" value="Enviar">
        </form>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_pxkp0yq', 'template_nl2xohc', e.target,
        'eeYwbppm9Jtk_OqbW', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>

form{width:340px;height:440px;background:#e6e6e6;border-radius:8px;box-shadow:0 0 40px -10px #000;margin:calc(50vh - 220px) auto;padding:20px 30px;max-width:calc(100vw - 40px);box-sizing:border-box;font-family:'Montserrat',sans-serif;position:relative;font-weight: bolder;}

h2{margin:10px 0;padding-bottom:10px;width:180px;color:#000000;border-bottom:3px solid #000000}

input{width:100%;padding:10px;box-sizing:border-box;background:none;outline:none;resize:none;border:0;font-family:'Montserrat',sans-serif;transition:all .3s;border-bottom:2px solid #000000;font-weight: bolder;}

input:focus{border-bottom:2px solid #78788c}

p:before{content:attr(type);display:block;margin:28px 0 0;font-size:14px;color:#000000}

.button-input{float:right;padding:8px 12px;margin:8px 0 0;font-family:'Montserrat',sans-serif;border:2px solid #78788c;background:0;color:#000000;cursor:pointer;transition:all .3s}
.button-input:hover{background:#78788c;color:#fff}

</style>