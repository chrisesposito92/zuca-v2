---
title: "Fixed-amount and percentage discount charges application to one regular charge"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/monthly-recurring-revenue/calculating-subscription-level-net-mrr/fixed-amount-and-percentage-discount-charges-application-to-one-regular-charge"
product: "zuora-billing"
scraped_at: "2025-12-24T05:15:30.493Z"
---

# Fixed-amount and percentage discount charges application to one regular charge

This topic explains how to apply both fixed-amount and percentage discounts to regular charges in a subscription, detailing the discount sequence, allocation, and MRR calculations.

This example demonstrates how two subscription level discounts (both a fixed-amount and percentage discounts) are allocated on the two regular charges of a subscription. You can see the following analysis in this example:

-   The discount applying sequence
-   The discount amount allocation
-   The charge-level MRR calculation
-   The subscription-level MRR calculation

Example:

Suppose your customer is to apply two subscription level discount charges to a one-quarter termed subscription, which has two regular recurring charges.

-   Charge 1: Monthly regular charge: $5/month for the first month, $10 for the second, and $15 for the third. Effective range: 1/1/2019 - 4/1/2019.
-   Charge 2: Monthly regular charge: $3/month. Effective range: 1/1/2019 - 4/1/2019.
-   Charge 3 is a recurring 20% percentage discount charge to apply at the subscription level but limited to recurring charges only.
-   Discount 1: Monthly fixed-amount discount charge: $6/month. Effective range: 1/15/2019 - 4/1/2019.
-   Discount 2: Percentage discount: 10%. Effective range: 2/15/2019 - 4/1/2019.
-   Discount 1 has a discount class of higher priority than that of Discount 2.

![Both Types of Discounts](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b2bed776-ae8a-436d-9a4c-e2df780a3a35?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImIyYmVkNzc2LWFlOGEtNDM2ZC05YTRjLWUyZGY3ODBhM2EzNSIsImV4cCI6MTc2NjYzOTcyOCwianRpIjoiYjY0ODM0N2ZkOGEzNGE4MDgwMzNiMWU0NTkzZWI3NzciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.mUZnPh5Dmy8-AIBTY48YRyEZ6UjKmBzD4Sw04cDjbOA)

The discount applying sequence:

As the discount priority of Discount 1 is higher than that of Discount 2, when they apply to the same regular charge, Discount 1 (the fixed-amount discount) is applied first. Discount 2 (the percentage discount) is applied to a regular charge after Discount 1 has been applied. See Sequence of applying multiple discount charges to one regular charge.

When Discount 1 (the fixed-amount discount) is applied to both regular charges, because Charge 1 and Charge 2 have the same charge type (they are both regular charges) and Charge 1 has a smaller charge number (Charge 1< Charge 2), Charge 1 will get the discount allocation first. Charge 2 will get the remaining discount amount from Discount 1 if there is a discount balance. See Sequence of applying a fixed-amount discount charge to multiple regular charges .

The discount amount allocation:

1/15-2/1: Discount 1 is applied to Charge 1 first, and the amount applicable is $5/m at maximum (The net price of Charge 1 in this charge period is already 0 now. It cannot be a negative value). After that, the discount balance of Discount 1 is $1/m and is applied to Charge 2.

2/1-2/15: Discount 1 is applied to Charge 1 first, and the amount applicable is $6/m. After that, the discount balance of Discount 1 is 0. Therefore, no discount is allocated on Charge 2.

2/15-3/1: In this charge period,

-   Discount 1 is applied to Charge 1 first, and the discount amount applicable is $6/m. After that, the discount balance of Discount 1 is 0. Therefore, no discount is allocated on Charge 2.
-   Discount 2 (the percentage discount) is then applied to Charge 1 and Charge 2.
    -   When it is applied to Charge 1, the net price (after Discount 1 is applied) should be used to calculate the discount amount. Therefore, the discount amount applied to Charge 1 by Discount 2 is (10-6)\*10%=$0.4/m.
    -   When it is applied to Charge 2, the discount amount is 3\*10%=$0.3/m.
-   In summary, the discount amount allocated to Charge 1 is 6+0.4=$6.4/m, and the discount amount allocated to Charge 2 is $0.3/m.

3/1 - 4/1: Similar as in the charge period above, in this charge period:

-   Discount 1 is applied to Charge 1 first, and the discount amount applicable is $6/m. After that, the discount balance of Discount 1 is 0. Therefore, no discount is allocated on Charge 2.
-   Discount 2 (the percentage discount) is then applied to Charge 1 and Charge 2.
    -   When it is applied to Charge 1, the net price (after Discount 1 is applied) should be used to calculate the discount amount. Therefore, the discount amount applied to Charge 1 by Discount 2 is (15-6)\*10%=$0.9/m.
    -   When it is applied to Charge 2, the discount amount is 3\*10%=$0.3/m.
-   In summary, the discount amount allocated to Charge 1 is 6+0.9=$6.9/m, and the discount amount allocated to Charge 2 is $0.3/m.

The charge-level MRR calculation:

The Gross MRR, Discount MRR, and Net MRR of each charge segment and charge period are calculated as in the table below.

| Charge Segment | Charge Period | Gross MRR | Discount Charge | Start Date | End Date | Applied Discount | Discount MRR | Net MRR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Charge 1 Segment 1 | Charge Period 1 | 5 | n/a | 1/1 | 1/15 | 0 | n/a | 5 |
| Charge Period 2 | Discount 1 (D1) | 1/15 | 2/1 | -5 | 5 | 0 |  |  |
| Charge 1 Segment 2 | Charge Period 3 | 10 | D1 | 2/1 | 2/15 | -6 | 6 | 4 |
| Charge Period 4 | D1, Discount 2 (D2) | 2/15 | 3/1 | -6.4 | 6.4 | 3.6 |  |  |
| Charge 1 Segment 3 | Charge Period 5 | 15 | D1, D2 | 3/1 | 4/1 | -6.9 | 6.9 | 8.1 |
| Charge 2 Segment 1 | Charge Period 1 | 3 | n/a | 1/1 | 1/15 | 0 | n/a | 3 |
| Charge Period 2 | D1 | 1/15 | 2/1 | -1 | 1 | 2 |  |  |
| Charge Period 3 | D1 | 2/1 | 2/15 | 0 | 0 | 3 |  |  |
| Charge Period 4 | D2 | 2/15 | 3/1 | -0.3 | 0.3 | 2.7 |  |  |
| Charge Period 5 | D2 | 3/1 | 4/1 | -0.3 | 0.3 | 2.7 |  |  |

The subscription-level MRR calculation:

By adding up the MRRs of the charge segments or charge periods with the same start and end dates, the MRR of the subscription is as shown in the table below:

| Start Date | End Date | Subscription Gross MRR | Subscription Discount MRR | Subscription Net MRR | Segment or Charge Period Applicable |
| --- | --- | --- | --- | --- | --- |
| 1/1 | 1/15 | 8 | n/a | 8 | Charge 1/Charge Period 1, Charge 2/Charge Period 1 |
| 1/15 | 2/1 | 8 | 6 | 2 | Charge 1/Charge Period 2, Charge 2/Charge Period 2 |
| 2/1 | 2/15 | 13 | 6 | 7 | Charge 1/Charge Period 3, Charge 2/Charge Period 2 |
| 2/15 | 3/1 | 13 | 6.7 | 6.3 | Charge 1/Charge Period 4, Charge 2/Charge Period 3 |
| 3/1 | 4/1 | 18 | 7.2 | 10.8 | Charge 1/Charge Period 5, Charge 2 /Charge Period 4 |
