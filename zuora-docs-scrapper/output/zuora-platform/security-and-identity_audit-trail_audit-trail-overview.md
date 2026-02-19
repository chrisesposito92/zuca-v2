---
title: "Audit Trail overview"
url: "https://docs.zuora.com/en/zuora-platform/security-and-identity/audit-trail/audit-trail-overview"
product: "zuora-platform"
scraped_at: "2026-02-19T03:23:00.144Z"
---

# Audit Trail overview

Learn how to audit user activities and product configurations across Zuora Billing, Payments, Finance, Revenue, and Platform.

You can audit user activities, product configurations, and more, in Zuora Billing, Payments, Finance, Revenue, and Platform in two ways.

-   [Audit trail using oneID](#concept-ac-836__title-22216)(UI-Driven): Filterable audit logs available in the OneID interface, with download/export directly from the UI.

-   [Audit trail using Data Query](#concept-ac-836__title-22222) (SQL-Driven):SQL-based retrieval of audit events within each Billing tenants' UIs.


## Audit Trail using OneID

Audit Trail in OneID logs identity and admin activities across your organization, including user and group changes, role updates, SSO/OAuth configuration changes, and login events.

Organization admins use the Audit Logs page in the OneID Admin Console to filter by event type (for example, login vs. settings changes), review field‑level changes, and export results for compliance or investigation. on, you run SQL‑style queries in Data Query (using the Audit Trail data model and sample queries) to filter, join, and export audit records for internal reviews and external audits.

## Audit Trail using Data Query

Audit Trail in Data Query lets you report on user activities, configuration changes, and business object modifications across Billing, Payments, Finance, and Platform by querying dedicated audit tables.

With the appropriate Audit Trail Access permission, you run SQL‑style queries in Data Query (using the Audit Trail data model and sample queries) to filter, join, and export audit records for internal reviews and external audits.
