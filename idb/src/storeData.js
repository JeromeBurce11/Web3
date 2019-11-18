import Vue from 'vue'
import Vuex from 'vuex'

import idb from '@/api/dataDB';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datas:[]
  },
  mutations: {

  },
  actions: {
    async deleteData(context, data) {
      console.log('store is being asked to delete '+data.id);
      await idb.deleteData(data); 
    },
    async getDatas(context) {
      context.state.datas = [];
      let datas = await idb.getDatas();
      datas.forEach(c => {
        if((c.items) === "problem")
          context.state.datas.push(c);
      });
    },

    async getSolution(context) {
      context.state.datas = [];
      let datas = await idb.getDatas();
      datas.forEach(c => {
        if((c.items) === "solution")
          context.state.datas.push(c);
      });
    },
    
    async saveData(context, data) {
      await idb.saveData(data);
    }
  }
})
