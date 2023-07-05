<template>
  <div class="employee-list">
    <div class="header-wrapper">
      <h1 class="header">Employees List</h1>
      <base-button 
        v-if="!editing && !isError" 
        @click="addEmployee"
      >
        Add Employee
      </base-button>
    </div>
    <p v-if="isError">Oops, something went wrong.</p>
    <div v-else>
      <employee-form v-if="editing" />
      <employees-table />
      <img 
        v-if="loading" 
        src="https://i.imgur.com/JfPpwOA.gif" 
        alt="loading..."
      >   
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
    data() {
      return {
        loading: false,
      }
    },
    computed: {
      ...mapState({
        editing: state => state.editing,
        isError: state => state.list.isError,
      }),
    },
    methods: {
      ...mapActions({
        addEmployee: 'form/addEmployee', 
        renderEmployees: 'list/getEmployees'
      }),  
    },
    created() {
      this.loading = true
      this.renderEmployees()
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