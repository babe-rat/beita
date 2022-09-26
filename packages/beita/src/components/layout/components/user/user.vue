<template>
    <el-dropdown>
        <view class="beita-user">
            <el-avatar :size="24" class="beita-avatar" :src="avatar" />
            <span>{{ userName }}</span>
        </view>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="handleLogout">{{ logoutText }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { useUserStore, useAppConfigStore, useLocaleStore } from '../../../../store'
import { APP_LOGOUT } from '../../../../i18n/locales'

const { getMessage } = useLocaleStore()
const logoutText = getMessage(APP_LOGOUT)

const { userInfo, logout } = useUserStore()

const { userName, avatar } = userInfo
const globalProperties = getCurrentInstance()?.appContext.config.globalProperties

// 退出登录
function handleLogout() {
    const events = useAppConfigStore().app.events
    if (events?.logout) {
        events.logout().then(() => {
            logout()
            globalProperties?.$router.push('/login')
        })
    }
}
</script>

<style lang="scss">
.beita-user {
    display: flex;
    align-items: center;
    color: var(--be-layout-header-text-color);
}
.beita-avatar {
    margin-right: 8px;
}
</style>
