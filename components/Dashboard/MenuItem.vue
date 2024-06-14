<template>
  <li class="nav-item dropdown"
      @click="toggleDropdown(menuItem)"
      v-if="checkPermission(menuItem.permissions)"
  >
    <a class="nav-link dropdown-toggle"
       href="#"
       role="button"
       :id="`${menuItem.id}Dropdown`"
       aria-haspopup="true"
       aria-expanded="false"
    >
      <span v-if="menuItem.id === ACCOUNT_ID">
          {{ user.first_name + ' ' + user.last_name }}
        </span>
      <span v-else-if="menuItem.id === 'announcement'">
        <span style="color:red">●</span>
        <Icon name="bullhorn" class="inline-block text-white-25 mr-2"/>
        </span>
      <span v-else>
          {{ menuItem.name }}
        </span>
      <div :class="{'border-0 bg-primary dropdown-menu ': true, 'show': isVisible(menuItem).value}"
           :aria-labelledby="`${menuItem.id}Dropdown`">
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
import MenuItemChild from './MenuItemChild.vue';
import type {UserProfile} from "~/services/user/types";
import type {MenuItemType} from './menu.data'
import {ACCOUNT_ID} from './menu.data'
import Icon from "~/components/Icon.vue";

const {data} = useAuth();

const user = ref<UserProfile>({
  first_name: data.value?.first_name || '',
  last_name: data.value?.last_name || '',
  roles: data.value?.roles || []
});

const props = defineProps({
  menuItem: {
    type: Object as () => MenuItemType,
    default: () => ({show: false})
  },
});

const visibilityMap = ref({[props.menuItem.id]: props.menuItem.show});

const toggleDropdown = (menuItem: MenuItemType) => {
  visibilityMap.value[menuItem.id] = !visibilityMap.value[menuItem.id];
};

const isVisible = (menuItem: MenuItemType) => {
  return computed(() => visibilityMap.value[menuItem.id]);
};

const checkPermission = (itemPermissions: string[]) => {
  return itemPermissions.some(permission => user.value.roles.some(userRole => userRole.name === permission));
};

</script>
