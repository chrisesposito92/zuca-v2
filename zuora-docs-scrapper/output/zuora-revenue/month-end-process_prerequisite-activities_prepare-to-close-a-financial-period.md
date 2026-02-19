---
title: "Prepare to close a financial period"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/prerequisite-activities/prepare-to-close-a-financial-period"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:38:02.759Z"
---

# Prepare to close a financial period

Follow these steps to ensure all transactions and events are processed and validated before closing a period.

Complete the following steps to prepare to close a period:

1.  Ensure that all the unprocessed and error records in the transaction staging table are collected and processed.
    1.  Run the Line Staging Report.
    2.  Validate the data.
    3.  To fix any records with errors, use one of the following methods:

        -   Navigate to Data Interface > Inbound .

        -   Upload the previously failed records that have been corrected again.


2.  Process the remaining transactions.
    1.  Run the RevPro3.0 Data Collection program.
    2.  Verify whether there are any failed records in the transaction staging table by using one of the following methods:

        -   Run the Line Staging Report

        -   Navigate to Data Interface > Inbound .


3.  Ensure there is no unprocessed event in the event staging table.
    1.  Run the Event Staging Report to review the records.
    2.  If necessary, run the RevPro3.0 Event Process program to process the events.
4.  Ensure there is no orphan transaction.
    1.  Run the Orphan Transaction Report.
    2.  If necessary, link the orphan transactions to an existing RC or create a new RC for the orphan transactions in the Workbench.
5.  Ensure all transactions have SSPs derived and allocations performed.
    1.  Run the SSP Exception Report.
    2.  If SSP is not derived for one or more transactions, create or upload SSPs, or manually update SSPs for the transactions. Then, re-allocate the affected RCs in the Workbench.
6.  Ensure there is no pending RC approval.
    1.  Run the Approvals Report.
    2.  To approve an RC, log into Zuora Revenue as the approver, and then navigate to Workbench > Approvals .
7.  Ensure there is no pending RC hold.
    1.  Run the RC Hold/Release Report.
    2.  To release an RC hold, navigate to Workbench > Holds .
8.  Release the expired POBs by running the RevPro3.0 POB Immediate Release Master program.
9.  Process the pending release events.
    1.  Run the RevPro3.0 Event Collection Process program.
    2.  After the program completes, run the Events Report and verify the unprocessed events in the event staging table.
10.  Ensure that the unreleased POBs do not require the manual release.
     1.  Run the Unreleased POB Report.
     2.  If any POB requires the manual release, navigate to Workbench > Revenue Contracts and search for the RC to manually release the POBs.
     3.  Run the POBs Released Report to validate all the POBs that are manually released do not need to be deferred.
11.  Ensure all the schedules are posted by running the RevPro3.0 Transfer Accounting program.
