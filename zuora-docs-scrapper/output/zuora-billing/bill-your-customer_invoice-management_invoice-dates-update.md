---
title: "Invoice dates update"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-dates-update"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:31.759Z"
---

# Invoice dates update

Learn how to update invoice dates using Zuora UI or API, and understand the implications on due dates and accounting periods.

When posting invoices or bill runs, you can update the invoice date with the Zuora UI or API.

If you select to update the invoice date, the due date of the corresponding invoice is also recalculated accordingly during the posting process. By default, the new invoice date is the date when you post the invoice or bill run. The new invoice date cannot fall in a closed accounting period.

You can view the update history of the invoice date in the History area on the invoice details page.

Note:

If the Setting determines when the document will be assigned a number from the official document sequence billing rule is set to Upon document posting , the check box for updating the invoice date will be automatically selected in the posting confirmation dialog. This indicates that by default, the invoice date is updated to the date when you post an invoice or a bill run.

## Expectation of working with Zuora Revenue when invoice date is earlier than booking date

The Order to Revenue feature and the Billing - Revenue Integration feature both support that the invoice date is earlier than the booking date only after the booking data becomes eligible to be collected in Zuora Revenue. It is because the Data Collection program in Zuora Revenue always collects the booking data before the billing data. For example, the booking date for a subscription is 04/02/2020, and its invoice date is set to 04/01/2020, the transaction lines can be picked up correctly in Zuora Revenue on 04/02/2020 or later.
