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
            @focus.prevent="onFocus"
          />
          <base-input 
            :class="{'err': hasErr && !newEmployee.lastName}"
            v-model="newEmployee.lastName" 
            placeholder="Last Name" 
            type="text"
            @focus.prevent="onFocus"
          />
          <base-input 
            :class="{'err': hasErr && (newEmployee.experience < 0 || newEmployee.experience === undefined)}"
            v-model="newEmployee.experience" 
            placeholder="Experience" 
            type="number"
            @focus.prevent="onFocus"
          />
          <base-input 
            :class="{'err': hasErr && (newEmployee.age < 0 || newEmployee.age === undefined)}"
            v-model="newEmployee.age" 
            placeholder="Age" 
            type="number"
            @focus.prevent="onFocus"
          />
          <base-input 
            :class="{'err': hasErr && !newEmployee.address}"
            v-model="newEmployee.address" 
            placeholder="Address" 
            type="text"
            @focus.prevent="onFocus"
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
  export default {
    data() {
      return {
        newEmployee: {},
        hasErr: false
      };
    },
    computed: {
      formTitle() {
        return this.$store.state.formTitle
      },
      editingEmployee() {
        return this.$store.state.editingEmployee
      },
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
      saveEmployee() {
        if (this.isInvalid) {
          this.hasErr = true;
          return;
        }
        if (this.editingEmployee) {
          this.$store.dispatch('saveEditedEmployee', this.newEmployee)
        } else {
          this.$store.dispatch('saveAddedEmployee', this.newEmployee)
        }
      },
      cancelEdit() {
        this.hasErr = false;
        this.$store.state.editing = false;
      },
      closeModal(event) {
        if (event.target === event.currentTarget) {
          this.$store.state.editing = false;
        }
      },
      onFocus() {
        if(this.hasErr) this.hasErr = false
      }
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