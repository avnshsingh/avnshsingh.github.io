import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

const BASE_URL = "https://avnshsingh.github.io";

export default defineConfig({
  integrations: [tailwind(), icon()],
  site: BASE_URL,
});
