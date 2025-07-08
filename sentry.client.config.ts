// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://350653430464f72bf0ea48d264c28226@o4508909918945280.ingest.de.sentry.io/4508909924515920",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
