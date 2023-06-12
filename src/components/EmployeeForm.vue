<template>
  <div>
    <input v-model="localEmployee.name" placeholder="Name">
    <input v-model="localEmployee.surname" placeholder="Surname">
    <input v-model.number="localEmployee.experience" placeholder="Experience">
    <input v-model.number="localEmployee.age" placeholder="Age">
    <input v-model="localEmployee.address" placeholder="Address">
    <button @click="saveEmployee">Save</button>
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
    saveEmployee() {
      if (!this.localEmployee.name || !this.localEmployee.surname || this.localEmployee.experience < 0 || this.localEmployee.age < 0 || !this.localEmployee.address) {
        return;
      }
      this.$emit('save', this.localEmployee);
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