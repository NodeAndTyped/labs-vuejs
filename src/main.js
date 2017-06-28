// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.directive('bgColor', {
  bind: function (el, binding, vnode) {
    const defaultBackgroundColor = 'yellow'
    const color = binding.expression || defaultBackgroundColor

    var s = JSON.stringify
    el.innerHTML =
      'Mon texte est de couleur: '       + s(color)
    /* el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ') */

    // el.style.backgroundColor = binding.expression
    el.style.backgroundColor = color
  }
})

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



