import { defineStore } from 'pinia'
import { I18n } from 'vue-i18n'
import { eventBus } from '@baberat/utils/t'
import { BEITA_LOCALE_MESSAGE, LocaleMessage } from '../i18n/locales'
import storage from '../utils/storage'
import { STORAGE_LOCALE_KEY } from '../utils/constant'

export interface LocaleState {
    i18n?: I18n
    messages?: Record<string, any>
    locale?: string
}

export const useLocaleStore = defineStore('locale', {
    state: (): LocaleState => {
        return {
            i18n: undefined,
            messages: undefined,
            locale: storage.getItem(STORAGE_LOCALE_KEY),
        }
    },
    actions: {
        setLocale(locale: string) {
            eventBus.$emit('setLocale', locale)
            this.locale = locale
        },

        getMessage(key: keyof LocaleMessage) {
            const { messages, locale } = this
            if (messages && locale) {
                return (messages[locale] || {})[key] || BEITA_LOCALE_MESSAGE[key]
            }
            return BEITA_LOCALE_MESSAGE[key]
        },
    },
    persist: {
        strategies: [
            {
                key: STORAGE_LOCALE_KEY,
                paths: 'locale',
            },
        ],
    },
})
