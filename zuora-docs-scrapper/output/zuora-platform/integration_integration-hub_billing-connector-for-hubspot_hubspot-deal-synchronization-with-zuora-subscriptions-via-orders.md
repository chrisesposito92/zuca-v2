---
title: "HubSpot deal synchronization with Zuora subscriptions via orders"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-hubspot/hubspot-deal-synchronization-with-zuora-subscriptions-via-orders"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:21.414Z"
---

# HubSpot deal synchronization with Zuora subscriptions via orders

The HubSpot connector syncs deals from HubSpot to a Zuora Subscription using Order execution. Learn about key details and prerequisites for deal synchronization.

-   During deal synchronization in HubSpot, all deal line items, associated contacts, and Closed Won dates are synchronized and sent to Zuora.

-   When it comes to deals, it's important to consider whether contacts are included or not.

-   If the relevant company has not been synchronized during the deal synchronization process, the connector prioritizes syncing of the company information first.

-   If the Term is 0 in a deal, Zuora automatically creates an evergreen subscription.

-   Every HubSpot deal is connected to a corresponding subscription in Zuora through an Order process. Each deal item from HubSpot is carefully linked to a charge in Zuora. The information in the deal line items takes precedence over specific charges in Zuora during subscription creation.

-   By default, the company associated with the deal is linked to the Invoice Owner and Subscription Owner fields.

-   The Order date and contract effective date in Zuora are synchronized with the Closed Won date in HubSpot.

-   The connector supports common subscription lifecycle management use cases such as upsells, downsells, and changes in quantity or price by updating the existing deal and resyncing it. In such cases, the updated date on the deal line is considered as the trigger date for amendments.

-   The deal is moved to Closed Lost and synced again to cancel a subscription.

-   The deal line item can be modified to any recurring billing frequency (monthly, quarterly, semi-annual, or annual) for recurring charges in Zuora.

-   For customers quoting in multiple currencies, the connector configures the currency from the deal to the subscription in Zuora, enabling global businesses.


## Prerequisites

-   The deal status must be Closed Won to enable data synchronization with Zuora.

-   Deals must be associated with a company.

-   The contacts associated with the deal must be from the same company.

-   For synchronization, the terms specified in the deal items must align.

-   All the deal items in the deal must belong to the same term length, which can be specified in the Term field on each deal line item. The subscription start date and length remains the same for all the deal items.


## Deal synchronization

There are two methods to synchronize a deal:

-   Sync the deal from the company from the Sync Company and Deal button on the company interface. This action syncs all deals associated with a specific company.

-   Sync individual deals from the Sync Deal button on the CRM card for each individual deal.
