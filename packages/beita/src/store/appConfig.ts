import { defineStore } from 'pinia'
import type { AppOption } from '../defineConfig'

export interface AppConfigState {
    app: AppOption
}

export const useAppConfigStore = defineStore('appConfig', {
    state: (): AppConfigState => {
        return {
            app: {},
        }
    },

    actions: {
        set(opts: AppOption) {
            this.app = opts
        },
    },
})
