// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "What the Bitz";
export const SITE_DESCRIPTION =
  "Periodic word soup delivered directly from my brain to the page";
export const TWITTER_HANDLE = "@bitznbrewz";
export const MY_NAME = "Bitznbrewz";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
