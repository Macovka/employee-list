<template>
  <table class="table">
    <thead>
      <tr>
        <th class="table__number">№</th>
        <th class="table__firstname">First Name</th>
        <th class="table__lastname">Last Name</th>
        <th class="table__experience">Experience</th>
        <th class="table__age">Age</th>
        <th class="table__address">Email</th>
        <th class="table__actions">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="isLoading">
        <td colspan="7">
          <img 
            class="spinner" 
            src="https://i.imgur.com/JfPpwOA.gif" 
            alt="loading..."
          >
      </td>
      </tr> 
      <employee-row
        v-for="(employee, index) in employees"
        :key="employee.id.value"
        :employee="employee"
        :index="index"
      />
      <tr>
        <td colspan="7" class="table__total">Total: {{ employees.length }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import EmployeeRow from './EmployeeRow.vue';
  import { mapState } from 'vuex';

  export default {
    components: {
      EmployeeRow,
    },
    computed: {
      ...mapState('list', {
        employees: state => state.employees,
        isLoading: state => state.isLoading,
      }),
    },
  };
</script>

<style scoped>
  .table {
    border-collapse: collapse;
    width: 100%;
    padding: 20px;
    margin: auto;
  }

  .table th {
    background-color: #f2f2f2;
    border: 1px solid #000;
    padding: 8px;
  }
  .table td {
    border: 1px solid #000;
    padding: 8px;
  }

  .table__number{
    width: 16px;
  }

  .table__firstname,
  .table__lastname,
  .table__experience,
  .table__age {
    width: 80px;
  }

  .table__address {
    width: 275px;
  }

  .table__actions {
    width: 182px;
  }

  table tbody .table__total {
    text-align: right;
    padding-right: 40px;
    font-weight: bold;
  }
</style>