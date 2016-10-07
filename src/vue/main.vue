<template lang="pug">
div
  table
    tr
      td
        table
          tr(is='widget-resource', v-for='r in resources_displayed', v-bind:id='r', v-bind:resource.sync='resources[r]')
</template>

<script>
import WidgetResource from './widgetResource.vue';

export default {
  data () {
    return {
      resources: {
        res_smoke: {
          quantity: 0
        },
        res_meat: {
          quantity: 0
        },
        res_metal: {
          quantity: 0
        },
        res_plastic: {
          quantity: 0
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
