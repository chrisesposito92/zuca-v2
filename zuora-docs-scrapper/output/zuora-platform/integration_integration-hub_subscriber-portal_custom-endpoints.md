---
title: "Custom endpoints"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/subscriber-portal/custom-endpoints"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:22.356Z"
---

# Custom endpoints

Discover how to set up custom endpoints to facilitate cross-origin resource sharing and streamline interactions with downstream systems for data integration and process automation.

Cross-Origin Resource Sharing (CORS) allows the restricted resources in a web application running at one origin to be accessed from different origins. Cross-site HTTP requests initiated from scripts in the client's browser (e.g. JavaScript in your customer's browser) are subject to much tighter restrictions for security reasons.

Custom endpoints allow you to define an endpoint that is internal or external to Zuora, and use your custom panels or custom pages to:

-   Push data collected in the portal to a downstream system.

-   Pull data from downstream systems to display or configure in the portal.

-   Call downstream systems to validate information provided by the user.

-   Trigger a downstream process, such as Zuora Workflow.
