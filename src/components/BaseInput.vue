<template>
  <input :type="type" :value="value" :placeholder="placeholder" @input="updateValue" />
</template>

<script>
 export default {
    props: {
      type: {
        type: String,
        default: 'text',
      },
      value: {
        type: [String, Number],
        default: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
    },
    methods: {
      updateValue(event) {
        this.$emit('input', event);
      },
    },
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
</style>