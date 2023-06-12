<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td v-if="!employee.editing">{{ employee.name }}</td>
    <td v-else><base-input :value="editedEmployee.name" @input="updateValue('name', $event.target.value)" type="text" /></td>
    <td v-if="!employee.editing">{{ employee.surname }}</td>
    <td v-else><base-input :value="editedEmployee.surname" @input="updateValue('surname', $event.target.value)" type="text" /></td>
    <td v-if="!employee.editing">{{ employee.experience }} {{ unit(employee.experience) }}</td>
    <td v-else><base-input :value="editedEmployee.experience" @input="updateValue('experience', $event.target.value)" type="number" /></td>
    <td v-if="!employee.editing">{{ employee.age }} {{ unit(employee.age) }}</td>
    <td v-else><base-input :value="editedEmployee.age" @input="updateValue('age', $event.target.value)" type="number" /></td>
    <td v-if="!employee.editing">{{ employee.address }}</td>
    <td v-else><base-input :value="editedEmployee.address" @input="updateValue('address', $event.target.value)" type="text" /></td>
    <td>
      <div v-if="!employee.editing">
        <base-button @click="editEmployee">Edit</base-button>
        <base-button @click="removeEmployee">Remove</base-button>
      </div>
      <div v-else>
        <base-button @click="saveEmployee">Save</base-button>     
        <base-button @click="cancelEdit">Cancel</base-button>
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
    data() {
      return {
        editedEmployee: { ...this.employee },
      };
    },
    watch: {
      employee: {
        handler(newValue) {
          this.editedEmployee = { ...newValue };
        },
        deep: true,
      },
    },
    methods: {
      editEmployee() {
        this.$emit('edit', this.employee);
      },
      saveEmployee() {
        if (!this.editedEmployee.name || !this.editedEmployee.surname || this.editedEmployee.experience < 0 || this.editedEmployee.experience === '' || this.editedEmployee.age < 0 || this.editedEmployee.age === '' || !this.editedEmployee.address) {
          return;
        }
        this.$emit('save', this.employee, this.editedEmployee);
      },
      removeEmployee() {
        this.$emit('remove', this.employee);
      },
      cancelEdit() {
        this.$emit('cancel', this.employee);
      },
      unit(property) {
        return property === '1' ? ' year' : ' years'
      },
      updateValue(field, value) {
        this.editedEmployee[field] = value;
      },
    },
  };
</script>