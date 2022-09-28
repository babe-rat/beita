import type { MenuItem } from '../store/menus'

const menuList: MenuItem[] = [
    {
        id: '1',
        name: '秒杀',
        children: [{ id: '1-1', name: '秒杀商品', path: '/marketing/store_seckill/index' }],
    },
    {
        id: '2',
        name: '优惠套餐',
        path: '/marketing/store_discounts/index',
    },
]

export function getMenuList(): Promise<MenuItem[]> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(menuList)
        }, 200)
    })
}
