// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://m2a9x45.github.io',
  base: '/docs-v2',
  integrations: [
    starlight({
      title: "Monzo",
      logo: {
        src: './src/assets/monzo.png',
        replacesTitle: true,
      },
      favicon: '/docs-v2/favicon.ico',
      customCss: [
        './src/styles/custom.css'
      ],
      sidebar: [
        {
          label: "UK 🇬🇧",
          items: [
            { label: "Account Information Services", slug: "uk/ais" },
            { label: "Payment Initiation Services", slug: "uk/pis" },
            { label: "Variable Recurring Payments", slug: "uk/vrp" },
            { label: "Confirmation of Funds", slug: "uk/cbpii" },
          ],
        },
        {
          label: "EU 🇪🇺",
          items: [
            { label: "PSD2 API", slug: "eu/eu" },
            { label: "Account Information Services", slug: "eu/ais" },
            { label: "Payment Initiation Services", slug: "eu/pis" },
          ],
        },
        {
          label: "Reference",
          items: [
            { label: "Errors", slug: "reference/errors" },
            { label: "Tokens", slug: "reference/tokens" },
          ],
        },
      ],
    }),
  ],
});
