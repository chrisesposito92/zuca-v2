---
title: "Data sources and Data Query"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders-harmonization/overview-of-orders-harmonization/data-sources-and-data-query"
product: "zuora-billing"
scraped_at: "2025-12-24T05:32:29.627Z"
---

# Data sources and Data Query

This article discusses the impact of Orders Harmonization on data queries, Zuora CPQ, Zuora 360 Sync, and other integrations.

This article introduces Orders Harmonization.

No impact if your data query (or any data source export) is not dependent on the Amendment type.

However, if your data query depends on the Amendment type, Zuora recommends you switch it to the order action available in the Order Action data source .

No impact if your org is on Zuora CPQ version 8.1 and above, and you continue to use continues to make Subscribe and Amend API calls to create and manage subscriptions on the Billing side.

If your org is on Zuora CPQ version 8.1 and above, and you want your CPQ org integrated with the Billing tenant to make Orders API calls to create and manage subscriptions on the Billing side, configure the Enable Order for CPQ setting to Yes in Billing Settings > Define Default Subscription and Order Settings on your tenant.

If your org is on Zuora CPQ version below 8, you need to upgrade to the Zuora CPQ 9 version to enable Orders in your org.

When your Zuora Billing tenants have Orders Harmonization enabled, Zuora CPQ continues to make Subscribe and Amend API calls to create and manage subscriptions on the Billing side.

No impact. You can continue to use Zuora 360 Sync to sync the Zuora Billing data from Zuora to Salesforce.

Orders related objects are not supported with Zuora 360 Sync.

No impact. You can continue to use Zuora Salesforce Connector which is on Subscribe and Amend APIs.

No impact.

You can continue to use amendment action to set actions based on certain conditions. However, if a subscription is suspended by Orders API, it cannot be resumed through the Subscribe and Amend APIs. See Limitations in Orders for Zuora Billing .

## Zuora CPQ

No impact if your org is on Zuora CPQ version 8.1 and above, and you continue to use continues to make Subscribe and Amend API calls to create and manage subscriptions on the Billing side.

If your org is on Zuora CPQ version 8.1 and above, and you want your CPQ org integrated with the Billing tenant to make Orders API calls to create and manage subscriptions on the Billing side, configure the Enable Order for CPQ setting to Yes in Billing Settings > Define Default Subscription and Order Settings on your tenant.

If your org is on Zuora CPQ version below 8, you need to upgrade to the Zuora CPQ 9 version to enable Orders in your org.

When your Zuora Billing tenants have Orders Harmonization enabled, Zuora CPQ continues to make Subscribe and Amend API calls to create and manage subscriptions on the Billing side.

## Zuora 360 Sync

No impact. You can continue to use Zuora 360 Sync to sync the Zuora Billing data from Zuora to Salesforce.

Orders related objects are not supported with Zuora 360 Sync.

## Zuora Salesforce Connector

No impact. You can continue to use Zuora Salesforce Connector which is on Subscribe and Amend APIs.

## Analytics

No impact.

## Workflow

You can continue to use amendment action to set actions based on certain conditions. However, if a subscription is suspended by Orders API, it cannot be resumed through the Subscribe and Amend APIs. See Limitations in Orders for Zuora Billing.

## Netsuite Connector

No impact on any existing integration from Zuora to Netsuite.
