<template>
  <div class="employee-list">
    <!-- Title and "Add Employee" button -->
    <div class="employee-list__title-wrapper">
      <h1 class="employee-list__title">Employees List</h1>
      <base-button 
        v-if="!editing && !loadingError" 
        @click="addEmployee"
      >
        Add Employee
      </base-button>
    </div>
    <!-- Error message if loading fails -->
    <p v-if="loadingError">Oops, something went wrong.</p>
    <div v-else>
      <!-- Render the employee form when in editing mode -->
      <employee-form v-if="editing" /> 
      <!-- Render the employees table -->
      <employees-table />  
    </div>   
  </div>
</template>

<script>
  import EmployeesTable from './EmployeesTable.vue';
  import EmployeeForm from './EmployeeForm.vue';
  import { mapState, mapActions } from 'vuex';

  export default {
    components: {
      EmployeesTable,
      EmployeeForm,
    },
    computed: {
      ...mapState({
        editing: state => state.editing, 
        loadingError: state => state.list.loadingError, 
      }),
    },
    methods: {
      ...mapActions({
        addEmployee: 'form/addEmployee',  
        renderEmployees: 'list/getEmployees' 
      }),  
    },
    created() {
      this.renderEmployees(); // Render employees when the component is created
    }
  }
</script>

<style lang="scss" scoped>
  $indent: 30px;
  .employee-list {
    padding: $indent;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: 900px;

    &__title-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: $indent;
    }

    &__title {
      margin: 0;
    }
  }
</style>