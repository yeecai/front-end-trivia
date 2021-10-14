<!-- a loading animation with async function -->
<template>
  <suspense>
    <template #default>
      <EditTableAsync msg="Hello Vue 3 + Vite" />
    </template>
    <template #fallback>
      <div>
        <ul class="strip-loading">
          <li v-for="v in 9" :key="v" :style="`--line-index: ${v}`"></li>
        </ul>
      </div>
    </template>
  </suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import EditTable from './components/editTable.vue'
const EditTableAsync = defineAsyncComponent(
  () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(EditTable)
      }, 0)
    }),
)
components: {
  EditTable
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
</style>
<style lang="scss" scoped>
.strip-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  list-style-type: none;
  li {
    --time: calc((var(--line-index) - 1) * 200ms);
    border-radius: 3px;
    width: 6px;
    height: 30px;
    background-color: #666;
    animation: beat 1.5s ease-in-out var(--time) infinite;
    & + li {
      margin-left: 5px;
    }
  }
}
@keyframes beat {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.5);
  }
}
</style>
