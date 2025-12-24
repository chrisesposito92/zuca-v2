---
title: "Create a service account"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-google-cloud-storage/set-up-zuora-connector-for-google-cloud-storage/create-a-service-account"
product: "zuora-platform"
scraped_at: "2025-12-24T18:32:40.220Z"
---

# Create a service account

Create a service account

By default, Google Cloud Storage (GCS) authentication uses role-based access. You will need the data-syncing service's service account name available to grant access. It should look like `some-name@some-project.iam.gserviceaccount.com`.

1.  In the GCP console, navigate to the IAM and Admin menu, click into the Service Accounts tab, and click Create service account at the top of the menu.
2.  In the first step, name the service account that will be used to transfer data into Cloud Storage and click Create and Continue. Click Continue in the following optional step without assigning any roles.
3.  In the Grant users access to this service account step, within the Service account users role field, enter the provided Service account (see prerequisite) and click Done.
4.  Once successfully created, search for the created service account in the service accounts list, click the Service account name to view the details, and make a note of the email.

    Note:

    This is a different email than the service's service account.

5.  Select the permissions tab, find the provided principal name (Service account from the prerequisite), click the Edit principal button (pencil icon), click Add another role, select the Service Account Token Creator role, and click Save.

    ![gcp-grant-role-1.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a02abb07-f0d8-4a9c-a379-29decc0073b4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEwMmFiYjA3LWYwZDgtNGE5Yy1hMzc5LTI5ZGVjYzAwNzNiNCIsImV4cCI6MTc2NjY4NzU1OCwianRpIjoiNmQwN2VjNDRlZDNjNDI0NGE4MWNmMDI1MzU1OTVkZTUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.BtzIzc04gBUvQ6Sx65X5vYSzmNJ2wRjqsuA5DEmtIwE)

    For alternative authentication method, see [here](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-google-cloud-storage/set-up-zuora-connector-for-google-cloud-storage/create-a-service-account/alternative-authentication-method-hmac-access-key-and-secret).
