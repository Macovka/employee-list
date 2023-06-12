<template>
  <div>
    <base-input v-model="newEmployee.name" placeholder="Name" type="text" />
    <base-input v-model="newEmployee.surname" placeholder="Surname" type="text" />
    <base-input v-model.number="newEmployee.experience" placeholder="Experience" type="number" />
    <base-input v-model.number="newEmployee.age" placeholder="Age" type="number" />
    <base-input v-model="newEmployee.address" placeholder="Address" type="text" />
    <base-button @click="addEmployee">Add</base-button>
    <base-button @click="cancelEdit">Cancel</base-button>
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