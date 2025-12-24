---
title: "On-Demand Sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm-sync-methods/on-demand-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T08:35:37.397Z"
---

# On-Demand Sync

Built using Salesforce SOAP API, On-demand Sync lets you trigger a data synchronization in Salesforce, from the Account Detail page UI or programmatically through an Apex global method.

On-demand Sync synchronizes specified billing accounts or products.

In each On-demand Sync session:

-   Up to 10 accounts and their related objects can be synced programmatically through an Apex method.

-   Up to eight accounts and their related objects can be synced from the Account Detail page UI.


## Requirements

The following configurations are required before invoking the On-demand Sync feature.

## Zuora Connector for Salesforce CRM Connection Settings

You must configure the endpoint, username, and password on the Connection Setup tab. The endpoint and user credentials will be used to access Zuora application. See Configure Your Connection Settings for setting up the Zuora Connector for Salesforce CRM connection.

## Zuora Quotes Connection Settings

The Salesforce org connection must be configured properly. The Salesforce org should be where the on-demand sync request will be initiated and should match the Salesforce org with the Zuora Connector for Salesforce CRM connection setup. See Zuora Connection Settings for setting up the Zuora Quotes connection.

## On-Demand Sync in Multi-entity Environment

To perform on-demand syncs from multiple entities, the Billing Entity (zqu\_\_BillingEntity\_\_c) records need to exist in your Salesforce org. Synchronize Accounts and Products from each Zuora entity tenant to create the Billing Entity records before you perform on-demand syncs.

## Limits

Zuora does not limit the number of syncs that you can perform. However, you might encounter Salesforce governor limits. See Zuora 360 Syncs and Salesforce Limits for Salesforce governor limits in regards to On-demand Sync.
