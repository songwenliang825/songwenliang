import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path: "/home",
      name: "home",
     
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/home.vue")
    },
    {
      path: "/st",
      name: "list",
     
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/st.vue")
    },
    {
      path: "/car",
      name: "car",
     
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/car.vue")
    },
    {
      path: "/user",
      name: "user",
     
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/user.vue")
    }
  ]
});
