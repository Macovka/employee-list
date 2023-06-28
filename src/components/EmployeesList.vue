<template>
  <div class="employee-list">
    <div class="header-wrapper">
      <h1 class="header">Employees List</h1>
      <base-button 
        v-if="!editing" 
        @click="addEmployee"
      >
        Add Employee
      </base-button>
    </div>
    <employee-form 
      v-if="editing" 
      @save="saveEmployee" 
      @cancel="editing = false" 
      :formTitle="formTitle"
      :employee="editedEmployee"
    />
    <employees-table
      :employees="employees"
      @edit="editEmployee"
      @remove="removeEmployee"
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
        editing: false,
        formTitle: '',
        employees: [
          {
            id: 1, 
            firstName: 'John', 
            lastName: 'Steele', 
            experience: 4, 
            age: 26, 
            address: '905 Hannah Corners Adamsstad RM14 3PA',
          },
          {
            id: 2, 
            firstName: 'Ann', 
            lastName: 'Cooper', 
            experience: 5, 
            age: 28, 
            address: '5 Donna Station Ellisshire DE15 9DU',
          },
          {
            id: 3, 
            firstName: 'Derrick', 
            lastName: 'Johnston', 
            experience: 2, 
            age: 23, 
            address: '3 Zach Greens Jonesfort FK3 8EP',
          },
        ],
        editedEmployee: null,
      }
    },
    methods: {
      addEmployee() {
        this.editing = true;
        this.formTitle = 'New Employee'
      },
      saveEmployee(employee) {
        this.employees.push({
          ...employee,
          id: this.employees.length + 1,
        });
        this.editing = false;
      },
      editEmployee(employee) {
        console.log(employee)
        this.editing = true;
        this.formTitle = 'Edit Employee';
        this.editedEmployee = { ...employee };
      },
      removeEmployee(employee) {
        const index = this.employees.findIndex(e => e.id === employee.id);
        if (index !== -1) {
          this.employees.splice(index, 1);
        }
      },
    },
  }
</script>

<style scoped>
  .employee-list {
    padding: 30px;
    margin: auto;
    border-radius: 3px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    width: 95%;
    max-width: 900px;
  }
  .header-wrapper {
    display: flex;
    justify-content: space-around;
    height: 60px;
    align-items: center;
    margin: 30px auto;
  }
</style>