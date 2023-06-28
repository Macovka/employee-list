<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ employee.firstName }}</td>
    <td>{{ employee.lastName }}</td>
    <td>{{ employee.experience }} {{ unit(employee.experience) }}</td>
    <td>{{ employee.age }} {{ unit(employee.age) }}</td>
    <td>{{ employee.address }}</td>
    <td>
      <div class="button-wrapper">
        <base-button @click="editEmployee">Edit</base-button>
        <base-button @click="removeEmployee" class="btn btn-danger">Remove</base-button>
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
      index: {
        type: Number,
        required: true,
      },
    },
    methods: {
      editEmployee() {
        this.$emit('edit', this.employee);
      },
      removeEmployee() {
        this.$emit('remove', this.employee);
      },
      unit(property) {
        return property === '1' ? ' year' : ' years'
      },
    },
  };
</script>

<style scoped>
  tr {
    border: 1px solid #000;
  }

  td {
    border: 1px solid #000;
    padding: 8px;
    text-align: left;
  }
  .button-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
</style>