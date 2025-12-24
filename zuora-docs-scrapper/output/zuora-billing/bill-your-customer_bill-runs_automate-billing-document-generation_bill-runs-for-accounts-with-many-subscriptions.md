---
title: "Bill runs for accounts with many subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-for-accounts-with-many-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T08:25:58.250Z"
---

# Bill runs for accounts with many subscriptions

Understand the impact of bill runs on accounts with varying subscription volumes and how optimization features can enhance performance for large accounts.

Bill runs have different impacts on accounts with few subscriptions and on accounts with many subscriptions.

-   Accounts with few subscriptions: By default, the optimization feature for large accounts is disabled, and bill runs generate invoices at the account level. A bill run processes all subscriptions in an account first, then generates an invoice for that account. This default method is designed for accounts with few subscriptions. It processes accounts quickly and generates invoices frequently. The amount of time a bill runs takes to complete is roughly proportional to the number of accounts in the bill run. See [Viewing Invoices](/zuora-billing/bill-your-customer/invoice-management/invoice-details-view) for information on how to monitor the processing of accounts during a bill run. By default, Zuora Billing consolidates all subscriptions onto a single invoice. A separate invoice is generated for each subscription with the Invoice the Subscription Separately feature enabled. This can increase the number of invoices generated. See [Invoicing Subscriptions Separately](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/create-subscriptions/invoice-subscriptions-separately) for more information.

-   Accounts with many subscriptions: Some customer accounts, such as reseller accounts, can have thousands of subscriptions. With the default bill run method, it can take hours to process the large number of subscriptions before invoice generation can begin. Bill runs run slowly, and monitoring progress becomes difficult as no invoices are generated until all subscriptions in an account have been processed. The default method of generating invoices at the account level is not suited to large accounts.


## Bill run optimization for large accounts

If you have customers with large numbers of subscriptions, you can use this feature. This feature offers the following benefits when processing accounts with many subscriptions:

-   Substantially increases bill run performance.

-   Displays a new tab that lets you monitor the processing of large accounts.


## Performance optimization

When Zuora Global Support enables the RBE optimization for large accounts permission on your tenant, they set a subscription threshold, for example, ten subscriptions. During a bill run, any accounts with a number of subscriptions equal to or greater than the threshold are flagged as large accounts and are processed using the optimized method. All other accounts are processed using the default method, and invoices for these accounts are generated at the account level.

The optimized method works by generating invoices incrementally at the subscription level rather than all together at the account level. This allows for subscription processing and invoice generation to run simultaneously and significantly reduces the time required to complete a bill run.

Note: The optimization feature does not affect the look and feel of the generated invoice. Invoices generated with the normal method and the optimized method are identical.

During a bill run, when a large account is being processed with the optimized method, a temporary invoice is displayed in the All Invoices view. To access this view, navigate to in the left-hand navigation section.

The temporary invoice has a status of Generating, and is named `TMP-INV-<AccountNo>` , where <AccountNo> is the account number of the customer, for example, `TMP-INV-A00000005` . After all the invoices for the account have been generated and are displayed, the temporary invoice is removed from the list.

## Monitor the processing of large accounts

The processing of an account with a large number of subscriptions can take a significant amount of time, so you can monitor its progress. During a bill run the details of the large account currently being processed are displayed on the bill run detail page, in a tab called Generating Invoice. Only one account is shown at any one time, and only large accounts are displayed. Accounts that have a number of subscriptions lower than the threshold do not appear in the Generating Invoice tab.

To view the Generating Invoice tab, go to in the left-hand navigation and click the name of the bill run that is currently being processed. The Generating Invoice tab is only visible when the bill run status is Processing . After the bill run completes, the tab is no longer visible.

The Generating Invoice tab displays the time the processing of the account began, and how many subscriptions in the account have been processed so far.
