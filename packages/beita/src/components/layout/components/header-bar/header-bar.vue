<template>
    <div class="beita-header-bar beita-header-bar-mix">
        <div class="beita-header-bar-logo">
            <a>
                <img v-if="logo" :src="logo" alt="logo" />
                <h1>{{ title }}</h1>
            </a>
        </div>
        <div class="right">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppConfigStore } from '../../../../store/appConfig'

const { logo, title } = useAppConfigStore().app
</script>

<style lang="scss" scoped>
.right {
    display: flex;
    float: right;
    height: 48px;
    margin-left: auto;
    overflow: hidden;
}
.beita-header-bar {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    background-color: #fff;
    padding: 0 16px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    &-mix {
        background-color: #001529;
        h1 {
            color: #fff;
        }
    }
    &-logo {
        a {
            display: flex;
            align-items: center;
            height: 100%;
        }
        a img {
            height: 28px;
        }
    }
    & > * {
        height: 100%;
    }
}
</style>
