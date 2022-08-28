import type { App } from 'vue'
import { useLocaleStore } from './store/locale'
import { LocaleMessage } from './i18n/locales'

export default {
    install: (app: App) => {
        // 挂载 globalProperties
        Object.assign(app.config.globalProperties, {
            __i18n: (key: keyof LocaleMessage) => {
                const localeStore = useLocaleStore()
                return localeStore.getMessage(key)
            },
        })
    },
}
