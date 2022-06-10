<template>
<div class="container">
    <picture class="logo-container">
            <img src="../assets/images/logobiig.png" alt="mood-logo">
        </picture>
        <div class="form-container">
           <form @submit.prevent="sendEmail">
            <input 
              type="text" 
              v-model="name"
              name="name"
              placeholder="Your Name"
            >
            <input 
              type="email" 
              v-model="email"
              name="email"
              placeholder="Your Email"
              >
            <textarea 
              name="message"
              v-model="message"
              cols="30" rows="5"
              placeholder="Message">
            </textarea>
            
            <input class="button-input" type="submit" value="Send">
        </form>
        </div>
</div>
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
        emailjs.sendForm('service_i7bkyck', 'template_7s1y1m4', e.target,
        'oviHKd3tV-8OF5ZBv', {
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
    margin-bottom: 30px;
}
</style>