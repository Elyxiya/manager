<template>
  <div>
    <svg width="100" height="100">
      <use href="#icon-open" fill="pink" stroke="blue"></use>
    </svg>
  </div>
  <div>
    <h1>axios测试</h1>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import request from './utils/request'
import { onMounted } from 'vue';

onMounted(() => {
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: "111111"
    }
  }).then(res => {
    console.log(res)
  })
})
let msg = 'Hello Vue 3 + Vite'
function changeMsg() {
  msg = 'Hello Vue 3 + Vite'
}
const object = { name: 'John', age: 30, city: 'New York' }
changeMsg()
console.log(msg, object)
</script>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
