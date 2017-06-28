<template>
  <div class="text-component">
    <h1>{{ msg }}</h1>
    <h2>Instructions</h2>
    <ul>
      <li>Créer une directive pour changer le "background color" d'une div qui contient un texte.</li>
      <li>Votre directive pourra avoir une couleur par défaut. Par exmple la couleur par défault sera: yellow</li>
      <li>Votre directive pourra aussi avoir comme argument la couleur de votre choix (dans le composant textComponent.vue un jeu de couleur est déjà renseigné dans l'object data)</li>
      <li>Vous pourrez également remplacer le texte de votre div par "Mon texte est de couleur : la couleur que j'ai passé en arguments à ma directives".</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'textcomponent',
  data () {
    return {
      msg: 'TP directives custom - Vuejs'
    }
  }
}
</script>

<style scoped>
</style>
