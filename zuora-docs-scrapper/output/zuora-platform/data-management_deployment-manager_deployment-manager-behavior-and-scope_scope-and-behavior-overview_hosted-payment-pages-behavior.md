---
title: "Hosted payment pages behavior"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-behavior-and-scope/scope-and-behavior-overview/hosted-payment-pages-behavior"
product: "zuora-platform"
scraped_at: "2026-02-19T03:18:55.838Z"
---

# Hosted payment pages behavior

The article describes the workflow to deploy hosted payment pages.

-   You can deploy Hosted Payment Pages by navigating to Settings > Payments.

-   Deployment Manager supports the create and update action on the Hosted Payment Pages.

-   The Payment Gateway, Payment Method, and Payment Type fields are mandatory to deploy both in the Source and Target tenant. Ensure that the same type is configured in both source and target tenant.

-   Manually deploy the Payment Gateway, Payment Method, and Payment Type in the target tenant before deploying the Hosted Payment Pages. Deployment Manager will support end-to-end deployment in the future release.

-   Hosted domains and Callback Paths are environment-specific. They must be manually updated after deployment.
