<template lang="pug">
div
  table
    tr
      td
        table
          tr(is='widget-resource', v-for='r in resources_displayed', v-bind:resource.sync='resources[r]')
</template>

<script>
import WidgetResource from './widgetResource.vue';

export default {
  data () {
    return {
      resources: {
        smoke: {
          quantity: 0,
          display: 'Smoke'
        },
        meat: {
          quantity: 0,
          display: 'Meat'
        },
        metal: {
          quantity: 0,
          display: 'Metal'
        },
        plastic: {
          quantity: 0,
          display: 'Plastic'
        }
      }
    };
  },
  computed: {
    resources_displayed () {
      var r = [];
      for (var k in this.resources) {
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
