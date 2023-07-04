import { createStore } from 'vuex';
import list from './modules/list';
import form from './modules/form';

const store = createStore({
  modules: {
    list,
    form
  },
  state: { 
    editing: false,
  },
  getters: { 
    
  },
  mutations: { 
    setEditingValue(state, value) {
      state.editing = value;
    },
  },
  actions: { 
    
  },
})

export default store;