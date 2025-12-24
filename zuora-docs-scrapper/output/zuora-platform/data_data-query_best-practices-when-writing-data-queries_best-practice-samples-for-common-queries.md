---
title: "Best-practice samples for common queries"
url: "https://docs.zuora.com/en/zuora-platform/data/data-query/best-practices-when-writing-data-queries/best-practice-samples-for-common-queries"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:30.899Z"
---

# Best-practice samples for common queries

Here are best-practice samples for common queries, including retrieving subscriptions, products, accounts, attachments, and invoices.

See the following samples of best practices for some common use cases.

-   Get a list of `Subscriptions` and the associated `Accounts` whose custom field `geographicregion__c` is `West` SELECT subscription.id, account.id FROM Subscription INNER JOIN account ON subscription.accountid = account.id WHERE account.geographicregion\_\_c = 'West'

-   Get the `Products` updated since January 1, 2019 SELECT \* FROM Product WHERE updateddate >= timestamp '2019-01-01 -7:00'

-   Get the `Accounts` with Usage for the `Products` with specified SKUs SELECT a.accountnumber FROM Usage u, Account a, Product p WHERE a.accountnumber = u.accountnumber AND p.sku IN ( 'SKU-200001', 'SKU-200002', 'SKU-200003', 'SKU-200004' ) GROUP BY a.accountnumber

-   Get `Attachments` for the object by specifying the associated object ID and associated object type in WHERE clauseSELECT filename, fileid, filecontenttype FROM attachment WHERE associatedobjecttype = 'account' AND associatedobjectid = 'ff808081298c6e5401298c76f28b006c'

-   Get a list of `Invoices` whose invoice due date is later than the date of current UTC in Los Angeles time zone. For more information about the `date` function, see Get the date value of a timestamp .SELECT \* FROM invoice WHERE duedate >= date(CURRENT\_TIMESTAMP AT TIME ZONE 'America/Los\_Angeles')
