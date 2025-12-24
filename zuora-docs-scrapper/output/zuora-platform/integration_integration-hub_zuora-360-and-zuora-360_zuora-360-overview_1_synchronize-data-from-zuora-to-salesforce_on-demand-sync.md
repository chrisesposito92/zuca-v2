---
title: "On-Demand sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/on-demand-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:29.455Z"
---

# On-Demand sync

Learn about on-demand sync that allows Salesforce users to trigger data synchronization for billing accounts and products using the Salesforce SOAP API.

Built using Salesforce SOAP API, On-demand Sync lets you trigger a data synchronization in Salesforce, from the Account Detail page UI or programmatically through an Apex global method.

On-demand Sync synchronizes specified billing accounts or products.

In each On-demand Sync session:

-   Up to 10 accounts and their related objects can be synced programmatically through an Apex method.

-   Up to eight accounts and their related objects can be synced from the Account Detail page UI.

-   Only one On-Demand Sync operation can be executed per account at any given time. If multiple sync requests are submitted, only the first request will be processed to maintain data integrity. To avoid cancellations and ensure data consistency, it is recommended to wait at least 30 minutes before submitting additional On-Demand Sync requests for the same account.


## Requirements

On-demand Sync is available for Zuora 360 package version 2.2 and above. The following configurations are required before invoking the On-demand Sync feature.

## Zuora 360 Connection Settings

You must configure the endpoint, username, and password on the Connection Setup tab. The endpoint and user credentials will be used to access Zuora application. See Configure Your Connection Settings for setting up the Zuora 360 connection.

## Zuora Quotes Connection Settings

The Salesforce org connection must be configured properly. The Salesforce org should be where the on-demand sync request will be initiated and should match the Salesforce org with the Zuora 360 connection setup. See Zuora Connection Settings for setting up the Zuora Quotes connection.

## On-Demand Sync in Multi-entity Environment

To perform on-demand syncs from multiple entities, the Billing Entity (zqu\_\_BillingEntity\_\_c) records need to exist in your Salesforce org. Synchronize Accounts and Products from each Zuora entity tenant to create the Billing Entity records before you perform on-demand syncs.

## Scope

Zuora does not limit the number of syncs that you can perform. However, you might encounter Salesforce governor limits. See Zuora 360 Syncs and Salesforce Limits for Salesforce governor limits in regards to On-demand Sync.
