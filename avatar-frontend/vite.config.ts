import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { createHtmlPlugin } from "vite-plugin-html";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "env");

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            ...env,
            MODE: mode,
          },
        },
      }),
    ],
    resolve: {
      alias: { "@": path.resolve(__dirname, "src/") },
    },
  };
});
