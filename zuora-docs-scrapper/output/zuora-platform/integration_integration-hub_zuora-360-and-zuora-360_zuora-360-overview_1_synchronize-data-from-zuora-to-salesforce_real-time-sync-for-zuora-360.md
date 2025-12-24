---
title: "Real-Time sync for Zuora 360"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/synchronize-data-from-zuora-to-salesforce/real-time-sync-for-zuora-360"
product: "zuora-platform"
scraped_at: "2025-12-24T18:39:22.002Z"
---

# Real-Time sync for Zuora 360

This topic provide details on real-time synchronizing records from Zuora to Salesforce using Salesforce APIs.

Real-time Sync automatically synchronizes record changes from Zuora to Salesforce in real time. It monitors and listens to the record changes in Zuora database and synchronizes changed records to Salesforce once the number of record change events reaches the configured threshold. Because of this event-driven triggering, Real-time Sync synchronizes a small number of record changes more efficiently than Turbo Sync which requires a database scan to find the records changed. Real-time Sync uses Salesforce APIs.

Generally, Real-time Sync is a faster and more efficient way to sync records from Zuora to Salesforce. Turbo Sync starts to be faster than Real-time Sync when there are 10,000 events generated per minute.

Only the Accounts & Related Objects can be synchronized using Real-time Sync in Zuora UI.

Note:

Depending on your data volume, it can take up to a few hours for Zuora 360 to synchronize all data to Salesforce.

## Enable Real-Time Sync

Note:

Access to this feature requires a specific edition of Zuora. See Zuora Editions for details. Get in touch with our sales team through zuora.com for specific terms and pricing.

After the Real-time Sync permission is turned on for your tenant, you can enable Real-time Sync as described in Real-Time Sync .

A Turbo Sync session is automatically scheduled to run immediately before the first Real Time sync session runs. The Turbo Sync should complete with the "Finish" or "Finish with Errors" status at least once before the first Real-Time Sync session is triggered.

## Configure and Monitor Real-Time Sync in Zuora

The Real-time Sync trigger settings determine when the next Real-time Sync job is automatically triggered. A sync job occurs when either of the following trigger condition is met, whichever comes first.

-   Maximum Data Change Events Before Sync - Specifies how many data change events occur before the next sync happens.

-   Maximum Time Between Sync - Specifies the maximum time between two Real-time sync sessions. If the Maximum Data Change Events Before Sync has not occurred, a sync session will be automatically triggered when the Maximum Time Between Sync duration has elapsed since the last sync session.


After a Real-time Sync session is triggered, you can monitor the sync status in the Sync History table, the same as other sync types.

See Synchronize Data from Zuora for setting up to run Real-time Sync.

When you schedule Real-time Syncs, a Turbo Sync will be executed automatically before the first Real-time Sync session is triggered.

## Data Change Events to Trigger Real-Time Sync

When you set the trigger condition in the Maximum Data Change Events Before Sync field in the Real-time Sync configuration, a change to the following items is counted as one data change event:

-   Billing Accounts and Custom fields of Billing Accounts

-   Contact

-   Features: Only the Name field is monitored for change.

-   Invoice and Custom fields of Invoice

-   Key Metrics for billing accounts

-   Payment

-   Payment Gateway

-   Payment Invoice

-   Payment Method

-   Payment Term

-   Product

-   Subscription Rate Plan and Custom fields of Subscription Rate Plan

-   Refund

-   Refund Invoice

-   Subscription and Custom fields of Subscription

-   Subscription Product Rate Plan Charge and Its custom fields

-   Subscription Product Feature

-   Subscription Rate Plan Charge Tier

-   Tax Exemption

-   Unit Of Measure

-   Refund Invoice Payment


## Salesforce API Limits and Real-Time Sync

Real-time Sync is a Salesforce APIs-based sync and consumes Salesforce API limits. When setting the Real-time Sync triggering conditions, you need to consider the API limits in your Salesforce org.

When the number of changed records has reached this trigger condition value, an API-based sync is triggered. The lower the Maximum Data Change Events Before Sync trigger value is set, the more API limits will be consumed.

## Turbo Sync in Real-Time Sync Mode

Even in the Real-time Sync mode, Zuora 360 automatically switches to use Turbo Sync in the following cases:

-   Manual Syncs


Manual Syncs are performed via Turbo Sync.

-   Sync Clean-ups


Sync Clean-ups are performed via Turbo Sync. And after a sync clean up, Turbo Sync is triggered for a full sync before the first Real-time Sync session is triggered.

-   Object and field migration as a result of Zuora 360 package upgrade


When you upgrade to a newer version of Zuora 360 package, Turbo Sync handles the object-level and field-level data migration.

-   Switching from the Scheduled Sync mode or None to the Real-time Sync mode


A Turbo Sync session automatically performs a full sync before the first Real-time Sync session is triggered.

-   High event processing latency


When the event processing latency of Real-time Sync event is too high, currently 15 minutes, Real-time Sync is automatically switched to Turbo Sync. For example, when a bulk operation, such as Bill or Payment Run is performed, Real-time Sync will automatically switch to Turbo Sync and save your tenant's API usage.

When a switch from Real-time Sync to Turbo Sync happens, you get a message in UI and a log entry in Sync History.

When the latency is back to normal and the last sync session syncs less than 10,000 records, Turbo Sync will be automatically switched back to Real-time Sync.

​
