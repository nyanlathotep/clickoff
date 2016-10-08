<template lang="pug">
div
  table
    tr
      td
        table
          tr(is='widget-resource', v-for='r in resources_displayed', v-bind:id='r', v-bind:resource.sync='$store.state.resources[r]')
</template>

<script>
import WidgetResource from './widgetResource.vue';
import store from '../js/store.js';

export default {
  store,
  computed: {
    resources_displayed () {
      var r = [];
      for (var k in this.$store.state.resources) {
        r.push(k);
      }
      return r
    }
  },
  components: {
    WidgetResource
  }
}
</script>
