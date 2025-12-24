---
title: "Run Revenue connector for NetSuite ERP"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/revenue-connector-for-netsuite-erp/configurations-in-connector/run-revenue-connector-for-netsuite-erp"
product: "zuora-platform"
scraped_at: "2025-12-24T08:29:41.845Z"
---

# Run Revenue connector for NetSuite ERP

Learn how to run the connector.

1.  From the connector Execution tab, select the solution instance from the dropdown list.
2.  Click the gear icon.
3.  Choose either On-Demand or Scheduled execution mode for each solution instance.
4.  Click Run or Schedule.
5.  If you selected scheduled mode of execution, choose the desired frequency.
6.  To see the status of the run, open the execution link.

    The Run details window is displayed, and each task in the connector flow is listed indicating success or error.

    Currently the connector follows an "All or None" approach to ingest all the transactions from the NetSuite dataset. There is no partial ingestion like some transactions are successfully ingested and some are not.

7.  Click the download icon to download the summary log.

Upon completion, you receive an email notifcation with an attachment that provides high-level details of:

-   Connector execution status

-   Object type

-   Revenue transaction file template name and details

-   Upload file name

-   Number of transactions ingested into Revenue along with fields that are mapped per each object


Validate transactions in Zuora Revenue inbound staging. See [Validate transactions in Zuora Revenue after connector run](/zuora-platform/integration/integration-hub/revenue-connector-for-netsuite-erp/validate-transactions-in-zuora-revenue-after-connector-run) .

The connector does not update the transaction records in NetSuite. For this purpose, you can create a workflow inside NetSuite to update the transactions. Based on the information available in Revenue Inbound Transaction staging, you can leverage Revenue APIs to validate the transactions that are successfully ingested into Revenue and the transactions that caused errors.
