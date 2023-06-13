<template>
  <div class="modal-mask">
    <div class="modal-wrapper" @click="closeModal">
      <div class="modal-container">
        <h2>New Employee</h2>
        <base-input 
          :value="newEmployee.firstName" 
          placeholder="First Name" type="text"
          @input="updateValue('firstName', $event.target.value)" 
        />
        <base-input 
          :value="newEmployee.lastName" 
          placeholder="Last Name" 
          type="text"
          @input="updateValue('lastName', $event.target.value)" 
          />
        <base-input 
          :value="newEmployee.experience" 
          placeholder="Experience" type="number"
          @input="updateValue('experience', $event.target.value)" 
        />
        <base-input 
          :value="newEmployee.age" 
          placeholder="Age" type="number"
          @input="updateValue('age', $event.target.value)" 
        />
        <base-input 
          :value="newEmployee.address" 
          placeholder="Address" type="text"
          @input="updateValue('address', $event.target.value)" 
        />
        <base-button @click="addEmployee">Add</base-button>
        <base-button @click="cancelEdit">Cancel</base-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newEmployee: {
          firstName: '',
          lastName: '',
          experience: '',
          age: '',
          address: '',
        },
      };
    },
    methods: {
      addEmployee() {
        if (
          !this.newEmployee.firstName || 
          !this.newEmployee.lastName || 
          this.newEmployee.experience < 0 || 
          this.newEmployee.experience === '' || 
          this.newEmployee.age < 0 || 
          this.newEmployee.age === '' || 
          !this.newEmployee.address
        ) {
          return;
        }
        this.$emit('add', this.newEmployee);
      },
      cancelEdit() {
        this.$emit('cancel');
      },
      updateValue(field, value) {
        this.newEmployee[field] = value;
      },
      closeModal(event) {
        if (event.target === event.currentTarget) {
          this.$emit('cancel');
        }
      },
    },
  };
</script>

<style scoped>
  .modal-mask {
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

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }
</style>