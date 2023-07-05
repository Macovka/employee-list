import { fetchEmployees } from '../../api/api'

export default {
  namespaced: true,
  state: {
    employees: [],
    isError: false,
  },
  mutations: {
    setEmployees (state, employees) {
      state.employees = employees;
    },
    setError(state) {
      state.isError = true;
    },
    pushAddedEmployee(state, newEmployee) {
      state.employees.push({
        ...newEmployee,
        id: state.employees.length + 1,
      });
    },
    updateEditingEmployee(state, editedEmployee) {
      const index = state.employees.findIndex(e => e.id === editedEmployee.id);
      state.employees[index] = editedEmployee;
    },
    deleteEmployee(state, currentEmployee) {
      const index = state.employees.findIndex(e => e.id === currentEmployee.id);
      if (index !== -1) {
        state.employees.splice(index, 1);
      }
    },
  },
  actions: {
    getEmployees ({commit}) { 
      return fetchEmployees()
        .then(response => {
          commit('setEmployees', response.results);
        })
        .catch(error => {
          commit('setError', error);
        })    
    },
    saveAddedEmployee({commit}, newEmployee) {
      commit('pushAddedEmployee', newEmployee);
      commit('setEditingValue', false, {root: true});
    },
    saveEditedEmployee({commit}, editedEmployee) {
      commit('updateEditingEmployee', editedEmployee);
      commit('setEditingValue', false, {root: true});
    },
    deleteEmployee({commit}, currentEmployee) {
      commit('deleteEmployee', currentEmployee)
    },
  }
}