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

    <h3>button link</h3>
    <div :class="$style.buttonContainer">
      <AppButton :class="$style.btn" href="#">Напомнить PIN-код</AppButton>
      <AppButton :class="$style.btn" href="https://www.google.com/">Google.com</AppButton>
      <AppButton :class="$style.btn" to="/example-page">Example Page</AppButton>
      <AppButton :class="$style.btn" to="/example-page" target="_blank">Example Page (Open in new window)</AppButton>
    </div>
  </main>
</template>

<style lang="scss" module>
.buttonContainer {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;

  .btn {
    margin: 20px;
  }
}
</style>
