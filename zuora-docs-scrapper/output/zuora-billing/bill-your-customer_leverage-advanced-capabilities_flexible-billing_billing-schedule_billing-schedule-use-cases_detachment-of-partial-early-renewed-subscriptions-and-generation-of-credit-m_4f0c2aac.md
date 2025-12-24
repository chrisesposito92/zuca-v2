---
title: "Detachment of partial early renewed subscriptions and generation of credit memos in a new invoice schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-and-generation-of-credit-memos-in-a-new-invoice-schedule"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:03.980Z"
---

# Detachment of partial early renewed subscriptions and generation of credit memos in a new invoice schedule

Detaching subscription rate plan charges from existing invoice schedules allows for the generation of credit memos in new invoice schedules, particularly useful in scenarios involving early renewals.

Detaching subscription rate plan charges from existing invoice schedules allows you to generate credit memos for these charges in other invoice schedules.

In this use case, three subscriptions with the same term of 12 months are created and a single invoice schedule with two invoice schedule items is created for these subscriptions.

As shown in the following table, three subscriptions are created by creating an order, respectively containing rate plan charges C1, C2, and C3, with a total amount of $45,000.00. For more information, see Create subscriptions .

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | Lit price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01-01-2025 | 12 | C1 | 12-31-2025 | $15,000.00 | Per Year | Annual |
| S2 | 01-01-2025 | 12 | C2 | 12-31-2025 | $15,000.00 | Per Year | Annual |
| S3 | 01-01-2025 | 12 | C3 | 12-31-2025 | $15,000.00 | Per Year | Annual |

You have created an invoice schedule IS1 to bill S1, S2, and S3. The invoice schedule contains two invoice schedule items. The first item was processed successfully and generated an invoice INV1 for $30,000.00. For more information, see Create invoice schedules .

The following table lists the information on this invoice schedule:

| Invoice schedule | Invoice schedule item | Run date | Amount | Actual Amount To Bill | Billed amount | Schedule item status | Billing document | Service period start date | Service period end date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IS1 | 1 | 01-10-2025 | $30,000.00 | $30,000.00 | $30,000.00 | Processed | INV1 | 01-01-2025 | 08-31-2025 |
| 2 | 10-05-2025 | $15,000.00 | $15,000.00 | - | Pending | - | - | - |  |

Since the three subscriptions have the same term and selling price, they each contribute $10,000.00 to the total $30,000.00 invoiced in INV1 for the service period from 1 January 2025 to 31 August 2025.

![Invoice schedule partial early renewal use case before detach](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2866ae24-446a-4b07-bf47-f6c01786a0a2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI4NjZhZTI0LTQ0NmEtNGIwNy1iZjQ3LWY2YzAxNzg2YTBhMiIsImV4cCI6MTc2NjY4Nzc2MiwianRpIjoiYzAyN2MwN2ExMzdmNDJhMGExNThkNGQ3OTViZDA4ZDEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.wdSp9f9xHM9iuB4Vl484vk37b7_yxoI75Ww57xJzZUU)

Assume your customer wants to renew S3 for another year, from 1 June 2025 to 31 May 2026, while keeping the other two subscriptions unchanged. You want to generate a new invoice schedule (IS2) for the renewal term.

First, you must confirm whether the early renewal of S3 will result in a credit. You can do this in one of the following ways:

-   Compare the billed service period with the effective date of early renewal.

-   Use Order Preview to assess the billing outcome.


If the renewal does not generate a credit, you can proceed with the subscription renewal directly. However, if it does, and you want the credit memo to be generated separately from IS1, you must detach C3 from IS1 before running the billing process. If you do not detach C3 from IS1, the credit memo can only be generated when Zuora Scheduler processes the next invoice schedule item in IS1.

In the above example, C3’s billed service period end date (31 August 2025) is later than the renewal effective date (1 June 2025), so a credit will be introduced.

![Invoice schedule partial early renewal use case after detach](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/659cd235-d1db-45be-b9d1-cd0354c7d4fc?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY1OWNkMjM1LWQxZGItNDViZS1iOWQxLWNkMDM1NGM3ZDRmYyIsImV4cCI6MTc2NjY4Nzc2MiwianRpIjoiZjc1NTgxOTBiOWExNGQ2Y2FkOGMyOGI5MWJlMTk3ZDMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.KOxh_-9QclXrqbhO0JCuRf4Cc0BUIEUqIUAgY5Zo9Vo)

The following is a high-level procedure for detaching C3 from IS1 and generating a credit memo separately:

1.  Create an order to make an early renewal for S3 .
2.  Detach C3 from IS1 .
3.  Create IS2 for the renewal term .
4.  Run the first item of IS2 and generate a credit memo separately .
