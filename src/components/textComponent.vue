<template>
  <div class="text-component">
    <h2>{{ msg }}</h2>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
  </div>
</template>

<script>

export default {
  name: 'textcomponent',
  data () {
    return {
      msg: 'Exercise',
      blue: '#99ccff',
      yellow: '#ffff66',
      red: '#ff0000',
      green: '#66ff66',
      pink: '#ff66cc'
    }
  }
}
</script>

<style scoped>
#app-directives {
  padding: 20px 40px;
}
</style>
