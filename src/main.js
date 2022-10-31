import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCesium from 'vue-cesium'

createApp(App).use(store).use(router).use(VueCesium).mount('#app')



