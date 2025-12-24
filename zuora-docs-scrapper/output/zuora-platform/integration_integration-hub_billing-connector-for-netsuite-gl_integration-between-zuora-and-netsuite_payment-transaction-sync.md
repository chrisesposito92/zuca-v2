---
title: "Payment transaction sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:25.697Z"
---

# Payment transaction sync

Integration that syncs payments applied to one or more invoices to and from NetSuite payments with Zuora

## Overview

This integration syncs payments applied to one or more invoices to and from NetSuite payments with Zuora. The payment integration is implemented as two separate syncs: Zuora payments to NetSuite and NetSuite payments to Zuora.

## About the payment transaction sync

Custom fields will be added to the NetSuite payment object:

-   Only processed payments will be synced to NetSuite.

-   One payment may be applied to one or more invoices.

-   No actual credit card data will be synced in either direction.

-   The accounting code for the payment is determined by the payment method and is configured and maintained manually within the associated NetSuite Payment Method.

-   Payments that are voided or cancelled before they are transferred to accounting will not be synced.

-   A payment that has been transferred to accounting cannot be voided.

-   Overpayments are not supported.


Review the [Transaction sync preferences](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-sync-preferences) . These preferences are important, and control the behavior and data mapping of the sync, including the payment number.

## Transaction sync notes

-   Either payment sync can be disabled completely from the NetSuite Connector Advanced Settings. However, you should disable this only under the guidance of Zuora Services.

-   The NetSuite Payment sync is disabled by default. To enable it, go to the NetSuite Connector Advanced Settings.

-   The Zuora Payment sync will not execute if Zuora does not calculate taxes (if the NetSuite Connector Advanced Setting for Use Standard Invoice Sync is `false` ).

-   If there is an error in Invoice sync or Credit Memo sync, the Payment sync is not triggered because payments are linked to invoices and credit memos.

-   Payment transaction syncs will fail if the currency of the customer account on the NetSuite side is changed.


Next, refer to these topics:

-   [Payment transaction sync rules: Zuora to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync/payment-transaction-sync-rules-zuora-to-netsuite)

-   [Payment transaction sync rules: NetSuite to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/payment-transaction-sync/payment-transaction-sync-rules-netsuite-to-zuora)
