<template>
  <div id="app">
    <Sidebar /> 
      {{items}}
  </div>
</template>

<script>
import {items} from './data';
import Sidebar from './components/Sidebar/Sidebar';
export default {
  name: 'App',
  components: {
    Sidebar
  },
  data() {
    return {
      items
    }
  }
}
</script>

<style lang="scss">
  @import '@/scss/main.scss';
</style>
