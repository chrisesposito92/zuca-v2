---
title: "Ship-To contacts"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/edit-customer-accounts/ship-to-contacts"
product: "zuora-billing"
scraped_at: "2025-12-24T05:16:46.649Z"
---

# Ship-To contacts

This article explains how to specify Ship-To contacts for customer accounts to enhance billing and logistics management in Zuora.

You can specify a Ship-To contact for a customer account to facilitate comprehensive and flexible billing and logistics management. For example, when the Bill To entity differs from the shipping destination, you can use the Ship To contact to indicate where the goods should be delivered.

Note:

Support for Ship To contacts in Zuora CPQ will be added in a future release.

## Prerequisites

-   You must turn on the Ship-To Contact feature before specifying ship-to contacts for customer accounts. To use ship-to contacts on subscriptions, order line items, or standalone invoices, make sure the Flexible Billing Attributes feature is also enabled. You can turn on these features through the self-service interface for Feature Management. For more information, see Enable billing features by yourself .

-   You can specify Ship-To contacts only for existing customer accounts in the Zuora UI. Alternatively, you can use the Create an account API operation to specify a Ship To contact when creating a customer account.


## Calculate tax on Zuora

To specify a Ship-To contact for an existing customer account, perform the following steps:

When you create a subscription, order line item, or standalone invoice for an account, the account's Ship-To contact is automatically set as the default Ship-To contact for the subscription, order line item, or standalone invoice. However, you can update the Ship-To contact afterwards if needed. See Specify ship-to contacts for subscriptions, order line items, and standalone invoices .

Tax calculation with Ship-To Contact is supported on all types of tax engines, including Z-Tax , Direct Avalara Integration , and Configurable Tax apps .

Once the Ship To Contact feature is enabled, you can specify the optional Ship-To Contact at the account, subscription, order line item, or standalone invoice level:

-   If the Ship-To Contact is not specified, the Sold-To Contact is used for tax calculation, which follows the existing behavior.

-   If the Ship-To Contact is specified, it overrides the Sold-To Contact for tax calculation.


The following scenarios represent some cases:

-   If Sold-To Contact is specified and Ship-To Contact is not specified for subscriptions, order line items, or standalone invoices, the Sold-To Contact is used for tax calculation.


Note: The Sold-To Contact specified at the subscription level is always used for tax calculation, even if a default Ship-To Contact is set at the account level.

-   Subscriptions or standalone invoices have neither a Sold-To nor a Ship-To Contact.


Note: f the associated account has a default Ship-To Contact, the account-level Ship-To Contact is used. Otherwise, the default Sold-To Contact specified on the account is used.

-   If Ship-To Contact is not specified for an order line item, the order line item always copies Ship-To Contact from the associated account.


## Manage Ship-To Contact with Customer Hierarchy

If the Customer Hierarchy feature is enabled, you have the following capabilities when specifying Ship-To Contact:

-   At the subscription or order line item level, you can select Ship-To Contact from any account at any level within the hierarchy.

-   At the standalone invoice level, you can select Ship-To Contact or Sold-To Contact from any account at any level within the hierarchy.


-   When an account is removed or deleted, you can transfer Ship-To Contact. This approach helps maintain flexible hierarchy management during organizational changes. For example, when reorganization occurs by moving a child account up or down in the hierarchy, you only need to update the account's parent, regardless of whether other accounts use the Ship-To Contact.


Note: The transfer contact functionality is only available on the API, and not available via the UI. For more information, see Transfer a contact .
