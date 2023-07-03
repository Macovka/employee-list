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
        default: '',
      },
    },
    computed: {
      hasErr() {
        return this.$store.state.hasErr
      },
    },
    methods: {
      updateInput(event) {
        this.$emit("update:modelValue", event.target.value);
      },
      onFocus() {
        if(this.hasErr) this.$store.state.hasErr = false
      }
    }
  };
</script>

<style scoped>
  input {
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

  input:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0  0 0.2rem rgba(0, 123, 255, 0.25);
  }

  .err {
    border-color: red;
  }
</style>