<template>
  <div class="spinner"></div>
</template>

<script>
  export default {
    name: 'base-spinner'
  }
</script>

<style lang="scss" scoped>
  $border: 4px solid #ccc;
  .spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-top: $border;
    border-right: $border;
    border-bottom: $border;
    border-left: 4px solid #777;
    animation: spin 1s linear infinite;
    margin:0 auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 
</style>