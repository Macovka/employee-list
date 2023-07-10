<template>
  <div class="employee-list">
    <div class="employee-list__title-wrapper">
      <h1 class="employee-list__title">Employees List</h1>
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

<style lang="scss" scoped>
  $indent: 30px;
  .employee-list {
    padding: $indent;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: 900px;

    .employee-list__title-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: $indent;
    }

    .employee-list__title {
      margin: 0;
    }
  }
</style>