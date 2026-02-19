---
title: "Set up Google Cloud Delta Lake"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-google-cloud-delta-lake"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:35.002Z"
---

# Set up Google Cloud Delta Lake

Detailed instructions for setting up Google Cloud Delta Lake

## Prerequisites

By default, GCS authentication uses role-based access. You will need the data syncing service's service account name available to grant access. It should look like `some-name@some-project.iam.gserviceaccount.com`.

Setting up Google Cloud Delta Lake includes the following steps:

1.  [Set up destination S3 bucket](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-aws-s3-delta-lake/set-up-destination-s3-bucket)

2.  [Create policy and IAM role](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-aws-s3-delta-lake/create-policy-and-iam-role)

    -   [Alternative authentication method](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-aws-s3-delta-lake/create-policy-and-iam-role/alternative-authentication-method)

3.  [Add your destination](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/add-destination-for-delta-lake)
