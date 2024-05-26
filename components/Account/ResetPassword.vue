<template>
  <div class="card-body">
    <h3>Password Reset</h3>
    <p>Please enter your email address, and we'll be happy to send you a new password.</p>
    <form id="senex-reset-password-form" action="/public" method="post">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" required/>
        <div class="invalid-feedback">
          Please provide a valid email.
        </div>
      </div>
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
      <div class="btn-toolbar justify-content-between">
        <button type="submit" class="btn btn-primary">Reset Password</button>
        <a class="btn btn-link" href="/account/login">Cancel</a>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const error = ref('');

</script>

<style scoped lang="scss">

</style>