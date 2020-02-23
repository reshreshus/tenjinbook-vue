<template>
  <div id="app">
    <Sidebar /> 
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar';
export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
  @import '@/scss/main.scss';
</style>
