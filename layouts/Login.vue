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
useHead({
  bodyAttrs: {
    class: 'senex__page__login',
  },
});
</script>

<style lang="scss">
@use "/assets/scss/senex.scss";

.form-group {
  margin-bottom: 1rem;
}

.btn-primary {
  color: #fff;
}

</style>
