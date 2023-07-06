export default {
  namespaced: true,
  state: {
    editingEmployee: null,
    formTitle: '',
    inputError: false
  },
  mutations: {
    setinputErrorValue(state, value) {
      state.inputError = value;
    },
    setFormTitle(state, title) {
      state.formTitle = title;
    },
    setEditingEmployee(state, value) {
      state.editingEmployee = value;
    },
  },
  actions: {
    addEmployee({commit}) {
      commit('setEditingValue', true, {root: true});
      commit('setFormTitle', 'New Employee');
      commit('setEditingEmployee', null);
    },
    editEmployee({commit}, currentEmployee) {
      commit('setEditingValue', true, {root: true});
      commit('setFormTitle', 'Edit Employee');
      commit('setEditingEmployee', { ...currentEmployee });
    },
    cancelEdit({commit}) {
      commit('setinputErrorValue', false);
      commit('setEditingValue', false, {root: true});
    },
    closeModal({commit}, event) {
      if (event.target === event.currentTarget) {
        commit('setEditingValue', false, {root: true});
        commit('setinputErrorValue', false);
      }
    },
  }
}