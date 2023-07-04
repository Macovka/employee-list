<template>
  <div class="modal-mask">
    <div class="modal-wrapper" @click="closeModal">
      <div class="modal-container">
        <h2>{{ formTitle }}</h2>
        <div class="modal-container__inputs-wrapper">
          <base-input 
            :class="{'err': hasErr && !newEmployee.firstName}"
            v-model="newEmployee.firstName" 
            placeholder="First Name" 
            type="text"
          />
          <base-input 
            :class="{'err': hasErr && !newEmployee.lastName}"
            v-model="newEmployee.lastName" 
            placeholder="Last Name" 
            type="text"
          />
          <base-input 
            :class="{'err': hasErr && (newEmployee.experience < 0 || newEmployee.experience === undefined)}"
            v-model="newEmployee.experience" 
            placeholder="Experience" 
            type="number"
          />
          <base-input 
            :class="{'err': hasErr && (newEmployee.age < 0 || newEmployee.age === undefined)}"
            v-model="newEmployee.age" 
            placeholder="Age" 
            type="number"
          />
          <base-input 
            :class="{'err': hasErr && !newEmployee.address}"
            v-model="newEmployee.address" 
            placeholder="Address" 
            type="text"
          />
        </div>
        <div class="modal-container__buttons-wrapper">
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
        newEmployee: {},
      };
    },
    computed: {  
      ...mapState('form', {
        formTitle: state => state.formTitle,
        hasErr: state => state.hasErr,
        editingEmployee: state => state.editingEmployee,
      }),
      isInvalid() {
        return (
          !this.newEmployee.firstName || 
          !this.newEmployee.lastName || 
          this.newEmployee.experience < 0 || 
          this.newEmployee.experience === undefined || 
          this.newEmployee.age < 0 || 
          this.newEmployee.age === undefined || 
          !this.newEmployee.address
        );
      },
    },
    methods: {
      ...mapActions('list', ['saveEditedEmployee', 'saveAddedEmployee']),
      ...mapActions('form', ['cancelEdit', 'closeModal']),
      saveEmployee() {
        if (this.isInvalid) {
          this.$store.commit('form/setHasErrValue', true);
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

  .modal-container__inputs-wrapper,
  .modal-container__buttons-wrapper {
    margin: 20px auto;
  }

  .modal-container__inputs-wrapper input {
    margin: 8px auto;
  }

  .modal-container__buttons-wrapper {
    display: flex;
    justify-content: space-around;
  }
</style>