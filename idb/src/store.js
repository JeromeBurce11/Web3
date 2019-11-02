import Vue from "vue";
import Vuex from "vuex";

import idb from "@/api/idb";
import idb2 from '@/api/dataDB';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    datas:[]
  },
  mutations: {},
  actions: {
    async deleteUser(context, user) {
      console.log("store is being asked to delete " + user.id);
      await idb.deleteUser(user);
    },
    async getUsers(context) {
      context.state.users = null;
      let users = await idb.getUsers();
      console.log(users);
        context.state.users = users;
    },
    async saveUser(context, user) {
      await idb.saveUser(user);
    },
    
    async deleteData(context, data) {
      console.log('store is being asked to delete '+data.id);
      await idb2.deleteData(data); 
    },
    async getDatas(context) {
      context.state.datas = [];
      let datas = await idb2.getDatas();
      datas.forEach(c => {
          context.state.datas.push(c);
      });
    },

    async getProblem(context) {
      context.state.datas = [];
      let datas = await idb2.getDatas();
      datas.forEach(c => {
        if((c.items) === "problem")
          context.state.datas.push(c);
      });
    },

    async getSolution(context) {
      context.state.datas = [];
      let datas = await idb2.getDatas();
      datas.forEach(c => {
        if((c.items) === "solution")
          context.state.datas.push(c);
      });
    },
    
    async saveData(context, data) {
      await idb2.saveData(data);
    }
  }
});
