import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'tailwindcss/tailwind.css'
import { MotionPlugin } from '@vueuse/motion'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(far)
import { dom } from '@fortawesome/fontawesome-svg-core'
import './assets/tailwind.css'
dom.watch()
library.add(faPhone)
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(MotionPlugin)
  .mount('#app')

// add necessary dependencies...
