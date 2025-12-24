---
title: "Execute the SAP GL connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_revenue/execute-the-sap-gl-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T08:38:54.660Z"
---

# Execute the SAP GL connector

Learn how to execute the SAP GL (Revenue) connector to process and post completed journals with entries not yet transferred to accounting.

Running the connector will pick and process all completed journals with journal entries that have not been transferred to accounting. The connector will post the journals concurrently. After defining the field mapping, you can set up the connector for execution.

1.  Navigate to Marketplace > Integration Hub .

2.  Click SAP GL (Revenue) .
3.  Click Execution .
4.  Select the applicable mode from the Execution Mode drop-down field.

    -   Run Now - Allows you to run the connector immediately.

    -   Schedule - Allows you to schedule the connector execution.


5.  Click Run .

    If one or more journal entry postings for a particular Revenue Transfer Accounting Batch fail during execution, the connector will reverse any previously posted journals from that journal run. If this happens the user will need to cancel these journal runs, remediate the cause of the error, and run them again before retrying this transfer to accounting operation.
