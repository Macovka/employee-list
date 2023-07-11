export default {
  namespaced: true,
  state: {
    editingEmployee: null, // Represents the currently edited employee
    formTitle: '', // Represents the title of the form (e.g., 'New Employee' or 'Edit Employee')
    inputError: false, // Indicates if there is an input error
  },
  mutations: {
    // Sets the input error state
    setInputErrorValue(state, value) {
      state.inputError = value;
    },
    // Sets the form title
    setFormTitle(state, title) {
      state.formTitle = title;
    },
    // Sets the currently editing employee
    setEditingEmployee(state, value) {
      state.editingEmployee = value;
    },
  },
  actions: {
    // Adds a new employee
    addEmployee({commit}) {
      commit('setEditingValue', true, {root: true});
      commit('setFormTitle', 'New Employee');
      commit('setEditingEmployee', null);
    },
    // Edits an existing employee
    editEmployee({commit}, currentEmployee) {
      commit('setEditingValue', true, {root: true});
      commit('setFormTitle', 'Edit Employee');
      commit('setEditingEmployee', { ...currentEmployee });
    },
    // Cancels the edit mode
    cancelEdit({commit}) {
      commit('setInputErrorValue', false);
      commit('setEditingValue', false, {root: true});
    },
    // Closes the modal
    closeModal({commit}, event) {
      if (event.target === event.currentTarget) {
        commit('setEditingValue', false, {root: true});
        commit('setInputErrorValue', false);
      }
    },
  }
}