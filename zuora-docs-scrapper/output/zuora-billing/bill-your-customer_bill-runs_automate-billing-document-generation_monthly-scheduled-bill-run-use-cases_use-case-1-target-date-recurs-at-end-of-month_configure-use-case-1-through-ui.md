---
title: "Configure use case 1 through UI"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/monthly-scheduled-bill-run-use-cases/use-case-1-target-date-recurs-at-end-of-month/configure-use-case-1-through-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T08:26:27.707Z"
---

# Configure use case 1 through UI

Learn how to configure a scheduled bill run for use case 1 by setting specific dates and recurrence options through the UI.

To achieve the scheduled results of use case 1, when [creating a scheduled bill run](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation/create-a-scheduled-bill-run) on the Create Scheduled Bill Run page, configure the following fields:

1.  Specify the Bill Run Date as 04/25/2024 and Repeats as Monthly.
2.  Specify the Invoice Date as 04/25/2024.
3.  Specify the Target Date as 04/30/2024 and select Month end of the same month as the run date.
4.  Preview the recurrence and scheduled dates at the right.

    Note: Ensure you specify the Bill Run Date, Invoice Date, and Target Date as today or a future date.

    ![Monthly scheduled bill run use case](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/29716f30-e2f8-47db-8438-05a91b07aa1e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI5NzE2ZjMwLWUyZjgtNDdkYi04NDM4LTA1YTkxYjA3YWExZSIsImV4cCI6MTc2NjY1MTE4NSwianRpIjoiZGRlN2YzOWIxOWE5NGY2Y2I2MDUyMmEzNmQ5MWE2YjYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.QDBfwkF69YulubpDxyyO3o3OMBUtBSkm19ANf5ZGL9U)

    The logic is as below:

    -   Bill run date scheduled results: By specifying the Bill Run Date as 04/25/2024 and the Repeats field as Monthly, the bill run is scheduled to be executed on the 25th of each month.

    -   Invoice date scheduled results: By specifying the Invoice Date as 04/25/2024, Zuora identifies that your specified bill run date and invoice date are the same date. The invoice date recurs on the same date as the monthly scheduled bill run date.

    -   Target date scheduled results: By specifying the Target Date as 04/30/2024, Zuora identifies that your specified bill run date and invoice date are in the same month, 30 is the end day, and thus displays the following options:

        -   5 days after the bill run date

        -   Day 30 of the same month as the run date

        -   Month end of the same month as the run date


    After you select the Month end of the same month as the run date option, the target date recurs in the same month as the monthly scheduled bill run date, but the day value is the end day of the month instead of 30th of each month.

    Note: If you use the 29th of February as the invoice or target date, you also need to select to schedule the date to reoccur on the 29th or at the end of the month.
