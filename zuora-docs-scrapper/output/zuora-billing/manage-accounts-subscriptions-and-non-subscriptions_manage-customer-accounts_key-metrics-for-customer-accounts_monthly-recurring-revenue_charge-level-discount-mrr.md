---
title: "Charge-level discount MRR"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/monthly-recurring-revenue/charge-level-discount-mrr"
product: "zuora-billing"
scraped_at: "2025-12-24T05:15:07.512Z"
---

# Charge-level discount MRR

This article explains the calculation of charge-level Discount MRR for both discount and regular charges, including examples of discount allocation and charge segmentation.

This section introduces both the "Discount MRR for discount charges" and "Discount MRR for regular charges".

-   Discount MRR for discount charges: A discount charge is always applied to a specific charge segment of a regular charge. The charge-level Discount MRR of a discount charge is normalized from the discount amount that can be allocated on the charge segment from the discount charge. The discount amount that can be allocated is dependent on the factors described in General rules for MRR calculation .
-   Discount MRR for regular charges: Multiple discount charges can be applied to a single regular charge. This means that the charge-level Discount MRR of a regular charge equals the sum of all the charge-level Discount MRR for discount charges that are applied to the charge segment (of the regular charge).

The following example demonstrates the discount amount allocation to a charge segment in a typical scenario: two discounts are applied to a charge segment, a percentage discount charge is applied first, and then a fixed-amount discount charge is applied. See the example in Apply both a fixed-amount and percentage discount charges to one regular charge that demonstrates the discount amount allocation to a charge segment in another typical scenario: two discounts are applied to a charge segment, a fixed-amount discount charge is applied first, and then a percentage discount charge is applied.

Example:

Suppose your customer had a one-year termed subscription from 1/1/2019 to 1/1/2020 with one regular charge and two discount charges as below.

-   Charge 1: a recurring regular charge of $10/month, and was amended on 7/1/2019 with the price changed to $20/month.
-   Charge 2: a recurring fixed-amount discount charge of $5/month with an effective period from 3/1/2019 to 7/1/2019.
-   Charge 3: a recurring percentage discount charge of 20% with an effective period from 5/1/2019 to 9/1/2019.

In this example, Charge 1 is segmented by an amendment into two charge segments. The two charge segments are then further segmented by the two discount charges into several charge periods in which the net pricing of the regular charge remains constant. See more information about charge segments and charge periods in Charge-level net MRR .

The MRR of the three charges are shown in the diagram below:

![Charge Level Discout MRR](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f9f8659b-ea9f-4941-97ee-be1cfd30c785?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY5Zjg2NTliLWVhOWYtNDk0MS05N2VlLWJlMWNmZDMwYzc4NSIsImV4cCI6MTc2NjYzOTcwNSwianRpIjoiZTQyZDk2YjcyYzRhNGZmMGFmNDFhMTFjMDBiNDhjZGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.BO_kB42GgfhBD5VicDjPyjDYGXWokBNuGv6eKCrsgls)

The discounts are applied as in the following manner:

-   The fixed-amount discount is applied to Charge Segment 1 of Charge 1.
-   The percentage discount is applied to both charge segments of Charge 1.
-   During Charge Period 3, both discount charges are applied to Charge 1. The percentage discount is applied first. See The sequence of applying multiple discount charges to one regular charge .

You can get the following sets of Discount MRRs for Charge 2 and Charge 3, as in the table below.
| Discount Charge | Target Charge Segment (of the Regular Charge) | Target Charge Period (of the Regular Charge) | Start Date | End Date | Discount MRR for Discount Charge |
| --- | --- | --- | --- | --- | --- |
| Charge 2 | Charge Segment 1 of Charge 1 | Charge Period 2 | 3/1/2019 | 5/1/2019 | 5 |
| Charge Period 3 | 5/1/2019 | 7/1/2019 | 5 |  |  |
| Charge 3 | Charge Segment 1 of Charge 1 | Charge Period 3 | 5/1/2019 | 7/1/2019 | 10*20%=2 |
| Charge Segment 2 of Charge 1 | Charge Period 1 | 7/1/2019 | 9/1/2019 | 20*20%=4 |  |

You can get the following sets of Gross MRR, Discount MRR, and Net MRR for Charge 1, as in the table below. During Charge Period 3, the Discount MRR for Charge 1 is the sum of the Discount MRRs for Charge 2 and Charge 3.
| Regular Charge | Charge Segment | Charge Period | Charge Period Start Date | Charge Period End Date | Discount MRR for Regular Charge | Gross MRR for Regular Charge | Net MRR for Regular Charge |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Charge 1 | Charge Segment 1 | Charge Period 1 | 1/1/2019 | 3/1/2019 | n/a | 10 | 10 |
| Charge Period 2 | 3/1/2019 | 5/1/2019 | 5 | 10 | 10-5=5 |  |  |
| Charge Period 3 | 5/1/2019 | 7/1/2019 | 5+2=7 | 10 | 10-7=3 |  |  |
| Charge Segment 2 | Charge Period 1 | 7/1/2019 | 9/1/2019 | 4 | 20 | 20-4=16 |  |
| Charge Period 2 | 9/1/2019 | 1/1/2020 | n/a | 20 | 20 |  |  |
