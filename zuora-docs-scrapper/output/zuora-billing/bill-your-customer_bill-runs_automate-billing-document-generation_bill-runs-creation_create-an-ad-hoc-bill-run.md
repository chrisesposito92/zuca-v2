---
title: "Create an ad hoc bill run"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation/create-an-ad-hoc-bill-run"
product: "zuora-billing"
scraped_at: "2025-12-24T08:25:37.627Z"
---

# Create an ad hoc bill run

Create ad hoc bill runs by navigating to the Billing section, selecting accounts, specifying bill run dates, and applying optional processing rules and filters.

You must have the Create Bill Runs permission to create bill runs, and the Do Bill Runs For Multiple Accounts permission to create bill runs for multiple accounts. See Billing Roles for more information.

To create a new ad hoc bill run, complete the following steps:

1.  Navigate to and click New Bill Run.
2.  (Optional): Enter a name for the bill run.
3.  Select either Multiple Accounts or Single Account.

    -   If you select Multiple Accounts, do the following:

        -   Select which customer accounts to include. Select All Batches, or select one or more batches from the list.

        -   Select the bill cycle day to use. Select All Bill Cycle Days, or select Specific Billing Cycle Day and then select a day from the list. See Customer Accounts for more information about billing batch and billing cycle start dates.

    -   If you select Single Account, search and select the specific customer account to be invoiced.

        -   If you want to invoice all the subscriptions of one customer account, select the specific account to be invoiced.

        -   If you want to invoice specific subscriptions of one customer account, select the specific account, clear the All subscriptions checkbox below the Invoice Owner Account field, enter the subscription number or search for the subscriptions that you want to invoice, and then click to add one or more subscriptions. Note that the specified account must be the invoice owner account of the selected subscriptions.

        -   If you select Advanced Filter, you can use one or more from the Account Filter, Subscription Filter, or Rate Plan Charge Filter to define your custom filter and create a bill run for this custom filter. See Bill Run Advanced Filter .


4.  Specify your desired bill run dates in the Bill Run Dates section.

    -   Invoice Date : The invoice date displayed on the invoices.

    -   Target Date : The date used to determine which charges will be billed. All charges that are to be billed on this date or prior will be included in this bill run. By default, the target date is equal to the bill run date.
        Note: Creating a bill run whose target date is over one year from the creation date might cause the bill run to run for an extended period of time. See Future dated bill runs for more information.


5.  (Optional): Select the processing rules that apply to the bill run. See Bill run processing rules below for more information.
6.  (Optional): Select the subscription-based charge types or Order Line Items options in the Additional Settings section. For more information, see Bill run additional settings below.
7.  (Optional): Filter charges based on charge type. Deselect charge types that you want to exclude from the bill run.
8.  Click Create Bill Run to create the bill run.
9.  In the displayed confirmation dialog, click Yes to confirm the bill run creation.

    Additionally, you can also create ad hoc bill runs in any of the following approaches:

    -   On the customer account detail page, click Create Bill Run at the top right corner or in the Transactions section.

    -   On the subscription detail page, click Create Bill Run at the top right corner.


    If you set the subscriptions to be invoiced separately and create an ad hoc bill run by subscription, each subscription will still be on its own invoice.
