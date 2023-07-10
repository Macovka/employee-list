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
          <div class="spinner"></div>
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

<style lang="scss" scoped>
  %cell-shared {
    border: 1px solid #000;
    padding: 8px;
  }
  .employees-table {
    border-collapse: collapse;

    th {
      @extend %cell-shared;
      background-color: #f2f2f2;
    }

    td {
      @extend %cell-shared;
    }

    .employees-table__number{
      width: 16px / 900px * 100%;
    }

    .employees-table__firstname,
    .employees-table__lastname,
    .employees-table__experience,
    .employees-table__age {
      width: 80px / 900px * 100%;
    }

    .employees-table__address {
      width: 275px / 900px * 100%;
    }

    .employees-table__actions {
      width: 182px / 900px * 100%;
    }

    tbody {
      .employees-table__total {
        text-align: right;
        padding-right: 40px;
        font-weight: bold;
      }
    } 
  }
  .spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-top: 4px solid #ccc;
    border-right: 4px solid #ccc;
    border-bottom: 4px solid #ccc;
    border-left: 4px solid #777;
    animation: spin 1s linear infinite;
    margin:0 auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
</style>