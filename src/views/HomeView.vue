<script setup>
import AppButton from "@/components/AppButton.vue";
</script>

<template>
  <main>
    <h3>button classic</h3>
    <div :class="$style.buttonContainer">
      <AppButton :class="$style.btn">Отправить письмо</AppButton>
      <AppButton :class="$style.btn" color="secondary">Отправить письмо</AppButton>
      <AppButton :class="$style.btn" color="warning">Отправить письмо</AppButton>
      <AppButton :class="$style.btn" disabled>Отправить письмо</AppButton>
      <AppButton :class="$style.btn" color="info">Отправить письмо</AppButton>
      <AppButton :class="$style.btn" color="danger">Отправить письмо</AppButton>
      <AppButton :class="$style.btn" color="action">Отправить письмо</AppButton>
    </div>
  </main>
</template>

<style lang="scss" module>
.buttonContainer {
  display: flex;
  flex-wrap: wrap;

  .btn {
    margin: 20px;
  }
}
</style>
