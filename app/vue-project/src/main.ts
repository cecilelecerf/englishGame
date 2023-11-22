import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faBookBookmark, faMobile, faPuzzlePiece, faUserSecret } from '@fortawesome/free-solid-svg-icons'

import router from "./router/index.js";
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)
library.add(faBars)
library.add(faMobile)
library.add(faBookBookmark)
library.add(faPuzzlePiece)
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
