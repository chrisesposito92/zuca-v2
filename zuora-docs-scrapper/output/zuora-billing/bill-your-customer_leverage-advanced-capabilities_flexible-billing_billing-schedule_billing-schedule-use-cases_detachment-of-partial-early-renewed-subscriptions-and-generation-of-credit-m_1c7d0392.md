---
title: "Detachment of partial early renewed subscriptions and generation of credit memos using standard billing process"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/detachment-of-partial-early-renewed-subscriptions-and-generation-of-credit-memos-using-standard-billing-process"
product: "zuora-billing"
scraped_at: "2025-12-24T18:36:16.432Z"
---

# Detachment of partial early renewed subscriptions and generation of credit memos using standard billing process

Explains how to detach subscription rate plan charges from existing invoice schedules to generate credit memos separately using the standard billing process.

Detaching subscription rate plan charges from existing invoice schedules allows you to generate credit memos for those charges separately.

You can generate credit memos via the Billing Schedule feature, as described in Detach partial early renewed subscriptions and generate credit memos in a new invoice schedule . Additionally, you can also generate credit memos separately using the standard billing process.

In this use case, two subscriptions with the same term of 12 months are created and a single invoice schedule with two invoice schedule items is created for these subscriptions.

As shown in the following table, three subscriptions are created by creating an order, respectively containing rate plan charges C1 and C2, with a total amount of $24,000.00. For more information, see Create subscriptions .

| Subscription number | Charge start date | Term (Month) | Charge number | Charge end date | Selling price | Lit price base | Billing period |
| --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 01-01-2025 | 12 | C1 | 12-31-2025 | $12,000.00 | Per Year | Annual |
| S2 | 01-01-2025 | 12 | C2 | 12-31-2025 | $12,000.00 | Per Year | Annual |

You have created an invoice schedule IS1 to bill S1 and S2. The invoice schedule contains two invoice schedule items. The first item was processed successfully and generated an invoice INV1 for $20,000.00. For more information, see Create invoice schedules .

The following table lists the information on this invoice schedule:

| Invoice schedule | Invoice schedule item | Run date | Amount | Actual Amount To Bill | Billed amount | Schedule item status | Billing document | Service period start date | Service period end date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IS1 | 1 | 01-10-2025 | $20,000.00 | $20,000.00 | $20,000.00 | Processed | INV1 | 01-01-2025 | 10-31-2025 |
| 2 | 10-05-2025 | $4,000.00 | $4,000.00 | - | Pending | - | - | - |  |

Since the two subscriptions have the same term and selling price, they each contribute $10,000.00 to the total $20,000.00 invoiced in INV1 for the service period from 1 January 2025 to 31 October 2025.

![Invoice schedule partial early renewal before detach](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b77d40f9-bf34-4e7b-b0d2-9b6f60cf8d73?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI3N2Q0MGY5LWJmMzQtNGU3Yi1iMGQyLTliNmY2MGNmOGQ3MyIsImV4cCI6MTc2NjY4Nzc3NCwianRpIjoiZjM2N2NmODUwNjA1NGM0YThlNTA3ZTYxYjkwMTQ4YzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.nlFxn-gzTFIvfHdyYs8eiBPILN6q4d9bIJZacpp0Ko4)

Assume your customer wants to renew S2 for another year, from 1 June 2025 to 31 May 2026, while keeping S1 unchanged. You want to generate billing documents for the renewal term using the standard billing process.

First, you must confirm whether the early renewal of S2 will result in a credit. You can do this in one of the following ways:

-   Compare the billed service period with the effective date of early renewal.

-   Use Order Preview to assess the billing outcome.


If the renewal does not generate a credit, you can proceed with the subscription renewal directly. However, if it does, and you want the credit memo to be generated separately from IS1, you must detach C2 from IS1 before running the billing process. If you do not detach C2 from IS1, the credit memo can only be generated when Zuora Scheduler processes the next invoice schedule item in IS1.

In the above example, C2’s billed service period end date (31 October 2025) is later than the renewal effective date (1 June 2025), so a credit will be introduced.

![Invoice schedule partial early renewal after detach](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0c59b128-fa67-4a88-b132-b12d8d6b8983?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBjNTliMTI4LWZhNjctNGE4OC1iMTMyLWIxMmQ4ZDZiODk4MyIsImV4cCI6MTc2NjY4Nzc3NCwianRpIjoiNTdiMmViYzVhYmNkNDc1ZmEyYWJhZThlMzNjZDRhNGEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.a2bGr57K_Kyyx6s8qRDaINes8uS-_N4BDWkoqIm02oA)

The following is a high-level procedure for detaching C3 from IS1 and generating a credit memo separately:

1.  Create an order to make an early renewal for S2 .
2.  Detach C2 from IS1 .
3.  Run a standard billing process and generate billing documents for S2 .
