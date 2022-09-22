import { defineStore } from 'pinia'
import storage from '../utils/storage'
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
            loginInfo: storage.getItem(STORAGE_LOGIN_INFO_KEY) || {},
            userInfo: storage.getItem(STORAGE_USER_INFO_KEY) || {},
        }
    },
    actions: {
        // 清除用户登录本地缓存
        clearUserStorage() {
            this.loginInfo = {}
            this.userInfo = {}
            storage.removeItem(STORAGE_LOGIN_INFO_KEY)
            storage.removeItem(STORAGE_USER_INFO_KEY)
        },

        setUser(user: UserInfo) {
            this.userInfo = user
        },
    },
    persist: {
        strategies: [
            {
                key: STORAGE_LOGIN_INFO_KEY,
                paths: 'loginInfo',
            },
            {
                key: STORAGE_USER_INFO_KEY,
                paths: 'userInfo',
            },
        ],
    },
})
