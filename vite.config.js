import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
// https://vite.dev/config/
export default defineConfig({
  root: "src",
 build: {
    outDir: "../dist", // build outside of src
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        page2: resolve(__dirname, "src/index2.html"),
        page3: resolve(__dirname, "src/index3.html"),
        page4: resolve(__dirname, "src/index4.html"),
      },
    },
  },
  
  plugins: [tailwindcss()],
});
