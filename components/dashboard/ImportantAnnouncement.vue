<template>
  <div v-if="displayImportantAnnouncement">
    <div v-if="importantAnnouncement" class="important-announcement">
      <a :href="'/announcement/' + importantAnnouncement.id" class="important-announcement-link">
        <a><strong>Important:&nbsp;&nbsp;&nbsp;</strong>{{ importantAnnouncement.title }}</a>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
import {ref, onMounted} from 'vue';

const displayImportantAnnouncement = route.path === '/';

interface Announcement {
  id: number;
  title: string;
  body: string;
  created_at: string;
}

const importantAnnouncement = ref<Announcement | null>(null);

onMounted(async () => {
  try {
    const response = await fetch('/api/importantAnnouncementBar');
    const data = await response.json();
    console.log(data);
    if (data.length > 0) {
      importantAnnouncement.value = data[0];
    }
  } catch (error) {
    console.error('Error fetching announcements:', error);
  }
});
</script>

<style scoped lang="scss">

.important-announcement {
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  height: 40px;
  font-size: 11pt;
  padding: 1.2rem 3rem;
  background-color: #FF8600;
  color: white;

  .important-announcement-link {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    width: 100%;
    height: 100%;

    span {
      margin-right: 10px;
    }

    h5 {
      margin: 0 10px 0 0;
      font-size: 1rem;
      font-weight: normal;
    }

    p {
      margin: 0;
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .important-announcement-link:hover {
    text-decoration: underline;
  }
}
</style>