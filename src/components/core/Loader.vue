<template>
  <div class="loading"></div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped lang="scss">
.loading {
  height: 0;
  width: 0;
  padding: 15px;
  border: 6px solid #ccc;
  border-right-color: $blue;
  border-radius: 22px;
  -webkit-animation: rotate 1s infinite linear;
  /* left, top and position just for the demo! */
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}

@-webkit-keyframes rotate {
  /* 100% keyframe for  clockwise.
     use 0% instead for anticlockwise */
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>