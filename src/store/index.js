import { createStore } from 'vuex';
import list from './modules/list';
import form from './modules/form';

const store = createStore({
  modules: {
    list,
    form
  },
  state: { 
    editing: false, // Indicates if user clicked "Edit" buuton
  },
  getters: { 
    
  },
  mutations: {
    // Sets the value of 'editing' in the state 
    setEditingValue(state, value) {
      state.editing = value;
    },
  },
  actions: { 
    
  },
})

export default store;