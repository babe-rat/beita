<template>
    <el-container class="be-basicLayout be-basicLayout-mix">
        <el-header>
            <header-bar>
                <el-space>
                    <user />
                </el-space>
            </header-bar>
        </el-header>
        <el-container class="be-layout">
            <el-aside width="200px"> <side-menu /> </el-aside>
            <el-main><router-view></router-view></el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import SideMenu from './components/side-menu'
import HeaderBar from './components/header-bar'
import User from './components/user'
</script>

<style lang="scss" scoped>
.be-basicLayout {
    height: 100%;
    :deep(.el-header) {
        --el-header-padding: 0;
    }
}
.be-layout {
    background: #f0f2f5;
}
</style>
