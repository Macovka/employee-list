<template>
  <div>
    <input v-model="newEmployee.name" placeholder="Name" type="text">
    <input v-model="newEmployee.surname" placeholder="Surname" type="text">
    <input v-model.number="newEmployee.experience" placeholder="Experience" type="number">
    <input v-model.number="newEmployee.age" placeholder="Age" type="number">
    <input v-model="newEmployee.address" placeholder="Address" type="text">
    <button @click="addEmployee">Add</button>
    <button @click="cancelEdit">Cancel</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newEmployee: {
          name: '',
          surname: '',
          experience: '',
          age: '',
          address: '',
        },
      };
    },
    methods: {
      addEmployee() {
        if (!this.newEmployee.name || !this.newEmployee.surname || this.newEmployee.experience < 0 || this.newEmployee.experience === '' || this.newEmployee.age < 0 || this.newEmployee.age === '' || !this.newEmployee.address) {
          return;
        }
        this.$emit('add', this.newEmployee);
      },
      cancelEdit() {
        this.$emit('cancel');
      },
    },
  };
</script>