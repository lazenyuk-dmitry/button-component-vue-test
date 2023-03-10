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
    :class="[$style.btn, colorClass, { [$style['btn--multi']]: icon }]"
    type="button"
    v-bind="$attrs"
  >
    <AppIcon v-if="icon" :icon="icon" :class="$style.icon" />

    <slot v-else />

    <span v-if="timerCounter" :class="$style.btnTimer">
      {{ getTimerString }}
    </span>
  </button>
</template>

<script>
import AppIcon from "@/components/AppIcon.vue";
import { REGISTER_ICONS } from "~constants";
import { numFormatter } from "~helpers";

export default {
  name: "AppButton",
  components: {
    AppIcon,
  },
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
          "quest",
        ].includes(value);
      },
    },
    icon: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(REGISTER_ICONS).includes(value);
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
    // Timer value in milliseconds
    timer: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      timerStepMs: 1000, // Timer step in milliseconds. Now equal 1sec.
      timerCounter: 0,
      timerId: null,
    };
  },
  watch: {
    timer: {
      handler(value) {
        let counter = value;
        this.timerCounter = value;

        if (value === 0) {
          return;
        }

        this.timerId = setInterval(() => {
          counter = counter <= 0 ? 0 : counter - this.timerStepMs;
          this.timerCounter = counter;

          if (counter === 0) {
            clearInterval(this.timerId);
            this.$emit("timerEnd");
          }
        }, this.timerStepMs);
      },
      immediate: true,
    },
  },
  computed: {
    colorClass() {
      return this.$style[`btn--${this.color}`];
    },
    getLinkHref() {
      return this.to ? this.$router.resolve(this.to).href : this.href;
    },
    getTimerString() {
      const milliseconds = this.timerCounter;

      const seconds = Math.floor((milliseconds / 1000) % 60);
      const minutes = Math.floor((milliseconds / (60 * 1000)) % 60);

      return `${numFormatter(minutes, 2)}:${numFormatter(seconds, 2)}`;
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
  border-radius: 7% 6% 8% 7% / 37% 44% 35% 54%;
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
  &--quest {
    background: $color-quest;
  }
  &:disabled {
    background: $color-disabled;
    color: $btn-text-color-second;
    cursor: not-allowed;
    opacity: 1;
    transition: $transition-time;
  }

  &--multi {
    width: 60px;
    height: 60px;
    padding: 5px;
    border-radius: 35% 35% 31% 35% / 36% 40% 48% 36%;

    @media (max-width: $mobile-media) {
      width: 52px;
      height: 52px;
    }
  }
}

.btnTimer {
  min-width: 56px;
  padding: 1px 5px;
  margin-left: 6px;
  border-radius: 19% 20% 19% 24% / 46% 55% 39% 56%;
  background-color: $color-danger;
  color: $btn-text-color;
}

// Link button
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

// Icon
.icon {
  max-width: 42px;
  max-height: 42px;

  @media (max-width: $mobile-media) {
    max-width: 24px;
    max-height: 24px;
  }
}
</style>
