import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import CesiumUtils from '@/services/Cesium'

const app = createApp(App)
app.config.globalProperties.$CesiumUtils = CesiumUtils
app.use(store).use(router).mount('#app')



