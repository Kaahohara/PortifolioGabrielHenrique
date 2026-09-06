import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFeather, faMagnifyingGlass, faVideo, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faFeather, faMagnifyingGlass, faVideo, faArrowRight)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router) 
app.mount('#app')