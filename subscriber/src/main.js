import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueAgile from 'vue-agile'
 
Vue.use(VueAgile)

Vue.use(Vuetify)

Vue.config.productionTip = false;

new Vue({
  components: {
		agile: VueAgile,
	},
  router,
  store,
  render: h => h(App)
}).$mount("#app");
