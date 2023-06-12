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
      disabled: {
        type: Boolean,
        default: false,
      },
      variant: {
        type: String,
        default: 'primary',
      },
      size: {
        type: String,
        default: 'medium',
      },
    },
    computed: {
      classes() {
        return [
          'btn',
          `btn-${this.variant}`,
          `btn-${this.size}`,
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

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}

.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-success:hover {
  color: #fff;
  background-color: #218838;
  border-color: #1e7e34;
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

.btn-warning {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

.btn-warning:hover {
  color: #212529;
  background-color: #e0a800;
  border-color: #d39e00;
}

.btn-info {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

.btn-info:hover {
  color: #fff;
  background-color: #138496;
  border-color: #117a8b;
}

.btn-light {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-light:hover {
  color: #212529;
  background-color: #e2e6ea;
  border-color: #dae0e5;
}

.btn-dark {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

.btn-dark:hover {
  color: #fff;
  background: #23272b;
  border-color: #1d2124;
}

.btn-link {
  color: #007bff;
  background-color: transparent;
  border-color: transparent;
}

.btn-link:hover {
  color: #0056b3;
  background-color: transparent;
  border-color: transparent;
}

.btn-sm {
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
}

.btn-lg {
  font-size: 1.25rem;
  padding: 0.75rem 1.5rem;
}
</style>