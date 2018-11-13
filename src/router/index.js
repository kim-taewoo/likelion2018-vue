import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Review from '../components/Review.vue'
import ReviewDetail from '../components/ReviewDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/review',
      name: 'Review',
      component: Review
    },
    {
      path: '/review/:id',
      name: 'ReviewDetail',
      props: true,
      component: ReviewDetail
    }
  ]
})