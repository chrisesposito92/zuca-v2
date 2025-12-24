---
title: "Data Query help section"
url: "https://docs.zuora.com/en/zuora-platform/data/data-query/data-query-help-section"
product: "zuora-platform"
scraped_at: "2025-12-24T18:40:41.220Z"
---

# Data Query help section

This section provides help through a list of clarifications.

-   Some common SQL errors that you should look out for are:

    -   Error: Column region\_c cannot be resolved

        Solution: You are missing a reference to the table that includes region\_\_c. Select or join from that table in your query and try again.

    -   Error: Query exceeded the maximum time limit of 3600.00s

        Solution: This error is thrown when you reach one of the system limitations in Data Query. Queries running for longer than 1 hour will be canceled. Your query might be running for a long time for many reasons: you are doing complex JOINs across many tables without filters in your WHERE clause, or you are doing complex aggregate functions in your query, or you are running many SELECT clauses in one query, and so on. Try to address one or several of these issues to improve your query performance.

    -   Error: Table owl.data.acccount does not exist

        Solution: The table you are trying to access either does not exist in your tenant or you have a spelling error in your query. Run SHOW TABLES to confirm that you have that table in your tenant.


-   You cannot submit a ZOQL query to Data Query. Only SQL queries are supported. You must convert ZOQL statements to SQL statements before submitting data queries. See [ZOQL to SQL conversions](/zuora-platform/data/data-query/common-use-cases-of-data-query#concept-ac-1675__title-416) for more information.

-   As regards getting real-time data with Data Query Live, Data Query Live runs data queries against Zuora transactional databases. The transactional databases are updated in near real-time. It might take some time for the databases to synchronize the changes you made in your Zuora tenant.

-   You can run queries with more than 10 million input records. You can run queries against Zuora Warehouse, which has no limitations on input records and has better performance than the Zuora Transactional Database. For more information, see [Zuora Warehouse](/zuora-platform/data/zuora-warehouse/zuora-warehouse-overview).

-   You can run queries with more than 500,000 output records. You can run queries against Zuora Warehouse. The maximum number of output records for each query in Zuora Warehouse is 50 million, which is 100 times more than the Zuora Transactional Database. For more information, see [Zuora Warehouse](/zuora-platform/data/zuora-warehouse/zuora-warehouse-overview).

-   As regards the retention period for your Data Query export files, to meet the GDPR compliance requirements, Zuora only stores your data query export history information for up to 30 days. Zuora erases all data query export history information older than 30 days.

-   As regards column deprecation in January 2023, the following columns are end-of-life in January 2023. Zuora will no longer return these columns in the Data Query schema after these columns are deprecated. To minimize any impact on your queries, it is highly recommended to review your queries now and remove the columns to be deprecated. From now on, use the JOIN syntax to add these columns to your queries. An example is provided below. For any assistance please contact [Zuora Global Support](https://support.zuora.com/).

    The following columns in the `invoiceitem` object are end-of-life:

    -   `accountid`

    -   `parentaccountid`

    -   `billtocontactid`

    -   `soldtocontactid`

    -   `defaultpaymentmethodid`

    -   `productrateplanchargeid`

    -   `rateplanid`

    -   `productrateplanid`

    -   `amendmentid`

    -   `Productid`


-   The `journalentryId` column in the following objects will be end-of-life:

    -   `CreditBalanceAdjustment`

    -   `CreditMemoApplicationItem`

    -   `CreditMemoItem`

    -   `CreditTaxationItem`

    -   `DebitMemoItem`

    -   `DebitTaxationItem`

    -   `InvoiceAdjustment`

    -   `InvoiceItem`

    -   `InvoiceItemAdjustment`

    -   `InvoicePayment`

    -   `JournalEntryItem`

    -   `NonSubscriptionInvoiceItem`

    -   `PaymentApplicationItem`

    -   `PaymentApplication`

    -   `RefundApplication`

    -   `RefundApplicationItem`

    -   `RefundInvoicePayment`

    -   `RevenueEventItem`

    -   `RevenueEventItemCreditMemoItem`

    -   `RevenueEventItemDebitMemoItem`

    -   `RevenueEventItemInvoiceItem`

    -   `RevenueEventItemInvoiceItemAdjustment`

    -   `TaxationItem`


    Here is an example of using the JOIN syntax to add the columns to a query.SELECT InvoiceItem.id, Account.id as aid, Invoice.invoicenumber as invn, ProductRatePlan.id as prpid,ProductRatePlanCharge.id as prpcid, RatePlan.id as rpid, RatePlanCharge.id as rpcid FROM invoiceitem JOIN productrateplan on invoiceitem.productrateplanid = productrateplan.id JOIN rateplancharge on invoiceitem.rateplanchargeid = rateplancharge.id JOIN productrateplancharge on invoiceitem.productrateplanchargeid = productrateplancharge.id JOIN rateplan on invoiceitem.rateplanid = rateplan.id JOIN account on invoiceitem.accountid = account.id JOIN invoice on invoiceitem.invoiceid = invoice.id JOIN subscription on invoiceitem.subscriptionid = subscription.id JOIN account on invoice.accountid = account.id JOIN rateplancharge on invoiceitem.rateplanchargeid = rateplancharge.id JOIN rateplan on rateplancharge.rateplanid = rateplan.id JOIN subscription on rateplan.subscriptionid = subscription.id JOIN productrateplancharge on rateplancharge.productrateplanchargeid = productrateplancharge.id JOIN productrateplan on productrateplancharge.productrateplanid = productrateplan.id
