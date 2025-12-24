---
title: "Invoice Settlement migration checklist and guide"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:40.436Z"
---

# Invoice Settlement migration checklist and guide

Checklist to enable and migrate into Invoice Settlement

This article describes the process, checklist, and actions to enable and migrate into the Invoice Settlement feature.

See [Invoice Settlement overview](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) for more information about this feature.

Note:

-   Invoice Settlement does not support feature rollback. After data migration is completed and the Invoice Settlement feature is enabled, you cannot disable it.

-   This checklist also applies to customers migrating from Invoice Settlement harmonization (ISH) to Invoice Settlement (IS).


After the tenant is migrated to Invoice Settlement, you can still get the existing Invoice Item Adjustment data via [Data Query](/zuora-platform/data/data-query/overview-of-data-query) and Reporting .

## Integration

The following sections provide information on the integration between Invoice Settlement and various Zuora applications.

For information on API integration, see [here](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide/api-integration).

For information on Billing configurations, see [here](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide/billing-configurations).

## Zuora CPQ

Zuora CPQ 9.x and 8.x are compatible with Invoice Settlement.

If you are using Zuora CPQ in an earlier version than 8.x, you have to upgrade it to the latest version first.

## Zuora Workflow

Find out about the compatibility between workflow tasks and Invoice Settlement.

## Zuora 360 and Zuora 360+

Invoice Settlement objects and fields are not supported in Zuora 360 but are supported in Zuora 360+. Therefore, if you want to use Invoice Settlement with Zuora CPQ, you must ensure that Zuora 360+ is enabled.

## Zuora Finance

You can use Zuora Finance as a general ledger or sub-ledger for the subscription revenue, including running a trial balance, closing the period, and generating reports.

Note:

-   Be careful about the timing when you enable the Invoice Settlement feature. If you already enabled the Finance feature, a best practice is to enable Invoice Settlement right after an accounting period is closed and before a journal run has occurred in the open accounting period. See [Finance Integration with Invoice Settlement](/accounts-receivable/finance/get-started-with-zuora-finance/integration-with-invoice-settlement) for more information.

-   If you use Zuora Finance to manage your month end close process, Zuora recommends scheduling your month end close process either before or after the migration.


## Zuora Revenue

See [Enable Invoice Settlement for Billing - Revenue Integration](/zuora-revenue/advanced-revenue-operations/billing---revenue-integration/enable-zuora-billing-and-zuora-revenue-integration) for more information.

## Migration checklist and required actions

Before the Invoice Settlement feature is enabled for existing customers, data migration has to be performed. The data migration performs the following actions:

-   Negative invoices are converted to credit memos. One credit memo is created from one negative invoice. The negative invoice is written off with Invoice Item Adjustments first. Then, a credit memo will be created from the invoice with the line item amount that is the same as the amount of each adjustment.
    Note: For a Credit Memo migrated by Negative Invoice, the Excluded from auto apply rule will be checked.
    The date when the invoice item adjustment is applied (adjustment date) and the date when the credit memo takes effect (memo date) are set to the date when the negative invoice is processed by the migration.

    If Zuora Finance is enabled on your tenant, ensure that the current accounting period is open during the migration to avoid migration failure.

-   The outstanding credit balance is converted to credit memos. One credit memo is created for an account with outstanding credit balance. An external refund is created to offset the credit balance first. Then, a credit memo is created from a pre-configured one-time charge.
    Note: For a Credit Memo migrated by Credit Balance, the Excluded from auto apply rule will be unchecked.
    The refund date and the memo date are set to the date when the outstanding credit balance is processed by the migration. The payment method Other is used for the external refund. To manage the accounting code for this kind of refund, go to the Manage Accounting Codes settings and select Payment Refund in the View accounting codes field. Set the value to Other and change the accounting code accordingly.

-   If Zuora Finance is enabled on your tenant, ensure that the current accounting period is open during the migration to avoid migration failure.

-   The payments and refunds are migrated by generating new transactions of payment parts and refund parts. The payments and refunds themselves are not changed.


Note:

During the payment migration, the FIFO rules will apply to the invoice line items. for more information, see Default Application Rule .

-   Netsuite Connector: When a NetSuite Integration connector customer migrates their Zuora account to Invoice Settlement, there is no automatic process to migrate the NetSuite Connector for Invoice Settlement support.


-   The duration of data migration depends on the volume of payments, negative invoices, and accounts with credit balances.

-   The data migration process does not impact live transactions.

    -   During the execution of data migration, you can continue to create new transactions, including payments, refunds, invoices, invoice item adjustments, invoice adjustments, credit balance adjustments, and so on.

-   When the new transactions of payments, refunds, credit balance adjustments, and negative invoices are created, the data migration needs to be executed again.

    -   It is best practice to execute data migration during a low traffic period to reduce the frequency of re-executing data migrations.

-   When migrating the payment, a new payment application and payment application item will be generated. Hence, the "Accounts Receivable" accounting code will be used as the unapplied payment accounting code in the payment application and payment application item.


Before you enable Invoice Settlement and migration, please go through this [checklist](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide/validate-transactions) and perform the corresponding actions.

For information on the preparation of a one-time product rate plan charge, see [here](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide/prepare-one-time-product-rate-plan-charge).
