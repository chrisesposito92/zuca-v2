---
title: "HubSpot synchronization with custom fields"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/hubspot-synchronization-with-custom-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:33.791Z"
---

# HubSpot synchronization with custom fields

Field mapping combinations are available to synchronize custom fields to standard Zuora fields. Learn about key details for custom field synchronization.

The Billing HubSpot connector facilitates the synchronization of custom fields from HubSpot to Zuora. This connector offers the flexibility to establish and modify field configurations. It's important to note that the synchronization of custom field data occurs solely during the creation of objects in Zuora. Subsequent updates to this data via the connector are not supported.

## Available field mapping

| Source | Target | Custom to custom | Standard to custom | Custom to standard | Standard to standard |
| --- | --- | --- | --- | --- | --- |
| Company | Account |  |  |  |  |
| Contact | Contact |  |  |  |  |
| Product | Product |  |  |  |  |
| Product | ProductRatePlan |  |  |  |  |
| Product | ProductRatePlanCharge |  |  |  |  |
| Deal | Subscription |  |  | - | - |
