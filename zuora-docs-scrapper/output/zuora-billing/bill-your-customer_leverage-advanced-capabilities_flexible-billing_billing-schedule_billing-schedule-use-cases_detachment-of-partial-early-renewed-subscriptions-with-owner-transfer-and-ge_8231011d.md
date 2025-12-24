---
title: "Detachment of partial early renewed subscriptions with owner transfer and generation of credit memos in a new invoice schedule"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-with-owner-transfer-and-generation-of-credit-memos-in-a-new-invoice-schedule"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:49.792Z"
---

# Detachment of partial early renewed subscriptions with owner transfer and generation of credit memos in a new invoice schedule

Explains how to detach a subscription from an invoice schedule for early renewal and owner transfer, and how to generate credit memos in a new invoice schedule.

If you want to change the owner of a subscription associated with an invoice schedule and perform an early renewal, first detach the subscription from the invoice schedule, and then create an order for both the owner transfer and renewal.

In this use case, three subscriptions with the same term of 12 months are created and a single invoice schedule with two invoice schedule items is created for these subscriptions.

As shown in the following table, three subscriptions are created by creating an order, respectively containing rate plan charges C1, C2, and C3, with a total amount of $36,000.00. For more information, see Create subscriptions .

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | Lit price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01-01-2025 | 12 | C1 | 12-31-2025 | $12,000.00 | Per Year | Annual |
| S2 | 01-01-2025 | 12 | C2 | 12-31-2025 | $12,000.00 | Per Year | Annual |
| S3 | 01-01-2025 | 12 | C3 | 12-31-2025 | $12,000.00 | Per Year | Annual |

You have created an invoice schedule IS1 to bill S1, S2, and S3. The invoice schedule contains two invoice schedule items. The first item was processed successfully and generated an invoice INV1 for $24,000.00. For more information, see Create invoice schedules .

The following table lists the information on this invoice schedule:

| Invoice schedule | Invoice schedule item | Run date | Amount | Actual Amount To Bill | Billed amount | Schedule item status | Billing document | Service period start date | Service period end date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IS1 | 1 | 01-10-2025 | $24,000.00 | $24,000.00 | $24,000.00 | Processed | INV1 | 01-01-2025 | 08-31-2025 |
| 2 | 10-05-2025 | $12,000.00 | $12,000.00 | - | Pending | - | - | - |  |

Since the three subscriptions have the same term and selling price, they each contribute $8,000.00 to the total $24,000.00 invoiced in INV1 for the service period from 1 January 2025 to 31 August 2025.

![Invoice schedule partial early renewal before detach](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/55e079a9-f5a9-4167-a2a9-7fbdc5c19f9f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU1ZTA3OWE5LWY1YTktNDE2Ny1hMmE5LTdmYmRjNWMxOWY5ZiIsImV4cCI6MTc2NjY4NzgwNywianRpIjoiZjVlM2I5N2VlYzE1NDY2OWE3ZDg0ZDUyNmM2ZmNmODMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.IwG4yZW995NBrRT4diXTrpXWr483Ra84PDq8yvFRpnI)

Assume your customer wants to renew S3 for another year, from 1 June 2025 to 31 May 2026, and then transfer it to a different account, while keeping the other two subscriptions unchanged. You want to generate a new invoice schedule (IS2) for the renewal term.

Since subscriptions associated with a specific invoice schedule must belong to the same customer account, you must detach C3 from IS1 before performing the renewal and owner transfer. Otherwise, an error will occur when transferring the subscription owner.

![Invoice schedule partial early renewal after detach](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/113f9baf-2378-47e1-91da-fce521a1dda4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjExM2Y5YmFmLTIzNzgtNDdlMS05MWRhLWZjZTUyMWExZGRhNCIsImV4cCI6MTc2NjY4NzgwNywianRpIjoiNjUyMmQ1ZmY4ZDEwNDUwNGFiY2MyMTAwZDQ2MWIyMzQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.T4WU5Rc-gsoqxRLFFTNkJb3P1zWgR5jB2hZqLbqRAes)

The following is a high-level procedure for detaching charges from IS1 and generating credit memos separately:

1.  Detach C3 from IS1 .
2.  Create an order to make an early renewal for S3 and transfer the owner .
3.  Create IS2 for the renewal term .
4.  Run the first item of IS2 and generate a credit memo separately .
