<template>
  <router-link to="/" class="user-component">
    <UserSvg/>
    <div class="top-info">
      <span class="gender" v-html="user.gender" />
    </div>
    <div class="bottom-block">
      <span class="name">{{user.first_name}} {{user.last_name}}</span>
      <span class="email" v-html="user.email" />
    </div>
  </router-link>
</template>

<script>
import UserSvg from '/public/img/user.svg'

export default {
  name: "UserComponent",
  components: {UserSvg},
  props: {
    user: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped lang="scss">
.user-component {
  color: black;
  border: 1px solid $blue;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  &:hover {
    background-color: $blue;
    color: white;
    svg {
      fill: white;
    }
  }
  .top-info {
    display: flex;
    top: 10px;
    left: 10px;
    width: 100%;
    position: absolute;
    span {
      display: block;
      font-size: 12px;
      background-color: white;
      color: black;
      border-radius: 4px;
      padding: 4px;
    }
  }
  .bottom-block {
    span {
      display: block;
      &.name {
        font-weight: bold;
        margin-bottom: 4px;
        font-size: 16px;
      }
      &.email {
        font-size: 12px;
      }
    }
  }
  svg {
    max-width: 100%;
    min-width: 100%;
    max-height: 100px;
    fill: $blue;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;
  }
}
</style>