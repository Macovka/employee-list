import { createStore } from 'vuex'
import list from '../api/list'

const store = createStore({
  state: { 
    employees: [],
  },
  mutations: { 
    setEmployees (state, employees) {
      state.employees = employees;
    },
    pushAddedEmployee(state, newEmployee) {
      state.employees.push({
        ...newEmployee,
        id: state.employees.length + 1,
      });
    },
    saveEditedEmployee(state, editedEmployee) {
      const index = state.employees.findIndex(e => e.id === editedEmployee.id);
      state.employees[index] = editedEmployee;
    },
    removeEmployee(state, currentEmployee) {
      const index = state.employees.findIndex(e => e.id === currentEmployee.id);
      if (index !== -1) {
        state.employees.splice(index, 1);
      }
    },
  },
  getters: {

  },
  actions: { 
    fetchEmployees ({commit}) {
      return new Promise((resolve) => {
        list.getEmployees(employees => {
          commit('setEmployees', employees)
          resolve()
        })
      })      
    },
    saveAddedEmployee(context, newEmployee) {
      context.commit('pushAddedEmployee', newEmployee)
    },
    saveEditedEmployee(context, editedEmployee) {
      context.commit('saveEditedEmployee', editedEmployee)
    },
    removeEmployee(context, currentEmployee) {
      context.commit('removeEmployee', currentEmployee)
    },
  },
})

export default store;