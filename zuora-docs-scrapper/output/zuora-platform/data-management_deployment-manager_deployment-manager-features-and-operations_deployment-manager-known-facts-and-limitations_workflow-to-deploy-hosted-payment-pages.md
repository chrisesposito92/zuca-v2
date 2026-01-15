---
title: "Workflow to deploy hosted payment pages"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/deployment-manager-known-facts-and-limitations/workflow-to-deploy-hosted-payment-pages"
product: "zuora-platform"
scraped_at: "2026-01-15T21:58:56.077Z"
---

# Workflow to deploy hosted payment pages

The article describes the workflow to deploy Hosted Payment Pages.

-   You can deploy Hosted Payment Pages by navigating to Settings > Payments.
-   Deployment Manager supports the create and update action on the Hosted Payment Pages.
-   The Payment Gateway, Payment Method, and Payment Type fields are mandatory to deploy both in the Source and Target tenant. Ensure that the same type is configured in both source and target tenant.
-   Manually deploy the Payment Gateway, Payment Method, and Payment Type in the target tenant before deploying the Hosted Payment Pages. Deployment Manager will support end-to-end deployment in the future release.
-   Hosted domains and Callback Paths are environment-specific. They must be manually updated after deployment.
