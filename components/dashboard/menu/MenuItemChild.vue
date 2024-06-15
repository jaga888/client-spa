<template>
  <a :class="['text-white dropdown-item', item.class]"
     :href="item.href" @click="handleClick(item)"
     >
    <Icon v-if="item.icon" :name="item.icon" class="inline-block text-white"/>
    {{ item.name }}
  </a>
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
}

const logout = async () => {
  await signOut();
};

</script>
