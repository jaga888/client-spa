<template>
  <form novalidate @submit.prevent="submitChangePassword">
    <fieldset>
      <div class="form-group">
        <label class="form-label" for="password">New Password</label>
        <input type="password" class="form-control" id="modal_password" placeholder="New password..."
               v-model="passwords.password" :class="{'is-invalid': v$.password.$invalid && v$.password.$dirty}"
               required>
        <div v-if="v$.password.$invalid && v$.password.$dirty" class="invalid-feedback">
          Password is required.
        </div>
      </div>
      <div class="form-group">
        <label class="form-label" for="password_confirm">Confirm</label>
        <input type="password" class="form-control" id="modal_password_confirm" placeholder="Confirm password..."
               v-model="passwords.passwordConfirm"
               :class="{'is-invalid': v$.passwordConfirm.$invalid && v$.passwordConfirm.$dirty}" required>
        <div v-if="v$.passwordConfirm.$invalid && v$.passwordConfirm.$dirty" class="invalid-feedback">
          Confirm Password is required and should match the New Password.
        </div>
      </div>
    </fieldset>
  </form>
  <div class="modal-footer">
    <button @click.prevent="closeModal" class="btn btn-link">Cancel
    </button>
    <button @click.prevent="submitChangePassword" class="btn btn-primary">Update</button>
  </div>
</template>
<script setup lang="ts">

import {required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import {ref} from "vue";
import type {ChangePassword, ForgotPassword} from "~/services/user/types";
import {userService} from "~/services/user/services";


const emits = defineEmits(['close', 'submit']);

const props = defineProps({
  isChangePasswordModalOpen: Boolean
});

const passwords = ref<ChangePassword>({
  password: "",
  passwordConfirm: "",
});

const rules = {
  password: {required},
  passwordConfirm: {required},
};
const $externalResults = ref<ForgotPassword>({
  'message': ''
});

const successMessage = ref({
  show: false
});

const v$ = useVuelidate(rules, passwords, {$externalResults});
const submitChangePassword = async () => {
  const validated = await v$.value.$validate();
  // console.log(passwords.value.password, passwords.value.confirmPassword);
  // console.log(validated);
  if (validated) {
    try {
      <ChangePassword>(await userService.changePasswordApi(passwords.value.password, passwords.value.passwordConfirm));
      successMessage.value.show = true;
      console.log(passwords.value.password, passwords.value.passwordConfirm);
    } catch (e: any) {
      $externalResults.value = e.response._data;
    }
  }
};

// const closeModal = () => {
//   emits('close');
// };

</script>

<style scoped lang="scss">

.form-group {
  margin-bottom: 1rem;
  color: #495057;
}

.form-group::placeholder {
  color: #f80101;
}

.form-label {
  margin-bottom: 0.5rem;
}

.btn-link {
  text-decoration: none;
}

.btn-primary {
  color: white;
}

</style>