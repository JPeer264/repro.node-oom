// @ts-check
const Sentry = require("@sentry/node");

// Ensure to call this before importing any other modules!
Sentry.init({
  dsn: "https://68b15e200f59b55032af16edc2a495d2@o447951.ingest.us.sentry.io/4510141899079680",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  _experiments: {
    enableMetrics: true,
  },
  integrations: [Sentry.asyncIntegration()],
  defaultIntegrations: false,
  debug: true,
});
