import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://minhojan-world.site",
  adapter: cloudflare()
});