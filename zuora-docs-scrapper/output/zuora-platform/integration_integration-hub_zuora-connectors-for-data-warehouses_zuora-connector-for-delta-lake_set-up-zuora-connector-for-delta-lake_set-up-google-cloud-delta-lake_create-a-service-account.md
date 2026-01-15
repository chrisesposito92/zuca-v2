---
title: "Create a service account"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-google-cloud-delta-lake/create-a-service-account"
product: "zuora-platform"
scraped_at: "2026-01-15T22:01:35.959Z"
---

# Create a service account

Know how to create a service account

1.  In the GCP console, navigate to the IAM & Admin menu, click into the Service Accounts tab, and click Create service account at the top of the menu.
2.  In the first step, name the service account that will be used to transfer data into Cloud Storage and click Create and Continue. Click Continue in the following optional step without assigning any roles.
3.  In the Grant users access to this service account step, within the Service account users role field, enter the provided Service account (see [prerequisite](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-google-cloud-delta-lake#concept-mt74hf35__title-201)) and click Done.
4.  Once successfully created, search for the created service account in the service accounts list, click the Service account name to view the details, and make a note of the email.

    Note:

    This is a different email than the service's service account.

5.  Select the permissions tab, find the provided principal name (Service account from the prerequisite), click the Edit principal button (pencil icon), click Add another role, select the Service Account Token Creator role, and click Save.

    ![Service account token creator](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e5169f10-4785-4cec-a839-c8f67b09f47d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU1MTY5ZjEwLTQ3ODUtNGNlYy1hODM5LWM4ZjY3YjA5ZjQ3ZCIsImV4cCI6MTc2ODYwMDg5MCwianRpIjoiOTUzMWI4YTY3ZjIxNGNmMGI1ZWVkNzQxYjc1ODVlNDAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.RB_oHOgdWdFJhOOPUPupH5lrLRBwcpmj8jjypU3FMQ4)
