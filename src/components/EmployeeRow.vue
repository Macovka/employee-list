<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td v-if="!employee.editing">{{ employee.name }}</td>
    <td v-else><input v-model= "editedEmployee.name" type="text"></td>
    <td v-if="!employee.editing">{{ employee.surname }}</td>
    <td v-else><input v-model="editedEmployee.surname" type="text"></td>
    <td v-if="!employee.editing">{{ employee.experience }}</td>
    <td v-else><input v-model="editedEmployee.experience" type="number"></td>
    <td v-if="!employee.editing">{{ employee.age }}</td>
    <td v-else><input v-model="editedEmployee.age" type="number"></td>
    <td v-if="!employee.editing">{{ employee.address }}</td>
    <td v-else><input v-model="editedEmployee.address" type="text"></td>
    <td>
      <div v-if="!employee.editing">
        <button @click="editEmployee">Edit</button>
        <button @click="removeEmployee">Remove</button>
      </div>
      <div v-else>
        <button @click="saveEmployee">Save</button>     
        <button @click="cancelEdit">Cancel</button>
      </div>     
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
    employees: {
      type: Array,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    editedEmployee: {
      get() {
        return { ...this.employee };
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
  methods: {
    editEmployee() {
      this.$emit('edit', this.employee);
    },
    saveEmployee() {
      this.$emit('save', this.employee, this.editedEmployee);
    },
    removeEmployee() {
      this.$emit('remove', this.employee);
    },
    cancelEdit() {
      this.$emit('cancel', this.employee);
    },
  },
};
</script>