import { createApp } from 'vue'
import { createBeita } from '@baberat/beita'
import App from './App.vue'
import routes from './router/index'

const beita = createBeita({
    routes,
    events: {
        login({ userName, password }, router) {
            return new Promise((resolve, reject) => {
                if (userName === 'admin' && password === 'admin') {
                    router.push('/dashboard')
                    resolve({
                        userId: '123456',
                        userName: 'Admin',
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
                    })
                } else {
                    reject(new Error('账户或密码错误'))
                }
            })
        },
        logout() {
            return new Promise(resolve => {
                resolve()
            })
        },
    },
})

createApp(App).use(beita).mount('#app')
