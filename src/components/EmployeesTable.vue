<template>
  <table>
    <thead>
      <tr>
        <th>№</th>
        <th>Name</th>
        <th>Surname</th>
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