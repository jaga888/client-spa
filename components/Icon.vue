<script setup lang="ts">
import {defineAsyncComponent} from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
})

const Icon = defineAsyncComponent(() => import('~/components/icons/' + `${props.name}.vue`))
</script>

<template>
  <Icon/>
</template>