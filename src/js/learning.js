//console.log('butts');

import Vue from 'vue';

var View = new Vue({
  data: {
    message: 'hello!',
    test: 'this is a test'
  },
  template: '<div>{{message}} - {{test}}</div>'
});

document.addEventListener('DOMContentLoaded', function() {
  View.$mount('#app');
});
