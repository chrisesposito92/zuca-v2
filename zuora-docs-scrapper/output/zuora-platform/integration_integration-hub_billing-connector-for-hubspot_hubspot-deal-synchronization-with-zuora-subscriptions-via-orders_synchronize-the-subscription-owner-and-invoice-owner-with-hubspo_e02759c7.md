---
title: "Synchronize the subscription owner and invoice owner with HubSpot connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/hubspot-deal-synchronization-with-zuora-subscriptions-via-orders/synchronize-the-subscription-owner-and-invoice-owner-with-hubspot-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:26.240Z"
---

# Synchronize the subscription owner and invoice owner with HubSpot connector

You can specify the Invoice Owner and Subscription Owner on the subscription for every deal in Zuora using associations in HubSpot. The primary company on the deal is the subscription owner. Learn how to create this association to identify the invoice owner in HubSpot.

1.  Navigate to .
2.  Create a new association of type Deals to Companies with the label Invoice Owner and internal name invoice\_owner.
3.  To set the Invoice Owner contact for the company, navigate to Deal and choose the contact that you want using the association you created.
