---
title: "Configure use case 3 through UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/monthly-scheduled-bill-run-use-cases/use-case-3-bill-run-date-recurs-on-end-of-month/configure-use-case-3-through-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:42.869Z"
---

# Configure use case 3 through UI

Configure scheduled bill runs for use case 3 by setting specific dates and recurrence options through the UI.

To achieve the scheduled results of use case 3, when [creating a scheduled bill run](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation/create-a-scheduled-bill-run) on the Create Scheduled Bill Run page, configure the following fields:

1.  Specify the Bill Run Date as 06/30/2024, Repeats as Monthly, and select the Always on month end option.
2.  Specify the Invoice Date and Target Date as 07/01/2024 and select Day 1 of the next month of the run date on.
3.  Preview the recurrence and scheduled dates at the right.

    Note: Ensure you specify the Bill Run Date, Invoice Date, and Target Date as today or a future date.

    ![Monthly scheduled bill run use case](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2b55a0c3-f728-44f4-bcae-7ab516722ff6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJiNTVhMGMzLWY3MjgtNDRmNC1iY2FlLTdhYjUxNjcyMmZmNiIsImV4cCI6MTc2NjY1MTIwMCwianRpIjoiOWQyNTZlMGM5MTQ1NGQxOThiMTcxMzVlNDA0M2U2ZDgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.QVQMK2RayEvyHyyXcP6S-bYlxsXUy99graUTmGkLbag)

    The logic is as below:

    -   Bill run date scheduled results: After you specify the Bill Run Date as 06/30/2024, the Repeats field as monthly. Zuora identifies that the 30th is the end day of the month, and thus displays the following options:

        -   Monthly on day 30

        -   Always on month end


    Select Always on month end, the bill run is scheduled to be executed on the end day of each month.

    In case the end day is 31st, the Always on month end option is not available, however, the bill run is still scheduled to be executed on the end day of each month

    -   Invoice and target dates scheduled results: By specifying the Invoice Date and Target Date as 07/01/2024, Zuora calculates the difference in months from your specified Bill Run Date 06/30/2024 to the Invoice Date and Target Date 07/01/2024 is one month (next month), and the day value of the Invoice Date and Target Date is 01. Zuora displays the following two options:

        -   1 days after the bill run date

        -   Day 1 of the next month of the run date on


    After you select the Day 1 of the next month of the run date on option, the invoice and target dates recur on the 1st day of the next month from the monthly scheduled bill run date.
