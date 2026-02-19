---
title: "Add  destination for Delta Lake"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/add-destination-for-delta-lake"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:34.433Z"
---

# Add destination for Delta Lake

Learn how to add destination for Zuora Connector for Delta Lake

After completing the prerequisites, provide the Zuora tenant ID for which the Delta Lake connector needs to be set up. Once the tenant ID is shared, the Zuora team will enable the Delta Lake connector configuration UI for your tenant, allowing you to complete the setup using a self-serve flow.

Ensure the required permissions are enabled.

1.  Go to Marketplace > Integration Hub UI.
2.  Search for Zuora Connector for Delta Lake.
3.  Open the connector. You will see three tabs: Overview, Setup, and Status.
4.  In the Setup tab, click Configure, enter your destination details, and select the objects to sync.

    -   If the destination is AWS S3 Delta Lake, use the following details to complete the connection setup:

        -   bucket name

        -   bucket region

        -   role ARN

    -   If the destination is Google Cloud Delta Lake, use the following details to complete the connection setup:

        -   bucket name

        -   your chosen folder name for the data

        -   your Service account email

    -   If the destination is Azure Delta Lake, use the following details to complete the connection setup:

        -   storage account name

        -   container name

        -   your chosen folder name for the data

        -   your Access key


5.  Click Test Connection.
6.  If the test is successful, click Save Destination to trigger onboarding.

Refer to [Post-onboarding flow for Delta Lake](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/post-onboarding-flow-for-delta-lake).
