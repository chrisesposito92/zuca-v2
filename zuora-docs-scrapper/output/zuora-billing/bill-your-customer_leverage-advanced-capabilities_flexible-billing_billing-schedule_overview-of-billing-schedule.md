---
title: "Overview of Billing Schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/overview-of-billing-schedule"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:26.145Z"
---

# Overview of Billing Schedule

The Billing Schedule feature allows for flexible invoice generation based on customized timelines and rules, enabling billing according to contract terms or project milestones.

The Billing Schedule feature provides you the capability and flexibility to generate a series of invoices for subscriptions with various terms by following customized timelines and rules. With this feature, you have the flexibility to leverage a custom invoice schedule to generate either a single invoice or multiple invoices with specified amounts on scheduled dates.

The Billing Schedule feature is generally available. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

The Billing Schedule feature provides you the capability and flexibility to bill your customers based on contract negotiations or project milestones. You can use this feature to generate invoices based on predefined invoicing dates and amounts.

-   You can customize invoicing dates that do not follow standard billing frequencies such as monthly, quarterly, or annually.
-   You can define invoicing amounts that vary based on certain criteria.

Without the Billing Schedule feature, you have to follow the standard billing process to bill customers with fixed amounts based on a regular billing period, such as monthly, quarterly, or annually. With this feature, you can bill orders, subscriptions, and charges on customized schedules instead of regular schedules, and then automatically generate invoices for the orders, subscriptions, and charges based on configured invoice schedules. When creating custom invoice schedules, you can either specify a fixed amount or a percentage of the total billing amount for each invoice schedule item.

For example, you want to generate four invoices for a subscription with a term of 12 months and a total amount of $12,000. Without the Billing Schedule feature, you might have to bill $3,000 quarterly in each invoice on the first day of January, April, July, and October. With this feature, you can flexibly bill $3,000 in the first invoice on February 3, $4,000 in the second invoice on July 12, $3,000 in the second invoice on October 20, and the remaining $2,000 in the fourth invoice on November 28.

Additionally, you have the flexibility to charge your customers by specifying percentages during invoice schedule creation, allowing you to synchronize billing with project milestones. For example, in a three-milestone project, you can invoice 10% for milestone 1, 20% for milestone 2, and 70% for milestone 3 through the corresponding invoices.

## Feature availability

The Billing Schedule feature is generally available. You must have the Orders or Orders Harmonization feature enabled to enable this feature. You can enable this feature in Sandbox and Production environments with the self-serve interface. For more information, see Enable billing features by yourself.

## Key concepts

To get an overall understanding of the Billing Schedule feature, keep the following key concepts in mind:

-   Invoice schedule An invoice schedule consists of one or more invoice schedule items that can be picked up by ad hoc bill runs, which are hourly scheduled by Zuora. Each invoice schedule item can trigger an invoice generation process. You can specify the triggering date when an invoice is generated, and specify the amount to be billed in each invoice.
-   Invoice schedule item An invoice schedule item contains information that is needed for triggering an invoice generation process. Each invoice schedule item is picked up and triggered by an ad hoc bill run on the scheduled date to generate an invoice with the scheduled amount.

For information on how to start using this feature, see Get started with Billing Schedule .
