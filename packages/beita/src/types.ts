import { RouteRecordRaw, Router } from 'vue-router'

export enum RouteMode {
    Hash = 'hash',
    History = 'history',
}

export interface AppConfigEvents {
    // eslint-disable-next-line no-unused-vars
    onFrameLoad({ router }: { router: Router }): void
    login<T>(
        { userName, password }: { password: string; userName: string },
        router: Router,
    ): Promise<T>
    logout<T>(): Promise<T>
}

export interface AppOption {
    title?: string
    logo?: string
    base?: string
    mode?: RouteMode
    routes?: RouteRecordRaw[]
    events?: AppConfigEvents
}
