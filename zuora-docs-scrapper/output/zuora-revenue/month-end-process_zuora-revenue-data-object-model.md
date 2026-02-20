---
title: "Zuora Revenue data object model"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/zuora-revenue-data-object-model"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:19:12.816Z"
---

# Zuora Revenue data object model

The Zuora Revenue data object model facilitates the extraction of revenue data for creating analytical dashboards and data queries, requiring technical expertise in data modeling and SQL.

Workflow data model bundles all the revenue data, which can be extracted as the revenue-only data or the billing and revenue integrated data in a fast and optimal method. These data models can help you to build use case reports. For example, you can create views over the data model for features such as analytical dashboards and data queries. It is recommended for the user to have data model and SQL technical expertise before creating views and writing queries.

## Revenue object data model

The following diagram is a high-level view of how key data objects are related to one another within Zuora Revenue. ![Revenue Data object model.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0e31877e-68d1-4015-b8e2-3ac64b40adc9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBlMzE4NzdlLTY4ZDEtNDAxNS1iOGUyLTNhYzY0YjQwYWRjOSIsImV4cCI6MTc3MTcwNzkyMSwianRpIjoiNmE4ZmU1NzdmOTViNGVmZjlhY2JjYTBmZTMyNTE3MjYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.csoyQD1HjaDqhnDzR2c2vBcrrM_wL95K2Vh14n14q8o)

## Revenue objects and descriptions

The following objects are present in the data model. Click the name of each object for more details.

[REVENUECALENDAR](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecalendar-object): Contains the details of the accounting calendar that are configured in Zuora Revenue.

[REVENUECONTRACT](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontract-object): Contains the details of distinct revenue contracts (RC) based on the defined RC grouping template.

[REVENUECONTRACTACCOUNTINGENTRIES](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractaccountingentries-object): Contains the accounting entries / journal entries of every transaction based on its performance obligation template.

[REVENUECONTRACTACCOUNTINGSEGMENTS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractaccountingsegments-object): Contains the Accounting segments details for deferring and releasing segments of every accounting entry.

[REVENUECONTRACTACCOUNTINGTYPE](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractaccountingtype-object): Contains the accounting type details of every Accounting entries.

[REVENUECONTRACTACTIONS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractactions-object): Contains the details of every revenue contract POB's release and deferral actions that are taken by both the system and manual operation.

[REVENUECONTRACTAPPROVALS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractapprovals-object): Contains the details of revenue contract approvals and their history.

[REVENUECONTRACTBILLSDIMENSIONS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractbillsdimensions-object). : Contains the billing transaction dimensional details, which include transaction types such as INV, CM, CM-R, CM-C, CM-RO, and RORD.

[REVENUECONTRACTBILLSFACTS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractbillsfacts-object): Contains the billing transaction fact, which includes transaction types such as INV, CM, CM-R, CM-C, CM-RO, and RORD.

[REVENUECONTRACTCOSTDIMENSIONS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractcostdimensions-object): Contains the cost transaction dimensional details of both standard standard and user-defined cost.

[REVENUECONTRACTCOSTFACTS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractcostfacts-object): Contains the cost transaction fact, which includes both standard and user-defined costs.

[REVENUECONTRACTHOLDS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractholds-object): Contains the details of revenue contract hold at all the line level, POB level, and Revenue Contract level.

[REVENUECONTRACTLINESDIMENSION](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractlinesdimensions-object): Contains the sales order transaction dimensional details.

[REVENUECONTRACTLINESFACTS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractlinesfacts-object): Contains the sales order transaction fact details.

[REVENUECONTRACTMJENTRIESDIMENSIONS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractmjentriesdimensions-object): Contains the manual journal transaction dimensional details.

[REVENUECONTRACTMJENTRIESFACTS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractmjentriesfacts-object): Contains the Manual journal transaction fact details.

[REVENUECONTRACTVCDIMENSIONS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractvcdimensions-object): Contains the variable consideration (VC) transaction dimensional details of both standard and user-defined VC.

[REVENUECONTRACTVCFACTS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractvcfacts-object): Contains the variable consideration transaction fact, which includes both standard and user-defined VC.

[REVENUEPERIODS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenueperiods-object): Contains the open period details.

[REVENUECONTRACTNETTINGSTATUS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractnettingstatus-object): Contains period-wise contract's asset/liability position of the revenue contract. This is applicable if you are using CA/CL Netting in Zuora Revenue.

[REVENUEACCOUNTINGSUMMARY](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenueaccountingsummary-object) :This object provides the calculated fields such as the opening balance, additions, releases, activity, and ending balances for the various schedule types & account segment values. The balances are maintained period-wise at a Revenue Contract line level. With this object, you can easily create revenue reports in the data warehouse.

[RCROLLFORWARDDETAILS](/zuora-revenue/month-end-process/zuora-revenue-data-object-model/revenuecontractrollforward-object) - Use this object to access the Roll forward report directly from your data warehouse.

Note: The [Revenue Objects Data Dictionary](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/426d1a47-5b5e-426b-be34-53bacc66ff5a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQyNmQxYTQ3LTViNWUtNDI2Yi1iZTM0LTUzYmFjYzY2ZmY1YSIsImV4cCI6MTc3MTcwNzkyMSwianRpIjoiNzVjMTQ1NTZlMmZiNGRiODk4ZTQ4OTg4NDg2YjhiOTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.iGv-y7TU8Yd44T_SVfh7LHRTrKNWDaeNJhlLp1uJVis&response-content-disposition=attachment%3B+filename%3D%22Revenue_Objects_Data_Dictionary.xlsx%22) provides you with the following information:

-   Object and field level details between Revenue Objects and BI Views Object to help you transition from BI View Objects to the new Revenue Object Model.
-   Field-level definitions of revenue objects.

## Chronology

Changes in Release 2025.Q3.0.0

RevenueContractActions object — We have added the below fields.

-   AffinityGroup
-   ProcessSequence
-   Status
-   ActionSource
-   LeadLineProcessedAmount
-   LeadLineID

Changes in Release 2024.Q4.0.0

RevenueContractMJEEntriesFacts — We have added the below fields:

-   JEHeadStatusFlag - Status of Manual Journal
-   JEHeadReversalStatusFlag - Reversal Status of the Manual Journal
-   JEHeadTypeFlag - Manual Journal Type

-   RevenueContractAccountingEntries - We have added the below fields:

    -   Name - GL Transfer Batch Name
    -   Credit Flag - This field is consumed internally by Zuora.

Until now, the manual journal (MJE) accounting schedules were represented as single-sided (debit) entries that displayed the amount as positive and negative amounts, as shown below.

| AccountingSegment | TransactionDebitAmount | TransactionCreditAmount | AccountingTypeID |
| --- | --- | --- | --- |
| 1001 | 100 |  | L |
| 4001 | -100 |  | R |

Starting from this release, note that the MJE accounting schedules will be represented as double-sided entries with debits and credits as shown below.

| Accounting Segment | TransactionDebitAmount | TransactionCreditAmount | AccountingTypeID |
| --- | --- | --- | --- |
| 1001 | 100 |  | L |
| 4001 |  | 100 | R |

## Creating views based on the data model

The following sample queries show how to create the views that are required for building any use case-specific reports or analytical dashboards.

## Line level transactional report sample query

The following sample query shows how to get the line-level transactional report with limited fields including the booking, billing, and accounting details. You can customize the query to add any number of attributes to the line level transaction report.

SELECT rcld.revenuecontractlineid, rcld.revenueorganizationname, rcld.revenuebookname, rcld.revenuecontractid, rcld.salesordernumber, rcld.salesorderlinenumber, rcld.itemnumber, rcld.customernumber, rcld.productcategory, rcld.productfamily, rcld.businessunit, SUM(rclf.extendedsellprice) extendedsellprice, SUM(rclf.carveadjustment) carveadjustment, SUM(rclf.allocatedextendedprice) allocatedextendedprice, SUM(rclf.unreleasedrevenue) unreleasedrevenue, SUM(rclf.releasedrevenue) releasedrevenue, SUM(rcbf.billingextendedsellprice) billingextendedseliprice, SUM(rcbf.billingdeferedamount) billingunreleasedrevenue, SUM(rcbf.billingrecognizedamount) billingreleasedrevenue, SUM(rcae.transactioncreditamount) transactionalnetrevenue, SUM(rcae.transactionbilledcreditamount) transactionalbilledrevenue, SUM(rcae.transactionunbilledcreditamount) transactionalunbilledrevenue, SUM(rcae.transactioncarveadjustmentamount) transactionaladjustmentrevenue FROM RevenueContractLinesDimensions rcld, RevenueContractLinesFacts rclf, (SELECT /\* Billings details \*/ rcbf.revenuecontractlineid, rcbf.revenueorganizationcode, rcbf.revenueclientid, rcbf.revenuebookid, SUM(rcbf.billingextendedsellprice) billingextendedsellprice, SUM(rcbf.deferedamount) billingdeferedamount, SUM(rcbf.recognizedamount) billingrecognizedamount FROM RevenueContractBillsFacts rcbf GROUP BY rcbf.revenuecontractlineid, rcbf.revenueorganizationcode, rcbf.revenueclientid, rcbf.revenuebookid) rcbf, (SELECT /\* Revenue Accounting details \*/ revenuecontractlineid, revenueorganizationcode, revenueclientid, revenuebookid, SUM(transactioncreditamount) transactioncreditamount, SUM(CASE WHEN accountingtypeid = 'R' AND unbilled\_flag = 'N' THEN transactioncreditamount ELSE 0 END) transactionbilledcreditamount, SUM(CASE WHEN accountingtypeid = 'R' AND unbilled\_flag = 'Y' THEN transactioncreditamount ELSE 0 END) transactionunbilledcreditamount, SUM(CASE WHEN accountingtypeid = 'X' THEN transactioncreditamount ELSE 0 END) transactioncarveadjustmentamount FROM RevenueContractAccountingEntries WHERE accountingtypeid IN (SELECT revenueaccounttypeid FROM RevenueContractAccountingType WHERE wf\_summ\_type = 'Net Revenue') GROUP BY revenuecontractlineid, revenueorganizationcode, revenueclientid, revenuebookid) rcae WHERE rcld.revenuecontractlineid = rclf.revenuecontractlineid AND rcld.revenueorganizationcode = rclf.revenueorganizationcode AND rcld.revenueclientid = rclf.revenueclientid AND rcld.revenuebookid = rclf.revenuebookid AND rcld.revenuecontractlineid = rcbf.revenuecontractlineid (+) AND rcld.revenueorganizationcode = rcbf.revenueorganizationcode (+) AND rcld.revenueclientid = rcbf.revenueclientid (+) AND rcld.revenuebookid = rcbf.revenuebookid (+) AND rcae.revenuecontractlineid (+) = rcld.revenuecontractlineid AND rcae.revenueorganizationcode (+) = rcld.revenueorganizationcode AND rcae.revenueclientid (+) = rcld.revenueclientid AND rcae.revenuebookid (+) = rcld.revenuebookid GROUP BY rcld.revenuecontractlineid, rcld.revenueorganizationname, rcld.revenuebookname, rcld.revenuecontractid, rcld.salesordernumber, rcld.salesorderlinenumber, rcld.itemnumber, rcld.customernumber, rcld.productcategory, rcld.productfamily, rcld.businessunit;

## Waterfall sample query

The following sample query shows how to get the waterfall report.

SELECT C.ACCOUNTINGPERIODID AS ASOFPERIODID, S.REVENUESCHEDULEID , S.REVENUECONTRACTLINEID, S.ROOTREVENUECONTRACTLINEID, S.SCHEDULEDPERIODID, S.POSTINGPERIODID, S.REVENUEORGANIZATIONCODE, S.REVENUEBOOKID, S.REVENUECLIENTID, S.ACCOUNTINGSEGMENT, S.ACCOUNTINGTYPEID, S.NETTING\_ENTRY\_FLAG, S.SCHD\_TYPE\_FLAG, (S.TRANSACTIONDEBITAMOUNT + S.TRANSACTIONCREDITAMOUNT) AS TACTIVITY, (S.FUNCTIONALDEBITAMOUNT + S.FUNCTIONALCREDITAMOUNT) AS FACTIVITY, (S.REPORTINGDEBITAMOUNT + S.REPORTINGCREDITAMOUNT) AS RACTIVITY, S.CREATEDACCOUNTINGPERIOD, S.CREATEDDATE, S.CREATEDBY, S.UPDATEDDATE, S.UPDATEBY, S.INCREMENTALREFESHDATE FROM REVENUECONTRACTACCOUNTINGENTRIES S, REVENUECALENDAR C, REVENUECONTRACTACCOUNTINGTYPE A WHERE S.CREATEDACCOUNTINGPERIOD <= C.ACCOUNTINGPERIODID AND S.SCHEDULEDPERIODID >= C.ACCOUNTINGPERIODID AND S.ACCOUNTINGTYPEID = A.REVENUEACCOUNTTYPEID AND A.WATERFALL\_FLAG = 'Y' and C.ACCOUNTINGPERIODNAME = '<PERIOD NAME>';
