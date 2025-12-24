---
title: "Reason why some items on an invoice are discounted and some are not"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-item-adjustments/reason-why-some-items-on-an-invoice-are-discounted-and-some-are-not"
product: "zuora-billing"
scraped_at: "2025-12-24T08:38:13.652Z"
---

# Reason why some items on an invoice are discounted and some are not

Know why some items on an invoice are discounted and some are not

You apply a fixed-amount discount to an account or an invoice. You generate that invoice. The total charge for the invoice is greater than the amount of the discount. When you look at the invoice, you don't see an entry for that discount.

A fixed-amount discount is applied per line item. The discount is applied based on the following order:

1.  The version number of the rate plan charges from the lowest to the highest.
2.  If the charges have the same version number, order by the segment number of the subscription rate plan from lowest to highest.
3.  If the charges have the same segment number, order by the charge effective start date from the earliest date to the latest date.
4.  If the charges have the same effective start date, order by the charge number from the lowest to the highest.

You can find the version number, segment number from the Zuora SOAP API RatePlanCharge object.

For example, the fixed-amount discount is $25, and you apply it to a customer account. The customer has several charges that total a larger amount than the discount. The invoice lists the charges:

| Discount Order | Item | Charge Number | Amount | Discount | Adjusted Amount | Charge Version number | Charge Segment number | Charge Effective Start Date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Bronze Service | C-00000560 | $5 | $5 | $0 | 1 | 1 | July 1, 2019 |
| 2 | Support | C-00000558 | $10 | $10 | $0 | 1 | 2 | January 1, 2019 |
| 3 | Overage | C-00000559 | $5 | $5 | $0 | 1 | 2 | February 1, 2019 |
| 4 | Recurring | C-00000562 | $5 | $5 | $0 | 1 | 2 | February 1, 2019 |
| 5 | Storage | C-00000557 | $15 | $0 | $15 | 2 | 1 | January 1, 2019 |

In this example, the discount is applied in the following way:

1.  Order by the version number of the rate plan charges.
    -   The Bronze Service, Support, Overage, and Recurring items are all in version 1.
    -   The Storage item is in version 2.

2.  For those items in version 1, order by the segment number of the rate plan charges.

    -   The segment number of the Bronze Service item is the lowest.
    -   The segment number of the Support, Overage, and Recurring items are the same (segment number 2).

    So the discount is applied to Bronze Service first. Because the amount of the Bronze Service item is $5, leaving $20 of the fixed-amount discount.

3.  For those items with the same segment number (segment number 2), order by the charge effective start date.

    -   The Support item has the earliest start date (January 1, 2019).
    -   The Overage and Recurring items have the same start date (February 1, 2019).

    So the discount is applied to Support item. Because the amount of the Support item is $10, leaving $10 of the fixed-amount discount.

4.  For those items with the same charge start date (February 1, 2019), order by the charge number.

    The Overage item has the lowest charge number (C-00000559) than the Recurring item (C-00000562). So the discount is applied to the Overage item. Because the amount of the Overage item is $5, leaving $5 of the fixed-amount discount, the discount is then applied to the Recurring item. This uses the remainder of the discount, so no further discount is applied to the Storage item.
