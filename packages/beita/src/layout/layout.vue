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
            <el-main class="be-layout-content be-layout-content-with-tabs-fix">
                <div class="be-layout-tabs be-layout-tabs-fix">
                    <tabs-nav />
                </div>
                <el-main class="be-layout-content-main"><router-view></router-view></el-main>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import SideMenu from './components/side-menu'
import HeaderBar from './components/header-bar'
import User from './components/user'
import TabsNav from './components/tags-nav'
import { useMenusStore } from '../store'

useMenusStore().fetchMenuList()
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
    &-content {
        padding: 0;
    }
    &-tabs {
        transition: all 0.2s ease-in-out;
    }
    &-tabs-fix {
        position: fixed;
        z-index: 9;
        width: calc(100% - 200px);
    }
    &-content-with-tabs-fix {
        .be-layout-content-main {
            margin-top: 44px;
        }
    }
    &-content-main {
        padding: 14px;
        padding-top: 0;
    }
}
</style>
