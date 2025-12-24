---
title: "Execute Workday Financials GL (Billing)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-workday-financials/execute-workday-financials-gl-billing"
product: "zuora-platform"
scraped_at: "2025-12-24T08:28:02.544Z"
---

# Execute Workday Financials GL (Billing)

Learn how to execute and schedule the Workday Connector to process and transfer resources to Workday, including handling errors and viewing summary reports.

Running the connector will pick and process all completed journals with journal entries that have not been transferred to accounting. The connector will post the journals concurrently. After defining the field mapping, you can set up the connector for execution.

Complete the following steps to schedule the connector execution:

Complete the following steps to execute the connector:

1.  Navigate to Marketplace > Integration Hub .
2.  Click Workday GL (Billing) .
3.  Click Jobs .
4.  Click Run Now to run the connector immediately.
5.  Navigate to Marketplace > Integration Hub .
6.  Click Workday GL (Billing) .
7.  Click Settings .
8.  Find the Schedule Details section.
9.  Click the + icon to add a schedule.
10.  Click Run

If one or more journal entry postings for a particular journal run fail during execution, cancel the journal entries, remediate the cause of these errors, and perform another journal run before retrying the transfer to accounting operation.

Once the transfer to accounting operations is completed, you can view a summary report on the Jobs tab.

The summary report will include actionable insights that enable you to remediate the cause of a failure.

After a transfer to accounting operation is successfully completed, the Workday document number will be recorded on the Zuora journal entry object in the WD\_Accounting\_Journal\_ID\_\_c custom field.
