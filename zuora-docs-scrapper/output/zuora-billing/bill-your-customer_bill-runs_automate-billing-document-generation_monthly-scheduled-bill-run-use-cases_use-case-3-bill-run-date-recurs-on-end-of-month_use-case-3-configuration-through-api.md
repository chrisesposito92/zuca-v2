---
title: "Use case 3 configuration through API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/monthly-scheduled-bill-run-use-cases/use-case-3-bill-run-date-recurs-on-end-of-month/use-case-3-configuration-through-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:45.189Z"
---

# Use case 3 configuration through API

Configure use case 3 by setting bill run, invoice, and target date parameters through the API to achieve scheduled results.

To achieve the scheduled results of use case 3, configure the following fields through the [Create a bill run](https://developer.zuora.com/api-references/api/operation/POST_CreateBillRun/) operation.

-   Bill run date settings:

    -   `repeatFrom` : `2024-06-30`

    -   `repeatType` : `Monthly`

    -   `monthlyOnEndOfMonth` : `True`

-   Invoice date settings:

    -   `invoiceDateMonthOffset` : `1`

    -   `invoiceDateDayofMonth` : `1`

-   Target date settings:

    -   `targetDateMonthOffset` : `1`

    -   `targetDateDayofMonth` : `1`


The logic is as below:

-   Since you want to schedule the bill run date to recur on the end of each month, set the `repeatFrom` to end date of the month and `monthlyOnEndOfMonth` to True.

-   Since you want to schedule the invoice date and target date in the next month from the monthly schedule bill run date, that is, the scheduled invoice and target dates have the same offset 1 from monthly scheduled bill run dates, set the `invoiceDateMonthOffset` and `targetDateMonthOffset` to `1` .

-   Since you want to schedule the invoice and target dates to recur on the 1st of each month, set the `invoiceDateDayofMonth` to `1` .


## Request API example

| Request | POST /v1/bill-runs |
| --- | --- |
| Request Body | { "autoEmail": false, "autoPost": false, "autoRenewal": false, "billRunFilters": [ { "accountId": "2c9081a03c63c94c013c66688a2c00bf", "filterType": "Account" } ], "chargeTypeToExclude": [ "OneTime", "Usage" ], "invoiceDate":null, "invoiceDateMonthOffset": 1, "invoiceDateDayOfMonth": 1, "name": "test", "noEmailForZeroAmountInvoice": false, "targetDate": null, "targetDateMonthOffset": 1, "targetDateDayOfMonth": 1, "schedule": { "repeatFrom": "2024-06-30", "repeatType": "Monthly", "runTime": 0, "monthlyOnEndOfMonth":true } } |
