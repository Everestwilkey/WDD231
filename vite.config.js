import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // Specifies that "src" is the root folder
  build: {
    outDir: "../dist", // Outputs files to "dist" in the project root
    emptyOutDir: true, // Clears the "dist" folder before building
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"), // Main entry point
        conditions: resolve(__dirname, "src/conditions.html"), // Additional page
        visitorCenter: resolve(__dirname, "src/visitor-center.html"), // Add any additional pages here
      },
    },
  },
});
