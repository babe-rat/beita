import type { LocaleMessage } from './src/i18n/locales'

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        // eslint-disable-next-line no-unused-vars
        __i18n: (key: keyof LocaleMessage) => string
    }
}
