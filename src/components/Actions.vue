<script setup>
import { ref } from 'vue';
const preventableModal = ref(false);
</script>

<template>
  <div class="actions">
    <BContainer>
      <div class="actions__row d-flex justify-content-between">
        <BButton variant="light">
          <img
            src="/img/close_btn.png"
            alt="" />
        </BButton>
        <BButton
          variant="light"
          @click="
            () => {
              preventableModal = !preventableModal;
            }
          ">
          <img
            src="/img/bulb.png"
            alt="" />
        </BButton>
      </div>
    </BContainer>
  </div>
  <BModal
    v-model="preventableModal"
    hideFooter
    title="Модальное окно">
  </BModal>
</template>

<style scoped>
.actions {
  .actions__row {
    position: relative;
  }
}
</style>
