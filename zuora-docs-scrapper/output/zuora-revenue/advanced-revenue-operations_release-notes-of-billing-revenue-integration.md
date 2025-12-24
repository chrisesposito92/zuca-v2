---
title: "Release Notes of Billing - Revenue Integration"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/release-notes-of-billing---revenue-integration"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:38:53.789Z"
---

# Release Notes of Billing - Revenue Integration

This document summarizes the latest enhancements and resolved issues for Billing - Revenue Integration in Zuora Revenue, including updates on the latest version and environment-specific details.

Note:

We no longer maintain a separate Release Notes for Billing - Revenue Integration starting from Zuora Revenue 37.002.01.00. To see the latest updates in Billing - Revenue Integration, see [Zuora Revenue Release Notes](/release-notes/latest-release/2025.q4-release#concept-o3vjk17d) .

This article provides a summary of enhancements and resolved issues for Billing - Revenue Integration based on the latest version of Zuora Revenue.

To learn about the previous Release Notes, see the following articles:

-   [Release Notes based on Zuora Revenue 37.001.00.00](/release-notes/previous-release-notes/previous-release-notes).

-   Release Notes based on [RevPro 36.011.00](/release-notes/previous-release-notes/previous-release-notes).

-   Release Notes based on [RevPro 36.010.00](/release-notes/previous-release-notes/previous-release-notes).


The latest version in the sandbox environment provides cumulative updates based on the latest version in the production environment. The following table lists the latest version for each Zuora Revenue environment:

| Environment | Latest version | Release date |
| --- | --- | --- |
| Production | 37.001.00.00 | May 16, 2020 |
| Sandbox | 37.002.00.00 | July 14, 2020 |

## Enhancements

This section includes the enhancements for Zuora Revenue version 37.002.00.00 and the subsequent minor versions.

A new report called Booking and Billing Variances Report is now available in Zuora Revenue. This report provides visibility to the transactions where the booking amount mismatches the billing amount for an accounting period. It also displays the reason code for variances, which eases your reconciliation process.

See [Run Booking and Billing Variances Report](Handle_variances_for_reconciliation_between_booking_and_billing/Run_Booking_and_Billing_Variances_Report.dita) for more information.

## Subscription name in RC workbench now supports drilldown

The Subscription Name column in RC Workbench now supports drilldown to the original subscription of Zuora Billing. By clicking the link displayed in the Subscription Name column for an RC Workbench in Zuora Revenue, you can directly go to the corresponding subscription page in Zuora Billing. This enhancement eases your effort to view and process transactions in Zuora Billing from Zuora Revenue.

Zuora Revenue now supports the Invoice Ratable method where the billing end date is later than the booking end date. Zuora Revenue overwrites the invoice end date based on the following logic:

-   If the service start date < charge end date, the service end date will be overwritten by the charge end date.
-   If the service start date >= charge end date, the service end date will be overwritten by the service start date. Note that for percentage discount charges, the billing end date is overwritten by the end date of the applied charge.

## Revenue start date and end date now on the same day for one-time charges

The revenue start date and revenue end date in Zuora Revenue are now on the same day for one-time charges. For example, if you create a one-time charge on 04/30/2020, both the revenue start date and revenue end date are 4/30/2020. This behavior is now aligned with Zuora Billing.

Previously, a one-day difference was automatically applied to the recognition for one-time charges, which might cause reconciliation issues. For example, for a one-time charge created on 04/30/2020, the revenue start date was 4/30/2020, but the revenue end date would be 5/01/2020.

Billing - Revenue Integration supports the field mapping for the Contact object. To prevent you from incorrectly mapping Contact fields, the additional validation has been added to the data mapping templates. You can map all fields on the Contact object to ATR1 - ATR60 in Zuora Revenue.
