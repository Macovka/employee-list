<template>
  <tr>
    <td v-if="!employee.editing">{{ employee.name }}</td>
    <td v-else><input v-model= "editedEmployee.name" /></td>
    <td v-if="!employee.editing">{{ employee.surname }}</td>
    <td v-else><input v-model="editedEmployee.surname" /></td>
    <td v-if="!employee.editing">{{ employee.experience }}</td>
    <td v-else><input v-model="editedEmployee.experience"></td>
    <td v-if="!employee.editing">{{ employee.age }}</td>
    <td v-else><input v-model="editedEmployee.age" /></td>
    <td v-if="!employee.editing">{{ employee.address }}</td>
    <td v-else><input v-model="editedEmployee.address" /></td>
    <td>
      <button v-if="!employee.editing" @click="editEmployee">Edit</button>
      <button v-else @click="saveEmployee">Save</button>
      <button v-if="!employee.editing" @click="removeEmployee">Remove</button>
      <button v-else @click="cancelEdit">Cancel</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    employee: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editedEmployee: { ...this.employee },
    };
  },
  methods: {
    editEmployee() {
      this.$emit('edit', this.employee);
    },
    saveEmployee() {
      this.$emit('save', this.editedEmployee);
    },
    removeEmployee() {
      this.$emit('remove', this.employee);
    },
    cancelEdit() {
      this.$emit('cancel', this.employee);
    },
  },
  watch: {
    employee: {
      handler(newValue) {
        this.editedEmployee = { ...newValue };
      },
      deep: true,
    },
  },
};
</script>