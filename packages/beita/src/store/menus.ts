import { defineStore } from 'pinia'
import { getMenuList } from '../api/menu'

export interface MenuItem {
    id: string
    name: string
    path?: string
    icon?: string
    visible?: boolean
    children?: MenuItem[] | [] | undefined
}

export interface MenusState {
    menuList: MenuItem[]
    activeMenu: string
}

export const useMenusStore = defineStore('menus', {
    state: (): MenusState => {
        return {
            menuList: [],
            activeMenu: '',
        }
    },

    actions: {
        async fetchMenuList() {
            const res = await getMenuList()
            console.log(res)
        },
    },
})
