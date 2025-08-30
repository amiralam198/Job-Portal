// Import with `import * as Sentry from "@sentry/node"` if you are using ESM

import * as Sentry from "@sentry/node"
import {nodeProfilingIntegration} from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://42cdf6c66eb72eadaea40d23039c15e2@o4509933402390528.ingest.us.sentry.io/4509933407174656",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  integrations:[
    nodeProfilingIntegration(),
    Sentry.mongoIntegration()
  ],
//   tracesSampleRate: 1.0,
});

Sentry.profiler.startProfiler();