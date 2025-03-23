<template>
  <div>
    <el-button plain @click="outerVisible = true">
      Open the outer Dialog
    </el-button>

    <el-dialog v-model="outerVisible" title="Outer Dialog" width="800">
      <span>This is the outer Dialog</span>
      <el-dialog
        v-model="innerVisible"
        width="500"
        title="Inner Dialog"
        append-to-body
      >
        <span>This is the inner Dialog</span>
      </el-dialog>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="outerVisible = false">Cancel</el-button>
          <el-button type="primary" @click="innerVisible = true">
            Open the inner Dialog
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'
const outerVisible = ref(false)
const innerVisible = ref(false)
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
