---
title: "Synchronize billing trigger condition with HubSpot connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/hubspot-deal-synchronization-with-zuora-subscriptions-via-orders/synchronize-billing-trigger-condition-with-hubspot-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:31.461Z"
---

# Synchronize billing trigger condition with HubSpot connector

You can define a billing trigger condition for each product using a property. Learn how to create this property in HubSpot.

If no specific billing trigger condition is defined, the default billing trigger is "Upon Contract Effective".

1.  Navigate to .
2.  Create a property with label Billing Start Trigger and internal name billing\_start\_trigger.
3.  Configure the picklist to include the following options as the label and internal value:

    ContractEffective

    ServiceActivation

    CustomerAcceptance

4.  Save your entries.
5.  Within the Zuora configuration, add the following code:

    { "sourceObject": "LineItem", "targetObject": "ChargeOverride", "fields": \[ { "source": "billing\_start\_trigger", "target": "startDate/triggerEvent" } \] }

6.  To activate the billing trigger, set the condition on the deal line item during the initial synchronization.

    Each product within a deal can have its unique trigger condition.
