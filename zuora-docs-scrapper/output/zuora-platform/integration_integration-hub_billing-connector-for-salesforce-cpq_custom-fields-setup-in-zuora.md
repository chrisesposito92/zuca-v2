---
title: "Custom Fields Setup in Zuora"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-salesforce-cpq/custom-fields-setup-in-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:54.210Z"
---

# Custom Fields Setup in Zuora

Create custom fields in Zuora to enable data synchronization with Salesforce.

To enable data sync, create the following custom fields under each object in Zuora:

-   Contact
    -   crmId (API name: crmId\_\_c, Type: Text): Stores the ID of the SFDC account from which the contact was created.

    -   crmOrderId (API name: crmOrderId\_\_c, Type: Text): Stores the ID of the SFDC order for which the contact was created.

-   Subscription

    -   Contract ID (API Name: SFDC\_Contract\_\_c, Type: Text)
