import { RouteRecordRaw, Router } from 'vue-router'

export enum RouteModeEnum {
    Hash = 'hash',
    History = 'history',
}

export interface AppConfigEvents {
    // eslint-disable-next-line no-unused-vars
    onFrameLoad({ router }: { router: Router }): void
    login<T>({ userName, password }: { password: string; userName: string }): Promise<T>
}

export interface AppOption {
    base?: string
    mode?: RouteModeEnum
    routes?: RouteRecordRaw[]
    events?: AppConfigEvents
}

export default function defineConfig(opt: AppOption): AppOption {
    return opt
}
