<template>
  <div class="container-fluid mt-5" style="overflow:auto">
    <div class="row align-items-center justify-content-center">
      <div class="col-md-4">
        <div class="card border-0">
          <div class="p-5 card-header bg-primary text-white" style="text-align: center;">
            <img id="login_img" src="/media/images/logo/senex.svg" alt=""/>
          </div>
          <AccountResetPassword></AccountResetPassword>
        </div>
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
</script>
