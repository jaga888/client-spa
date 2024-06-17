<template>
  <div id="container">
    <Menu></Menu>
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
import Menu from "~/components/dashboard/menu/Menu.vue";
useHead({
  bodyAttrs: {
    class: 'processing',
  },
});
</script>

<style lang="scss">
@use "/assets/scss/senex.scss";

.navbar-dark {
  .navbar-brand {
    color: rgba(255, 255, 255, 0.5);
  }

  .navbar-nav {
    .nav-link {
      color: rgba(255, 255, 255, 0.5);
    }

    .nav-link:hover {
      color: rgba(255, 255, 255, 0.75);
    }

    .show > .nav-link,
    .active > .nav-link,
    .nav-link {
      color: rgba(255, 255, 255, 0.5);
    }
  }
}

#__nuxt {
  height: 100%;
}
</style>
