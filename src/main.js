// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper' 
import 'swiper/css/swiper.css'
//import "swiper/swiper-bundle.css"; << 6이상일 경우는 css를 이걸로 변경해야함

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App,
    Swiper,
    SwiperSlide
   },
  template: '<App/>'
})
