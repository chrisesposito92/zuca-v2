---
title: "Refund transaction sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/refund-transaction-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:46.102Z"
---

# Refund transaction sync

Integration syncs payment refunds to and from NetSuite refunds with Zuora

## Overview

This integration syncs payment refunds to and from NetSuite refunds with Zuora. The refund integration is implemented as two separate syncs: Zuora refunds to NetSuite and NetSuite refunds to Zuora.

## About the refund sync

-   Zuora has the ability to create a refund and associate it to the payment.

-   The Zuora refund effectively credits the payment and will open the invoice balance.

-   The accounting code for the refund is determined by the refund method (i.e. payment method) and is configured and maintained manually within the associated NetSuite Payment Method.

-   When the payment is applied to more than one invoice, Zuora has the ability to allocate the refund to the parts of the payment applied to invoices.

-   In NetSuite, refunds are applied directly to payments.

-   In NetSuite, the amount to be refunded must first be unapplied from the invoice. The unapplied payment amount can then be refunded.

-   Zuora credit balance refunds are not supported.

-   Review the [Transaction sync preferences](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-sync-preferences) . These preferences are important and control the behavior and data mapping of the sync, including the refund number.


## Disabling the sync and sync limitations

-   You can disable either refund sync from the NetSuite Connector Advanced Settings. However, you should disable this under the guidance of Zuora Services.

-   The NetSuite refund sync is disabled by default. Use the NetSuite [Connector advanced settings](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-advanced-settings) to enable the sync.

-   The Zuora refund sync will not execute if Zuora does not calculate taxes (if the NetSuite Connector Advanced Setting Use Standard Invoice Sync is set to `false` ).

-   NetSuite Connector does not sync Zuora refunds made to credit balance adjustments.

-   A refund sync is successful only when the payment is unapplied in NetSuite.


## Differences between refunds in Zuora and NetSuite

Zuora payment operations are built around the requirements of the subscription life cycle. NetSuite refunds are built around best practices for product-based businesses.

In Zuora, you can apply refunds to a payment. Because a single payment can be applied to multiple invoices, a refund in Zuora can apply to multiple payments.

The primary method of refunding in NetSuite is to create a credit memo either at the customer account level or associated to an RMA. In NetSuite, the refund is effectively applied to the customer account level.

For the NetSuite integration, there are special steps to perform to make sure the refund references the appropriate payment, and therefore the correct invoice, when syncing to Zuora. See "Refund Transaction Sync Rules," below, for more information.

If you do not need to use the RMA process in NetSuite, Zuora recommends that you perform the refund and other AR transactions in Zuora.

Next, refer to these topics:

-   [Refund transaction sync rules: Zuora to NetSuite](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/refund-transaction-sync/refund-transaction-sync-rules-zuora-to-netsuite)

-   [Refund transaction sync rules: NetSuite to Zuora](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/refund-transaction-sync/refund-transaction-sync-rules-netsuite-to-zuora)
