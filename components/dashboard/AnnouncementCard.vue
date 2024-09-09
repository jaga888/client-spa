<template>
  <div id="announcements" class="card bg-primary text-white mb-3">
    <div class="card-header">
      Announcements
    </div>

    <table class="table table-borderless">
      <tbody>
      <tr v-if="announcements.length">
        <td colspan="2">
          <h3>{{ announcements[0].title }}</h3>
          <p class="announcement-body" v-html="announcements[0].body"></p>
          <p class="mb-0">
            <a class="text-warning" :href="'/announcement/' + announcements[0].id"
               @click="markAsRead(announcements[0].id)">
              more
            </a>
          </p>
        </td>
      </tr>
      <tr>
        <td colspan="2"><h4 class="mb-0">Previous Announcements</h4></td>
      </tr>
      <tr v-for="(announcement, index) in announcements.slice(1)" :key="announcement.id">
        <td>
          <span v-if="announcement.unread" style="color:red">&#x25cf;</span>
          <a class="text-warning" :href="'/announcement/' + announcement.id"
             @click="markAsRead(announcement.id)">
            {{ announcement.title }}
          </a>
        </td>
        <td class="text-nowrap">
          {{ formatDate(announcement.createdAt.date) }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';

interface Announcement {
  id: number;
  title: string;
  body: string;
  createdAt: {
    date: string;
  };
  unread: boolean;
}

const announcements = ref<Announcement[]>([]);


onMounted(async () => {
  try {
    const response = await fetch('/api/announcements');
    const data = await response.json();
    data.sort((a: Announcement, b: Announcement) => new Date(b.createdAt.date).getTime() - new Date(a.createdAt.date).getTime());
    announcements.value = data;
  } catch (error) {
    console.error('Error fetching announcements:', error);
  }
});

function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'short', day: 'numeric'};
  return new Date(dateString).toLocaleDateString('en-US', options);
}

async function markAsRead(id: number) {
  try {
    await fetch(`/api/announcement/${id}`, {
      method: 'POST',
    });
    announcements.value = announcements.value.map(announcement =>
        announcement.id === id ? {...announcement, unread: false} : announcement
    );
  } catch (error) {
    console.error('Error marking announcement as read:', error);
  }
}
</script>

<style>
#announcements table tbody tr td {
  color: #fff;
  background-color: rgb(16, 136, 203);
  text-align: left;
  font-weight: normal;
}

#announcements a {
  color: #ffc107;
}

#announcements table {
  color: #fff;
}

.announcement-body {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}

.card-header {
  padding: 12px 20px !important;
  font-weight: 400;
}
</style>
