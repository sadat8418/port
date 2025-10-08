import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  build: {
    outDir: "dist", 
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        page2: resolve(__dirname, "src/index2.html"),
        page3: resolve(__dirname, "src/index3.html"),
        page4: resolve(__dirname, "src/index4.html"),
      },
    },
  },
  
  plugins: [tailwindcss()],
});
