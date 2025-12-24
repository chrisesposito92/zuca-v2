---
title: "How TCV is Calculated?"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-customer-accounts/key-metrics-for-customer-accounts/total-contract-value/how-tcv-is-calculated"
product: "zuora-billing"
scraped_at: "2025-12-24T05:15:37.465Z"
---

# How TCV is Calculated?

This article explains how Zuora calculates Total Contract Value (TCV) for charge segments, including one-time and recurring charges, and how discounts are applied.

Zuora calculates TCV for every charge segment, and rolled up through the charge, subscription, and account.

Zuora calculates TCV for one-time and recurring rate plan charges.

TCV of one-time charges are calculated based on the term setting:

-   If the subscription does not expire (an Evergreen subscription), TCV is available. However, this value is not accessible in UI and is not accessible by default in API.
-   If the subscription expires after a period (a Termed subscription), TCV is the full value of the charge. For example, you provide a one-time charge with $10 flat fee. TCV is $10. Note that TCV is 0 if charges are generated from prepayment.

TCV of recurring charges are calculated based on the term setting:

-   If the subscription does not expire (an Evergreen subscription), TCV is null.
-   If the subscription expires after a period (a Termed subscription), TCV is the value of the segment for the full period from the start date to end date. See the following for calculation.

TCV of a recurring charge equals to the Monthly Recurring Revenue (MRR) multiplied by the number of months that the charge is effective.

Follow the formula below to calculate TCV values of recurring charges. Note that the TCV value may include proration if the charge period includes a partial month at the end. Zuora uses the actual number of days in the month for proration.

Example 1: A recurring rate plan with full month period

-   Charge Model: Flat Fee Pricing
-   MRR: $100
-   ListPriceBase: Month
-   Billing Period: Month
-   Charge Effective Start Date: January 1
-   Charge Effective End Date: March 1

Charge effective period: 2 months (= 03/01 - 01/01)

TCV = MRR \* 2 = $200

Example 2: A recurring rate plan with partial month period

-   Charge Model: Per Unit Pricing
-   MRR: $100
-   ListPriceBase: Month
-   Billing Period: Month
-   Charge Effective Start Date: January 1
-   Charge Effective End Date: March 15

Charge effective period: 2.4516129032258065 months (= full months+partial months=2+(15-1)/31)

TCV = MRR \* 2.4516129032258065 = $245.16129032258065

Example 3: A recurring rate plan with weekly based billing period

-   Charge Model: Flat Fee Pricing
-   Price: $140
-   ListPriceBase: Week
-   Billing Period: Week
-   Charge Effective Start Date: January 1
-   Charge Effective End Date: April 1

Charge effective period: 3 months

MRR = (140/7)\*30=$600

TCV = MRR \* 3 = $1800

Every one-time charge and recurring charge in a subscription has an associated TCV value:

-   For a one-time charge, the TCV is the value of the individual charge.
-   For a recurring charge, the TCV is the sum of all the charges that a customer pays over the charge effective period. The charge effective period is from the date the subscription started until the end of the current term.

Fixed amount discounts can be applied to charges only if the discount period and the charge term have an overlap. If both recurring charges and one-time charges exist, the discount charge will first be applied to recurring charges, then to one-time charges.

If the discount period is not one natural month, the fixed amount will be prorated based on the days in the natural month. For example, a discount charge with an effective period from January 5 to February 5 will be prorated because it spans two natural months, January and February. It is to simplify the complexity of calculation if multiple charges are eligible for discount application.

For example, a subscription contains the following charges:

|  | Charge 1 | Charge 2 | Charge 3 |
| --- | --- | --- | --- |
| Charge model | Flat fee pricing - recurring charge | One-time charge | Fixed amount discount |
| Price | $100 /billing period | $80 | $200 /billing period |
| Billing period | Month | N/A | Month |
| Charge effective period | 03/01/2021 - 04/01/2021 | 03/15/2021 - 03/16/2021 | 03/10/2021 - 04/10/2021 |

Zuora's Charge Metrics service does the following calculation to get the TCV for charge 1 and charge 2:

1.  Calculate the fixed amount proration for Charge 3. The available discount amount that can be used for March is 200 \* 22 / 31 =141.94. Similarly, the available discount amount available for April is 200 \* 9 / 30 = 60.
2.  Apply the discount to the recurring charge (Charge 1). The recurring charge is split into two parts: Therefore, the charge metrics for Charge 1 are:

    -   03/01/2021 - 03/09/2021 : Cannot apply the fixed amount discount. The total charge for this period is 100 \* 9 / 31 = 29.03
    -   03/10/2021 - 04/01/2021 : Can apply the fixed amount discount. The total charge for this period is 100 \* 22 / 31 = 70.97 - 70.97 (from discount charge) = 0

    -   MRR : 29.03 + 0 = 29.03
    -   TCV : 29.03 \* 1 = 29.03

3.  Apply the remaining balance of discount to the one-time charge (Charge 2). The remaining discount charge balance of Charge 3 is 141.94 - 70.97 = 70.97. Therefore, TCV for Charge 2 is: 80.00 - 70.97 = 9.03
