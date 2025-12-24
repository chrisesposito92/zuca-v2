---
title: "Omnichannel subscriptions view"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/omni-channel-subscription/omnichannel-subscriptions-view"
product: "zuora-billing"
scraped_at: "2025-12-24T05:20:42.639Z"
---

# Omnichannel subscriptions view

This topic explains how to view omnichannel subscription information through the UI and API.

## View omnichannel subscriptions on account details page

You can view information on omnichannel subscriptions through UI or API. This article introduces how to view information through UI. To retrieve information on omnichannel subscriptions through API, see Retrieve an omnichannel subscription .

In the Orders & Subscriptions section of the account details page, click the Omni-Channel Subscriptions tab.

The following table lists information about the omnichannel subscription.

| Field | Description | Zuora generated, or customer entered according to external system |
| --- | --- | --- |
| Customer Account | The name of the customer account (also referred to as a billing account) that subscribes to your products or services. | Could be zuora generated, or customer entered |
| Subscription Number | The unique identifier for the subscription. It is also referred to as the subscription code. For example，A-S00000080. | Zuora generated |
| Product | Product name. | Customer entered |
| Rate Plan | Name of the rate plan in the product. | Zuora generated |
| Transaction ID | The original transaction ID of the notification. This must be unique in the tenant. | Customer entered |
| Source System | The source app store from which the channel subscription originated. For example, Apple, Google, Roku, Amazon. | Customer entered |
| Activation Date | When the external subscription was activated on the external platform. | Customer entered |
| Next Renewal Date | The date when the subscription is scheduled to renew. | Customer entered |
| Status | The status of an omnichannel subscription: Active , Cancelled , or Suspended .Note that the corresponding API field is state . | Zuora generated |

## View omnichannel subscriptions on Subscription page

Note:

You cannot click Create Order in this tab to create an order for the omnichannel subscriptions.

The Source column on the Subscriptions page shows whether a subscription is a Standard or OminiChannel subscription.

To add the Source column to the Subscriptions page, go to the UI Builder , and turn on the Source toggle in the Columns section.

The following table lists information about the omnichannel subscription.

| Field | Description | Zuora generated, or customer entered according to external system |
| --- | --- | --- |
| Subscription Number | The unique identifier for the subscription. It is also referred to as the subscription code. For example，A-S00000080. | Zuora generated |
| Customer Name | The name of the customer account (also referred to as a billing account) that subscribes to your products or services. | Could be zuora generated, or customer entered |
| Contract Effective Date | The date on which your subscription, or contract, is effective. | Zuora generated |
| Source | Whether the subscription is a standard or omnichannel subscription. | Customer entered |
| Status | The status of an omnichannel subscription: Active , Cancelled , or Suspended .Note that the corresponding API field is state . | Zuora generated |

## View details of omnichannel subscriptions on subscription details page

On the subscription details page, next to the subscription number, the name of the external and source system, for example, Apple, is displayed.

The subscription details page includes the Basic Information and Products sections.

The following table lists information about the omnichannel subscription in the Basic Information section.

| Field | Description | Zuora generated, or customer entered according to external system |
| --- | --- | --- |
| Customer Account | The name of the customer account (also referred to as a billing account) that subscribes to your products or services. | Could be zuora generated, or customer entered |
| Subscription Starts on | The date when the subscription term starts. This date is the same as the start date of the original term, which isn't necessarily the start date of the current or new term. | Customer entered |
| Subscription Ends on | The date when the subscription expires or is scheduled to expire. | Customer entered |
| External Application Id | Unique identifier of application associated with the subscription in the external system. | Customer entered |
| External Bundle Id | Unique identifier of the application bundle associated with the subscription in the external system. | Customer entered |
| External Subscriber Id | Unique identifier of the subscriber associated with the subscription in the external system. | Customer entered |
| External Subscription Id | Unique identifier of the subscription in the external system. | Customer entered |
| Original Purchase Date | The value of externalPurchaseDate when this external subscription was initially created. | Customer entered |
| Replaced By Product Id | The product ID is going to replace the existing Product ID . | Customer entered |
| In-App Ownership Type | Such as purchased, family_shared. | Customer entered |
| Zuora Subscription Number | The unique identifier for the subscription. It is also referred to as the subscription code. For example，A-S00000080. | Zuora generated |

The following table lists information about the omnichannel subscription in the Products section.

| Field | Description | Zuora generated, or customer entered according to external system |
| --- | --- | --- |
| Product ID | The product ID in the external system. | Customer entered |
| Quantity | The quantity for the charge in the external system. | Customer entered |
| Price | The price for the charge in the external system. | Customer entered |
| Total | The total charge. | Zuora generated |
