---
title: "Work with other features"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/single-version-subscription/overview-of-single-version-subscription/work-with-other-features"
product: "zuora-billing"
scraped_at: "2025-12-24T05:29:31.176Z"
---

# Work with other features

This document explains how change history integrates with various features, including Events and Notifications, and Zuora CPQ.

The following table lists how change history works with other features.

| Feature Name | Description |
| --- | --- |
| Events and Notifications | When defining custom event trigger conditions for the subscription object for the single version subscriptions:for creating subscriptions, you still can use changeType = INSERTfor updating subscriptions, you must use changeType = UPDATE since the updates apply to the unique subscription objectFor more information, see Custom event triggers . |
| Zuora CPQ | The Single Version Subscription feature is supported in legacy CPQ and CPQ X. |
