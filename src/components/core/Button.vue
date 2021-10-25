<template>
  <router-link :to="link" v-html="title" class="custom-button" />
</template>

<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      default: () => ''
    },
    link: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style scoped lang="scss">
.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  color: $blue;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);
  }
}
</style>