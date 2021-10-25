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
    <Loader v-if="loading"/>
    <div class="load-more" @click="loadMore">
      Load more
    </div>
  </div>

</div>
</template>

<script>


import UserComponent from "../components/core/UserComponent";
import Loader from "../components/core/Loader";
export default {
  name: 'Home',
  components: {Loader, UserComponent},
  data: () => ({
    users: [],
    perPage: 7,
    loading: false,
  }),
  async mounted() {
    this.loading = true
   this.users = await this.$store.dispatch('getUsers', {startAt: this.users.length.toString(), endAt: this.perPage.toString()})
    this.loading = false
  },
  methods: {
    async loadMore() {

    }
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
        width: calc(25% - 20px);
        margin-bottom: 20px;
        @media #{$x-md} {
          width: calc(33.333% - 20px);
        }
        @media #{$sm} {
          width: calc(50% - 20px);
        }
        @media #{$x-sm} {
          width: 100%;
        }
      }
    }
    .load-more {
      background-color: $blue;
      color: white;
      font-weight: bold;
      display: flex;
      width: max-content;
      padding: 10px 24px;
      border-radius: 4px;
      margin-right: auto;
      margin-left: auto;
      margin-top: 30px;
      transition: all 0.3s ease-in-out;
      border: 1px solid $blue;
      &:hover {
        cursor: pointer;
        color: $blue;
        background-color: white;
      }
    }
  }
}
</style>
