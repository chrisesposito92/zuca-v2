---
title: "Common use cases of data query"
url: "https://docs.zuora.com/en/zuora-platform/data/data-query/common-use-cases-of-data-query"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:38.983Z"
---

# Common use cases of data query

Here are examples of common data query use cases, including retrieving account details, processed usage records, and product information.

## Query examples

-   For customer account A00000977, retrieve:

    -   The account number

    -   The account name

    -   The account status

    -   The username of the Zuora user who created the account


    SELECT a.accountnumber, a.name, a.status, u.username FROM Account a JOIN User u ON a.createdbyid = u.id WHERE a.accountnumber = 'A00000977' accountnumber,name,status,username A00000977,West Corporation,Active,ksmith@exmaple.com
-   Retrieve all processed usage records, including the account number and account name associated with each usage record: SELECT pu.id, pu.amount, a.accountnumber, a.name FROM ProcessedUsage pu JOIN Usage u ON pu.usageid = u.id JOIN Account a ON u.accountnumber = a.accountnumberid,amount,accountnumber,name 2c92c0f8-6329-99a2-0163-52a457cf2b44,345.400000,A00000977,West Corporation 2c92c0f8-6329-99a2-0163-52a457cf2b44,147.580000,A00000464,East Enterprises 2c92c0f8-6329-99a2-0163-52a457cf2b44,197.190000,A00000985,North Services ...

-   Retrieve the parent account number of each customer account: SELECT a.accountnumber, pa.accountnumber as parentnumber FROM Account a LEFT OUTER JOIN Account pa ON a.parentid = pa.id accountnumber,parentnumber A00000674,A00000550 A00000650, A00000783,A00000886 ...

-   Retrieve all Order MRR metrics and Order TCB metrics: SELECT 'MRR' as metric, OrderMrr.id, OrderMrr.value FROM OrderMrr UNION SELECT 'TCB' as metric, OrderTcb.id, OrderTcb.value FROM OrderTcbmetric,id,value MRR,2c92c0f8-6329-99a2-0163-8792e2ae736a,148.500000 MRR,2c92c0f8-6329-99a2-0163-805c8fb924be,350.000000 ... TCB,2c92c0f8-6329-99a2-0163-9a10f930a800,147.300000 TCB,2c92c0f8-6329-99a2-0163-8230c94c7c0b,-179.990000 ...

-   Retrieve the 3 products that became effective most recently: SELECT p.id, p.name, p.effectivestartdate FROM Product p ORDER BY p.effectivestartdate DESC LIMIT 3id,name,effectivestartdate 2c92c0f8-6680-fd09-0166-a424179630c0,Spring 19 Plan,2019-03-01 2c92c0f8-6680-fd09-0166-8187039d72f7,Student Plan,2018-07-01 2c92c0f8-6680-fd09-0166-75fc4e54a574,Spring 18 Plan,2018-03-01

-   Retrieve the 3 products that became effective most recently and are still effective: SELECT p.id, p.name, p.effectivestartdate, p.effectiveenddate FROM Product p WHERE current\_date <= p.effectiveenddate ORDER BY p.effectivestartdate DESC LIMIT 3 id,name,effectivestartdate,effectiveenddate 2c92c0f8-6680-fd09-0166-a424179630c0,Spring 19 Plan,2019-03-01,2019-05-31 2c92c0f8-6680-fd09-0166-8187039d72f7,Student Plan,2018-07-01,2023-06-30 2c92c0f8-6680-fd09-0166-07b3580a31d7,Full Access Plan,2017-01-01,2026-12-31

-   Retrieve the rate plans in a product, using a 32-character product identifier: SELECT prp.id, prp.name FROM ProductRatePlan prp WHERE prp.productid = to\_uuid36('2c92c0f86680fd090166a424179630c0') id,name 2c92c0f8-6329-99a2-0163-c016fabe8ea8,Monthly Unlimited 2c92c0f8-6329-99a2-0163-b10b3b003e43,Monthly Capped ...

-   Retrieve the 32-character identifiers of the rate plans in a product: SELECT to\_uuid32(prp.id) AS id32 FROM ProductRatePlan prp WHERE prp.productid = to\_uuid36('2c92c0f86680fd090166a424179630c0') id32 2c92c0f8632999a20163c016fabe8ea8 2c92c0f8632999a20163b10b3b003e43 ...

-   Retrieve the number of subscriptions owned by each customer account: SELECT a.accountnumber, count(s.id) as subs FROM Account a JOIN Subscription s ON a.id = s.accountid GROUP BY a.accountnumberaccountnumber,subs A00000977,2 A00000464,1 A00000985,4 ...

-   Retrieve the yearly average invoice amount for an account: SELECT year(i.invoicedate) as year, avg(i.amount) as avg FROM Invoice i WHERE i.accountid = (SELECT a.id FROM Account a WHERE a.accountnumber = 'A00118294') GROUP BY year(i.invoicedate) ORDER BY year(i.invoicedate) year,avg 2017,195.200000 2018,230.000000 2019,193.587000

-   Retrieve invoices from a bill run that did not successfully generate a PDF. Check those with a status of Pending, Processing, or Error.SELECT i.InvoiceNumber, i.Id, i.CreatedDate, i.PostedDate, i.Status, ib.GenerationStatus, ib.ErrorCategory, ib.ErrorMessage FROM invoice i LEFT JOIN billingdocumentpdfgeneration ib ON i.Id = ib.DocumentId WHERE i.Status = 'Posted' AND i.SourceId IN ('BR-00011439') AND ib.GenerationStatus != 'Generated'

-   Retrieve the current status of PDF generation requests for invoices from a bill run: SELECT i.InvoiceNumber, i.Id, i.CreatedDate, i.PostedDate, i.Status, ib.GenerationStatus, ib.ErrorCategory, ib.ErrorMessage FROM invoice i LEFT JOIN billingdocumentpdfgeneration ib ON i.Id = ib.DocumentId WHERE i.Status = 'Posted' AND i.SourceId IN ('BR-00011439')

-   Retrieve all records in a Custom Object named Vehicle: SELECT make\_\_c, model\_\_c, year\_\_c, VIN\_\_c FROM default\_\_Vehicle


## ZOQL to SQL conversions

See the following examples of converting ZOQL queries to SQL queries.

-   Retrieve Account, Subscription, and Product information from RatePlanCharge
    | ZOQL | SQL |
    | --- | --- |
    | SELECT Id, Product.id, Subscription.Name, Product.Name, Account.CrmID, RatePlan.id, RatePlanCharge.ChargeNumber, Subscription.id, Account.id, ProductRatePlan.id FROM RatePlanCharge | SELECT RatePlanCharge.Id, RatePlanCharge.ChargeNumber, Subscription.Name, Product.Name, Account.CrmID FROM RatePlanCharge JOIN RatePlan ON RatePlan.id=RatePlanCharge.rateplanid JOIN Subscription ON RatePlan.SubscriptionId=Subscription.id JOIN Account ON Subscription.AccountId=Account.id JOIN ProductRatePlan ON RatePlan.ProductRatePlanId = ProductRatePlan.id JOIN Product ON Product.id=ProductRatePlan.productid |

-   Retrieve Account, Subscription, and Product Information from Invoice
    | ZOQL | SQL |
    | --- | --- |
    | SELECT Account.id, Invoice.id, ProductRatePlan.id, ProductRatePlanCharge.id, RatePlan.id, RatePlanCharge.id, Subscription.id FROM InvoiceItem | SELECT invoiceitem.accountid, invoice.id, productrateplan.id, productrateplancharge.id, rateplan.id, rateplancharge.id, subscription.id FROM invoiceitem JOIN productrateplan on invoiceitem.productrateplanid = productrateplan.id JOIN rateplancharge on invoiceitem.rateplanchargeid = rateplancharge.id JOIN productrateplancharge on invoiceitem.productrateplanchargeid = productrateplancharge.id JOIN rateplan on invoiceitem.rateplanid = rateplan.id JOIN account on invoiceitem.accountid = account.id JOIN invoice on invoiceitem.invoiceid = invoice.id JOIN subscription on invoiceitem.subscriptionid = subscription.id |

-   Retrieve all active Subscriptions with no Rate Plan
    | ZOQL | SQL |
    | --- | --- |
    | SELECT Subscription.id, count(RatePlanCharge.id) FROM RatePlanCharge WHERE Subscription.status = 'Active' GROUP BY Subscription.id HAVING count(RatePlanCharge.id) = 0 | SELECT subscription.id, count(ratePlanCharge.id) FROM subscription LEFT JOIN ratePlan ON subscription.id = ratePlan.subscriptionId LEFT JOIN ratePlanCharge ON ratePlan.Id = ratePlanCharge.ratePlanId WHERE subscription.status = 'Active' GROUP BY subscription.id HAVING count(ratePlanCharge.id) = 0 |
