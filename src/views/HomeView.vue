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

    <h3>button timer</h3>
    <div :class="$style.buttonContainer">
      <AppButton :class="$style.btn" color="action" :timer="180000">Нажми меня</AppButton>
      <AppButton :class="$style.btn" :timer="180000" disabled>Отправить письмо</AppButton>
      <AppButton :class="$style.btn" color="info" :timer="30000">Просто таймер</AppButton>
    </div>
  </main>
</template>

<script setup>
import AppButton from "@/components/AppButton.vue";
</script>

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
