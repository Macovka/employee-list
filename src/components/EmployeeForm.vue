<template>
  <div>
    <input v-model="localEmployee.name" placeholder="Name" type="text">
    <input v-model="localEmployee.surname" placeholder="Surname" type="text">
    <input v-model.number="localEmployee.experience" placeholder="Experience" type="number">
    <input v-model.number="localEmployee.age" placeholder="Age" type="number">
    <input v-model="localEmployee.address" placeholder="Address" type="text">
    <button @click="addEmployee">Add</button>
    <button @click="cancelEdit">Cancel</button>
  </div>
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
      localEmployee: { ...this.employee },
    };
  },
  methods: {
    addEmployee() {
      if (!this.localEmployee.name || !this.localEmployee.surname || this.localEmployee.experience < 0 || this.localEmployee.experience === '' || this.localEmployee.age < 0 || this.localEmployee.age === '' || !this.localEmployee.address) {
        return;
      }
      this.$emit('add', this.localEmployee);
    },
    cancelEdit() {
      this.$emit('cancel');
    },
  },
  watch: {
    employee: {
      handler(newValue) {
        this.localEmployee = { ...newValue };
      },
      deep: true,
    },
  },
};
</script>