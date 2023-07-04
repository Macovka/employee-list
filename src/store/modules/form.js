export default {
  namespaced: true,
  state: {
    editingEmployee: null,
    formTitle: '',
    hasErr: false
  },
  mutations: {
    setHasErrValue(state, value) {
      state.hasErr = value;
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
      commit('setHasErrValue', false);
      commit('setEditingValue', false, {root: true});
    },
    closeModal({commit}, event) {
      if (event.target === event.currentTarget) {
        commit('setEditingValue', false, {root: true});
        commit('setHasErrValue', false);
      }
    },
  }
}