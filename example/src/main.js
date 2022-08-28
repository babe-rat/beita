import { createApp } from 'vue'
import App from './App.vue'
import beita, { defineConfig } from '@baberat/beita'

createApp(App)
    .use(
        beita,
        defineConfig({
            events: {
                login({ userName, password }) {
                    return new Promise((resolve, reject) => {
                        if (userName === 'admin' && password === 'admin') {
                            resolve('1')
                        } else {
                            reject(new Error('账户或密码错误'))
                        }
                    })
                },
            },
        }),
    )
    .mount('#app')
