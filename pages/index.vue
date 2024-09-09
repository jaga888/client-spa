<template>
  <div style="overflow-y: auto; flex: 1 1 0;" class="container-fluid p-5 d-flex justify-content-center">
    <div class="row w-100">
      <div class="col-12 col-md-6 col-lg-4">
        <AnnouncementCard/>
      </div>
      <!--      <div class="col-12 col-md-6 col-lg-4 ">-->
      <!--        <ProcessingStatus/>-->
      <!--      </div>-->
      <!--      <div class="col-12 col-sm-12 col-lg-4 ">-->
      <!--        <NoticeReport/>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import AnnouncementCard from "~/components/dashboard/AnnouncementCard.vue";

definePageMeta({
  layout: 'default',
});
</script>
