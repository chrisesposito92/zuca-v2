---
title: "Contracted MRR"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/monthly-recurring-revenue/contracted-mrr"
product: "zuora-billing"
scraped_at: "2026-02-19T03:10:53.268Z"
---

# Contracted MRR

Contracted MRR (CMRR) includes account-level and subscription-level calculations, each with distinct logic for future expected revenue.

There are account-level CMRR and subscription-level CMRR with different calculation logic.

|  | Calculation | Notes |
| --- | --- | --- |
| Account-level CMRR | The account-level CMRR represents the future expected MRR that includes future upgrades, downgrades, upsells, and cancellations. |  |
| Subscription-level CMRR | The subscription-level CMRR directly adds the MRR of all the charges together (including past, current, and future amount). | The charges must meet the following requirements:The charges are not removedThe charge end condition must align to subscription end dateOtherwise, the CMRR is 0. |

Note that if a future-dated cancellation is made on an active subscription, the subscription-level CMRR still has value but the account-level CMRR is 0.
