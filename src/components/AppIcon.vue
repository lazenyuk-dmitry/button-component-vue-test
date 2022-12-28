<template>
  <img v-if="url" :src="url" :height="height" :width="width" v-bind="$attrs" />
</template>

<script>
import { REGISTER_ICONS } from "~constants";

export default {
  name: "AppIcon",
  props: {
    icon: {
      type: String,
      validator(value) {
        return Object.keys(REGISTER_ICONS).includes(value);
      },
    },
    height: {
      type: [Number, String],
      required: false,
    },
    width: {
      type: [Number, String],
      required: false,
    },
  },
  data() {
    return {
      iconURL: null,
    };
  },
  computed: {
    url() {
      const path = REGISTER_ICONS[this.icon];

      return path ? new URL(path, import.meta.url).href : null;
    },
  },
};
</script>
