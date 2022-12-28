<template>
  <object
    v-if="url"
    type="image/svg+xml"
    :data="url"
    :height="height"
    :width="width"
    v-bind="$attrs"
  ></object>
</template>

<script>
const ICONS_PATH = new URL("~icons", import.meta.url);
const REGISTER_ICONS = {
  arrowBack: `${ICONS_PATH}/arrow-back.svg`,
  arrowNext: `${ICONS_PATH}/arrow-next.svg`,
  ok: `${ICONS_PATH}/class.svg`,
  exit: `${ICONS_PATH}/exit.svg`,
  google: `${ICONS_PATH}/google.svg`,
  pen: `${ICONS_PATH}/pen.svg`,
  quest: `${ICONS_PATH}/quest.svg`,
  vk: `${ICONS_PATH}/vk.svg`,
};

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

<style lang="scss" module></style>
