<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>
      {{ response }}
    </p>
    <el-button @click="handleButtonClick">按钮</el-button>
    <lwn-button/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      response: '',
    }
  },
  methods: {
    handleButtonClick() {
      // const url = 'http://jsonplaceholder.typicode.com/users';
      // url = 'http://127.0.0.1:8000'
      // const url = 'https://www.v2ex.com/api/site/info.json'
      // const url = '/api/HappyHippo/customer/randomNums.action'
      // const url = "http://localhost:8081/home.json"
      const url = "/api"
      axios.get(url).then(res => {
        console.log('from app', res);
        this.response = res;
      })
      // axios.post(url, {
      //   "gender": '快乐',
      //   "left": "2",
      //   "right": "12",
      //   "errorLimit": "3",
      //   "normalNumCount": "2",
      //   "unnormalNumCount": "3"
      // })

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
