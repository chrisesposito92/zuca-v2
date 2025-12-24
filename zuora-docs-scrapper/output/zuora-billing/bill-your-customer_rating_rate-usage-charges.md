---
title: "Rate usage charges"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/rating/rate-usage-charges"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:40.964Z"
---

# Rate usage charges

Learn how usage charges are rated and billed in Zuora, including the impact of billing periods and the importance of uploading usage data timely.

If you include the charge type of Usage in your bill run, Zuora will pick up the usage data you have uploaded for the corresponding usage charges and calculate the amounts your customers need to pay. This process is how usage rating works in Zuora Billing generally.

## Usage rating and billing period

Usage rating is closely related to the status of a billing period, open or closed. A billing period is open before a bill run is triggered and an invoice is generated for that billing period. After a bill run is triggered and an invoice is generated for that billing period, it is closed.

Note: For on-demand rating, billing period is determined differently.

If the start date of a usage record falls into one billing period and that billing period is open when you add the usage data, the usage data is picked up for rating, for that billing period in the next bill run.

You can still upload usage data for a closed billing period, but that data will not be picked up for rating in the next bill run.

## Example

The following example shows the relationship between usage rating and billing period:

-   Charge name: Charge 1
-   Charge type: Usage
-   Billing cycle day: 5th of the month
-   Billing period: monthly
-   Usage data uploaded:
    -   Start date: 07/01/2021
    -   End date: 07/31/2021

Scenario 1: Usage data is uploaded when a billing period is open and gets processed.

-   Bill run date: 07/08/2021
-   Bill run target date: 07/05/2021
-   Billing period: 06/05/2021 – 07/04/2021
-   Usage data upload date: 07/01/2021

The start date of the usage data (07/01/2021) falls into the billing period of 06/05/2021 – 07/04/2021. And the billing period is still open when the usage data is uploaded. Therefore, this usage data will be rated and included in the corresponding invoice.

Scenario 2: Usage data is uploaded when a billing period is closed and remains pending.

-   Bill run date: 07/08/2021
-   Bill run target date: 07/05/2021
-   Billing period: 06/05/2021 – 07/04/2021
-   Usage data upload date: 07/31/2021

The start date of the usage data (07/01/2021) falls into the billing period of 06/05/2021 – 07/04/2021. But the billing period is closed when the usage data is uploaded. Therefore, this usage data will not be rated and included in any invoices. It will remain in pending status.

## Notes on usage charges

-   The billing timing for usage charges is always in arrears. For example, you upload a usage record with a start date of 07/01. If you trigger a bill run with a target date of 07/01, no invoices will be generated from this bill run.
-   After a usage charge is invoiced, the usage charge can only be updated or removed from the subscription later than its last invoice date. This behavior is different from recurring charges or one-time charges.
-   A flat feecharge of the Usage charge type does not have a defined Unit of Measure (UOM). To process the usage records for this charge, the UOM of the usage record must be Each . Also, the UOM must be active in the Billing settings.

## Do not process usage charges without usage records

Note:

This feature is in the Early Adopter phase. If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).

Turning on the Do not process usage charges without usage records setting means that the rating system will check if there are usage records uploaded by a bill run’s target date, if no usage records are found, the system will not process this usage charge. It is not related to whether the quantity is 0, but to whether a usage record has been uploaded by the bill run's target date.

-   If this setting is turned OFF and there is no usage record uploaded by the bill run's target date, when you do the bill run, there will be a $0 invoice generated.
-   If this setting is turned ON and there is no usage record uploaded by the bill run's target date, when you do the bill run, there is no invoice generated.
-   Once this feature is enabled, bill run performance might be affected. This is because the bill run process will need to scan all past periods for unprocessed usage charge over time.
