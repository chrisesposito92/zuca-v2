---
title: "Add your destination"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-bigquery/set-up-zuora-connector-for-bigquery/add-your-destination"
product: "zuora-platform"
scraped_at: "2025-12-24T18:30:52.587Z"
---

# Add your destination

Create a staging bucket

Log into the Google Cloud Console and from the projects list dropdown, make a note of the BigQuery Project ID.

![gcp-project-id-10.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/760e8808-d8c9-444d-8276-9b031d93c6a6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc2MGU4ODA4LWQ4YzktNDQ0ZC04Mjc2LTliMDMxZDkzYzZhNiIsImV4cCI6MTc2NjY4NzQ1MCwianRpIjoiNTRkYTU1N2ZhYjdiNDBlZWJiYTZlNDkyYzY0ZDJlNzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.9eg5a8WUdu0AHR7WLKU4TTzJt_NJgM97Msl4YwLC270)

1.  After completing the initial setup, access the BigQuery connector setup UI to start the provisioning process. To do this, you will need access to the [Integration Hub](/zuora-platform/integration/integration-hub/get-started-with-integration-hub).
2.  Follow the steps provided in the above article to link your Connect account to your Zuora account and install the app. If you face any issues, raise a support ticket and stay in touch with your account representative for the necessary access to the Integration Hub UI.
3.  Once you have access, go to the Marketplace menu and select Integration Hub UI.
4.  Search for Zuora Connector for BigQuery and select it.

    You will see three tabs: Overview, Setup, and Status.

5.  In the Setup tab, click Configure, enter the required details, and select objects for synchronization.
6.  Click Test Connection. If successful, click Save Destination to finalize the setup. This will initiate the onboarding process.
7.  After onboarding, the connector's Status will change to Active, and you'll see status data in the Status tab after the first successful transfer.
8.  Alternatively, If you encounter issues gaining access to this UI, share your BigQuery host address with a Zuora representative. They will assist in creating a connection link. Use the provided connection link to securely input your Project ID, Bucket Name, Bucket Location, Destination Schema Name and Service Account name information to complete the setup.
