<template>
  <li class="nav-item dropdown"
      v-if="checkPermission(menuItem.permissions)"
  >
    <a class="nav-link dropdown-toggle"
       href="#"
       role="button"
       aria-haspopup="true"
       aria-expanded="false"
    >
      <span v-html="menuItem.prefix"></span>
      <Icon v-if="menuItem.icon" :name="menuItem.icon" class="inline-block text-white"/>
      <span>{{ menuItem.name }}</span>
      <div class="border-0 bg-primary dropdown-menu" :class="{'show': menuItem.id === openedMenuId}">
        <MenuItemChild
            v-for="(item, index) in menuItem.children"
            :key="index"
            :item="item"
        />
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
import MenuItemChild from '~/components/dashboard/menu/MenuItemChild.vue';
import type {UserProfile} from "~/services/user/types";
import type {MenuItemType} from '~/services/menu/types';
import Icon from "~/components/Icon.vue";

const {data} = useAuth();

const user = ref<UserProfile>({
  first_name: data.value?.first_name || '',
  last_name: data.value?.last_name || '',
  roles: data.value?.roles || []
});

defineProps({
  menuItem: {
    type: Object as () => MenuItemType,
    default: () => ({show: false})
  },
  openedMenuId: {
    type: Number,
    default: -1,
  }
});

const checkPermission = (itemPermissions: string[]) => {
  return itemPermissions.length === 0
    || itemPermissions.some(permission => user.value.roles.some(userRole => userRole.name === permission));
};
</script>
