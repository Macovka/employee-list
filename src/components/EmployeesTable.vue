<template>
  <table class="employees-table">
    <thead>
      <tr>
        <!-- Columns titles -->
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
      <!-- Display a loading spinner if data is still loading -->
      <tr v-if="isLoading">
        <td colspan="7">
          <base-spinner />
        </td>
      </tr> 
      <!-- Render each employee row -->
      <employee-row
        v-for="(employee, index) in employees"
        :key="employee.id.value"
        :employee="employee"
        :index="index"
      />
      <!-- Display the total number of employees -->
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
        employees: state => state.employees, // Get the employees array from Vuex store
        isLoading: state => state.isLoading, // Get the loading state from Vuex store
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

    &__number{
      width: 16px / 900px * 100%;
    }

    &__firstname,
    &__lastname,
    &__experience,
    &__age {
      width: 80px / 900px * 100%;
    }

    &__address {
      width: 275px / 900px * 100%;
    }

    &__actions {
      width: 182px / 900px * 100%;
    }

    tbody  &__total {
      text-align: right;
      padding-right: 40px;
      font-weight: bold;
    }
  }
</style>