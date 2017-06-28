<template>
  <div id="app">
    <div>
      <todos></todos>
    </div>
  </div>
</template>

<script>
import Todos from './components/todos'

export default {
  name: 'app',
  components: {
    Todos
  }
}
</script>

<style scoped>
.filters li.selected {
  border: 1px solid black;
}
</style>
