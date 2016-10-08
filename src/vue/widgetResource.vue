<template lang="pug">
tr
  td {{display}}
  td -
  td {{resource.quantity}}
  td
    button(v-on:click='gather') Gather
</template>

<script>
import Lang from '../js/language.js';

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
      this.$store.commit('gather', this.id);
    }
  }
};
</script>
