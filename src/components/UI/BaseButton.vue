<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'base-button',
    props: {
      variant: {
        type: String,
        default: 'primary',
      },
    },
    computed: {
      classes() {
        return [
          'base-button',                 // Base class for the button
          `base-button_${this.variant}`, // Variant-specific class based on the 'variant' prop
        ];
      },
    },
  };
</script>

<style lang="scss" scoped>
  $primary-button: #007bff; // Color variable for primary button
  $danger-button: #dc3545; // Color variable for danger button


  .base-button {
    color: #fff;
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
  
    &_primary {
      background-color: $primary-button;
      border-color: $primary-button;

        &:hover {
        background-color: #0069d9;
        border-color: #0062cc;
      }
    }

    &_danger {
      background-color: $danger-button;
      border-color: $danger-button;

      &:hover {
        background-color: #c82333;
        border-color: #bd2130;
      }
    } 
  } 
</style>