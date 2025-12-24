---
title: "Grouping of charges with staggered start dates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/billing-schedule-use-cases/group-and-bill-charges-with-staggered-start-dates/grouping-of-charges-with-staggered-start-dates"
product: "zuora-billing"
scraped_at: "2025-12-24T18:35:53.647Z"
---

# Grouping of charges with staggered start dates

The Billing Schedule feature allows for the grouping and billing of charges with staggered start and end dates, ensuring charges are consumed sequentially and billed proportionally within defined groups.

With the Billing Schedule feature, you can bill charges with staggered start dates and end dates according to the following algorithm:

-   Charges are grouped per term. The term start date of a group is determined by the minimum value of start dates, and the term end date is determined by the maximum value of end dates within the charges with the term start date. All charges that fall into the term start date and term end date belong to the same group.

-   Groups are consumed in sequential order. The next group will not be consumed until all charges in the previous group are fully consumed.

-   Charges in the same group are billed proportionally according to the total price of each charge.


Zuora automatically checks the subscription term of each rate plan charge contained in the subscriptions of an order. Once any charges with the same start date or end date are found, a union term is determined, with the minimum value of the start dates of these charges as the start date of the union term, and the maximum value of the end dates of these charges as the end date of the union term. All the charges fall into the period ranging from the start date to the end date of the union term belong to the same group.

In this use case, Zuora groups the subscriptions in the preceding order O-001 as follows:

-   Subscriptions S1, S2, and S3 have the same end date, so they are considered as Group 1. The union term of Group 1 ranges from 1 January 2024 to 31 December 2024.

-   Subscriptions S4, S5, and S6 have the same start date and end date, so they are considered as Group 2. The union term of Group 2 ranges from 1 January 2024 to 31 December 2024.


Therefore, during subscription billing and invoices generation, these two groups are consumed in sequential order, indicating that subscriptions S1, S2, and S3 in Group 1 will be completely consumed before subscriptions S4, S5, and S6 in Group 2 start to be consumed. The charges in each group are billed proportionally according to the charge total price.

The amount of invoice INV001 is $27,000, less than the total amount of subscriptions S1, S2, and S3, so all the billed amount of invoice INV001 comes from subscriptions S1, S2, and S3 in Group 1.
