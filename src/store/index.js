import { createStore } from 'vuex'
import list from '../api/list'

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
    fetchEmployees ({commit}) {
      list.getEmployees(employees => {
        commit('setEmployees', employees)
      })
    },
  },
})

export default store;