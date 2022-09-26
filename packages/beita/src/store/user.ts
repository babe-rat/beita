import { defineStore } from 'pinia'
import { STORAGE_LOGIN_INFO_KEY, STORAGE_USER_INFO_KEY } from '../utils/constant'

export interface UserLoginInfo {
    accessToken?: string
    refreshToken?: string
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
            this.loginInfo = {}
            this.userInfo = {}
        },

        setUser(user: UserInfo) {
            this.clearUserStorage()
            this.userInfo = user
        },

        logout() {
            this.clearUserStorage()
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
