<template>
  <table class="table">
    <thead>
      <tr>
        <th>№</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Experience</th>
        <th>Age</th>
        <th>Address</th>
        <th>Actions</th>
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
        @save="(editedEmployee, originalEmployee) => $emit('save', editedEmployee, originalEmployee)"
        @remove="$emit('remove', employee)"
        @cancel="$emit('cancel', employee)"
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
    margin: 20px;
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
</style>