<script setup></script>

<template>
  <button :class="$style.btn" type="button">
    <slot />
  </button>
</template>

<style lang="scss" module>
.btn {
  padding: 14px 45px;
  background: $color-primary;
  box-shadow: $btn-shadow;
  border-radius: 15px;
  border: none;
  font-family: "Phosphate";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: $btn-text-color;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
