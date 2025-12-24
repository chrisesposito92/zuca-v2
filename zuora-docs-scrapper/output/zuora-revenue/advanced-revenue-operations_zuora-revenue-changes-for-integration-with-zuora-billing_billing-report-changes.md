---
title: "Billing report changes"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/zuora-revenue-changes-for-integration-with-zuora-billing/billing-report-changes"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:38:28.426Z"
---

# Billing report changes

This document outlines changes to the Billing report in Zuora Revenue, including the exclusion of system-generated CM-C lines to prevent misleading billing information.

In the Zuora Billing and Zuora Revenue integration scenarios, there are cases when the contractual amount of a SO line is less than the total billed amount. This situation usually happens for the usage and evergreen subscriptions. When the contractual amount of a SO line is less than the total billed amount, Zuora Revenue will automatically create a CM-C (invoice cancelation) line for the amount variance to temporarily adjust the invoice value and reverse the previously billed revenue.

This type of CM-C lines is considered as the system-generated CM-C line and not a billing document that is created in the upstream system by bill runs or collections. For system-generated CM-C lines, an initial entry will not be created to avoid adjusting the liability balance. Besides, the AR balance will not be impacted until the actual credit memos from Zuora Billing are collected in Zuora Revenue.

If the system-generated CM-C lines are included in the Billing report, the overall billing information will be misleading in the report. The total billed amount will be less than expected because it is reduced by the system-generated CM-C lines.

To avoid confusion in the Billing report, the following changes are introduced in the Billing report in Zuora Revenue:

-   A standard report layout, Billing Report (Exclude System CM-C) , is added to by default exclude the system-generated CM-C lines in the Billing report.

-   A filter named Rc Bill Sys Generated CMC is added to provide you with the flexibility to include or exclude the system-generated CM-C lines in the Billing report.
