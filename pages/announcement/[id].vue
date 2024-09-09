<template>
  <div style="overflow-y: auto; flex: 1 1 0;" class="container-fluid p-5 d-flex justify-content-center">
    <AnnouncementView/>
  </div>
</template>

<script setup lang="ts">
import AnnouncementView from "~/components/dashboard/AnnouncementView.vue";

definePageMeta({
  layout: 'default',
});
</script>
