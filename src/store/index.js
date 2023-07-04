import { createStore } from 'vuex'
import list from '../api/list'

const store = createStore({
  state: { 
    employees: [],
    editingEmployee: null,
    editing: false,
    formTitle: '',
    hasErr: false
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
    updateEditedEmployee(state, editedEmployee) {
      const index = state.employees.findIndex(e => e.id === editedEmployee.id);
      state.employees[index] = editedEmployee;
    },
    deleteEmployee(state, currentEmployee) {
      const index = state.employees.findIndex(e => e.id === currentEmployee.id);
      if (index !== -1) {
        state.employees.splice(index, 1);
      }
    },
    setHasErrValue(state, value) {
      state.hasErr = value;
    },
    setEditingValue(state, value) {
      state.editing = value;
    },
    setFormTitle(state, title) {
      state.formTitle = title;
    },
    setEditingEmployee(state, value) {
      state.editingEmployee = value;
    },
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
    saveAddedEmployee({commit}, newEmployee) {
      commit('pushAddedEmployee', newEmployee);
      commit('setEditingValue', false);
    },
    saveEditedEmployee({commit}, editedEmployee) {
      commit('updateEditedEmployee', editedEmployee);
      commit('setEditingValue', false);
    },
    deleteEmployee({commit}, currentEmployee) {
      commit('deleteEmployee', currentEmployee)
    },
    addEmployee({commit}) {
      commit('setEditingValue', true);
      commit('setFormTitle', 'New Employee');
      commit('setEditingEmployee', null);
    },
    editEmployee({commit}, currentEmployee) {
      commit('setEditingValue', true);
      commit('setFormTitle', 'Edit Employee');
      commit('setEditingEmployee', { ...currentEmployee });
    },
    cancelEdit({commit}) {
      commit('setHasErrValue', false);
      commit('setEditingValue', false);
    },
  },
})

export default store;