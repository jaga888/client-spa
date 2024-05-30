<template>
  <div class="card-body">
    <h3>Password Reset</h3>
    <p>Please enter your email address, and we'll be happy to send you a new password.</p>
    <form id="senex-reset-password-form" action="/public" method="post" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email"
               class="form-control"
               id="email"
               name="email"
               placeholder="Enter email"
               v-model="user.email" required/>
        <div class="invalid-feedback" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </div>
      </div>
      {{}}
      <div v-if="$externalResults.message" class="alert alert-danger" role="alert">
        {{ $externalResults.message }}
      </div>
      <div class="btn-toolbar justify-content-between">
        <button type="submit" class="btn btn-primary">Reset Password</button>
        <NuxtLink class="btn btn-link" to="/account/login">Cancel</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import type {ForgotPassword, UserResetPassword} from "~/services/user/types";
import {email, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import {userService} from "~/services/user/services";

const user = ref<UserResetPassword>({
  email: "",
});

const $externalResults = ref({});

const rules = {
  email: {required, email},
};

const v$ = useVuelidate(rules, user, {$externalResults});
const submitForm = async () => {
  const validated = await v$.value.$validate();

  if (validated) {
    try {
      const response = (await userService.forgotPasswordApi(user.value.email).then((data) => data.json()).then(function (data) {
        console.log(response)
        console.log(response.data)
        $externalResults.value = response.data;
        console.log($externalResults.value)
        return response;

      }));
      // console.log(response);
      // console.log(response.data._rawValue);
      // $externalResults.value = response.data;
    } catch (e: any) {
      $externalResults.value = e.response._data;
    }
  }
};
</script>

<style scoped lang="scss">

</style>