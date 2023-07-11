<template>
  <!-- Each row represents an employee -->
  <tr class="employee-row">
    <!-- Display the employee's number (index + 1) -->
    <td>{{ index + 1 }}</td>
    <td>{{ employee.name.first }}</td>
    <td>{{ employee.name.last }}</td>
    <!-- Display the employee's experience with unit -->
    <td>{{ employee.registered.age }} {{ setUnit(employee.registered.age) }}</td>
    <!-- Display the employee's age with unit -->
    <td>{{ employee.dob.age }} {{ setUnit(employee.dob.age) }}</td>
    <td>{{ employee.email }}</td>
    <td>
       <!-- Buttons for editing and deleting the employee -->
      <div class="employee-row__button-wrapper">
        <base-button @click="editEmployee(employee)">Edit</base-button>
        <base-button @click="deleteEmployee(employee)" class="base-button base-button_danger">Delete</base-button>
      </div>   
    </td>
  </tr>
</template>

<script>
  import { mapActions } from 'vuex';

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
      ...mapActions({
        editEmployee: 'form/editEmployee', 
        deleteEmployee: 'list/deleteEmployee', 
      }), 
      setUnit(value) { // Set the unit based on the value of 'experience' and 'age'
        return +value === 1 ? ' year' : ' years'
      },
    },
  };
</script>

<style lang="scss" scoped>
  $border: 1px solid #000;

  .employee-row {
    border: $border;

    td {
      border: $border;
      padding: 8px;
      text-align: left;
    }

    &__button-wrapper {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }
  }
</style>