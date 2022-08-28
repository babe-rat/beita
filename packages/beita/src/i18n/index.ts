import type { App } from 'vue'
import { createI18n, useI18n } from 'vue-i18n'
import storage from '../utils/storage'
import { STORAGE_LOCALE_KEY } from '../utils/constant'
import { useLocaleStore } from '../store/locale'
import eventBus from '../utils/eventBus'

export interface LocaleOption {
    locale: string
    messages: Record<string, any>
}

export { useI18n }

export default {
    install: (app: App, opts: LocaleOption) => {
        const { locale, messages } = opts
        if (!storage.getItem(STORAGE_LOCALE_KEY)) {
            storage.setItem(STORAGE_LOCALE_KEY, locale)
        }
        const i18n = createI18n({
            legacy: false,
            locale: storage.getItem(STORAGE_LOCALE_KEY),
            messages,
        })
        app.use(i18n)
        const localeStore = useLocaleStore()
        localeStore.messages = messages
        eventBus.$on('setLocale', (locale: any) => {
            i18n.global.locale.value = locale
        })
    },
}
