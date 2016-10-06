<template lang="pug">
tr
  td {{resource.display}}
  td -
  td {{resource.quantity}}
  td
    button(v-on:click='gather') Gather
</template>

<script>
export default {
  props: {
    resource: Object
  },
  data () {
    return {};
  },
  methods: {
    gather: function (event) {
      this.resource.quantity += 1;
    }
  }
};
</script>
