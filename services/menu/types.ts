export interface Child {
    name: string,
    href: string,
    icon?: string,
    class?: string,
    key?: string,
    click?: Function,
}

export interface MenuItemType {
    id: number,
    prefix?: string,
    icon?: string,
    name: string,
    show: boolean,
    style?: string,
    permissions: string[],
    children: Child[],
}
