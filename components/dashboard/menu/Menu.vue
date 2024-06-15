<template>
  <nav id="menu" class="navbar navbar-expand-md navbar-dark bg-primary">
    <a class="navbar-brand" href="/public">
      <img src="/media/images/senex.svg" alt="senex" height="28" width="28">
    </a>
    <button class="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <MenuItemComponent
            v-for="menuItem in menuItemsLeft"
            :menuItem="menuItem"
            :openedMenuId="openedMenuId"
            @click="toggleDropdown(menuItem.id)"
        />
      </ul>
      <ul class="navbar-nav">
        <MenuItemComponent
            v-for="menuItem in menuItemsRight"
            :menuItem="menuItem"
            :openedMenuId="openedMenuId"
            @click="toggleDropdown(menuItem.id)"
            v-on-click-outside="closeMenu"
        />
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type {MenuItemType} from "~/services/menu/types";
import MenuItemComponent from "~/components/dashboard/menu/MenuItemComponent.vue";
import type {UserProfile} from "~/services/user/types";
import { vOnClickOutside } from '@vueuse/components';

const openedMenuId = ref<number>(0);
const toggleDropdown = (menuId: number = 0) => {
  openedMenuId.value = openedMenuId.value === menuId ? 0 : menuId;
};

function closeMenu() {
  toggleDropdown();
}

const {data} = useAuth();

const user = ref<UserProfile>({
  first_name: data.value?.first_name || '',
  last_name: data.value?.last_name || '',
  roles: data.value?.roles || []
});

const menuItemsLeft: MenuItemType[] = [
  {
    'id': 1,
    'name': 'Processing',
    'show': false,
    'permissions': [],
    'children': [
      {
        'name': 'Notices of Non-Compliance',
        'href': '#',
        'icon': 'Bullhorn',
      },
      {
        'name': 'Unlawful Detainers',
        'href': '#',
        'icon': 'Inbox'
      },
      {
        'name': 'Court Dockets',
        'href': '#',
        'icon': 'Gavel'
      },
      {
        'name': 'Writs of Eviction',
        'href': '#',
        'icon': 'Truck'
      },
      {
        'name': 'Notices of Satisfaction',
        'href': '#',
        'icon': 'Check'
      },
    ],
  },
  {
    'id': 2,
    'name': 'Reporting',
    'show': false,
    'permissions': [],
    'children': [
      {
        'name': 'Judgment & Possession Report',
        'href': '#',
        'icon': 'List'
      },
      {
        'name': 'Rent with Reservation Report',
        'href': '#',
        'icon': 'List'
      },
      {
        'name': 'Unsatisfied Judgments Report',
        'href': '#',
        'icon': 'List'
      },
    ],
  },
  {
    'id': 3,
    'name': 'Resources',
    'show': false,
    'permissions': ['resources'],
    'children': [
      {
        'name': 'Senex Wiki',
        'href': '#',
        'icon': 'List'
      },
    ],
  },
  {
    'id': 4,
    'name': 'Administration',
    'show': false,
    'permissions': ['client-admin'],
    'children': [
      {
        'name': 'User Accounts',
        'href': '#',
        'icon': 'Users'
      },
    ],
  },
];

const menuItemsRight: MenuItemType[] = [
  {
    'id': 5,
    'prefix': '<span style="color:red">●</span>',
    'icon': 'Bullhorn',
    'name':  '',
    'show': false,
    'permissions': [],
    'children': [
    ],
  },
  {
    'id': 6,
    'name': user.value.first_name + ' ' + user.value.last_name,
    'show': false,
    'permissions': [],
    'children': [
      {
        'name': 'Change Password',
        'href': '#',
        'icon': 'Key',
      },
      {
        'name': 'Update Signature',
        'href': '#',
        'icon': 'Pencil',
        'class': 'senex-menu-update-signature'
      },
      {
        'name': 'Logout',
        'href': '#',
        'icon': 'Coffee'
      },
    ],
  },
];
</script>
