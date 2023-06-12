<template>
  <div id="employees-list">
    <h1 class="header">Employees List</h1>
    <button v-if="!adding" @click="adding = !adding">{{ 'Add Employee' }}</button>
    <div v-else>
      <employee-form :employee="newEmployee" @save="addEmployee" @cancel="adding = false" />
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
      saveEmployee(employee) {
        const index = this.employees.findIndex(e => e.id === employee.id);
        if (index !== -1) {
          this.employees.splice(index, 1, employee);
          employee.editing = false;
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
<style scoped>
  #employees-list {
    background: #fff;
    padding: 2rem;
    margin: 1rem;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    width: 95%;
    max-width: 900px;
  }

  #employees-list > input,
  #employees-list > select {
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f5f8;
    color: #606f7b;
    padding: 0.5rem 0.75rem;
    box-sizing: border-box;
    font-size: 1rem;
    letter-spacing: 0.5px;
    margin: 0.5rem 0;
  }

  .add-employee-form,
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    width: 70%;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f5f8;
    color: #606f7b;
    padding: 0.5rem 0.75rem;
    box-sizing: border-box;
    font-size: 1rem;
    letter-spacing: 0.5px;
    margin: 0.5rem 0;
  }
  .err {
    border: 1px solid red;
  }

  .btn {
    border: none;
    border-radius: 3px;
    margin: auto 0;
    padding: 0.5rem 0.75rem;
    flex-shrink: 0;
    cursor: pointer;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    transition: all 0.1s ease-in;
  }

  .btn[disabled] {
    background: #8795a1;
  }

  .btn[disabled]:hover {
    background: #606f7b;
  }

  .btn-primary {
    background: #6cb2eb;
    color: #fff;
  }

  .btn-primary:hover {
    background: #3490dc;
  }

  .btn-danger {
    background: #ef5753;
    color: #fff;
  }

  .btn-danger:hover {
    background: #e3342f;
    color: #fff;
  }
</style>