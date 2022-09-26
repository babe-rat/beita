import { RouteRecordRaw, Router } from 'vue-router'

export enum RouteMode {
    Hash = 'hash',
    History = 'history',
}

export interface AppConfigEvents {
    // eslint-disable-next-line no-unused-vars
    onFrameLoad({ router }: { router: Router }): void
}

export interface AppOption {
    title?: string
    logo?: string
    base?: string
    mode?: RouteMode
    routes?: RouteRecordRaw[]
    events?: AppConfigEvents
}
