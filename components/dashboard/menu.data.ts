export const CHILD_ANNOUNCEMENT_UNREAD = 'Announcement unread'
export const ACCOUNT_ID = 'account'

export interface Child {
    name: string;
    href: string;
    icon?: string;
    id?: string;
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

export const menuItemsRight: MenuItemType[] = [
    {
        'name': '',
        'show': false,
        'permissions': ['login'],
        'children': [
            {
                'name': 'Announcement unread',
                'key': CHILD_ANNOUNCEMENT_UNREAD,
                'href': '#',
            },
            {
                'name': 'Announcement read',
                'href': '#',
            },
        ],
    },
    {
        'name': '',
        'show': false,
        'permissions': ['login'],
        'children': [
            {
                'name': 'Change Password',
                'href': '#',
                'icon': 'key',
                'id': 'account-settings',
            },
            {
                'name': 'Update Signature',
                'href': '#',
                'icon': 'pencil',
                'class': 'senex-menu-update-signature'
            },
            {
                'name': 'Logout',
                'href': '#',
                'icon': 'coffee'
            },
        ],
    },
];
