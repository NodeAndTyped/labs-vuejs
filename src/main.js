// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Créer votre directive ici
// Vue.directive('votre directive', { ... })

/* eslint-disable no-new */
var demo = new Vue({
  el: '#app-directives',
  template: '<App/>',
  components: { App },
  data: function() {
    return {
      message: 'hello',
      title: 'Vue Js directives'
    }
  }
});



