<template>
  <table class="employees-table">
    <thead>
      <tr>
        <th class="employees-table__number">№</th>
        <th class="employees-table__firstname">First Name</th>
        <th class="employees-table__lastname">Last Name</th>
        <th class="employees-table__experience">Experience</th>
        <th class="employees-table__age">Age</th>
        <th class="employees-table__address">Email</th>
        <th class="employees-table__actions">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="isLoading">
        <td colspan="7">
          <img 
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
        <td colspan="7" class="employees-table__total">Total: {{ employees.length }}</td>
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
  .employees-table {
    border-collapse: collapse;
    width: 100%;
    padding: 20px;
    margin: auto;
  }

  .employees-table th {
    background-color: #f2f2f2;
    border: 1px solid #000;
    padding: 8px;
  }
  .employees-table td {
    border: 1px solid #000;
    padding: 8px;
  }

  .employees-table__number{
    width: 16px;
  }

  .employees-table__firstname,
  .employees-table__lastname,
  .employees-table__experience,
  .employees-table__age {
    width: 80px;
  }

  .employees-table__address {
    width: 275px;
  }

  .employees-table__actions {
    width: 182px;
  }

  table tbody .employees-table__total {
    text-align: right;
    padding-right: 40px;
    font-weight: bold;
  }
</style>