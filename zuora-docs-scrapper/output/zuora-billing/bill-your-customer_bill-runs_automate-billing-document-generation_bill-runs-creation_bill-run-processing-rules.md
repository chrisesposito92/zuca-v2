---
title: "Bill run processing rules"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation/bill-run-processing-rules"
product: "zuora-billing"
scraped_at: "2025-12-24T08:25:42.956Z"
---

# Bill run processing rules

Explore options for fine-tuning bill run processing, including auto-renewal of subscriptions, email delivery preferences, and auto-posting invoices.

The following options assist with fine-tuning your bill run processing.

## Automatically renew auto-renew subscriptions

Renew all subscriptions that are configured to automatically renew and are due for renewal during this billing period. Auto-renewals are triggered by an auto-generated renewal amendment created by Zuora on the first day of the next subscription renewal term at 2:00 am PST. If you would like to generate an invoice for a subscription that has not yet auto-renewed, select the option (in the billing run) to automatically renew auto-renew subscriptions that are up for renewal. When this option is selected, Zuora will create an auto-renewal amendment at the same time the invoice is generated. See [Renewing Subscriptions Automatically](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/create-subscriptions/automatic-subscriptions-renewal) for more information.

The Automatically renew auto-renew subscriptions that are up for renewal check box is checked by default. This default value can help reduce potential billing errors. Zuora recommends that you keep the default value for this field when creating bill runs.

## Do not email invoices for accounts with 0 invoice total

When creating a bill run, you can configure the processing rules for your bill run.

Invoices with a zero total will not be emailed when you do a batch email of invoices. You might have an annual subscription with a recurring charge that is billed upfront, but you have monthly usage that is billed in arrears. If there is no usage for a given month, you might have a $0 invoice, and in that case, this feature will allow you to specify that you do not want to send the invoice.

![Bill run processing rules](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/da44d35d-dd41-4bd9-ab45-05d1ea4f91b5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRhNDRkMzVkLWRkNDEtNGJkOS1hYjQ1LTA1ZDFlYTRmOTFiNSIsImV4cCI6MTc2NjY1MTE0MCwianRpIjoiNzBhMTAxYjk4MWRhNDFhMWFjMWE2MWE0YjAxZjM3MTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.U8ulA6V0HLJnSU7C1VxpjYAfioxYC4aKlErxBSU0aq0)

## Email delivery option for sending all invoices or last updated invoices

Zuora calculates the number of invoices that qualify for email invoices delivery when processing email invoices from a bill run. To email invoices, locate the target bill run in Posted status on the Bill Runs page, and then click the Email icon on the right side of the row.

A confirmation dialog appears indicating how many billing documents qualify for the email notification. Confirm you want to send the billing documents.

## Auto-post invoices upon completion of bill run

You can set up bill runs to automatically post invoices after the bill run is completed. You can also automatically batch and send invoice emails after the bill run completes.

If you have the Invoice Settlement feature enabled, the credit memos that are generated in bill runs can also be auto-posted.

Review the [Billing Workflow](/zuora-billing/bill-your-customer/collect-payments/implement-billing-and-payments-workflow) to better understand the process before implementing auto-posting invoices and auto-sending invoice emails.

To auto-post invoices, you must first enable the [Support bill run auto-post billing rule](/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules). After that, the following options are available from the Create Bill Run page:

-   Auto-post invoices upon completion of bill runs.

-   Email invoices after auto-post is complete.


## Email invoices after auto-post is complete

Zuora automatically batches all emails that the invoices included in the bill run after completion of the bill run. To auto-post invoices, you must first enable the [Support bill run auto-post billing rule](/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules).

If you have the Advanced AR Settlement feature enabled, the credit memos that are generated in bill runs can also be sent in emails upon posting.
