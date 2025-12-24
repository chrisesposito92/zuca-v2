---
title: "Execute the SAP GL (Billing) connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-sap/sap_billing/execute-the-sap-gl-billing-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T08:38:05.485Z"
---

# Execute the SAP GL (Billing) connector

Learn how to execute the SAP GL (Billing) connector to process and post completed journals, and manage journal entry transfers to accounting.

Running the connector picks and processes all completed journals with journal entries that have not been transferred to accounting. The connector will post the journals concurrently. After defining the field mapping, you can set up the connector for execution.

1.  Navigate to Marketplace > Integration Hub .
2.  Click SAP GL (Billing) .
3.  Click Jobs .
4.  Click Run Now button.
5.  To schedule connector execution:
    1.  Navigate to Marketplace > Integration Hub .
    2.  Click SAP GL (Billing) .
    3.  Click Settings .
    4.  Scroll down to Schedule Details .
    5.  Click the + button to add a schedule.
    6.  Click Run .

If one or more journal entry postings for a particular journal run fail during execution, cancel these journal entries, remediate the cause of the error, and perform another journal run before retrying the transfer to the accounting operation.

Once the transfer to accounting operations is completed, you can view a summary report on the Jobs tab.

In the event of a failure, the summary report will include actionable insights that enable you to remediate the cause of the failure.

On successful completion of a transfer to accounting operation, the SAP document number will be recorded on the Zuora journal entry object in the `SAP_DOCUMENT_NUMBER__c` custom field.
