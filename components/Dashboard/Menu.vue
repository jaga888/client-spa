<template>
  <nav id="menu" class="navbar navbar-expand-md navbar-dark bg-primary">
    <a class="navbar-brand" href="/public">
      <img src="/media/images/senex.svg" alt="senex" height="28" width="28">
    </a>
    <button class="navbar-toggler"
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <MenuItem
            v-for="(menuItem, index) in menuItemsLeft"
            :menuItem="menuItem"
            :key="index"
        />
      </ul>
      <ul class="navbar-nav">
        <MenuItem
            v-for="(menuItem, index) in menuItemsRight"
            :menuItem="menuItem"
            :key="index"
        />
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {menuItemsLeft, menuItemsRight} from './menu.data'
import MenuItem from './MenuItem.vue';


</script>
