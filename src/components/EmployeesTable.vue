<template>
  <table class="table">
    <thead>
      <tr>
        <th class="table__number">№</th>
        <th class="table__firstname">First Name</th>
        <th class="table__lastname">Last Name</th>
        <th class="table__experience">Experience</th>
        <th class="table__age">Age</th>
        <th class="table__address">Address</th>
        <th class="table__actions">Actions</th>
      </tr>
    </thead>
    <tbody>
      <employee-row
        v-for="(employee, index) in employees"
        :key="employee.id"
        :employee="employee"
        :employees="employees"
        :index="index"
        @edit="$emit('edit', employee)"
        @remove="$emit('remove', employee)"
      />
    </tbody>
  </table>
</template>

<script>
  import EmployeeRow from './EmployeeRow.vue';

  export default {
    components: {
      EmployeeRow,
    },
    props: {
      employees: {
        type: Array,
        required: true,
      },
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
  .table td {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
  }

  .table th {
    background-color: #f2f2f2;
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
</style>