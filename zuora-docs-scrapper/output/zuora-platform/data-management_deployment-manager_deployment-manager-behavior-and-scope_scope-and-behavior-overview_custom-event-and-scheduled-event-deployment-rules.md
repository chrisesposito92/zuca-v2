---
title: "Custom event and scheduled event deployment rules"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-behavior-and-scope/scope-and-behavior-overview/custom-event-and-scheduled-event-deployment-rules"
product: "zuora-platform"
scraped_at: "2026-02-19T03:19:11.739Z"
---

# Custom event and scheduled event deployment rules

The article outlines the rules managing custom events and custom scheduled events in the deployment manager service, including deployment recommendations and validation processes.

-   Custom events and custom scheduled events in the deployment manager service are available under notifications. For more information, see [Custom and Scheduled Events](/zuora-platform/extensibility/events-and-notifications/custom-scheduled-events/view-custom-events-and-custom-scheduled-events).

-   For successful deployments, Zuora recommends deploying the Custom Fields and Custom Objects before deploying Custom Events.

-   Deployment manager compares and validates the custom events from the source through the name and base object of the custom event.

-   Post deployment, a new custom event is created on the base object in the target tenant.

-   Order Action and Order Action Processed Custom Event Notifications are available as out-of-the-box custom events in all the tenants. Hence they are not supported in Deployment Manager.

-   To migrate custom scheduled events, the Name field is used as the primary key if the custom scheduled event is configured in both the source and the target tenant. In this case, a new event is not created; instead, the deployment manager updates the existing scheduled event.
