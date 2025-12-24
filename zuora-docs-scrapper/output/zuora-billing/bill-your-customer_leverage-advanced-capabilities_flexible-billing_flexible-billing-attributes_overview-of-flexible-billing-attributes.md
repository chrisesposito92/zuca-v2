---
title: "Overview of Flexible Billing Attributes"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/flexible-billing-attributes/overview-of-flexible-billing-attributes"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:58.711Z"
---

# Overview of Flexible Billing Attributes

The Flexible Billing Attributes feature allows for detailed management of billing, taxation, and payment at levels beyond the Account, enabling customization of billing attributes for subscriptions and order line items.

The Flexible Billing Attributes feature provides you the flexibility to manage billing, taxation, and payment at a more granular level other than the Account level.

-   Flexible subscription and order line item management provides you the capability to have different bill-to contacts, sold-to contacts, ship-to contacts, payment terms, invoice template IDs, and sequence sets for subscriptions and order line items.
-   Flexible invoicing provides you the capability to bill subscriptions and order line items according to the same billing attributes.

After enabling this feature, you can access the Invoice Grouping feature. The Invoice Grouping feature allows you to customize invoice groups to bill subscriptions and order line items based on specific criteria.

With this feature, you can specify billing attributes at the subscription and order line item level, and generate invoices for subscriptions and order line items according to the same billing attributes. Applicable billing attributes include bill-to contacts, sold-to contacts, ship-to contacts, payment terms, invoice template IDs, and sequence sets. If you do not specify the attribute values, they are inherited from the default or specified attribute values of the invoice owner account or billing account.

If one account has subscriptions with different payment terms and bill-to contacts, you no longer have to duplicate accounts for different payment terms and bill-to contacts. With Flexible Billing Attributes, you can specify bill-to contacts and payment terms during subscription creation through the order action of Create Subscription , and update bill-to contacts and payment terms through the order actions of Terms and Conditions and Renewal .

This feature is applicable in the following business scenarios, including but not limited to:

-   You have multiple product lines and expect to have different payment terms for different product lines. For example, shorter payment terms might be necessary in case your customers buy an additional product on the top of a contract.
-   You have multiple lines of business (brands, business units, or products) across regions, and expect to have different invoice templates and sequence sets for business lines. For example, when your customers purchase services across multiple brands, you expect to send separate invoices containing different logs, address information and so on for each brand, and track invoices by using different sequence sets.
-   Your clients do business with you across different business lines and for different products. The clients generally have multiple subscriptions, which are expected to have different payment terms for different product lines and have different bill-to contacts to receive invoices.
-   Your customers have different contacts on their accounts, and want to be billed with different bill-to contacts for some purchases. For example, the bill-to contact can be anyone in the family.
-   You can provide personalized, consistent, and brand-aligned experiences across customer segments by assigning a communication profile at the Subscription, Order Line Item (OLI), and Standalone Invoice levels.

With the Invoice Grouping feature, you can separate invoices for subscriptions and order line items for the same order or account using custom criteria such as purchase order numbers or ship-to locations. For more information, see Invoice Grouping .

## Common use cases of Flexible Billing Attributes

The following use cases are presented to showcase how you can use the Flexible Billing Attributes feature.

-   Orders UI use cases
-   Subscriptions UI use case
-   Use cases of subscription management and invoice generation
-   Billing operations use cases

## Restrictions and limitations

When using Flexible Billing Attributes, keep the following restrictions and limitations in mind:

-   Actions [Subscribe](https://www.zuora.com/developer/api-references/older-api/operation/Action_POSTsubscribe/) and [Amend](https://www.zuora.com/developer/api-references/older-api/operation/Action_POSTamend/) are not supported for creating subscriptions by specifying the bill-to contact, payment term, invoice template, and sequence set at the subscription level.
-   With Orders Harmonization, you can only use [Orders](https://www.zuora.com/developer/api-references/api/tag/Orders/) API operations to create subscriptions with subscription-level billing attributes and change subscription-level billing attributes. The Orders UI is not available.
-   If you use the [Query](https://www.zuora.com/developer/api-references/api/operation/Action_POSTquery/) action to retrieve the billing attributes introduced in Flexible Billing Attributes, you must set the `X-Zuora-WSDL-Version` header parameter to `115` or later.
-   If the bill-to contact or payment term at the subscription level has been updated, the corresponding invoice cannot be unposted.
-   If credit or debit memos are created from product rate plan charges, the bill-to contact and payment term are null on the memos.
