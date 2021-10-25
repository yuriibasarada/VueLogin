<template>
<div class="home-page">
  <div class="header">
    <div class="container">
      <h1>Vue Login</h1>
    </div>
  </div>
  <div class="container users-container">
    <div class="users">
      <UserComponent
        v-for="user in users"
        :key="user.id"
        :user="user"
      />
    </div>
  </div>

</div>
</template>

<script>


import UserComponent from "../components/core/UserComponent";
export default {
  name: 'Home',
  components: {UserComponent},
  data: () => ({
    users: []
  }),
  async mounted() {
   this.users = await this.$store.dispatch('getUsers')
    console.log(this.users)
  }
}
</script>
<style scoped lang="scss">
.home-page {
 .header {
   background-color: $blue;
   padding-top: 20px;
   padding-bottom: 20px;
   .container {
     h1 {
       color: white;
       text-align: center;
     }
   }
 }
  .users-container {
    .users {
      display: flex;
      margin-top: 20px;
      justify-content: space-around;
      flex-wrap: wrap;
      .user-component {
        width: calc(20% - 20px);
        margin-bottom: 20px;
      }
    }
  }
}
</style>
