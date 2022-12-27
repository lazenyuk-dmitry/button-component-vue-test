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
      <AppButton
        :class="$style.btn"
        color="action"
        :timer="clickMeTimer"
        :disabled="clickMeIsDisabled"
        @click="clickMe"
        @timer-end="clickMeEndTimer"
      >
        Нажми меня
      </AppButton>
      <AppButton 
        :class="$style.btn"
        :timer="180000"
        :disabled="emailButtonIsDisabled"
        @timer-end="emailButtonIsDisabled = false"
      >
        Отправить письмо
      </AppButton>
      <AppButton :class="$style.btn" color="info" :timer="60000">
        Просто таймер
      </AppButton>
    </div>
  </main>
</template>

<!-- 
  Я использовал <script setup> в этом компоненте, хотя в других компонентах код находится в <script>(старая стилистика). 
  Я знаю что не хорошо смешивать такие подходы и стилистику написания кода, но это просто для примера.
  ---------
  I used <script setup> in this component, although in other components the code is in <script> (old style).
  I know it's not good to mix such approaches and coding style, but this is just for example.
 -->
<script setup>
import { ref } from "vue";
import AppButton from "@/components/AppButton.vue";

let clickMeTimer = ref(0);
let clickMeIsDisabled = false;
let emailButtonIsDisabled = ref(true);

function clickMe() {
  clickMeTimer.value = 30000;
  clickMeIsDisabled = true;
}

function clickMeEndTimer() {
  clickMeTimer.value = 0;
  clickMeIsDisabled = false;
}
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
