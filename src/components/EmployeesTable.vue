<template>
  <table>
    <thead>
      <tr>
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
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
        @edit="$emit('edit', employee)"
        @save="$emit('save', employee)"
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