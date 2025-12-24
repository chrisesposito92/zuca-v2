---
title: "Synchronize service activation and customer acceptance dates with HubSpot connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/hubspot-deal-synchronization-with-zuora-subscriptions-via-orders/synchronize-service-activation-and-customer-acceptance-dates-with-hubspot-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:28.458Z"
---

# Synchronize service activation and customer acceptance dates with HubSpot connector

Properties on deals are used to specify service activation and customer acceptance dates. Learn how to create this property in HubSpot.

The contract effective date is automatically set as the Closed Won Date on HubSpot.

1.  Navigate to .
2.  Create a property with label Service Activation Date and internal name z\_service\_activation\_date.

    Label Sold To with the internal name sold\_to\_contact\_deal.

3.  Create a property with label Customer Activation Date and internal name z\_customer\_activation\_date.

    The default setting in Zuora does not permit changing the trigger dates once the subscription is active.

    The subscription status in Zuora can change based on the Subscription and Order settings in Zuora.
