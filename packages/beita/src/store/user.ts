import { defineStore } from 'pinia'
import { STORAGE_LOGIN_INFO_KEY, STORAGE_USER_INFO_KEY } from '../utils/constant'
import userApi, { UserLoginRequestParams } from '../api/user'

export type UserLoginActionParams = UserLoginRequestParams

export interface UserLoginInfo {
    accessToken?: string
}

export interface UserInfo {
    userId?: string
    userName?: string
    email?: string
    avatar?: string
}

export const useUserStore = defineStore('user', {
    state: (): { loginInfo: UserLoginInfo; userInfo: UserInfo } => {
        return {
            loginInfo: {},
            userInfo: {},
        }
    },
    actions: {
        // 清除用户登录本地缓存
        clearUserStorage() {
            this.userInfo = {}
            this.loginInfo = {}
        },

        // 登录
        async login({ userName, password }: UserLoginActionParams) {
            this.clearUserStorage()
            const res = await userApi.login({ userName, password })
            const { accessToken } = res
            this.loginInfo = {
                accessToken,
            }
            this.userInfo = await userApi.getCurrentUser()
        },

        async logout() {
            userApi.logout().then(() => {
                this.clearUserStorage()
            })
        },
    },
    persist: [
        {
            key: STORAGE_USER_INFO_KEY,
            paths: ['userInfo'],
        },
        {
            key: STORAGE_LOGIN_INFO_KEY,
            paths: ['loginInfo'],
        },
    ],
})
