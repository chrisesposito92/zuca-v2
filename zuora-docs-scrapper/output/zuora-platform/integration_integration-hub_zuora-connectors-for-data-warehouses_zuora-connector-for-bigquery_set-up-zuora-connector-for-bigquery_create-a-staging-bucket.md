---
title: "Create a staging bucket"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-bigquery/set-up-zuora-connector-for-bigquery/create-a-staging-bucket"
product: "zuora-platform"
scraped_at: "2025-12-24T18:30:49.564Z"
---

# Create a staging bucket

Create a staging bucket

1.  Log into the Google Cloud Console and navigate to Cloud Storage. Click Create to create a new bucket.

    ![gcp-create-gcs-bucket-7.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/405d3161-fbec-4f2a-99be-5990153eb364?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQwNWQzMTYxLWZiZWMtNGYyYS05OWJlLTU5OTAxNTNlYjM2NCIsImV4cCI6MTc2NjY4NzQ0NywianRpIjoiZDYzMGZlODk1N2YwNDk2YjlhZGU4YTlkM2E0YzdiZjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.9OfmNz2ZBxBHUxdUpbGoQzzKQ_7CePxXL6WJpksIziI)

2.  Choose a name for the bucket, click Continue, and select a location for the staging bucket. Make a note of both the name and the location (region). Click Add key > Create new key.

    Note:

    Choose a `location` (region)

    The location you choose for your staging bucket must match the location of your destination dataset in BigQuery. When creating your bucket, be sure to choose a region in which BigQuery is supported. For more information, see [BigQuery Locations](https://cloud.google.com/bigquery/docs/locations).

    -   If the dataset does not exist yet, the dataset will be created for you in the same region where you created your bucket.
    -   If the dataset does exist, the dataset region must match the location you choose for your bucket.

3.  Click continue and select the following options according to your preferences. Once you have filled in the options, click Create.
4.  On the Bucket details page, click the Permissions tab > Add.

    ![gcp-add-permission-to-bucket-8.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e0c4fa0e-a5c6-4a90-a866-817f3f2f4045?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUwYzRmYTBlLWE1YzYtNGE5MC1hODY2LTgxN2YzZjJmNDA0NSIsImV4cCI6MTc2NjY4NzQ0NywianRpIjoiNjhhMjA5NjY3YWZmNDdmOWFlYTVjODA5MzMxYzdkZmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Ya48eZWt6oweuCLtvhIIeWLwU5bxR0zgCDBrKrTAeOM)

5.  In the New principles dropdown, add the Service Account created in [Create a service account in BigQuery project](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-bigquery/set-up-zuora-connector-for-bigquery/create-a-service-account-in-bigquery-project), select the Storage Admin role, and click Save.

    ![gcp-storage-admin-9.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cbcdec3a-aac3-402e-aee0-5316369db9e9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNiY2RlYzNhLWFhYzMtNDAyZS1hZWUwLTUzMTYzNjlkYjllOSIsImV4cCI6MTc2NjY4NzQ0NywianRpIjoiODk5MzJkYjFmNDc5NDkwYzkzZDllMjAyNDlhYjNiYjYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.dl9H8rXZ7b57rpq26SPasJGJIOTsI9ZmYz2lQn7n1Hw)
