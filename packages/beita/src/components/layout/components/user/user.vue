<template>
    <el-dropdown>
        <view class="beita-user">
            <el-avatar :size="24" class="beita-avatar" :src="avatar" />
            <span>{{ userName }}</span>
        </view>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="handleLogout">{{ __i18n(APP_LOGOUT) }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { useUserStore, useAppConfigStore } from '../../../../store'
import { APP_LOGOUT } from '../../../../i18n/locales'

const { userName, avatar } = useUserStore().userInfo
const globalProperties = getCurrentInstance()?.appContext.config.globalProperties

// 退出登录
function handleLogout() {
    useUserStore()
    const events = useAppConfigStore().app.events
    if (events?.logout) {
        events.logout().then(() => {
            useUserStore().clearUserStorage()
            globalProperties!.$router.push('/login')
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
