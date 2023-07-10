<template>
  <EmployeesList />
</template>

<script>
import EmployeesList from './components/EmployeesList.vue'

export default {
  name: 'App',
  components: {
    EmployeesList
  }
}
</script>

<style lang="scss">
  $font-stack: Avenir, Helvetica, Arial, sans-serif;
  $primary-color: #2c3e50;

  #app {
    font-family: $font-stack;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $primary-color;
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }
</style>
