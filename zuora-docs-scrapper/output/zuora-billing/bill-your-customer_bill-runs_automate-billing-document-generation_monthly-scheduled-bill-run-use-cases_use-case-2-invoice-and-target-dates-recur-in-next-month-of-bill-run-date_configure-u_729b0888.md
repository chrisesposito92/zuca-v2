---
title: "Configure use case 2 through UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/monthly-scheduled-bill-run-use-cases/use-case-2-invoice-and-target-dates-recur-in-next-month-of-bill-run-date/configure-use-case-2-through-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:34.311Z"
---

# Configure use case 2 through UI

Configure scheduled bill runs for use case 2 by setting specific dates and recurrence patterns through the UI.

To achieve the scheduled results of use case 2, when [creating a scheduled bill run](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation/create-a-scheduled-bill-run) on the Create Scheduled Bill Run page, configure the following fields:

1.  Specify the Bill Run Date as 05/16/2024 and Repeats as Monthly.
2.  Specify the Invoice Date as 06/01/2024 and select Day 1 of the next month of the run date on.
3.  Specify the Target Date as 06/30/2024 and select Month end of the next month after the run date.
4.  Preview the recurrence and scheduled dates at the right.

    Note: Ensure you specify the Bill Run Date, Invoice Date, and Target Date as today or a future date.

    ![Monthly scheduled bill run use case](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d4c890ef-cc98-48cc-8b43-a67764434ccf?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ0Yzg5MGVmLWNjOTgtNDhjYy04YjQzLWE2Nzc2NDQzNGNjZiIsImV4cCI6MTc2NjY1MTE5MywianRpIjoiY2E5NjYwM2FiM2I2NDFjZGFmNmY5ZDUwZWM3OTE2OGYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.F6ncmbHPZvY9-G0UATyjP0x6IGWAOfusEM7Wes-IlnI)

    The logic is as below:

    -   Bill run date scheduled results: By specifying the Bill Run Date as 05/16/2024 and the Repeats field as Monthly, the bill run is scheduled to be executed on the 16th of each month.

    -   Invoice date scheduled results: By specifying the Invoice Date as 06/01/2024, Zuora calculates the difference in months from your specified Bill Run Date 05/16/2024 to the Invoice Date 06/01/2024 is one month (next month), and the day value of the Invoice Date is 01. Zuora displays the following options:

        -   16 days after the bill run date

        -   Day 1 of the next month of the run date on


    After you select the Day 1 of the next month of the run date on option, the invoice date recurs on the 1st day of the next month from the monthly scheduled bill run date.

    -   Target date scheduled results: By specifying the Target Date as 06/30/2024, Zuora calculates the difference in months from your specified Bill Run Date 05/16/2024 to the Target Date 06/30/2024 is one month (next month) and identifies that the 30th is the end day of the month, and thus displays the following options:

        -   45 days after the bill run date

        -   Day 30 of the next month of the run date on

        -   Month end of the next month after the run date


    After you select the Month end of the next month after the run date option, the target date recurs on the end day of the next month from the monthly scheduled bill run date.

    If you use the 29th of February as the invoice or target date, you also need to select to schedule the date to reoccur on the 29th or at the end of the month.
