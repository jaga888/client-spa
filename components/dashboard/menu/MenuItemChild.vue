<template>
  <NuxtLink :to="item.href" :class="['text-white dropdown-item', item.class]" @click="handleClick(item)">
    <Icon v-if="item.icon" :name="item.icon" class="inline-block text-white"/>
    {{ item.name }}
  </NuxtLink>
</template>

<script setup lang="ts">
import type {Child} from "~/services/menu/types";
import Icon from "~/components/Icon.vue";

const {signOut} = useAuth();

defineProps({
  item: {
    type: Object as () => Child,
    default: () => ({})
  },
});

const handleClick = (item: Child) => {
  if (item.name == 'Logout') {
    logout()
  }
  if (item.click) {
    item.click();
  }
}

const logout = async () => {
  await signOut({ callbackUrl: '/account/login'});
};

</script>
