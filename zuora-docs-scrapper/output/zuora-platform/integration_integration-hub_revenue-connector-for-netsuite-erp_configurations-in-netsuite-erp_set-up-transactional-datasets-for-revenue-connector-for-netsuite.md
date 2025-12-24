---
title: "Set up transactional datasets for Revenue connector for NetSuite"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/revenue-connector-for-netsuite-erp/configurations-in-netsuite-erp/set-up-transactional-datasets-for-revenue-connector-for-netsuite"
product: "zuora-platform"
scraped_at: "2025-12-24T08:29:16.456Z"
---

# Set up transactional datasets for Revenue connector for NetSuite

Learn how to set up transactional datasets for the Revenue connector for NetSuite ERP.

1.  Navigate to Analytics menu, and then click the DataSets tab.
2.  Create New DataSet.
3.  Select the transaction object.
4.  Enter the dataset name and description.
5.  Optionally, if you want to add a custom name, enter the dataset ID.
6.  Select the fields from the Transaction and Transaction Line objects.
7.  Drag and drop the fields that are part of Netsuite Sales Order transactions that you want to map with the fields of the Orders template in Zuora Revenue.
8.  Save your entries.
9.  Click the Dataset columns and change the Alias (display labels) to what gets displayed in the Connector Field Mapping UI.

    You can set up and select the fields based on the use case requirements in NetSuite. See [Sample dataset for Revenue Connector for NetSuite](/zuora-platform/integration/integration-hub/revenue-connector-for-netsuite-erp/configurations-in-netsuite-erp/set-up-transactional-datasets-for-revenue-connector-for-netsuite/sample-dataset-for-revenue-connector-for-netsuite).

10.  Click the DataSet columns link to see all the columns that are part of the dataset results.

     Note:

     You can define filter criteria in the Dataset UI to filter out certain transactions from the resulting Dataset, such as transactions updated in last 24 hours, last 1 week, or transactions from specific subsidiary.

11.  Repeat steps for other transactional datasets, such as Invoices and Credit Memos.
12.  Configure functions and formulae on the fields in the Netsuite Datasets to derive specific field or attribute values.

Complete configurations in Zuora Revenue. See [Set up API user in Revenue](/zuora-platform/integration/integration-hub/revenue-connector-for-netsuite-erp/configurations-in-zuora-revenue/set-up-api-user-in-revenue).
