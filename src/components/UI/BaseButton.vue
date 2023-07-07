<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      variant: {
        type: String,
        default: 'primary',
      },
    },
    computed: {
      classes() {
        return [
          'base-button',
          `base-button_${this.variant}`,
        ];
      },
    },
  };
</script>

<style scoped>
  .base-button {
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

  .base-button_primary {
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }

  .base-button_primary:hover {
    color: #fff;
    background-color: #0069d9;
    border-color: #0062cc;
  }

  .base-button_danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
  }

  .base-button_danger:hover {
    color: #fff;
    background-color: #c82333;
    border-color: #bd2130;
  }
</style>