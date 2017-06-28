import Vue from 'vue';

const defaultBackgroundColor = 'lightBlue'
const defaultText = 'blue'
const newvalue = ''

// Initialize the annoying-background directive.
export const Background = {
  bind: (el, binding, vnode) => {
    // Allow users to customise the color by passing an expression.
    this.colorChange = binding.expression || defaultBackgroundColor

    // el might not be present for server-side rendering.
    if (el ) {
      // Set the element's background color.
      el.style.backgroundColor = this.colorChange
      el.innerHTML =  'My background text is :  ' + this.colorChange
    }
  }
}

// You can also make it available globally.
Vue.directive('background', Background)
