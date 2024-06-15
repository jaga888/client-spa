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
        <MenuItem
            v-for="(menuItem, index) in menuItemsLeft"
            :menuItem="menuItem"
            :key="index"
        />
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
// import {menuItemsRight, type MenuItemType} from '../menu.data'
import MenuItem from '~/components/dashboard/menu/MenuItem.vue';
import type {MenuItemType} from "~/services/menu/types";

const menuItemsLeft: MenuItemType[] = [
  {
    'name': 'Processing',
    'show': false,
    'permissions': [],
    'children': [
      {
        'name': 'Notices of Non-Compliance',
        'href': '#',
        'icon': 'bullhorn',
      },
      // {
      //   'name': 'Unlawful Detainers',
      //   'href': '#',
      //   'icon': 'Inbox'
      // },
      // {
      //   'name': 'Court Dockets',
      //   'href': '#',
      //   'icon': 'Gavel'
      // },
      // {
      //   'name': 'Writs of Eviction',
      //   'href': '#',
      //   'icon': 'Truck'
      // },
      // {
      //   'name': 'Notices of Satisfaction',
      //   'href': '#',
      //   'icon': 'Check'
      // },
    ],
  },
  // {
  //   'name': 'Reporting',
  //   'show': false,
  //   'permissions': [],
  //   'children': [
  //     {
  //       'name': 'Judgment & Possession Report',
  //       'href': '#',
  //       'icon': 'List'
  //     },
  //     {
  //       'name': 'Rent with Reservation Report',
  //       'href': '#',
  //       'icon': 'List'
  //     },
  //     {
  //       'name': 'Unsatisfied Judgments Report',
  //       'href': '#',
  //       'icon': 'List'
  //     },
  //   ],
  // },
  // {
  //   'name': 'Resources',
  //   'show': false,
  //   'permissions': ['resources'],
  //   'children': [
  //     {
  //       'name': 'Senex Wiki',
  //       'href': '#',
  //       'icon': 'List'
  //     },
  //   ],
  // },
  // {
  //   'name': 'Administration',
  //   'show': false,
  //   'permissions': ['client-admin'],
  //   'children': [
  //     {
  //       'name': 'User Accounts',
  //       'href': '#',
  //       'icon': 'Users'
  //     },
  //   ],
  // },
];
</script>
