import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
  },plugins: [tailwindcss()],
});
