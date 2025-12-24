---
title: "Overview of Unified Invoicing"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/unified-invoicing/overview-of-unified-invoicing"
product: "zuora-billing"
scraped_at: "2025-12-24T18:39:58.437Z"
---

# Overview of Unified Invoicing

Unified Invoicing enables companies to grow revenue by monetizing hybrid offerings, supporting both subscription and non-subscription transactions within the Zuora ecosystem.

Unified Invoicing provides key capabilities to help companies grow subscription and non-subscription revenue by monetizing hybrid offerings within the Zuora ecosystem.

-   The standalone invoice allows you to sell physical goods, services, or other items on a non-recurring basis to your subscription customers. You can quickly create a standalone invoice under a customer account through the Zuora UI or REST API, without creating a subscription, an order, or even a product catalog.
-   The consolidated invoice allows you to unify the billing experience for both subscription and non-subscription transactions and to have a single view of your subscriber. You can generate a consolidated invoice through Orders or bill runs.

Any users in a custom Billing user role with the following Billing permissions can use the Unified Invoicing feature:

-   At least one of the following permissions:
    -   Create Standalone Invoice With Product Catalog
    -   Create Standalone Invoice Without Product Catalog
-   The Modify Invoice permission

## Billing document templates for standalone invoices

Standalone invoices can be created without a subscription, an order, or even a product catalog. Therefore, subscription-related and product-related merge fields in billing document templates are correspondingly impacted for standalone invoices.

See the following articles for more information about the specific impacts:

-   Merge fields for invoices
-   Merge fields for credit memos
-   Merge fields for debit memos

Note: Similar to billing document templates, tax app templates can also be impacted if you enable Unified Invoicing. See Context object for rendering tax app templates for more information.

## Subscription-related merge fields

A standalone invoice is on a one-time basis without a subscription associated. The invoice item is not associated with a subscription rate plan charge. Similarly, when a credit or debit memo is created from a standalone invoice, the memo item is not associated with a subscription rate plan change.

The subscription-related data fields from the following objects become irrelevant and will be empty on the corresponding billing documents, including invoices, credit memos, and debit memos.

-   Subscription
-   Subscription rate plan
-   Subscription rate plan charge
-   Subscription owner

## Product-related merge fields

A standalone invoice can be created from an existing product rate plan charge in the Zuora product catalog. It can also be created without the product catalog as the product can be in an external system or even ad-hoc.

In this case, the invoice item is not associated with a product rate plan charge. Similarly, when a credit or debit memo is created from a standalone invoice, the memo item is not associated with a product rate plan change.

The product-related data fields from the following objects become irrelevant and will be empty on the corresponding billing documents, including invoices, credit memos, and debit memos.

-   Product
-   Product rate plan
-   Product rate plan charge

## Known limitations

Currently, the Unified Invoicing feature has the following known limitations:

-   When you create a standalone invoice, the maximum number of invoice items supported is 1,000 if you use the Zuora REST API; and 20 if you use the Zuora UI.
-   When you edit a standalone invoice, the maximum number of invoice items supported is 1,000 if you use the Zuora REST API; and 100 if you use the Zuora UI.
-   When adding an existing charge to a standalone invoice through the Zuora UI or REST API, the product rate plan charge must be in the Flat Fee or Per Unit charge model.
-   The UI pages of creating and editing standalone invoices do not support Data Access Control.
-   Standalone or consolidated invoices cannot be split.
-   The Invoice/Credit Memo generation rule billing rule is not supported in Unified Invoicing. The system does not allow a negative amount invoice and will not generate a credit memo for the negative amount charges.
