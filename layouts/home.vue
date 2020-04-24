<template>
  <div class="home-layout">
    <Header class="header" />
    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from './home/header'

export default {
  name: 'HomeLayout',

  components: {
    Header
  }
}
</script>

<style scoped>
.home-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
.home-layout .content {
  width: 1180px;
  /* height: calc(100vh - 60px); */
  margin: 0px auto;
}
</style>
