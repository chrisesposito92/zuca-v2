---
title: "Zuora 360 syncs and Salesforce limits"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview_1/zuora-360-syncs-and-salesforce-limits"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:10.580Z"
---

# Zuora 360 syncs and Salesforce limits

This article describes how Zuora 360 Syncs consume the Salesforce APIs and Bulk APIs. Use the information presented to plan your sync sessions so that you do not exceed the Salesforce API limits or Bulk API limits.

## Salesforce Limits

This section summarizes the Salesforce limits that Zuora CPQ users should consider when planning and performing Zuora 360 Syncs.

Note:

Zuora CPQ packages are Salesforce certified managed packages listed on the AppExchange. These packages do not count against your system limits.

## API-Based Sync

For Salesforce Professional and Enterprise, each organization has a limit of 1,000 API calls per user license per day. Review the limits for your Salesforce edition in Salesforce API Limit .

## Turbo Sync

Salesforce allows 5,000 Bulk API batches per user license per day.

Each Turbo Sync, such as Manual Sync or Scheduled Sync, session consumes:

-   1 Bulk API batch per every 9000 records of each object type to be DELETED

-   1 Bulk API batch per every 9000 records of each object type to be UPSERTED


## Salesforce API Limits and API-Based Sync

When you perform an API-based sync, such as On-demand or Real-time Sync with both 360 and 360+, the sync session consumes Salesforce API calls. Use the usage information in the above Salesforce Limits section to plan your sync sessions so that you do not exceed your API limit. See Real-Time Sync for detailed information about how the Real-time Sync trigger setting affects the API consumption.

## Salesforce Bulk API Limits and Turbo Sync

When you perform a Turbo Sync, such as Manual Sync or Scheduled Sync, the sync session consumes Salesforce Bulk API batches. Use the usage information in the above Salesforce Limits section to plan your sync sessions so that you do not exceed your Bulk API limits.

​​For example:

If a sync session has 1000 billing accounts, 5000 subscriptions, and 20000 subscription charges to be upserted, and 2000 subscription and 8000 subscription charges to be deleted, the sync session will consume the 7 Bulk API batches:

-   Upsert 1,000 billing accounts: ceil (1000 / 9000) = 1 batch

-   Upsert 5,000 subscriptions: ceil (5000 / 9000) = 1 batch

-   Upsert 20,000 subscription charges: ceil (20000/ 9000) = 3 batches

-   Delete 2,000 subscriptions: ceil (2000 / 9000) = 1 batch

-   Delete 8,000 subscription charges: ceil (2000 / 9000) = 1 batch

-   Total: 1 + 1 + 3 + 1 + 1 = 7 Bulk API batches
