---
title: "Real-time sync for Zuora 360+"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/work-with-zuora-360/real-time-sync-for-zuora-360"
product: "zuora-platform"
scraped_at: "2025-12-24T18:38:30.780Z"
---

# Real-time sync for Zuora 360+

Real-time Sync for Zuora 360+ ensures immediate synchronization of record changes from Zuora to Salesforce, leveraging Salesforce APIs and considering API limits.

Real-time Sync automatically synchronizes record changes from Zuora to Salesforce in real time. It monitors and listens to the record changes in Zuora database and synchronizes changed records to Salesforce.

Real-time Sync uses Salesforce APIs. In the sync process, Zuora bundles 200 event triggers and posts them to Salesforce.

Note:

Depending on the objects enabled for synchronization and your data volume, it can take up to a few hours for Zuora 360+ to synchronize all data to Salesforce.

## Salesforce API Limits and Real-Time Sync

Real-time Sync is a Salesforce APIs-based sync and consumes Salesforce API limits. You need to consider the API limits in your Salesforce org.

Unlike Zuora 360, with Zuora 360+ enabled, you cannot configure the Maximum Data Change Events Before Sync setting or the Maximum Time Between Sync setting.
