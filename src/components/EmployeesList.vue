<template>
  <div id="employees-list">
    <h1 class="header">Employees List</h1>
    <base-button v-if="!adding" @click="adding = !adding">Add Employee</base-button>
    <div v-else>
      <employee-form @add="addEmployee" @cancel="adding = false" />
    </div>
    <employees-table
      :employees="employees"
      @edit="editEmployee"
      @save="saveEmployee"
      @remove="removeEmployee"
      @cancel="cancelEdit"
    />
  </div>
</template>

<script>
  import EmployeesTable from './EmployeesTable.vue';
  import EmployeeForm from './EmployeeForm.vue';

  export default {
    components: {
      EmployeesTable,
      EmployeeForm,
    },
    data() {
      return {
        adding: false,
        newEmployee: {
          name: '',
          surname: '',
          experience: '',
          age: '',
          address: '',
        },
        employees: [
          {id: 1, name: 'John', surname: 'Steele', experience: 4, age: 26, address: '905 Hannah Corners Adamsstad RM14 3PA', editing: false, inputState: false},
          {id: 2, name: 'Ann', surname: 'Cooper', experience: 5, age: 28, address: '5 Donna Station Ellisshire DE15 9DU', editing: false, inputState: false},
          {id: 3, name: 'Derrick', surname: 'Johnston', experience: 2, age: 23, address: '3 Zach Greens Jonesfort FK3 8EP', editing: false, inputState: false},
        ],
      }
    },
    methods: {
      addEmployee(employee) {
        this.employees.push({
          id: this.employees.length + 1,
          name: employee.name,
          surname: employee.surname,
          experience: employee.experience,
          age: employee.age,
          address: employee.address,
          editing: false,
        });
        this.newEmployee = {
          name: '',
          surname: '',
          experience: '',
          age: '',
          address: '',
        };
        this.adding = false;
      },
      editEmployee(employee) {
        employee.editing = true;
      },
      saveEmployee(originalEmployee, editedEmployee) {
        const index = this.employees.findIndex(e => e.id === originalEmployee.id);
        if (index !== -1) {
          this.employees.splice(index, 1, { ...editedEmployee, editing: false });
        }
      },
      removeEmployee(employee) {
        const index = this.employees.findIndex(e => e.id === employee.id);
        if (index !== -1) {
          this.employees.splice(index, 1);
        }
      },
      cancelEdit(employee) {
        const index = this.employees.findIndex(e => e.id === employee.id);
        if (index !== -1) {
          employee.editing = false;
        }
      }
    },
  }
</script>