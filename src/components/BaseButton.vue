<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'button',
      },
      variant: {
        type: String,
        default: 'primary',
      },
    },
    computed: {
      classes() {
        return [
          'btn',
          `btn-${this.variant}`,
        ];
      },
    },
  };
</script>

<style scoped>
  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  }

  .btn-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }

  .btn-primary:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }

  .btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #c82333;
    border-color: #bd2130;
  }
</style>