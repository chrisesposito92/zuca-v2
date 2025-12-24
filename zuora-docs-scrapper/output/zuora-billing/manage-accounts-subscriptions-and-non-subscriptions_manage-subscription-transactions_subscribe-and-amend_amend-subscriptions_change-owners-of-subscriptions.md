---
title: "Change owners of subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/change-owners-of-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:35:49.971Z"
---

# Change owners of subscriptions

This article explains to transfer ownership of subscriptions and invoices using the Owner Transfer amendment, including prerequisites and examples of usage in parent-child account hierarchies.

You can use the Owner Transfer amendment to transfer the invoice ownership, subscription ownership, or both of a subscription to another account. If the feature is enabled, you can create a subscription in an account to be rated and billed by a billing run initiated from another account.

You can also transfer ownership when certain types of future-dated amendments exist on the subscription. For more information, see Future-dated Amendments .

## Scenario

You can use the Owner Transfer amendment while creating a consolidated invoice for larger companies with many departments, divisions, or subsidiaries. For example, a reseller can be billed for its subsidiaries in a consolidated invoice if the reseller and the subsidiaries are in a parent-child account hierarchy. A parent-child account hierarchy for the reseller and subsidiaries is as below:

\- Reseller (parent account)

\- Subsidiary A (child account)

\- Subsidiary B (child account)

For more information about parent-child account hierarchy, see Customer Hierarchy . If subscriptions are created in the parent account, the parent account becomes the invoice owner of the subscriptions by default. You can transfer the subscription ownership of the subscriptions to the child accounts through the Owner Transfer amendment, and create a consolidated invoice from the parent account through bill run .

## Prerequisites

To activate the Owner Transfer amendment through the self-serve interface, see Feature Management.

If you want to create a consolidated invoice for the parent account in the parent-child account hierarchy, you need to enable both the Customer Hierarchy feature and the Owner Transfer amendment. To enable the Customer Hierarchy feature, set the Enable Customer Hierarchy? billing rule to Yes.

If the Owner Transfer amendment is enabled, the Subscriptions-Invoiced tab will display in the Subscriptions & Amendments section of the Customer Account details page.

Before using the Owner Transfer amendment, you need to note the followings:

-   Currency: The subscription owner accounts and the invoice owner accounts must use the same currency.
-   Payment Method : The credit card on the parent account will only pay for invoices of the parent account. If you want to use the same credit card to pay for the child accounts, Zuora recommends that you create the same payment method for the child account. Zuora recommends that you re-create the payment method in the following scenarios:
    -   The customer has parent accounts with non-existent subscriptions but with valid credit card information.
    -   Under these parent accounts are child accounts which are active subscriptions, but with no credit card information.
    -   The child accounts use the parent account’s credit card details.
    -   However, because Zuora deletes invalid subscription credit card details from the parent accounts after 180 days, the child account payments will not be able to be processed.
-   Limitation: After you transfer the ownership of a subscription or its invoices, any associated revenue will continue to use the customer account of the original owner. For example, let's say you transfer ownership of a subscription from Customer A to Customer B. Any revenue schedules associated with the subscription, even those created after the transfer of ownership, will continue to show the associated customer account as Customer A. To get the account information of the new owner, you can use the Subscription and Invoice data source exports.

## Transfer invoice or subscription ownership of a subscription using the Zuora SOAP API

The Zuora SOAP API includes the following support for this feature:

-   The Subscription object includes the `InvoiceOwnerId` field, used to indicate the invoice owner of the subscription. (Supported from WSDL 32.0+)
-   The Amendment object includes the `DestinationInvoiceOwnerId` , used to indicate the destination invoice owner during an Owner Transfer amendment. (Supported from WSDL 33.0+)


Use these fields with the `subscribe()` , `amend()` , and `query()` API calls. You must enable the Owner Transfer amendment to edit and change these fields. For more information about the payment method that is used to pay invoices in the subscribe() call, see Payment Method Used in the Subscribe SOAP API Call .

See Subscriptions for more information.
