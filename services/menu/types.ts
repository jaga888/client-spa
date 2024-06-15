export interface Child {
    name: string;
    href: string;
    icon?: string;
    class?: string;
    key?: string;
}

export interface MenuItemType {
    name: string;
    show: boolean;
    style?: string;
    permissions: string[];
    children: Child[];
}
