<template>
  <div class="container-fluid mt-5" style="overflow:auto">
    <div class="row align-items-center justify-content-center">
      <div class="col-md-4">
        <div class="card border-0">
          <div class="p-5 card-header bg-primary text-white" style="text-align: center;">
            <img id="login_img" src="/media/images/logo/senex.svg" />
          </div>
          <div class="card-body">
            <form id="senex-login-form" action="/" method="post" novalidate>
              <div class="form-group">
                <label for="username">Email</label>
                <input type="email"
                       class="form-control"
                       id="form_user_user_name"
                       name="user_name"
                       placeholder="Enter email"
                       required/>
                <div class="invalid-feedback">
                  Please provide a valid email.
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password"
                       class="form-control"
                       id="form_user_password"
                       name="password"
                       placeholder="Password"
                       required
                />
                <div class="invalid-feedback">
                  Please provide a valid password.
                </div>
              </div>
              <div class="btn-toolbar justify-content-between">
                <button type="submit" class="btn btn-primary">Login</button>
                <a class="btn btn-link" href="/">Forgot my password</a>
              </div>
            </form>
          </div>
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

const { status } = useAuth()

console.log('status l', status.value)
</script>
