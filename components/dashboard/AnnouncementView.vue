<template>
  <div class="help">
    <div class="help__title" v-if="announcement">{{ announcement.title }}</div>
    <p style="font-style: italic" v-if="announcement">{{ announcement.body }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';

interface Announcement {
  id: number;
  title: string;
  body: string;
  createdAt: {
    date: string;
  };
  unread: boolean;
}

const route = useRoute();
const announcementId = route.params.id;
const announcement = ref<Announcement | null>(null);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await fetch(`/api/announcement/${announcementId}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    announcement.value = await response.json();
    try {
      const markAsReadResponse = await fetch(`/api/announcement/${announcementId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!markAsReadResponse.ok) {
        throw new Error(`Error marking as read: ${markAsReadResponse.statusText}`);
      }
    } catch (postError) {
      console.error('Error marking announcement as read:', postError);
    }
  } catch (err) {
    error.value = `Error loading data: ${(err as Error).message}`;
  }
});
</script>

<style scoped>

</style>
