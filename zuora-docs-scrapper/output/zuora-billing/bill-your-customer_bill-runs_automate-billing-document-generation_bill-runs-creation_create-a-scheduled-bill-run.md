---
title: "Create a scheduled bill run"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation/create-a-scheduled-bill-run"
product: "zuora-billing"
scraped_at: "2025-12-24T08:25:40.013Z"
---

# Create a scheduled bill run

Learn how to create a scheduled bill run, including setting permissions, selecting accounts, and configuring schedule dates and filters.

You must have the Create Bill Runs permission to create bill runs, and the Do Bill Runs For Multiple Accounts permission to create bill runs for multiple accounts. See Billing Roles for more information.

To create a schedules bill run, complete the following steps:

1.  Navigate to and click New Scheduled Bill Run..
2.  (Optional): Enter a name for the bill run.
3.  Select either Multiple Accounts or Single Account.

    -   If you select Multiple Accounts, do the following:

        -   Select which customer accounts to include. Select All Batches, or select one or more batches from the list.

        -   Select the bill cycle day to use. Select one of the following:

            -   All Bill Cycle Days: Includes all accounts.

            -   That Matches the Bill Run Day : Includes all accounts with a bill cycle day that matches the bill run day. When the bill run day is the last day of the current month, including all accounts with a bill cycle day greater than or equal to the bill run day.
            -   Specific Billing Cycle Day: Select a day from the list.

        -   See Customer Accounts for more information about billing batch and billing cycle start dates.

    -   If you select Single Account, search and select the specific customer account or accounts that you want to invoice.

    -   If you select Advanced Filter, you can use one or more from the Account Filter, Subscription Filter, or Rate Plan Charge Filter to define your custom filter and create a bill run for this custom filter. See Bill Run Advanced Filter

4.  In the section , specify the following information:

    -   Repeats: How often the bill run is repeated. You can choose not to repeat the bill run, or to repeat daily, weekly, or monthly. For daily, weekly, or monthly, you must specify the range. The range determines how long the scheduled bill run is repeated. For weekly, you must additionally specify which days of the week the bill run is to be executed.

    -   Bill Run Date: The date that the first bill run is executed. The default value is today's date. When you specify the date as the end of a month and set the Repeats field as Monthly, see Monthly Scheduled bill run use cases .

    -   Invoice Date: The invoice date displayed on the invoices. You can choose any date before, on, or after the bill run date. The invoice date updates each time the bill run is repeated. If you choose an invoice date that is, for example, five days after the bill run date, then the invoice date will always be five days after the bill run date each time that the bill run is repeated. For example, if you create a scheduled bill run with a bill run date of 01/01/2016 and an invoice date of 01/06/2016, if the bill run repeats on 02/01/2016, then the invoice date for that bill run will be 02/06/2016. By default, the invoice date is equal to the bill run date. When you specify the date as the end of a month and set the Repeats field as Monthly, see Monthly Scheduled bill run use cases .

    -   Target Date: The date used to determine which charges are to be billed. All charges that are to be billed on this date or prior will be included in this bill run. By default, the target date is equal to the bill run date. When you specify the date as the end of a month and set the Repeats field as Monthly, see Monthly Scheduled bill run use cases .
        Note: Creating a bill run whose target date is over one year from the creation date may cause the bill run to run for an extended period of time. See Future dated bill runs for more information.

    -   Time of the Day: The time of day in the tenant time zone that the bill run is executed. The bill run is executed plus or minus 20 minutes from the specified time.


5.  (Optional): At the right of the page, check Recurrence and Preview dates in a preview section. Click the View more (up to 15) link to expand the section to view a maximum of 15 results.
6.  (Optional): Select the processing rules that apply to the bill run. See Bill run processing rules below for more information.
7.  (Optional): Select the subscription-based charge types or Order Line Items options in the Additional Settings section. For more information, see Bill run additional settings below.
8.  (Optional): Filter charges based on charge type. Deselect charge types that you want to exclude from the bill run.
9.  Click Create Bill Run to start the scheduled bill run.

    If you create a bill run whose target date is over one year from the creation date, a message will be displayed to indicate this is a future-dated bill run and ask for your confirmation. After you click Yes, the processing bill run cannot be canceled. This might cause the bill run to run for an extended period of time.
    Note: If you create a bill run whose target date is over one year from the creation date, a message will be displayed to indicate this is a future-dated bill run and ask for your confirmation. After you click Yes, the processing bill run cannot be canceled. This might cause the bill run to run for an extended period of time.
