---
title: "Discount class and stacked discounts"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/discount-pricing/discount-charge-models/discount-class-and-stacked-discounts"
product: "zuora-billing"
scraped_at: "2025-12-24T04:49:31.641Z"
---

# Discount class and stacked discounts

Explains the application of stacked percentage discounts in relation to discount classes, detailing the order and method of applying discounts to a regular charge amount.

A billing rule called Should the stacked percentage discount ignore or follow discount class determines whether to ignore the discount class when applying stacked percentage discounts.

By default, the system ignores the discount class order when applying stacked discounts. When the Follow discount class option is selected, the stacked discounts are applied in the following manner:

-   The system applies stacked discounts in the discount class order and applies the stacked discount to the remaining amount after the previous discount class is processed.

-   Within the same discount class, stacked discounts should be added and then applied together first, followed by non-stacked discount charges.

-   If there are stacked discounts not specified with any discount class, they are applied last.


The following example explains the discounting logic of stacked discounts with discount classes.

Suppose a regular charge amount is $10000, and there are several discounts to apply to this regular charge, as illustrated in the following diagram.

![A sample discounting scenario with several stacked and non-stacked discounts distributed in two discount classes.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f4994698-43ab-4fe9-a220-098ded885899?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY0OTk0Njk4LTQzYWItNGZlOS1hMjIwLTA5OGRlZDg4NTg5OSIsImV4cCI6MTc2NjYzODE2OSwianRpIjoiZDZhZmYwOTgzZGEzNDhlMDhjM2JjMjAyODNlMTFmNmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.MrZ8NfBdvhqo1P2vY2uO6uRQ2WQF6cfqLxvRwmKdwOQ) The discounts in Discount Class 1 are applied first, among which the percentage discount is applied first, followed by the fixed amount discount. Therefore, after applying Discount Class 1, the remaining amount of the regular charge is 10000(1-8%)-500=$8700.

The discounts in Discount Class 2 are then applied, among which the two stacked percentage discounts are added and applied first, followed by the non-stacked discount. Also, in Discount Class 2, the remaining amount after Class 1 is taken as input for stacked discounts. Therefore, after applying the two stacked discounts in Class 2, the remaining amount of the regular charge is 8700\*\[1-(10%+5%)\]=$7395. After applying the 3rd discount (the non-stacked one), the remaining amount of the regular charge is 7395\*(1-5%)=$7025.25.

The discounts without discount class are applied last, among which the two stacked percentage discounts are added and applied first, followed by the fixed amount discount. Also, the remaining amount after Class 2 is taken as input for stacked discounts. Therefore, after applying the two stacked discounts without discount class, the remaining amount of the regular charge is 7025.25-7025.25\*(20%+30%)=7025.25-3512.63=$3512.62. After applying the fixed amount discount, the remaining amount of the regular charge is 3512.62-1000=$2512.62.

The table below describes how the discounts will be applied:

| Discount Order | Discount Class | Discount | Base Amount | Total Discount Amount | Amount Due (Sub Total) |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 8% | $10000 | $800 | $9200 |
| 2 | 1 | $500 | $9200 | $500 | $8700 |
| 3 | 2 | 10%+5% | $8700 | $1305 | $7395 |
| 4 | 2 | 5% | $7395 | $369.75 | $7025.25 |
| 5 | No discount class | 20%+30% | $7025.25 | $3512.63 | $3512.62 |
| 6 | No discount class | $1000 | $3512.62 | $1000 | $2512.62 |
| Total Discounts : $7487.38 |  |  |  |  |  |
| Total Amount Due After Discounts : $2512.62 |  |  |  |  |  |
