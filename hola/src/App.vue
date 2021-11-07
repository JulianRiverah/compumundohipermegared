<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Personas : token="token"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  async beforeCreate(){
    const opciones= {
      method:"POST",
      body:JSON.stringify({"id":1}),
      headers:{
        "Content-Type":"application/json"
      }
      };
  fetch("http://localhost:8081/api/auth", opciones)
      .then(async response => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        this.token = data.token;
      })
      .catch(error => {
        this.errorMessage = error;
        console.error('Error al consultar el token!', error);
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #17dfce;
  margin-top: 100px;
}
</style>
