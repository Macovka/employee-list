<template>
  <input 
    :type="type" 
    :value="modelValue" 
    :placeholder="placeholder" 
    :class="classes" 
    @input="updateInput"
    @focus.prevent="onFocus"
  />
</template>

<script>
 export default {
    name: 'base-input',
    props: {
      type: {
        type: String,
        default: 'text',
      },
      modelValue: {
        type: [String, Number],
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      classes: {
        type: String,
        default: 'base-input',
      },
    },
    methods: {
      updateInput(event) {
        this.$emit("update:modelValue", event.target.value);
      },
      onFocus() {
        this.$store.commit('form/setinputErrorValue', false);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .base-input {
    display: block;
    width: 100%;
    margin: auto;
    padding: 8px;
    box-sizing: border-box;
    font-size: 1rem;
    color: #495057;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }

  .base-input:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0  0 0.2rem rgba(0, 123, 255, 0.25);
  }

  .base-input_error {
    border-color: #CC0000;
    box-shadow: 0 0 0.2rem rgba(255, 0, 0, 0.25);
  }
</style>