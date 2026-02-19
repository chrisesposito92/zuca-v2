---
title: "Add  destination for BigQuery"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-bigquery/set-up-zuora-connector-for-bigquery/add-destination-for-bigquery"
product: "zuora-platform"
scraped_at: "2026-02-19T03:32:33.063Z"
---

# Add destination for BigQuery

Learn how to add destination for Zuora Connector for BigQuery

Log into the Google Cloud Console and from the projects list dropdown, make a note of the BigQuery Project ID.

![gcp-project-id-10.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/760e8808-d8c9-444d-8276-9b031d93c6a6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc2MGU4ODA4LWQ4YzktNDQ0ZC04Mjc2LTliMDMxZDkzYzZhNiIsImV4cCI6MTc3MTU1ODM0NywianRpIjoiOGVhZjVhZjZmMGIxNDYyNWI4YjViZWExZWFhZjM3ZTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9._Eg52sNE3TVgR9Tf3u7PeCJw0oVLj1U5mWVtY3MF7Io)

After completing the prerequisites, provide the Zuora tenant ID for which the BigQuery needs to be set up. Once the tenant ID is shared, the Zuora team will enable the BigQuery connector configuration UI for your tenant, allowing you to complete the setup using a self-serve flow.

Ensure the required permissions are enabled.

1.  Go to Marketplace > Integration Hub UI.
2.  Search for Zuora Connector for BigQuery.
3.  Open the connector. You will see three tabs: Overview, Setup, and Status.
4.  In the Setup tab, click Configure, enter your destination details, and select the objects to sync.
5.  Click Test Connection.
6.  If the test is successful, click Save Destination to trigger onboarding.

Refer to [Post-onboarding flow for BigQuery](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-bigquery/set-up-zuora-connector-for-bigquery/post-onboarding-flow-for-bigquery).
