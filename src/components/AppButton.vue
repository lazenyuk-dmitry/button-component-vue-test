<template>
  <a
    v-if="getLinkHref"
    :href="getLinkHref"
    :class="$style.link"
    v-bind="$attrs"
  >
    <slot />
  </a>
  <button
    v-else
    :class="[$style.btn, colorClass]"
    type="button"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    color: {
      type: String,
      default: "primary",
      validator(value) {
        return [
          "primary",
          "secondary",
          "warning",
          "info",
          "danger",
          "action",
        ].includes(value);
      },
    },
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
  },
  computed: {
    colorClass() {
      return this.$style[`btn--${this.color}`];
    },
    getLinkHref() {
      return this.to ? this.$router.resolve(this.to).href : this.href;
    },
  },
};
</script>

<style lang="scss" module>
$transition-time: 0.3s;
$btn-padding: 14px 45px;

.btn {
  padding: $btn-padding;
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
  transition: $transition-time;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transition: $transition-time;
  }

  &--primary {
    background: $color-primary;
  }
  &--secondary {
    background: $color-secondary;
  }
  &--warning {
    background: $color-warning;
  }
  &--info {
    background: $color-info;
  }
  &--danger {
    background: $color-danger;
  }
  &--action {
    background: $color-action;
  }
  &:disabled {
    background: $color-disabled;
    color: $btn-text-color-second;
    cursor: not-allowed;
    opacity: 1;
    transition: $transition-time;
  }
}

.link {
  padding: $btn-padding;
  background: transparent;
  border: none;
  color: $btn-text-color;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  text-decoration-line: underline;
  transition: $transition-time;

  &:visited {
    color: $link-pressed-color;
    transition: $transition-time;
  }

  &:hover {
    color: $link-hover-color;
    transition: $transition-time;
  }
}
</style>
