<template>
  <div v-if="isModalOpen" class="modal-backdrop fade show"></div>
  <div v-if="isModalOpen" class="modal fade show" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Change Password</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                  @click.prevent="closeModal">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <change-password-form
              :isChangePasswordModalOpen="isModalOpen"
              @closeModal="closeModal"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ChangePasswordForm from "~/components/Account/ChangePasswordForm.vue";

const emits = defineEmits(['close']);

const props = defineProps({
  isModalOpen: Boolean
});
const closeModal = () => {
  emits('close');
};
</script>

<style scoped lang="scss">
$blue:                              #1088CB;
.modal.fade.show {
  display: block;
}

.modal-header {
  background-color: $blue;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
}

.modal-dialog.modal-title {
  font-weight: 500;
}

.modal-body {
  height: auto;
}

.close {
  opacity: .5;
}

.close:hover {
  opacity: 1;
}
</style>