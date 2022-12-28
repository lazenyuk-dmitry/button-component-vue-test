import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "button-component-vue-test",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~fonts": fileURLToPath(new URL("./src/assets/fonts", import.meta.url)),
      "~icons": fileURLToPath(new URL("./src/assets/icons", import.meta.url)),
      "~styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      "~helpers": fileURLToPath(new URL("./src/helpers", import.meta.url)),
      "~constants": fileURLToPath(new URL("./src/constants", import.meta.url)),
      "~examples": fileURLToPath(
        new URL("./src/code-examples", import.meta.url)
      ),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "~styles/_variables.scss";
        `,
      },
    },
  },
});
