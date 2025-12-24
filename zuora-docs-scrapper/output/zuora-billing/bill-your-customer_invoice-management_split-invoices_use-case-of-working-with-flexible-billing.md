---
title: "Use case of working with Flexible Billing"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/split-invoices/use-case-of-working-with-flexible-billing"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:29.045Z"
---

# Use case of working with Flexible Billing

This use case explains how to manage billing attributes for subscriptions and handle split invoices effectively.

1.  Create an account A00000001 and specify the Bill to contact, Sold to contact, Payment term, Invoice template, and Sequence set billing attributes.
2.  Create a subscription A-S00000001 with billing attribute values as follows and an amount of $1200.

    |  | Bill to contact | Sold to contact | Payment term | Invoice template | Sequence set |
    | --- | --- | --- | --- | --- | --- |
    | Account Default | billTo1 | soldTo1 | pm1 | it1 | ss1 |
    | A-S00000001 | billTo2 | soldTo2 | pm2 | it2 | ss2 |

3.  Create a bill run for this account with invoice date 2023/10/01 as follows:

    Note: Invoice 1 is automatically deleted once the invoice splitting occurs.
    | Invoice | Amount | Invoice date | Payment term | Header level attribute | Item level attribute |
    | --- | --- | --- | --- | --- | --- |
    | Invoice 1 | $1200 | 2023/10/01 | pm2 | billTo2, it2 and ss2 | soldTo2 |

4.  Split the draft invoice into two split invoices by specifying the following fields:

    | Invoice | Percentage | Invoice date | Payment term |
    | --- | --- | --- | --- |
    | Invoice 2 | 80% | 2023/11/01 | pm2 |
    | Invoice 3 | 20% | 2023/12/01 | pm3 |


The split invoices are as follows:

| Invoice | Amount | Invoice date | Payment term | Header level attribute | Item level attribute |
| --- | --- | --- | --- | --- | --- |
| Invoice 2 | $960 | 2023/11/01 | pm2 | billTo2, it2 and ss2 | soldTo2 |
| Invoice 3 | $240 | 2023/12/01 | pm3 | billTo2, it2 and ss2 | soldTo2 |
