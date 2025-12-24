---
title: "Best practices for using Billing - Revenue Integration"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/billing---revenue-integration/best-practices-for-using-billing---revenue-integration"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:36:07.608Z"
---

# Best practices for using Billing - Revenue Integration

Best practices to help you avoid issues in Zuora Billing and Zuora Revenue integration

As Zuora Billing and Zuora Revenue have different policies and requirements, some best practices are outlined to avoid certain potential issues.

With Billing - Revenue Integration enabled, you have to bear its known limitations in mind.

## Enable Invoice Settlement before enabling Billing - Revenue Integration

We strongly recommend that you enable the Invoice Settlement feature for your Zuora tenant before enabling Billing - Revenue Integration. It is because in any environment where multiple systems coexist, it is always the good practice to get upstream systems in place before implementing downstream ones. Otherwise, you might have to make changes to Zuora Revenue and then regression test all use cases.

## Billing settings

Zuora Revenue requires that the total contractual booking amount must equal the billing amount. To meet this requirement, configure the following Billing Rule settings as described below:

-   Enable credit back for removing or canceling one time charges Set this setting to Yes. When one-time charges are removed or included in a canceled subscription, Zuora Revenue automatically credits back for the remaining revenue that will be recognized on the one-time charge. It will mismatch Zuora Billing if this setting is set to No because Zuora Billing does not generate a credit back, but Zuora Revenue does. In this case, the booking data does not equal the billing data in Zuora Revenue. You need to manually reconcile in Zuora Revenue.
-   Invoice Past End-of-Term when Auto-Renew is OFF and Invoice Past End-of-Term when Auto-Renew is ON Both settings should be set to No for all future data. If both fields must be set to Yes based on your business needs, you should manually reconcile between the booking amount and billing amount in Zuora Revenue.
-   Create credit memos mirroring invoice items Set this setting to Yes or Yes but do not create for zero balance invoice items. The default value is Yes. If you set this setting to No, discount charges in the credit memo items that are created from invoice items cannot be picked up by Zuora Revenue because the AppliedToItemId reference for the discount charges is not populated.

In addition, configure the following Default Subscriptions and Orders settings:

-   Update Rate Plan Charge trigger condition Set this setting to No to prevent charge contractual value (CCV) metric changes on the same subscription version. Otherwise, updating the trigger condition will lead to CCV calculations for the same subscription version.

## Add new discount charges to periods that have not been billed

By design, the charge contractual value (CCV) is calculated as the booking value for the full period of rate plan charge. If a discount charge is applied to a regular charge that is already billed, inconsistency between CCV and the invoice amount can occur. Therefore, you should add new discount charges to only the periods that have not been billed.

## Do not change BCD for customers

When the Bill Cycle Day (BCD) of a customer account is changed, the actual billing amount is updated accordingly due to proration differences. However, this change is not reflected in orders, and thus will cause discrepancies between the booking value and the actual billing value. If you update BCD for customer accounts after data is synced into Zuora Revenue, you have to manually reconcile in Zuora Revenue to keep consistency.

## Do not remove discount charges after invoicing

If you remove discount charges from a subscription in Zuora Billing on a date within a period that has already been invoiced, the variance for reconciliation between booking and billing will occur. It requires manual reconciliation efforts to resolve this issue.

## Do not unpost, cancel, or delete invoices and memos

After the following object data is synced to Revenue, do not perform the unposting, canceling, or deleting operations in Zuora Billing. Otherwise, it will cause booking and billing variances.

-   Invoice items
-   Credit memos
-   Debit memos
-   Invoice item adjustments

## Do not delete amendments

After amendment data is synced to Zuora Revenue, do not delete the amendment in Zuora Billing.
