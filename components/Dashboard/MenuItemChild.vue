<template>
  <a :class="['text-white dropdown-item', item.class]"
     :href="item.href" @click="handleClick(item)"
     :id="item.id">

    <i v-if="item.icon" :class="['text-white-25 fas mr-2', item.icon]"></i>
    <span v-if="item.key === CHILD_ANNOUNCEMENT_UNREAD" style="color:red">&#x25cf;</span>
    {{ item.name }}
  </a>
</template>

<script setup lang="ts">
import type {Child} from "~/components/Dashboard/menu.data";
import {CHILD_ANNOUNCEMENT_UNREAD} from "~/components/Dashboard/menu.data";

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
