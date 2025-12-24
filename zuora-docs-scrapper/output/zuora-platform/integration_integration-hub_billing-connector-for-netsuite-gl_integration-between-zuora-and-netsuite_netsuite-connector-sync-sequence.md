---
title: "NetSuite Connector sync sequence"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/netsuite-connector-sync-sequence"
product: "zuora-platform"
scraped_at: "2025-12-24T05:48:58.099Z"
---

# NetSuite Connector sync sequence

Learn how NetSuite Connector integrates Zuora and NetSuite

Note: The Sales Order Sync feature is in the Early Adopter phase and is subject to change without advance notice. We are actively soliciting feedback from a small set of early adopters. To join this early adopter program, submit a request at

[Zuora Global Support](https://support.zuora.com/)

.

Records are synced in the following sequence if Invoice Settlement is NOT enabled for your Zuora tenant:

1.  If Zuora is the Customer Master (set in the NetSuite Connector integration preference), [sync Zuora Customer Accounts to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/customer-account-transaction-sync/customer-account-sync-zuora-to-netsuite). Otherwise, [sync NetSuite Customers to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/customer-account-transaction-sync/customer-account-sync-netsuite-to-zuora).
2.  If the NetSuite Connector option Enable Sales Order Sync is enabled, [sync Zuora Products and Product Rate Plans to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/product-and-product-rate-plan-transaction-sync), then [sync NetSuite Sales Orders to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/sales-order-transaction-sync).
3.  [Sync Zuora Product Rate Plan Charges to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/product-rate-plan-charge-transaction-sync).
4.  [Sync Zuora Invoices to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/invoice-transaction-sync).
5.  [Sync Zuora Payments to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync).
6.  [Sync Zuora Refunds to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/refund-transaction-sync).
7.  [Sync Zuora Invoice Item Adjustments to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/invoice-item-adjustment-transaction-sync).
8.  [Sync NetSuite Payments to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync).
9.  [Sync NetSuite Credit Memos to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/credit-memo-transaction-sync-netsuite-to-zuora).
10.  [Sync NetSuite Refunds to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/refund-transaction-sync).

Note:

If the NetSuite Connector Advanced Setting Use Standard Invoice Sync is set to `No`, only steps 1-4 will run.

Records are synced in the following sequence if Invoice Settlement is enabled for your Zuora tenant:

1.  If Zuora is the Customer Master (set in the NetSuite Connector integration preference), [sync Zuora Customer Accounts to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/customer-account-transaction-sync/customer-account-sync-zuora-to-netsuite). Otherwise, [sync NetSuite Customers to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/customer-account-transaction-sync/customer-account-sync-netsuite-to-zuora).
2.  If the NetSuite Connector option Enable Sales Order Sync is enabled, [sync Zuora Products and Product Rate Plans to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/product-and-product-rate-plan-transaction-sync), then [sync NetSuite Sales Orders to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/sales-order-transaction-sync).Note: In Zuora-Netsuite integration, if syncing fails between an account and its associated rate plan in Netsuite, creating transactions such as invoices, payments, refunds, and invoice item adjustments will fail too. The direct dependency between the account/product rate plan and invoice creation emphasizes the critical need for successful syncing to enable the generation of these transaction records.
3.  [Sync Zuora Product Rate Plan Charges to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/product-rate-plan-charge-transaction-sync).
4.  [Sync Zuora Invoices to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/invoice-transaction-sync).
5.  [Sync Zuora Debit Memos to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/debit-memo-transaction-sync-invoice-settlement-enabled).
6.  [Sync Zuora Credit Memos to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/credit-memo-transaction-sync-invoice-settlement-enabled).
7.  [Sync Zuora Payments to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync-invoice-settlement-enabled).
8.  [Sync Zuora Refunds to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/refund-transaction-sync).
9.  [Sync NetSuite Payments to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync-invoice-settlement-enabled).
10.  [Sync NetSuite Refunds to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/refund-transaction-sync).

Note: If the NetSuite Connector Advanced Setting Use Standard Invoice Sync is set to `No`, only steps 1-5 will run.
