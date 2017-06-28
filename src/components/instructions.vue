<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>Instructions</h2>
    <ul>
      <li>Créer un composant <Todos>.</li>
      <li>Votre directive pourra avoir une couleur par défaut. Par exmple la couleur par défault sera: yellow</li>
      <li>Votre directive pourra aussi avoir comme argument la couleur de votre choix (dans le composant textComponent.vue un jeu de couleur est déjà renseigné dans l'object data)</li>
      <li>Vous pourrez également remplacer le texte de votre div par "Mon texte est de couleur : la couleur que j'ai passé en arguments à ma directive".</li>
    </ul>
  </div>
</template>

  <script>
export default {
  name: 'instructions',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
