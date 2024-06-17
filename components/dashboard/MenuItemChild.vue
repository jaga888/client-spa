<template>
  <a :class="['text-white dropdown-item', item.class]"
     :href="item.href" @click="handleClick(item)"
     :id="item.id">
    <Icon v-if="item.icon" :name="item.icon" class="inline-block text-white"/>

    <span v-if="item.key === CHILD_ANNOUNCEMENT_UNREAD" style="color:red">&#x25cf;</span>
    {{ item.name }}
  </a>
</template>

<script setup lang="ts">
import type {Child} from "~/components/dashboard/menu.data";
import {CHILD_ANNOUNCEMENT_UNREAD} from "~/components/dashboard/menu.data";
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
}

const logout = async () => {
  await signOut();
};

</script>
