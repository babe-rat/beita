import { createApp } from 'vue'
import { createBeita } from '@baberat/beita'
import App from './App.vue'
import routes from './router/index'

const beita = createBeita({
    routes,
})

createApp(App).use(beita).mount('#app')
