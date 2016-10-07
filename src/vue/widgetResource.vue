<template lang="pug">
tr
  td {{display}}
  td -
  td {{resource.quantity}}
  td
    button(v-on:click='gather') Gather
</template>

<script>
import Language from '../js/language.js';

var Lang = new Language();

export default {
  props: {
    id: String,
    resource: Object
  },
  data () {
    return {};
  },
  computed: {
    display () {
      return Lang.localize(this.id);
    }
  },
  methods: {
    gather (event) {
      this.resource.quantity += 1;
    }
  }
};
</script>
