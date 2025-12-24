---
title: "Custom event and scheduled event deployment rules"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-features-and-operations/deployment-manager-known-facts-and-limitations/custom-event-and-scheduled-event-deployment-rules"
product: "zuora-platform"
scraped_at: "2025-12-24T05:12:31.553Z"
---

# Custom event and scheduled event deployment rules

The article outlines the rules managing custom events and custom scheduled events in the deployment manager service, including deployment recommendations and validation processes.

-   Custom events and custom scheduled events in the deployment manager service are available under notifications. .
-   For successful deployments, Zuora recommends deploying the Custom Fields and Custom Objects before deploying Custom Events.
-   Deployment manager compares and validates the custom events from the source through the name and base object of the custom event.
-   Post deployment, a new custom event is created on the base object in the target tenant.
-   Order Action and Order Action Processed Custom Event Notifications are available as out-of-the-box custom events in all the tenants. Hence they are not supported in Deployment Manager.
-   To migrate custom scheduled events, the Name field is used as the primary key if the custom scheduled event is configured in both the source and the target tenant. In this case, a new event is not created; instead, the deployment manager updates the existing scheduled event.
