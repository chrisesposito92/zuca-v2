---
title: "Create a service account in BigQuery project"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-bigquery/set-up-zuora-connector-for-bigquery/create-a-service-account-in-bigquery-project"
product: "zuora-platform"
scraped_at: "2025-12-24T18:30:43.576Z"
---

# Create a service account in BigQuery project

Create a service account

By default, BigQuery authentication uses role-based access. You will need the data-syncing service's service account name available to grant access. It should look like `some-name@some-project.iam.gserviceaccount.com`.

1.  In the GCP console, navigate to the IAM & Admin menu, click the Service Accounts tab, and click Create service account at the top of the menu.

    -   ![gcp-create-service-account-menu-1.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6971317e-c42a-4373-9a58-62f233b0e172?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY5NzEzMTdlLWM0MmEtNDM3My05YTU4LTYyZjIzM2IwZTE3MiIsImV4cCI6MTc2NjY4NzQ0MSwianRpIjoiN2M5OWUzZWUzMmQ5NDc4NWIzZGE1OTBlNWIzNzcyZGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.VPewcZegkBHmcye7DD3ykepH_MqtM04X2YuxA8NF4X0)


2.  In the first step, name the user and click Create and Continue.

    -   ![gcp-service-account-name-options-2.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/75cbcae9-8669-4346-b18f-fb7e37e1c300?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc1Y2JjYWU5LTg2NjktNDM0Ni1iMThmLWZiN2UzN2UxYzMwMCIsImV4cCI6MTc2NjY4NzQ0MSwianRpIjoiNGFkNmE3NTZhNjkyNGVkNzg1Yjg0ZTFmODMzYmE1ZWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.RUADw4AsJiBSGgNxwEc84x8MgwLLDonFSJ0IDxkbfMg)


3.  In the second step, grant the user BigQuery User role.

    -   ![gcp-bigquery-user-3.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6edff3f0-575e-4b5d-b004-9d7b2712820f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZlZGZmM2YwLTU3NWUtNGI1ZC1iMDA0LTlkN2IyNzEyODIwZiIsImV4cCI6MTc2NjY4NzQ0MSwianRpIjoiOWM2ZWNkMmIzYmNiNDZiZGJlM2M3M2Q2NTgwZGI2NmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.HUX4m5ZptaI9luWs3Gmd502HprAMfbJitBQdHMqliSU)


4.  In the third step (grant users access to this service account step), within the Service account users role field, enter the provided Service account (see prerequisite) and click Done.
5.  Once successfully created, search for the created service account in the service accounts list, click the Service account name to view the details, and make a note of the email (this email is different from the service's service account).
6.  Select the permissions tab, find the provided principal name (Service account from the prerequisite), click the Edit principal button (pencil icon), click Add another role, select the Service Account Token Creator role, and click Save.

    -   ![gcp-grant-role-4.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/10f57740-a0a4-4349-8f63-aef9c53a3c63?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjEwZjU3NzQwLWEwYTQtNDM0OS04ZjYzLWFlZjljNTNhM2M2MyIsImV4cCI6MTc2NjY4NzQ0MSwianRpIjoiOTJiNGY3NGZiZDEwNDliZmIwMjE1ZWFjYjQzNGIyYzYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.D4y5Jb2xT5sl1fZrJ05BGMFoB_bel-hUaQ3CEe_Ep-c)


    Note:

    Understand the BigQuery User role. The BigQuery User role is a predefined IAM role that allows for the creation of new datasets, with the creator granted BigQuery Data Owner on the new dataset.

    If you would like to avoid using the BigQuery User role, the minimum required permissions are:

    -   On the Project level:
    -   `bigquery.datasets.create`
    -   `bigquery.datasets.get`
    -   `bigquery.jobs.create`

    These minimum permissions assume that the dataset has not been created beforehand.

    If you create the dataset beforehand:

    Load data into a Dataset that already exists. That is, by default, a new dataset (with a name you provide) will be created in the BigQuery project. If, instead, you create the dataset ahead of time, you will need to grant the BigQuery Data Owner role to this Service Account at the dataset level.

    In BigQuery, click on the existing dataset. In the dataset tab, click Sharing, then Permissions. Click Add Principals. Enter the Service Account name, and add the Role: BigQuery Data Owner.

    Specifically, the minimum permissions required can be granted to the principal and applied to the Dataset:

    -   `bigquery.tables.create`
    -   `bigquery.tables.delete`
    -   `bigquery.tables.get`
    -   `bigquery.tables.getData`
    -   `bigquery.tables.list`
    -   `bigquery.tables.update`
    -   `bigquery.tables.updateData`
    -   `bigquery.routines.get`
    -   `bigquery.routines.list`

    On the Project level, you will still need `bigquery.jobs.create`, but you will not need `bigquery.datasets.create` or `bigquery.datasets.get`.

7.  Back in the Service accounts menu, click the Actions dropdown next to the newly created service account and click Manage keys.
