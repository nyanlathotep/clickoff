import Vue from 'vue';
import Language from './language.js';
import Main from '../vue/main.vue';

var Lang = new Language();

Lang.add_language('en', {parent:null, entries:{
  'res_smoke': 'Smoke',
  'res_meat': 'Meat',
  'res_metal': 'Metal',
  'res_plastic': 'Plastic'
}});

var View = new Vue(Main);

document.addEventListener('DOMContentLoaded', function() {
  View.$mount('#app');
});
