---
title: "Synchronize Bill To and Sold To on subscriptions with HubSpot connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/hubspot-deal-synchronization-with-zuora-subscriptions-via-orders/synchronize-bill-to-and-sold-to-on-subscriptions-with-hubspot-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:23.492Z"
---

# Synchronize Bill To and Sold To on subscriptions with HubSpot connector

You can specify the Bill To and Sold To contacts for every deal in Zuora using associations in HubSpot. Learn how to create this association in HubSpot.

1.  Navigate to .
2.  Create a new association of type Contacts to Deals with the following configuration:

    Label Bill To with the internal name bill\_to\_contact\_deal.

    Label Sold To with the internal name sold\_to\_contact\_deal.

3.  To set the Bill To contact for the company, navigate to Deal and choose the contact that you want using the association you created.

    The contact must be associated with the same company as the deal.

4.  Follow the same step to set the Sold To contact.
