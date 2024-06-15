<template>
  <li class="nav-item dropdown"
      @click="toggleDropdown(menuItem)"
      v-if="checkPermission(menuItem.permissions)"
  >
    <a class="nav-link dropdown-toggle"
       href="#"
       role="button"
       aria-haspopup="true"
       aria-expanded="false"
    >
      <span>{{ menuItem.name }}</span>
      <div class="border-0 bg-primary dropdown-menu">
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
import type {MenuItemType} from '~/services/menu/types'

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

const checkPermission = (itemPermissions: string[]) => {
  return itemPermissions.length === 0
    || itemPermissions.some(permission => user.value.roles.some(userRole => userRole.name === permission));
};

</script>
