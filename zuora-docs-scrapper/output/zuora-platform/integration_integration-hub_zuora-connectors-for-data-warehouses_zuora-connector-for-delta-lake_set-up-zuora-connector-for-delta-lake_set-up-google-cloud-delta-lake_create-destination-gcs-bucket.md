---
title: "Create destination GCS bucket"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-google-cloud-delta-lake/create-destination-gcs-bucket"
product: "zuora-platform"
scraped_at: "2026-01-15T22:01:36.384Z"
---

# Create destination GCS bucket

Know how to create destination GCS bucket

1.  Navigate to the Cloud Storage page.
2.  Click Create.
3.  Enter a bucket name, choose a region.

    Note:

    At the Choose how to control access to objects step, we recommend selecting Enforce public access prevention on this bucket.

4.  After choosing your preferences for the remaining steps, click Create.
5.  On the Bucket details page for the bucket you created, select the Permissions tab, and click Grant access.
6.  Grant access to the principal (Service Account) you created in Step 1 (this is the service account you created, not the service account from the prerequisite), and assign the Roles:

    -   Storage Legacy Bucket Writer

    -   Storage Legacy Bucket Reader

    -   Storage Legacy Object Reader


7.  Click Save.

    ![grant_access_to_destination_bucket](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e1fb3a41-b258-436e-93a8-28d3b29e9ff2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUxZmIzYTQxLWIyNTgtNDM2ZS05M2E4LTI4ZDNiMjllOWZmMiIsImV4cCI6MTc2ODYwMDg5MCwianRpIjoiZWY2Y2ZkZDg5Njg4NGY5ODk0ZWM4YjBhNjkxYmExNGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9.9-00czUfeYy1NBnoGbm94YLifOxf4apCYlf9AhPWo2o)
