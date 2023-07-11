import { fetchEmployees } from '../../api/api'

export default {
  namespaced: true,
  state: {
    employees: [], // Represents the list of employees
    loadingError: false, // Indicates if there was an error while loading employees
    isLoading: false, // Indicates if employees are currently being loaded
  },
  mutations: {
    // Sets the list of employees
    setEmployees (state, employees) {
      state.employees = [...employees];
    },
    // Updates the loading state
    setIsLoadingValue(state, value) {
      state.isLoading = value;
    },
    // Sets the loading error state
    setLoadingErrorValue(state) {
      state.loadingError = true;
    },
    // Adds a new employee to the list
    pushAddedEmployee(state, newEmployee) {
      state.employees.push({
        ...newEmployee,
        id: state.employees.length + 1,
      });
    },
    // Updates an existing employee in the list
    updateEditingEmployee(state, editedEmployee) {
      const index = state.employees.findIndex(e => e.id === editedEmployee.id);
      state.employees[index] = editedEmployee;
    },
    // Deletes an employee from the list
    deleteEmployee(state, currentEmployee) {
      const index = state.employees.findIndex(e => e.id === currentEmployee.id);
      if (index !== -1) {
        state.employees.splice(index, 1);
      }
    },
  },
  actions: {
    // Retrieves the list of employees
    getEmployees ({commit}) { 
      commit('setIsLoadingValue', true); // Indicates that employees are being loaded
      return fetchEmployees() // Calls the fetchEmployees function to retrieve employee data
        .then(response => {
          commit('setEmployees', response.results); // Updates the state with the fetched employee data
        })
        .catch(error => {
          commit('setLoadingErrorValue', error); // Sets the loading error state if an error occurs
        })    
        .finally(() => {
          commit('setIsLoadingValue', false); // Resets the loading state to indicate that the loading process is complete
        });
    },
    // Saves a newly added employee
    saveAddedEmployee({commit}, newEmployee) {
      commit('pushAddedEmployee', newEmployee);
      commit('setEditingValue', false, {root: true});
    },
    // Saves an edited employee
    saveEditedEmployee({commit}, editedEmployee) {
      commit('updateEditingEmployee', editedEmployee);
      commit('setEditingValue', false, {root: true});
    },
    // Deletes an employee
    deleteEmployee({commit}, currentEmployee) {
      commit('deleteEmployee', currentEmployee)
    },
  }
}