import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  server: { port: 8080 },
});