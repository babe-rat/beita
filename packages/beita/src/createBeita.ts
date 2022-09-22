import type { App } from 'vue'
import { createPinia } from 'pinia'
import merge from 'lodash.merge'
import PiniaPluginPersist from './.internal/pinia-plugin-persist'
import defaultConfig from './default.config'
import { useAppConfigStore } from './store/appConfig'
import router from './router'
import globalProperties from './globalProperties'
import type { AppOption } from './types'

const pinia = createPinia()
// 持久化存储
pinia.use(PiniaPluginPersist)

export default function createBeita(opts: AppOption = {}) {
    return {
        install: (app: App) => {
            // 状态管理
            app.use(pinia)

            const mergedOption = merge(defaultConfig, opts)
            // 存储 APP 配置
            const appConfig = useAppConfigStore()
            appConfig.set(mergedOption)

            // 挂载 globalProperties
            app.use(globalProperties)

            // 注册路由
            const { mode, base, routes } = mergedOption
            app.use(router, { mode, base, routes })
        },
    }
}
