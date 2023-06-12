<template>
  <div :class="classes">
    <input :type="type" :value="value" :placeholder="placeholder" @input="updateValue" />
  </div>
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
    computed: {
      classes() {
        return [
          'form-group',
        ];
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
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

input {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

input:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0  0 0.2rem rgba(0, 123, 255, 0.25);
}

input:disabled {
  background-color: #e9ecef;
  opacity: 1;
}
</style>