---
title: "Overview of bill runs"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/overview-of-bill-runs"
product: "zuora-billing"
scraped_at: "2025-12-24T08:25:31.122Z"
---

# Overview of bill runs

Bill runs automate the creation of invoices and credit memos for customer accounts, supporting both scheduled and ad hoc billing processes.

Bill runs automatically create invoices for your customers on a set schedule, as well as create invoices for your customers, as needed. A bill run gathers information from one or more customer accounts and generates invoices for those accounts. Because of this, bill runs are also referred to as invoice runs.

Also, if you have the Invoice Settlement feature enabled, bill runs can automatically generate credit memos for negative charges based on your [invoice and credit memo generation rule](/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/rules-for-generating-invoices-and-credit-memos). The number of billing documents, invoices, and credit memos that are generated during the bill run is displayed on the bill run individual page.

Each bill run can be for a single customer, a group of customers (for example, those in a batch, or those that have the same bill cycle day), or for all customers. Bill runs can be scheduled in advance (for example, they can be scheduled to run every day at a set time), or run on an ad hoc basis (this means that you can initiate a bill run manually).

Zuora billing and rating engine generates chargeable events for timely and accurate invoices. The invoices are generated automatically and driven by the configuration of products, rate plans, and billing schedules. When it is time to invoice, you can process them thousands at a time, do it on-demand, or one at a time as your customers need it. You can generate real-time invoices immediately after refunds on payments or subscription changes. The prorated charges can be included in the invoice amount calculation to ensure that your customers are billed correctly when subscriptions start part way through a billing period.

After invoices have been created in the bill run, they are now ready to collect for payments. This is where payment runs come in: they are used to collect cash from your customers.

Note:

You must have the Create Bill Runs permission to create bill runs. See [Zuora Billing Roles](/zuora-platform/system-management/administrator-settings/user-roles/billing-roles) for more information.

## Bill runs and batches

If you need to create an invoice for more than one customer account, but you do not need to create invoices for every customer, you can do this easily by batching your customers so that you can process them together.

## Types of bill runs

There are two types of bill runs: ad hoc and scheduled.

-   An ad hoc bill run is one that you can run once to create invoices on demand.

-   A scheduled bill run occurs on a regular interval, such as once a week or once a month. It creates invoices for you automatically on that schedule. (Scheduled bill runs are also called recurring bill runs.)


You can create a bill run for multiple or single customer accounts. After a bill run is created, you will have the options of posting invoices individually, or posting all invoices for the bill run. Invoices must be posted before you can collect payments.

See [Creating Bill Runs](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation) for detailed instructions about creating bill runs.

## Billing in advance

Customers can be billed in advance directly from your bill run. If you want to send an invoice in advance of a billing period, set your invoice date to be the date of your bill and your target date to be the billing period you are billing in advance. For example, if you want to send your invoice on March 1, but the billing period is for April 1 to April 30, set your invoice date to March 1 and your target date to April 30. Your customer will receive an invoice for the billing period of April 1 to April 30 on March 1.

## Considerations

-   20,000 charges are allowed per invoice on a bill run.

-   When generating an invoice for your recurring charges, you can filter out Usage in the bill run. Use the Filter Charges options to exclude specific types of charges from being included in this bill run. You can include or remove the following types of charges from a bill run:

    -   One time

    -   Recurring

    -   Usage


    You can use these options to create bill runs for specific charges. For example, you could create one bill run for recurring charges, then bill for usage at a later time in a subsequent bill run.

-   Avoid creating multiple bill runs for the same account at the same time, as this may lead to conflicts and result in errors.


## Conditions for status changes on a bill run

If the status of an invoice generated in a bill run changes from Posted to Draft, the status of the corresponding bill run changes from Posted to Completed.
