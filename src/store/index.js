import { createStore } from 'vuex'
//import { getEmployees } from '../api/list'

const store = createStore({
  state: { 
    employees: []
  },
  mutations: { 
    setEmployees (state, employees) {
      state.employees = employees;
    },    
  },
  getters: {

  },
  actions: { 
    /*getEmployees (context) {
      return getEmployees()
        .then(response => {
          context.commit('setEmployees', response);
        })
    },*/
  },
})

export default store;