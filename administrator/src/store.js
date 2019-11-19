import Vue from "vue";
import Vuex from "vuex";
import {isNull} from "util";
// import idb from "@/api/idb";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    authenticated: isNull(sessionStorage.getItem("authenticated")) ? false : true
  },
  mutations: {
    setAuthentication(state, status) {
      sessionStorage.setItem("authenticated", status)
      state.authenticated = status;
  }
 
}
});
