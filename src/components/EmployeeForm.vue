<template>
  <div class="employee-form">
    <div class="employee-form__modal-wrapper" @click="closeModal">
      <div class="modal">
        <h2 class="modal__title">{{ formTitle }}</h2>
        <div class="modal__inputs-wrapper">
          <base-input 
            :class="{'base-input_error': inputError && !firstName}"
            v-model="firstName" 
            placeholder="First Name" 
          />
          <base-input 
            :class="{'base-input_error': inputError && !lastName}"
            v-model="lastName" 
            placeholder="Last Name" 
          />
          <base-input 
            :class="{'base-input_error': inputError && (experience < 0 || experience === '')}"
            v-model="experience" 
            placeholder="Experience" 
            type="number"
          />
          <base-input 
            :class="{'base-input_error': inputError && (age < 0 || age === '')}"
            v-model="age" 
            placeholder="Age" 
            type="number"
          />
          <base-input 
            :class="{'base-input_error': inputError && !newEmployee.email}"
            v-model="newEmployee.email" 
            placeholder="Email" 
          />
        </div>
        <div class="modal__buttons-wrapper">
          <base-button @click="saveEmployee">Save</base-button>
          <base-button class="btn btn-danger" @click="cancelEdit">Cancel</base-button>
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
        formTitle: state => state.formTitle,
        inputError: state => state.inputError,
        editingEmployee: state => state.editingEmployee,
      }),
      isInvalid() {
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
      updateNestedProperty(firstProp, lastProp, value) {
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
          this.$store.commit('form/setinputErrorValue', true);
          return;
        }
        if (this.editingEmployee) {
          this.saveEditedEmployee(this.newEmployee)
        } else {
          this.saveAddedEmployee(this.newEmployee)
        }
      },
    },
    created() {
      if (this.editingEmployee) {
        this.newEmployee = { ...this.editingEmployee };
      }
    },
  };
</script>

<style scoped>
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
  }

  .employee-form__modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal {
    width: 300px;
    margin: 0px auto;
    padding: 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal__title {
    margin: 0;
  }

  .modal__inputs-wrapper {
    margin: 20px auto;
  }

  .modal__inputs-wrapper input {
    margin: 8px auto;
  }

  .modal__buttons-wrapper {
    display: flex;
    justify-content: space-around;
  }
</style>