<template>
  <div id="employees-list">
    <div class="header">
      <h1>{{ header }}</h1>
      <button v-if="adding" @click="toggleAdding(false)" class="btn btn-danger">Cancel</button>
      <button v-else @click="toggleAdding(true)" class="btn btn-primary">Add Employee</button>
    </div>
    
    <div v-if="adding" class="add-employee-form">
      <input :class="{'err': hasErr && !newEmployee.name}" type="text" v-model="newEmployee.name" placeholder = "Name" @focus.prevent="removeErr">
      <input :class="{'err': hasErr && !newEmployee.surname}" type="text" v-model="newEmployee.surname" placeholder = "Surname" @focus.prevent="removeErr">
      <input :class="{'err': hasErr && (newEmployee.experience < 0 || newEmployee.experience == null)}" type="number" v-model="newEmployee.experience" placeholder = "Experience" @focus.prevent="removeErr">
      <input :class="{'err': hasErr && (newEmployee.age < 0 || newEmployee.age == null)}" type="number" v-model="newEmployee.age" placeholder = "Age" @focus.prevent="removeErr">
      <input :class="{'err': hasErr && !newEmployee.adress}" type="text" v-model="newEmployee.adress" placeholder = "Adress" @focus.prevent="removeErr">
      <button @click="saveEmployee" class="btn btn-primary">Save Employee</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Experience (years)</th>
          <th>Age (years)</th>
          <th>Adress</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(employee, index) in employees" :key="employee.id">
          <td>
            {{ employees.indexOf(employee) + 1 }}
          </td>
          <td>
            <input :class="{'err': hasErr && !employee.name}" v-if="employee.inputState" type="text" v-model="employee.name" @focus.prevent="removeErr">
            <div v-else>{{employee.name}}</div>
          </td>
          <td>
            <input :class="{'err': hasErr && !employee.surname}" v-if="employee.inputState" type="text" v-model="employee.surname" @focus.prevent="removeErr">
            <div v-else>{{employee.surname}}</div>
          </td>
          <td>
            <input :class="{'err': hasErr && (employee.experience < 0 || employee.experience === '')}" v-if="employee.inputState" type="number" v-model="employee.experience" @focus.prevent="removeErr">
            <div v-else>{{employee.experience}}</div>
          </td>
          <td>
            <input :class="{'err': hasErr && (employee.age < 0 || employee.age === '')}" v-if="employee.inputState" type="number" v-model="employee.age" @focus.prevent="removeErr">
            <div v-else>{{employee.age}}</div>
          </td>
          <td>
            <input :class="{'err': hasErr && !employee.adress}" v-if="employee.inputState" type="text" v-model="employee.adress" @focus.prevent="removeErr">
            <div v-else>{{employee.adress}}</div>
          </td>
          <td>
            <button v-if="!employee.editing" @click="doEdit(employee)" class="btn btn-primary">Edit</button>  
            <button v-if="!employee.editing" @click="removeEmployee(index)" class="btn btn-danger">Delete</button>
            <button v-if="employee.editing" @click="saveEdit(employee)" class="btn btn-primary">Save</button>
            <button v-if="employee.editing" @click="cancelEdit(employee)" class="btn btn-danger">Cancel</button>         
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          header: 'Employees List',
          adding: false,
          newEmployee: {},
          employees: [
            {id: 1, name: 'John', surname: 'Steele', experience: 4, age: 26, adress: '905 Hannah Corners Adamsstad RM14 3PA', editing: false, inputState: false},
            {id: 2, name: 'Ann', surname: 'Cooper', experience: 5, age: 28, adress: '5 Donna Station Ellisshire DE15 9DU', editing: false, inputState: false},
            {id: 3, name: 'Derrick', surname: 'Johnston', experience: 2, age: 23, adress: '3 Zach Greens Jonesfort FK3 8EP', editing: false, inputState: false},
          ],
          employeeBackup: null, // property to hold the original employee data
          hasErr: false,
        }
      },
      computed: {
      },
      methods: {
        saveEmployee(){
          if (!this.newEmployee.name || !this.newEmployee.surname || this.newEmployee.experience < 0 || this.newEmployee.age < 0 || !this.newEmployee.adress) {
            this.hasErr = true;
            return
          }
          this.employees.push({
            id: this.employees[this.employees.length - 1].id + 1,
            name: this.newEmployee.name,
            surname: this.newEmployee.surname,
            experience: this.newEmployee.experience,
            age: this.newEmployee.age,
            adress: this.newEmployee.adress,
          });
          this.newEmployee = {};
        },
        removeErr() {
          if(this.hasErr) this.hasErr = false;
        },
        removeEmployee(index) {
          this.toggleAdding();
          this.employees.splice(index, 1);
        },
        toggleAdding(adding){
          this.adding = adding;
          this.removeErr();
          this.newEmployee = {};
        },
        saveEdit(employee) { 
          if (!employee.name || !employee.surname || employee.experience < 0 || employee.experience === '' || employee.age < 0 || employee.age === '' || !employee.adress) {
            this.hasErr = true;
            return
          }
          employee.editing = !employee.editing;
          employee.inputState = !employee.inputState;
        },
        doEdit(employee) {
          if (!employee.editing) { // if we start editing
            this.employeeBackup = { ...employee }; // create a copy
          } else { // if we finish editing
            this.employeeBackup = null; // clear the copy
          }
          this.toggleAdding();
          this.removeErr();
          employee.editing = !employee.editing;
          employee.inputState = !employee.inputState;
        },
        cancelEdit(employee) {
          this.removeErr();
          const index = this.employees.indexOf(employee);
          if (index !== -1 && this.employeeBackup) {
            this.employees.splice(index, 1, this.employeeBackup);
            this.employeeBackup = null;
          }
          employee.editing = !employee.editing;
          employee.inputState = !employee.inputState;
        },
      }
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