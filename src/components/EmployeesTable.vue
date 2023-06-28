<template>
  <table class="table">
    <thead>
      <tr>
        <th class="table__column number">№</th>
        <th class="table__column firstname">First Name</th>
        <th class="table__column lastname">Last Name</th>
        <th class="table__column experience">Experience</th>
        <th class="table__column age">Age</th>
        <th class="table__column address">Address</th>
        <th class="table__column actions">Actions</th>
      </tr>
    </thead>
    <tbody>
      <employee-row
        v-for="(employee, index) in employees"
        :key="employee.id"
        :employee="employee"
        :employees="employees"
        :index="index"
        @edit="$emit('edit')"
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

  .table__column number{
    width: 16px;
  }

  .table__column firstname,
  .table__column lastname,
  .table__column experience,
  .table__column age {
    width: 80px;
  }

  .table__column address {
    width: 275px;
  }
</style>