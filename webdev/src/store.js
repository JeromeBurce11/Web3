import Vue from 'vue'
import Vuex from 'vuex'

import idb from '@/api/indexedDB';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[]
  },
  mutations: {

  },
  actions: {
    async deleteUser(context, user) {
      console.log('store is being asked to delete '+user.id);
      await idb.deleteUser(user); 
    },
    async getUser(context) {
      context.state.users = [];
      let users = await idb.getUser();
      users.forEach(c => {
        context.state.users.push(c);
      });
    },
    async saveUser(context, user) {
      console.log("save db")
      await idb.saveUser(user);
    }
  }
})