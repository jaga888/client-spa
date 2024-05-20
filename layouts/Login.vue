<style lang="scss">
@use "/assets/scss/senex.scss";
</style>

<template>
  <div id="container">
    <div id="main" class="two-pane">
      <slot/>
    </div>
    <div id="footer">
      <div class="senex__version">
        3.7.12
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'login',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  }
})

useHead({
  bodyAttrs: {
    class: 'senex__page__login',
  },
});
</script>
