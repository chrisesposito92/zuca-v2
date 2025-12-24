---
title: "Pick the right data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/pick-the-right-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:42:31.497Z"
---

# Pick the right data source

Learn how to pick the right data source

These common reporting goals and needs provide starting points and examples that might help you find which data source to pick for your reports:

-   Find data about [active subscribers](#concept-jws42hd3__active_subscribers)

-   Analyze [Monthly Recurring Revenue (MRR)](#concept-jws42hd3__mrr) over time, by product, by subscription, or by account

-   Evaluate [Total Contract Value (TCV)](#concept-jws42hd3__tcv) with respect to a campaign over a time period

-   Get the bigger picture on [gross billing](#concept-jws42hd3__gross_billing) (including usage billing)

-   See how, why, and when [invoice item adjustments](#concept-jws42hd3__adjustments) are impacting revenue expectations

-   Watch [gross payments](#concept-jws42hd3__gross_payments) by account over time, see payment errors, and top reasons for electronic payment failures

-   Monitor [refunds](#concept-jws42hd3__refunds) and cash returned to customers.

-   Measure B2B [invoice](#concept-jws42hd3__invoice_balance) responsiveness for customers with overdue balances

-   Verify and account for [recognized revenue](#concept-jws42hd3__recognized_revenue)

-   Make projections of billing and estimate future cash based on a [billing preview](#concept-jws42hd3__billing_preview)


## Active subscribers

When you want information about active subscribers you can start from the [Subscription data source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/subscription-data-source). Metrics of interest may include:

-   Total number of subscriptions

-   Total number of canceled subscriptions

-   Total number of accounts with an active subscription


You can count the number of subscriptions active at any point in time if you filter for active subscriptions using the subscription status and start and end dates. You can also count the number of unique accounts with at least one active subscription.

Tip: Since expired and draft versions of subscription records are also maintained in this data source, you will typically want to filter out subscriptions where the status is equal to "Expired" or "Draft".

## Monthly Recurring Revenue (MRR)

One of the most important measures for most subscription businesses is contracted recurring revenue. This smoothes out the expected recurring revenue and provides one of the best metrics for overall subscription health. Useful reports may include MRR over time, by product, by subscription, or by account.

Try using the [Rate Plan Charge data source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/rate-plan-charge-data-source). Rate Plan Charges are the charges specific to one particular customer’s Subscription. Rate Plan Charges each contain an MRR metric and the effective start and end date for that charge.

Tips. Since old and draft versions of Subscriptions are also contained in this data source, you will typically want to filter out Subscriptions where the status is equal to "Expired" or "Draft".

## Total Contract Value (TCV)

Total contract value is useful for understanding how well your sales organization is creating long-term relationships with your prospects when they become subscribers. TCV accounts for the expected revenue from the entire term of a subscription, so it is typically used as a booking metric. For instance, you might look at the total TCV from all new subscriptions added in a certain quarter.

Try using the [Rate Plan Charge data source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/rate-plan-charge-data-source). Rate Plan Charges each include a TCV metric.

Tips. If you want to look at TCV from new subscriptions, you can sum Rate Plan Charge TCV and filter for cases where Subscription Version is equal to 1. You can also look at this over time by grouping on Subscription Start Date.

## Gross Billing (including usage billing)

Gross billing is the total amount billed before tax and adjustments. Useful reports may include looking at total amount billed by account, product, or time period. This is particularly useful if you bill for usage.

Try using the [Invoice Item data source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/invoice-item-data-source). Invoice Items tie back to specific charges, so they can be filtered and sliced on more dimensions.

Tips. You’ll typically only want to count Invoices that have been posted. You can accomplish that by filtering for records where Invoice Status is equal to "Posted". If you are looking for usage billing specifically, you can filter for records where Rate Plan Charge Charge Type is equal to "Usage".

## Adjustments

Adjustments to invoices are an indication of how much you are changing (usually decreasing) the amount that you bill for various reasons. That might include correcting errors, responding to customer service issues, or writing off invoices for non-payment. Common reports might include looking at the total adjustment amount for a given time period or top reasons for adjustments.

Try using the [Invoice Item Adjustment data source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/invoice-item-adjustment-data-source). You might also have an older feature, Invoice Adjustments, enabled. (These are adjustments that are applied to the entire invoice and not to any specific line item). If so, then you would also need to look at the Invoice Adjustment data source.

Tips. You will typically only want to count Invoice Item Adjustments that have been processed. You can accomplish that by filtering for records where Invoice Item Adjustment Status is equal to "Processed".

## Gross payments

Gross payments lets you follow cash inflow over time. This is often particularly valuable for B2C businesses or B2B businesses with self-serve channels. Commonly used reports include total payments by account over time, number of payment errors, and top reasons for electronic payment failures.

Try using the [Payment data source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/payment-data-source).

Tips. Payment Status can be a useful filter. Filter for records where Payment Status is equal to "Processed" to count and aggregate only payments that went through. Alternately, you can filter for Payments where Status is equal to "Error" to count the number of payment failures, and, for electronic Payments, you can use Payment Gateway Reponse or Gateway Response Code to classify failures based on the gateway response returned.

## Refunds

The [Refund data source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/refund-data-source) tracks cash returns to customers for various reasons.

Tips. You can use Refund Status is equal to "Processed" to filter for Refunds that were processed successfully. Refund Reason Code is also a useful grouping field if you want to look at an analysis of the most common refund reasons.

## Invoice balance

How quickly customers pay invoices that were due is an important aspect worthy of analysis for B2B businesses

The [Invoice data source](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/invoice-data-source) can be used for analysis of this behavior by account, in aggregate, or by other dimensions.

Tip: You will typically want to only look at invoices where status is equal to "Posted". Then you can use the Invoice Balance field to calculate the open balance for each invoice and the Invoice Due Date field to determine when that balance was or will be due.

## Recognized revenue

Revenue recognition is an accounting process for reporting revenue. If you are using Zuora’s revenue recognition capabilities, you can report on the revenue recognized within each of your accounting periods.

Refer to [Core Concepts of Revenue Recognition](/accounts-receivable/finance/revenue-recognition/core-concepts-of-revenue-recognition) for more information and use the Revenue Schedule Item data source.

Tip: You can calculate recognized revenue for each Accounting Period by grouping by Accounting Period Name or Start Date, and summing up Revenue Schedule Item Amount.

## Billing preview

Projecting future billing from existing subscriptions is often useful to create a baseline for forecasting billing and cash.

This is not yet available in the reporting module. However, users can request access to Zuora’s billing preview API to project future billing for existing subscriptions. This feature is in Limited Availability and access can be requested through the Zuora support team.

Refer to the [Billing Preview Run API](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/billingpreviewrun) for more information.
