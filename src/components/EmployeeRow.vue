<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ employee.name.first }}</td>
    <td>{{ employee.name.last }}</td>
    <td>{{ employee.registered.age }} {{ unit(employee.registered.age ) }}</td>
    <td>{{ employee.dob.age }} {{ unit(employee.dob.age) }}</td>
    <td>{{ employee.email }}</td>
    <td>
      <div class="button-wrapper">
        <base-button @click="editEmployee(employee)">Edit</base-button>
        <base-button @click="deleteEmployee(employee)" class="btn btn-danger">Delete</base-button>
      </div>   
    </td>
  </tr>
</template>

<script>
  import {mapActions} from 'vuex';

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
        deleteEmployee: 'list/deleteEmployee'}),
      unit(property) {
        return property === 1 ? ' year' : ' years'
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
    justify-content: space-around;
  }
</style>