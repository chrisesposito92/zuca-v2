---
title: "Integration between Zuora and NetSuite"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:55.012Z"
---

# Integration between Zuora and NetSuite

Learn how NetSuite Connector integrates Zuora and NetSuite

## Overview

This topic describes how NetSuite Connector integrates Zuora and NetSuite, including information about how transactions are connected between Zuora and NetSuite.

## Integration flow

![Shows the integration between Zuora and NetSuite](/db/organizations/zuora/repositories/prod-sitemap/__sandbox/documents/_MT_Content_Migration/Zuora_Platform/Integration/Integration_Hub/Billing_Connector_for_Netsuite_GL/B_Integration_Between_Zuora_and_NetSuite/zsuite_sync_overview.png)

This integration includes the following high-level integration points between Zuora and NetSuite:

-   Customer Account Sync : One-way sync of Zuora Customer Accounts to NetSuite, or NetSuite Customers to Zuora.

-   Product Catalog Sync: One-way sync of Zuora Products, Rate Plans, and Charges to NetSuite Items.

-   Subscription Creation: One-way push of NetSuite Sales Orders to Zuora Subscriptions.

-   Invoice Sync: One-way push of Zuora Invoice Items to NetSuite Invoices.

-   Payment and Refund Sync: Two-way push of Zuora and NetSuite Payments and Refunds.

-   Adjustment Sync: Two-way push of Zuora Invoice Item Adjustments to NetSuite Credit Memos, and NetSuite Credit Memos to Zuora Invoice Item Adjustments. Adjustment Sync is not applicable if Invoice Settlement is enabled for your tenant

-   Credit Memo Sync: One-way push of Zuora Credit Memos to NetSuite Credit Memos when Invoice Settlement is enabled for your Zuora tenant.

-   Debit Memo Sync: One-way push of Zuora Debit Memos to NetSuite Debit Memos when Invoice Settlement is enabled for your Zuora tenant.


To ensure data integrity, you can only connect Zuora to a single instance of NetSuite.

## Subscriptions and amendments in NetSuite Connector

Subscription Creation is one-way push of NetSuite Sales Orders to Zuora Subscriptions. NetSuite is concerned with transactions, such as invoices, payments, and invoice item adjustments. NetSuite does not track amendments created in Zuora Billing.

When an amendment is created to update the charges, invoices will always reflect the changes. The sync will push Zuora Invoice Items to NetSuite Invoices.

For example:

-   You have a subscription with an invoice generated for a charge for January. A sync has been done and the invoice has been synced to NetSuite.

-   Next, you create an amendment to change the price in the middle of January. In the invoice for February, there will be a proration charge or proration credit (which is negative) from January. At this time, different invoice items will be transferred to different items in NetSuite during the sync.


## Master and transaction objects

Master objects control master records for customers and products. These records will not be deleted, but can be made inactive. NetSuite Connector does not sync inactive records.

Transaction records include the following:

-   Invoices
-   Payments
-   Refunds
-   Invoice item adjustments

You can change the status of these transactions (for example, to voided or canceled). You can make changes to financial values (for example, a payment amount) either by using a separate adjustment-type transaction, or by using business processes (deleting and recreating the payment). You can add revenue recognition dates (Rev Rec Dates) to an invoice after creating the invoice.
