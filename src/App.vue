<template>
  <div id="app">
    <Instruction></Instruction>
    <TextComponent></TextComponent>
  </div>
</template>

<script>
import TextComponent from './components/textComponent'
import Instruction from './components/instructions'

export default {
  name: 'app-directives',
  components: {
    TextComponent,
    Instruction
  }
}
</script>

<style>
.header {
  height: 60px;
  box-shadow: 0 0 2px rgba(0,0,0,0.25);
  text-align: center;
}
#logo img {
  max-height: 40px;
  margin-top: 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul li {
  text-align: left;
}
</style>
