---
title: "Total Contract Value after subscription amendments"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/total-contract-value/total-contract-value-after-subscription-amendments"
product: "zuora-billing"
scraped_at: "2025-12-24T05:15:40.266Z"
---

# Total Contract Value after subscription amendments

The Total Contract Value (TCV) of an account is the sum of TCVs of all active subscriptions, recalculated automatically with any amendments. Changes to recurring charges affect TCV calculations, as demonstrated in the example of a subscription upgrade.

The TCV value of an account is the sum of TCV values of all its subscriptions that are not in Canceled and Expired statuses.

TCV are automatically recalculated if amendments are made to the charge during its life cycle. If an amendment to a recurring charge is made then the charge is split into sections defined by effective start date and effective end date. Each section has a different TCV. For example, if a customer upgrades to a more expensive product partway through the subscription, the TCVs of the modified recurring charge, the subscription, and the customer increase.

For example:

Suppose your customer subscribes to your recurring charge in an order:

-   Charge Model: Per Unit Pricing
-   List Price: $10
-   List Price Base: Per Billing Period
-   Billing Period: Month
-   Quantity: 10
-   Charge Effective Start Date: January 1, 2027
-   Charge Effective End Date: January 1, 2028

Later, your customer wanted to update the product with the following changes:

-   Quantity: 12
-   Amendment Effective Date: February 15, 2027

Full months : 1 month (January 1, 2027 - February 1, 2027)

Partial month : 14 days (February 1, 2027 - February 15, 2027)

TCV 1 = 150 (= MRR \* (full months+partial month) = 100 \* (1 + 14/28))

Full months : 10 months (February 15, 2027 - March 15, 2027, March 15 - April 15, 2027, April 15, 2027 - May 15, 2027, May 15, 2027 - June 15, 2027, June 15, 2027 - July 15, 2027, July 15, 2027 - August 15, 2027, August 15, 2027 - September 15, 2027, September 15, 2027 - October 15, 2027, October 15, 2027 - November 15, 2027, November 15, 2027 - December 15, 2027)

Partial month : 17 days (December 15, 2027 - January 1, 2028)

TCV 1 = MRR \* (February 15, 2027- January 1, 2028) = MRR \* (full months+partial month)

TCV 2 = 1265.80645161290328 (= 120 \* (10 + 17/31))

TCV of the charge = TCV 1 + TCV 2 = 1415.80645161290328

Note that TCV is calculated for this example is based on the actual days in a month. The TCV value might be different if you set the billing rule to use 30 days in a month.
