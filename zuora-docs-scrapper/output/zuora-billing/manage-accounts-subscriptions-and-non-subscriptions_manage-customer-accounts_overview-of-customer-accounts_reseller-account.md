---
title: "Reseller Account"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/overview-of-customer-accounts/reseller-account"
product: "zuora-billing"
scraped_at: "2025-12-24T05:14:31.863Z"
---

# Reseller Account

The Reseller Account feature allows for delayed calculation of account metrics to prevent API competition errors, enabling efficient management of high-volume operations and subscriptions for partner accounts.

The Reseller Account feature provides the capability to delay the calculation of account metrics for an account you flagged as a partner account. This can avoid API competition errors for scalability when you create a large number of orders, standalone invoices, credit memos, and payments for a single account in parallel.

You can use this feature when you need to manage a large number of subscriptions for a single account and handle high-volume operations on the same account. For example, if the number of subscriptions exceeds 300 for a single account, you need to make parallel API calls for order changes on that account.

You can enable the feature in Sandbox and Production environments with the self-service interface. For more information, see [Enable billing features by yourself](https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/system-settings/enable-billing-features-by-yourself).

## Functional behavior changes

With the Reseller Account feature, Zuora does not calculate account metrics for partner accounts synchronously when you perform the following operations:

-   Post billing documents, including invoices, credit memos, debit memos (memos only available if you have the [Invoice Settlement](https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) feature enabled)
-   Create orders, including subscription creation and order changes
-   Apply or unapply payments or credit memos
-   Unpost billing documents, including invoices, credit memos, debit memos
-   Refund

If you flag an account as a partner account, the calculation of account metrics is delayed. By default, Zuora calculates account metrics every hour. The interval is configurable at the tenant level. To change the calculation interval, submit a request at [Zuora Global Support](ttps://www.zuora.com/support-center/) .

The account metric update needs to be performed on account lockout. A shorter interval increases the probability of competition lock errors. Therefore, it is best practice not to configure a shorter interval if you have a large volume of traffic and the traffic lasts for a long time.

All account metrics except `contractedMrr` belong to the invoice owner account, while `contractedMrr` belongs to the subscription owner account.

The following list provides account metrics:

-   balance
-   creditBalance
-   lastInvoiceDate
-   totalInvoiceBalance
-   totalDebitMemoBalance
-   unappliedCreditMemoAmount
-   unappliedPaymentAmount
-   contractedMrr

For details about these account metrics, see the metrics object field in the response body of the [Retrieve an account](https://www.zuora.com/developer/api-references/api/operation/GET_Account/) operation.

## Transfer subscription owners for reseller accounts

When transferring subscription owners between source and target accounts for reseller accounts through concurrent orders, metric calculation probably competes on the same accounts. Therefore, it is necessary to set the `partnerAccount` field to `true` for both the source and target accounts.
