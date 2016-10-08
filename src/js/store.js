import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  resources: {
    res_smoke: {quantity: 0},
    res_meat: {quantity: 0},
    res_metal: {quantity: 0},
    res_plastic: {quantity: 0}
  }
};

const mutations = {
  gather(state, res_id) {
    state.resources[res_id] += 1;
  }
};

export default new Vuex.Store({
  state,
  mutations
});
