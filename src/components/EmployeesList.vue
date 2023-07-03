<template>
  <div class="employee-list">
    <div class="header-wrapper">
      <h1 class="header">Employees List</h1>
      <base-button 
        v-if="!editing" 
        @click="addEmployee"
      >
        Add Employee
      </base-button>
    </div>
    <employee-form 
      v-if="editing" 
      @saveAddedEmployee="saveAddedEmployee" 
      @saveEditedEmployee="saveEditedEmployee" 
      @cancel="editing = false" 
      :formTitle="formTitle"
      :editingEmployee="editingEmployee"
    />
    <employees-table
      :employees="employees"
      @edit="editEmployee"
      @remove="removeEmployee"
    />
    <img 
      v-if="loading" 
      src="https://i.imgur.com/JfPpwOA.gif" 
      alt="loading..."
    >
  </div>
</template>

<script>
  import EmployeesTable from './EmployeesTable.vue';
  import EmployeeForm from './EmployeeForm.vue';

  export default {
    components: {
      EmployeesTable,
      EmployeeForm,
    },
    data() {
      return {
        loading: false,
        editing: false,
        formTitle: '',
        editingEmployee: null,
      }
    },
    computed: {
      employees() {
        return this.$store.state.employees
      }
    },
    methods: {
      addEmployee() {
        this.editingEmployee = null
        this.editing = true;
        this.formTitle = 'New Employee'
      },
      editEmployee(currentEmployee) {
        this.editing = true;
        this.formTitle = 'Edit Employee';
        this.editingEmployee = { ...currentEmployee };
      },
      saveAddedEmployee(newEmployee) {
        this.$store.dispatch('saveAddedEmployee', newEmployee)
        this.editing = false;
      },
      saveEditedEmployee(editedEmployee) {
        this.$store.dispatch('saveEditedEmployee', editedEmployee)
        this.editing = false;
      },
      removeEmployee(currentEmployee) {
        this.$store.dispatch('removeEmployee', currentEmployee)
      },
    },
    created() {
      this.loading = true
      this.$store.dispatch('fetchEmployees')
        .then(() => this.loading = false)
    }
  }
</script>

<style scoped>
  .employee-list {
    padding: 30px;
    margin: auto;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    width: 95%;
    max-width: 900px;
  }
  .header-wrapper {
    display: flex;
    justify-content: space-around;
    height: 60px;
    align-items: center;
    margin: 30px auto;
  }
</style>