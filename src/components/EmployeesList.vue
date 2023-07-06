<template>
  <div class="employee-list">
    <div class="employee-list__title-wrapper">
      <h1 class="employee-list__title-wrapper__title">Employees List</h1>
      <base-button 
        v-if="!editing && !loadingError" 
        @click="addEmployee"
      >
        Add Employee
      </base-button>
    </div>
    <p v-if="loadingError">Oops, something went wrong.</p>
    <div v-else>
      <employee-form v-if="editing" />
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
      this.renderEmployees()
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
  .employee-list__title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .employee-list__title-wrapper__title {
    margin: 0;
  }
</style>