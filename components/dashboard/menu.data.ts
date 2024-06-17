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
    id: string;
    show: boolean;
    style?: string;
    permissions: string[];
    children: Child[];
}

export const menuItemsLeft: MenuItemType[] = [
    {
        'name': 'Processing',
        'id': 'processing',
        'show': false,
        'permissions': ['login'],
        'children': [
            {
                'name': 'Notices of Non-Compliance',
                'href': '#',
                'icon': 'bullhorn',
            },
            {
                'name': 'Unlawful Detainers',
                'href': '#',
                'icon': 'inbox'
            },
            {
                'name': 'Court Dockets',
                'href': '#',
                'icon': 'gavel'
            },
            {
                'name': 'Writs of Eviction',
                'href': '#',
                'icon': 'truck'
            },
            {
                'name': 'Notices of Satisfaction',
                'href': '#',
                'icon': 'check'
            },
        ],
    },
    {
        'name': 'Reporting',
        'id': 'reporting',
        'show': false,
        'permissions': ['login'],
        'children': [
            {
                'name': 'Judgment & Possession Report',
                'href': '#',
                'icon': 'list'
            },
            {
                'name': 'Rent with Reservation Report',
                'href': '#',
                'icon': 'list'
            },
            {
                'name': 'Unsatisfied Judgments Report',
                'href': '#',
                'icon': 'list'
            },
        ],
    },
    {
        'name': 'Administration',
        'id': 'administration',
        'show': false,
        'permissions': ['login'],
        'children': [
            {
                'name': 'User Accounts',
                'href': '#',
                'icon': 'users'
            },
        ],
    },
];

export const menuItemsRight: MenuItemType[] = [
    {
        'name': '',
        'id': 'announcement',
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
        'id': ACCOUNT_ID,
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