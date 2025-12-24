---
title: "Construction of SQL queries about the Billing Schedule objects"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/query-billing-schedule-objects-through-data-query/construction-of-sql-queries-about-the-billing-schedule-objects"
product: "zuora-billing"
scraped_at: "2025-12-24T18:37:55.764Z"
---

# Construction of SQL queries about the Billing Schedule objects

Explore SQL query examples for retrieving data related to Billing Schedule objects, including Invoice Schedule and Invoice Schedule Item objects.

To query the objects related to the Billing Schedule feature, you can construct SQL queries by referring to the following SQL examples:

-   Query the Invoice Schedule object based on the order number:

    SELECT invs.number,invs.status,invs.totalamount,invs.nextrundate FROM invoiceschedule as invs, orders as o WHERE o.ordernumber='O-00001416' and o.invoicescheduleid=invs.id

    The sample request queries the invoice schedule associated with the specified order. The sample query result is as follows:
    | NUMBER | STATUS | TOTALAMOUNT | NEXTRUNDATE | ORDERNUMBER |
    | --- | --- | --- | --- | --- |
    | IS-00000167 | PartiallyProcessed | 800.000000000 | 2022-12-23 | O-00001416 |

-   Query the Invoice Schedule object based on the subscription number:

    SELECT invs.number,invs.status,invs.totalamount,invs.nextrundate, s.name FROM invoiceschedule as invs, subscription as s WHERE s.name='A-S00001427' and s.status='Active' and s.invoicescheduleid=invs.id The sample request queries the invoice schedule associated with the specified subscription. The sample query result is as follows:
    | NUMBER | STATUS | TOTALAMOUNT | NEXTRUNDATE | NAME |
    | --- | --- | --- | --- | --- |
    | IS-00000167 | PartiallyProcessed | 800.000000000 | 2022-12-23 | A-S00001427 |

-   Query the Invoice Schedule Item object based on the invoice schedule number:

    SELECT si.id, si.amount, si.runDate, si.status, invs.number,invs.status,invs.totalamount FROM invoicescheduleItem as si, invoiceschedule as invs WHERE si.invoicescheduleid=invs.id and invs.number='IS-00000167'

    The sample request queries the invoice schedule items contained in the invoice schedule with the specified number. The sample query result is as follows:
    | ID | AMOUNT | RUNDATE | STATUS | NUMBER | TOTALAMOUNT |
    | --- | --- | --- | --- | --- | --- |
    | 8a90f508841c1ef301842d0475fc3b27 | 500.000000000 | 2022-11-20 | PartiallyProcessed | IS-00000167 | 800.000000000 |
    | 8a90f508841c1ef301842d0476013b28 | 300.000000000 | 2022-12-23 | PartiallyProcessed | IS-00000167 | 800.000000000 |
