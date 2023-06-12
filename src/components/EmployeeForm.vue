<template>
  <div>
    <base-input :value="newEmployee.name" placeholder="Name" type="text" @input="updateValue('name', $event.target.value)" />
    <base-input :value="newEmployee.surname" placeholder="Surname" type="text" @input="updateValue('surname', $event.target.value)" />
    <base-input :value="newEmployee.experience" placeholder="Experience" type="number" @input="updateValue('experience', $event.target.value)" />
    <base-input :value="newEmployee.age" placeholder="Age" type="number" @input="updateValue('age', $event.target.value)" />
    <base-input :value="newEmployee.address" placeholder="Address" type="text" @input="updateValue('address', $event.target.value)" />
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
      updateValue(field, value) {
        this.newEmployee[field] = value;
      },
    },
  };
</script>