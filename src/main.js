import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

import firebase from "firebase/compat";
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
firebase.initializeApp({
  apiKey: "AIzaSyAM-P4BZyZpIJC3P65XsnKkdnFLQvA9-g8",
  authDomain: "vuelogin-35851.firebaseapp.com",
  projectId: "vuelogin-35851",
  storageBucket: "vuelogin-35851.appspot.com",
  messagingSenderId: "596022536824",
  appId: "1:596022536824:web:67d7fd96c2ddd7fe2e1b8d",
  measurementId: "G-MT8X1HWBZL"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
