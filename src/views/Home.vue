<template>
  <div class="home-page" :style="style">
    <div class="container">

    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  computed: {
    style() {
      return `background-image: url("${require('@/assets/img/BG.png')}")`
    }
  }
}
</script>
<style scoped lang="scss">
.home-page {
  height: 100vh;
  background-color: #244BC5;
  .container {
    display: flex;
  }
}
</style>
