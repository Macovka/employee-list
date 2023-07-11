<template>
  <div class="employee-form">
    <div class="employee-form__modal-wrapper" @click="closeModal">
      <!-- Employee form modal -->
      <div class="modal">
        <h2 class="modal__title">{{ formTitle }}</h2>
        <div class="modal__inputs-wrapper">
          <!-- First name input -->
          <base-input 
            :class="{'base-input_error': inputError && !firstName}"
            v-model="firstName" 
            placeholder="First Name" 
          />
          <!-- Last name input -->
          <base-input 
            :class="{'base-input_error': inputError && !lastName}"
            v-model="lastName" 
            placeholder="Last Name" 
          />
          <!-- Experience input -->
          <base-input 
            :class="{'base-input_error': inputError && (experience < 0 || experience === '')}"
            v-model="experience" 
            placeholder="Experience" 
            type="number"
          />
          <!-- Age input -->
          <base-input 
            :class="{'base-input_error': inputError && (age < 0 || age === '')}"
            v-model="age" 
            placeholder="Age" 
            type="number"
          />
          <!-- Email input -->
          <base-input 
            :class="{'base-input_error': inputError && !newEmployee.email}"
            v-model="newEmployee.email" 
            placeholder="Email" 
          />
        </div>
        <!-- Buttons for save or cancel -->
        <div class="modal__buttons-wrapper">
          <base-button @click="saveEmployee">Save</base-button>
          <base-button class="base-button base-button_danger" @click="cancelEdit">Cancel</base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    data() {
      return {
        // create an empty newEmployee object
        newEmployee: {
          name: {
            first: '',
            last: '',
          },
          registered: {
            age: '',
          },
          dob: {
            age: '',
          },
          email: '',
        },
      };
    },
    computed: {  
      ...mapState('form', {
        formTitle: state => state.formTitle, // Form title from Vuex store
        inputError: state => state.inputError, // Input error flag from Vuex store
        editingEmployee: state => state.editingEmployee, // Flag indicating if an employee is being edited from Vuex store
      }),
      isInvalid() { //check if properties are empty or negative
        return (
          !this.newEmployee.name.first || 
          !this.newEmployee.name.last || 
          this.newEmployee.registered.age < 0 || 
          this.newEmployee.registered.age === '' || 
          this.newEmployee.dob.age < 0 || 
          this.newEmployee.dob.age === '' || 
          !this.newEmployee.email
        );
      },
      // Getters and setters for nested properties
      firstName: {
        get() {
          return this.newEmployee.name.first;
        },
        set(value) {
          this.updateNestedProperty('name', 'first', value);
        }
      },
      lastName: {
        get() {
          return this.newEmployee.name.last;
        },
        set(value) {
          this.updateNestedProperty('name', 'last', value);
        }
      },
      experience: {
        get() {
          return this.newEmployee.registered.age;
        },
        set(value) {
          this.updateNestedProperty('registered', 'age', value);
        }
      },
      age: {
        get() {
          return this.newEmployee.dob.age;
        },
        set(value) {
          this.updateNestedProperty('dob', 'age', value);
        }
      },
    },
    methods: {
      ...mapActions('list', ['saveEditedEmployee', 'saveAddedEmployee']),
      ...mapActions('form', ['cancelEdit', 'closeModal']),

      // Updates a nested property within the `newEmployee` object
      updateNestedProperty(firstProp, lastProp, value) { // the names of the first-level and last-level properties to update 
                                                         //and the new value to assign to the nested property
        // Create a new object by spreading the existing `newEmployee` object
        // and updating the specified nested property with the new value
        this.newEmployee = {
          ...this.newEmployee,
          [firstProp]: {
            ...this.newEmployee[firstProp],
            [lastProp]: value
          }
        };
      },
      saveEmployee() {
        if (this.isInvalid) {
          this.$store.commit('form/setinputErrorValue', true); // Set input error flag in Vuex store
          return;
        }
        if (this.editingEmployee) {
          this.saveEditedEmployee(this.newEmployee) // Save edited employee details
        } else {
          this.saveAddedEmployee(this.newEmployee) // Save newly added employee details
        }
      },
    },
    created() {
      if (this.editingEmployee) {
        this.newEmployee = { ...this.editingEmployee }; // Set newEmployee data with the editingEmployee details when editing an employee
      }
    },
  };
</script>

<style lang="scss" scoped>
  .employee-form {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;

    &__modal-wrapper {
      display: table-cell;
      vertical-align: middle;
    }
  }

  .modal {
    width: 300px;
    margin: 0px auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;

    &__title {
      margin: 0;
    }

    &__inputs-wrapper {
      margin: 20px auto;

      input {
        margin: 8px auto;
      }
    }

    &__buttons-wrapper {
      display: flex;
      justify-content: space-around;
    }
  }
</style>