---
title: "Payment transaction sync (Invoice Settlement enabled)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync-invoice-settlement-enabled"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:20.086Z"
---

# Payment transaction sync (Invoice Settlement enabled)

Integration syncs applied, unapplied, and unassigned payments to and from NetSuite payments with Zuora if Invoice Settlement is enabled for your Zuora Tenant

## Overview

This integration syncs applied, unapplied, and unassigned payments to and from NetSuite payments with Zuora if Invoice Settlement is enabled for your Zuora Tenant. The payment integration is implemented as two separate syncs: Zuora payments to NetSuite and NetSuite payments to Zuora.

## About the payment transaction sync (Invoice Settlement enabled)

Custom fields will be added to the NetSuite payment object:

-   Only processed payments will be synced to NetSuite.

-   One payment may be applied to one or more invoices.

-   No actual credit card data will be synced in either direction.

-   The accounting code for the payment is determined by the payment method and is configured and maintained manually within the associated NetSuite Payment Method.

-   Payments that are voided or canceled before they are transferred to accounting will not be synced.

-   A payment that has been transferred to accounting cannot be voided.

-   [Unapplied payments](/zuora-payments/process-payments/process-payments/create-a-payment-using-zuora-ui/manage-unapplied-payments/overview-of-unapplied-payments) and partial payments are supported.


Review the [Transaction sync preferences](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-sync-preferences) . These preferences are important, and they control the behavior and data mapping of the sync, including the payment number.

## Transaction sync notes

-   Either payment sync can be disabled completely from the NetSuite Connector Advanced Settings page. However, you should disable this only under the guidance of Zuora Global Services.

-   The NetSuite Payment sync is disabled by default. To enable it, go to the NetSuite Connector Advanced Settings.

-   The Zuora Payment sync will not execute if Zuora does not calculate taxes (if the NetSuite Connector Advanced Setting for Use Standard Invoice Sync is false).

-   To sync ‘unassigned’ payments, ensure that the “Unassigned Payments” field is populated with the internal ID of an appropriately designated NetSuite customer account.

-   Payment transaction syncs will fail if the currency of the customer account on the NetSuite side is changed.

-   Netsuite payments are seamlessly synchronized with Zuora. However, if a journal is associated with a payment, the platform does not support automatic syncing between Netsuite and Zuora for that specific transaction.


Next, refer to these topics:

-   [Payment transaction sync rules: Zuora to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync-invoice-settlement-enabled/payment-transaction-sync-rules-zuora-to-netsuite)

-   [Payment transaction sync rules: NetSuite to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync-invoice-settlement-enabled/payment-transaction-sync-rules-netsuite-to-zuora)
