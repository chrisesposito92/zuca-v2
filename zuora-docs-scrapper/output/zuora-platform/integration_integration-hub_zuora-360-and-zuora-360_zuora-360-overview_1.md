---
title: "Zuora 360 overview"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1"
product: "zuora-platform"
scraped_at: "2025-12-24T18:38:46.143Z"
---

# Zuora 360 overview

This topic summarizes the Zuora 360 sync types.

Note:

To take advantage of more advanced features, we recommend that you upgrade to Zuora Connector for Salesforce CRM.

Using Zuora 360, you can send account, subscription, invoice, and product catalog data from Zuora to Salesforce. This provides a 360-degree view of customer account, subscription, billing, and payment information that you can incorporate into your Salesforce applications. For detail information on objects and fields synchronized, see Sync Field Reference .

Note:

To sync product catalog data, you must have the Zuora Quotes managed package installed for your Salesforce org. For more information, see Zuora Quotes .

The Zuora 360 Sync for Account and Related Objects synchronizes Billing Accounts and their related objects, e.g., Subscription, Invoices, Payments, Subscription Charges, Payment Methods, Refunds, from Zuora to Salesforce. It only synchronizes Billing Accounts (and their related objects) that are associated with a Salesforce CRM Account ID. Before you synchronize data, map the Salesforce CRM Accounts to the Zuora Billing Accounts using the CRM Account ID field in Zuora. See Map Salesforce Accounts to Zuora Accounts for detailed information and steps.

The table below summarizes Zuora 360 sync types. The rest of this article describes the technologies and sync types in more detail.

|  | Manual Sync | On-Demand Sync | Scheduled Sync | Real-Time Sync |
| --- | --- | --- | --- | --- |
| Sync Technology Used | Turbo Sync | API-based Sync | Turbo Sync | API-based Sync |
| How Triggered | Manual | On demand | Scheduled | Event-driven |
| Triggered From | Zuora UI | Salesforce UI or Global Method | Zuora UI | Zuora UI |
| Object Types Supported | Accounts & Related ObjectsProduct Catalog | Accounts & Related ObjectsProduct Catalog | Accounts & Related ObjectsProduct Catalog | Accounts & Related Objects |

Zuora 360 uses the following sync technologies to optimize each type of synchronization operations for response time, volume of data, and sync performance.

Turbo Sync

Upon a scheduled request or a manual request, Turbo Sync performs a full or incremental sync of data from Zuora to Salesforce via Salesforce Bulk API. Turbo Sync is optimized for volume and performance.

It also offers resume-ability and monitoring ability within Salesforce.

See [Turbo Sync](/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview/synchronize-data-from-zuora-to-salesforce/about-turbo-sync) for more information about Turbo Sync.

See Salesforce API Limits and Zuora 360 Syncs about how Turbo Sync consumes Salesforce Bulk API batches.

API-based Sync

API-based Sync is optimized to synchronize record changes using Salesforce SOAP APIs. This type of sync sessions consume the Salesforce API calls. If using Real-time Syncs, you should configure the trigger value according to the API limit for your Salesforce org. See Salesforce API Limits and Zuora 360 Syncs about how API-based Sync consumes Salesforce API calls.

All sync types support full syncs and incremental syncs according to the following conditions:

Full Sync

A full sync session synchronizes all data updated since 2000-01-01. A full sync is launched either when this is the very first sync session, or when this is the first sync session after a sync clean-up operation.

All syncs for Product Catalog are full syncs.

Incremental Sync

An incremental sync session synchronizes all data updated since the last sync session.

Currently, you can perform incremental syncs only for Accounts & Related Objects.

## Zuora 360 Sync Types

In Zuora, the following sync types are available:

Manual Sync

You can start a sync session manually from the Zuora application.

See Synchronize Data from Zuora about starting a Manual Sync session.

Scheduled Sync

You can schedule a sync session in the Zuora application to run every 24 hours or every two hours.

See Synchronize Data from Zuora about configuring Scheduled Sync.

On-Demand Sync

You can trigger an On-demand Sync from the Account Detail UI in Zuora CPQ or programmatically through an Apex global method in Zuora 360.

See On-demand Sync for detail information about [On-demand Sync](/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview/synchronize-data-from-zuora-to-salesforce/on-demand-sync).

Real-Time Sync

Real-time Sync is to synchronize record changes in Zuora automatically to Salesforce in real time. Instead of polling the Zuora database for the record changes, it watches the record changes in Zuora database and automatically synchronizes only the changed records to Salesforce once the number of record change events reaches the configured threshold.

See Real-time Sync for more information about [Real-time Sync](/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview/synchronize-data-from-zuora-to-salesforce/real-time-sync).

## Parallel Sync Sessions

The following conditions apply to parallel execution of sync sessions in Zuora CPQ.

-   When a manual Product Catalog sync session is running, a new Product Catalog sync session is not allowed.

-   When a manual or scheduled Account & Related Objects sync session is running, a new manual or real-time Account & Related Objects sync session is not allowed.

-   A Product Catalog sync session, manually triggered or On-demand, can be executed in parallel with an Account & Related Objects sync session, manually triggered, scheduled, Real-time, or On-demand.

-   An On-demand Sync session on either Product Catalog or Account & Related Objects can run in parallel with any type of sync sessions.
