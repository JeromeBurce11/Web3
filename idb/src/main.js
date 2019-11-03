import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'
import Vuesax from 'vuesax'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuesax/dist/vuesax.css'
var SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);
Vue.use(Vuelidate);
Vue.use(Vuesax)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  icon: {
    iconfont: 'md',
  },
  render: h => h(App)
}).$mount('#app')
