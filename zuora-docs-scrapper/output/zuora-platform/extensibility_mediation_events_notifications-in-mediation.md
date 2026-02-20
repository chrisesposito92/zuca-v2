---
title: "Notifications in Mediation"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/events/notifications-in-mediation"
product: "zuora-platform"
scraped_at: "2026-02-20T17:49:10.341Z"
---

# Notifications in Mediation

Learn how to use notifications in Zuora Mediation to receive alerts about meter runs and Event Store operations, leveraging the Events and Notifications framework.

Use Notifications in Zuora Mediation to get proactive alerts about meter runs and Event Store operations. Instead of polling dashboards or logs, you can trigger email or callout notifications whenever a meter session changes status, when long‑running sessions are in progress, or when Event Store queries complete. Mediation notifications are built on the Events and Notifications framework and use Zuora custom events.

Zuora Mediation exposes the following events for notifications:

-   Meter Session Status Change
-   Meter Session Periodic Status Update
-   Event Store Query Status Changed
