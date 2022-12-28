<template>
  <main>
    <section :class="$style.section">
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

      <h5>Code Example</h5>
      <div v-html="BUTTON_CLASSIC_EXAMPLE"></div>
    </section>

    <section :class="$style.section">
      <h3>button link</h3>
      <div :class="$style.buttonContainer">
        <AppButton :class="$style.btn" href="#">Напомнить PIN-код</AppButton>
        <AppButton :class="$style.btn" href="https://github.com/lazenyuk-dmitry/button-component-vue-test">GitHub</AppButton>
        <AppButton :class="$style.btn" to="/example-page">Example Page</AppButton>
        <AppButton :class="$style.btn" to="/example-page" target="_blank">Example Page (Open in new window)</AppButton>
      </div>

      <h5>Code Example</h5>
      <div v-html="BUTTON_LINK_EXAMPLE"></div>
    </section>

    <section :class="$style.section">
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

      <h5>Code Example</h5>
      <div v-html="BUTTON_TIMER_EXAMPLE"></div>
    </section>

    <section :class="$style.section">
      <h3>button multi-sized</h3>
      <div :class="$style.buttonContainer">
        <AppButton :class="$style.btn" icon="arrowBack" />
        <AppButton :class="$style.btn" color="danger" icon="exit" />
        <AppButton :class="$style.btn" color="quest" icon="quest" />
        <AppButton :class="$style.btn" icon="arrowNext" />
        <AppButton :class="$style.btn" color="danger" icon="google" />
        <AppButton :class="$style.btn" color="info" icon="vk" />
        <AppButton :class="$style.btn" color="action" icon="ok" />
        <AppButton :class="$style.btn" icon="pen" />
      </div>

      <h5>Code Example</h5>
      <div v-html="BUTTON_MULTI_EXAMPLE"></div>
    </section>
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
import {
  BUTTON_CLASSIC_EXAMPLE,
  BUTTON_LINK_EXAMPLE,
  BUTTON_TIMER_EXAMPLE,
  BUTTON_MULTI_EXAMPLE,
} from "~examples";

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

  .btn {
    margin: 20px;
  }
}

.section {
  margin-bottom: 40px;
}
</style>
