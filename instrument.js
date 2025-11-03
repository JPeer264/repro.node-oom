const Sentry = require("@sentry/node");

// Ensure to call this before importing any other modules!
Sentry.init({
  dsn: "https://22dafb110691e9326c3e282ef6fe841e@o447951.ingest.us.sentry.io/4509513526542336",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  _experiments: {
    enableMetrics: true,
  },
  // debug: true,
});
