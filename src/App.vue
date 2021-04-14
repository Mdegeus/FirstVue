<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>My First Vue Web Application</h1>
  <button @click="changeMsg">Go</button>
  <HelloWorld msg="Click The Button"/>
  <p>Every 10 times you will get an alert message</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

let clicks = 0;

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    changeMsg: function(){
      clicks++;
      console.log(clicks+': clicks');
      if (clicks % 10 == false){
        alert(clicks);
      }
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button{
  padding: 10px 55px 10px 55px;
  font-size: 3vh;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-decoration: bold;
  color: White;
  background-color: #42b983;
  border: none;
}

button:hover{
  color: #2c3e50;
}
</style>
