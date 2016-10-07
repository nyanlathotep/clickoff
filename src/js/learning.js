import './data/language_data.js'

import Vue from 'vue';
import Main from '../vue/main.vue';
var View = new Vue(Main);

document.addEventListener('DOMContentLoaded', function() {
  View.$mount('#app');
});
