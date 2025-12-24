---
title: "Use case 2 configuration through API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/monthly-scheduled-bill-run-use-cases/use-case-2-invoice-and-target-dates-recur-in-next-month-of-bill-run-date/use-case-2-configuration-through-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:37.181Z"
---

# Use case 2 configuration through API

Configure use case 2 through the API by setting bill run, invoice, and target date parameters to achieve scheduled results.

To achieve the scheduled results of use case 2, configure the following fields through the [Create a bill run](https://developer.zuora.com/api-references/api/operation/POST_CreateBillRun/) operation.

-   Bill run date settings:

    -   `repeatFrom` : `2024-05-16`

    -   `repeatType` : `Monthly`

-   Invoice date settings:

    -   `invoiceDateMonthOffset` : `1`

    -   `invoiceDateDayofMonth` : `1`

-   Target date settings:

    -   `targetDateMonthOffset` : `1`

    -   `targetDateDayofMonth` : `31`


The logic is as below:

-   Since you want to schedule the invoice date and target date in the next month from the monthly scheduled bill run date, that is, the scheduled invoice and target dates have the same month offset 1 from monthly scheduled bill run dates, set the `invoiceDateMonthOffset` and `targetDateMonthOffset` to `1` .

-   Since you want to schedule the invoice date to recur on the 1st of each month, set the `invoiceDateDayofMonth` to `1` .

-   Since you want to schedule the target date to recur on the end day of each month, set the `invoiceDateDayofMonth` to `31` .


Note:

Since April only has 30 days, when you set the `targetDateDayofMonth` to `31` , Zuora identifies that you want to schedule the target date to recur on the end day of the month rather than the 30th of the month. You can follow the same setting for February, which has only 28 or 29 days.

## Request API example

| Request | POST /v1/bill-runs |
| --- | --- |
| Request Body | { "autoEmail": false, "autoPost": false, "autoRenewal": false, "billRunFilters": [ { "accountId": "2c9081a03c63c94c013c66688a2c00bf", "filterType": "Account" } ], "chargeTypeToExclude": [ "OneTime", "Usage" ], "invoiceDate":null, "invoiceDateMonthOffset": 1, "invoiceDateDayOfMonth": 1, "name": "test", "noEmailForZeroAmountInvoice": false, "targetDate": null, "targetDateMonthOffset": 1, "targetDateDayOfMonth": 31, "schedule": { "repeatFrom": "2024-05-16", "repeatType": "Monthly", "runTime": 0 } } |
