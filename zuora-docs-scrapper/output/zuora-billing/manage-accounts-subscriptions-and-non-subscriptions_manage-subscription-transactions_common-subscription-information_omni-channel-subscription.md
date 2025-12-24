---
title: "Omni-Channel Subscription"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/omni-channel-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T05:20:39.940Z"
---

# Omni-Channel Subscription

This topic explains how to manage omni-channel subscriptions using API and Data Loader, integrating with platforms like Apple App Store and Google Play Store, while maintaining Zuora as the central source of truth.

You can use API or Data Loader to create and import subscriptions from external and source systems, such as the Apple App Store, Google Play Store, and Roku Store, and keep Zuora as the single source of truth for your subscriptions from all channels. The imported subscriptions persist as omnichannel subscriptions.

Note:

The Omni-Channel Subscription feature is in the Early Availability phase. To turn on this feature, submit a request to Zuora Global Support .

## Supported operations

You can create and import omnichannel subscriptions to the following tenant types:

-   Orders

-   Order Harmonization

-   Subscribe and Amend


However, you cannot use orders and order actions or amendments to create or amend the omnichannel subscriptions. Charge Metrics, Order Delta Metrics, and Order Metrics are not supported for omnichannel subscriptions.

You can only perform the following operations on omnichannel subscriptions:

-   Create or update an omnichannel subscription through the Create an omnichannel subscription API operation.

-   Create an omnichannel subscription through Data Loader .

-   Delete an omnichannel subscription through the Delete an omnichannel subscription API operation.

-   View and retrieve information on an omnichannel subscription through the following methods:

    -   UI: Account details page, Subscription page, and Subscription details page. For more information, see View omnichannel subscriptions .

    -   The Retrieve an omnichannel subscription API operation

    -   AQuA API

    -   Data Query

    -   Subscription Data Source
