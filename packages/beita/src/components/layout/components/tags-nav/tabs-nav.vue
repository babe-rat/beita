<template>
    <div class="be-layout-tabs-main">
        <el-tabs type="card">
            <el-tab-pane class="" v-for="tab in tabs" :key="tab.id">
                <template #label>
                    <div class="be-tabs-tab-title">{{ tab.name }}</div>
                    <el-icon class="be-tabs-tab-close"><Close /></el-icon>
                </template>
            </el-tab-pane>
        </el-tabs>
        <el-dropdown>
            <div class="be-layout-tabs-close">
                <el-icon><ArrowDown /></el-icon>
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>
                        <el-icon><ArrowLeft /></el-icon>
                        关闭左侧
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-icon><ArrowRight /></el-icon>
                        关闭右侧
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-icon><Close /></el-icon>
                        关闭其它
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-icon><CircleCloseFilled /></el-icon>
                        关闭全部
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">
import { ArrowDown, ArrowLeft, ArrowRight, Close, CircleCloseFilled } from '@element-plus/icons-vue'

const tabs = [...Array(15)].map((_, idx) => ({ name: `Tab ${idx}`, id: idx }))
</script>

<style lang="scss">
@import './tabs-nav.scss';
</style>
