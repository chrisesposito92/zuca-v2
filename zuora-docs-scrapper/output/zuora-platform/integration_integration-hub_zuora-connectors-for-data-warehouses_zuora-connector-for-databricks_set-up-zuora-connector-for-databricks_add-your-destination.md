---
title: "Add your destination"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/add-your-destination"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:10.896Z"
---

# Add your destination

Detailed instructions for setting up the Zuora Connector for Databricks

1.  After completing the initial setup, access the Databricks connector setup UI to start the provisioning process. To do this, you will need access to the [Integration Hub](/zuora-platform/integration/integration-hub/get-started-with-integration-hub).
2.  Follow this article to link your Connect account to your Zuora account and install the app. If you face any issues, raise a support ticket and stay in touch with your account representative for the necessary access to the Integration Hub UI.
3.  Once you have access, go to the Marketplace menu and select Integration Hub UI.
4.  Search for Zuora Connector for Databricks and select it.
5.  You'll see three tabs: Overview, Setup, and Status.
6.  In the Setup tab, click Configure, enter the required details, and select objects for synchronization.
7.  Click Test Connection. If successful, click Save Destination to finalize the setup. This will initiate the onboarding process.
8.  After onboarding, the connector's Status will change to Active, and you'll see status data in the Status tab after the first successful transfer.
9.  Alternatively, If you encounter issues gaining access to this UI, share your Databricks host address with a Zuora representative. They will assist in creating a connection link. Use the provided connection link to securely input your server hostname, port, catalog, schema, http path of the SQL endpoint, personal access token information to complete the setup.
10.  Next, do verification and data transfer.

     For Databricks, your data will be loaded into the specified datasets and tables that you have configured during the setup process. You can access and query this data directly within your Databricks environment using SQL queries or through integrated analytics tools.

     This is the format of transferred data:

     -   Data transferred to Databricks are loaded as properly typed tables within the specified schema. Each table corresponds to a distinct dataset or entity from your Zuora data.
     -   In addition to the primary tables, a `special_transfer_status` table is created within the designated schema to capture transfer metadata. This table includes a `transfer_last_updated_at` timestamp for each dataset, providing insights into the timing of data updates.
     -   The exact structure and organization of your transferred data within Databricks will be determined by the configurations that you have specified during the setup process. This ensures that your data is seamlessly integrated into your existing Databricks environment and ready for analysis and reporting.
