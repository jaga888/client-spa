<template>
  <div class="card-body">
    <form id="senex-login-form" action="/" method="post" novalidate
          @submit.prevent="submitForm" ref="form">
      <div class="form-group">
        <label for="username">Email</label>
        <input type="email"
               v-model="user.email"
               class="form-control"
               id="form_user_user_name"
               name="user_name"
               placeholder="Enter email"
               @input="v$.email.$touch"
               :class="{ 'is-invalid': v$.email.$error }"
               required/>
        <div class="invalid-feedback" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password"
               v-model="user.password"
               class="form-control"
               id="form_user_password"
               name="password"
               placeholder="Password"
               @input="v$.password.$touch"
               :class="{ 'is-invalid': v$.password.$error }"
               required
        />

      </div>
      <div class="text-danger" v-if="$externalResults.message">
        {{ $externalResults.message }}
      </div>

      <div class="btn-toolbar justify-content-between">
        <button type="submit" class="btn btn-primary">Login</button>
        <a class="btn btn-link" href="/">Forgot my password</a>
      </div>

    </form>
  </div>
</template>

<script setup lang="ts">
import {required, email} from '@vuelidate/validators';
import {useVuelidate} from "@vuelidate/core";
import type {UserLogin} from "~/services/user/types";

const {
  signIn, token
} = useAuth();

const user = ref<UserLogin>({
  email: "",
  password: "",
});

const $externalResults = ref({})

const rules = {
  email: {required, email},
  password: {required},
};

const v$ = useVuelidate(rules, user, {$externalResults});

const submitForm = async () => {
  v$.value.$clearExternalResults();

  const result = await v$.value.$validate();

  if (result) {
    await signIn(user.value, {callbackUrl: '/'}).catch(
        (error: any) => {
          if (error.response?.status === 422) {
            $externalResults.value = error.response._data?.errors;
          } else if (error.response?.status === 400) {
            $externalResults.value = error.response._data;
          }
        }
    );
  }
};

</script>

<style scoped lang="scss">

</style>