---
title: "Set up AWS S3 Delta Lake"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-aws-s3-delta-lake"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:35.404Z"
---

# Set up AWS S3 Delta Lake

Detailed instructions for setting up AWS S3 Delta Lake

## Prerequisites

By default, S3 authentication uses role-based access. You will need the trust policy prepopulated with the data syncing service's identifier to grant access. It should look similar to the following JSON object with a proper service account identifier:

![AWS_S3_Delta_Lake_prerequisites](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6fa320af-54d8-4ce1-8f0a-89ac501e1f84?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZmYTMyMGFmLTU0ZDgtNGNlMS04ZjBhLTg5YWM1MDFlMWY4NCIsImV4cCI6MTc3MTU1ODQwOCwianRpIjoiOTRmMzdmNzFjNGIxNGFmZGIzMTQxZDgxOWQ5M2FlMjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.zh6M1Da7yW6GiZcAc1E-WHb2yUm_5zSAuqZ34DTMGas)

Setting up AWS S3 Delta Lake includes the following steps:

1.  [Set up destination S3 bucket](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-aws-s3-delta-lake/set-up-destination-s3-bucket)

2.  [Create policy and IAM role](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-aws-s3-delta-lake/create-policy-and-iam-role)

    -   [Alternative authentication method](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-aws-s3-delta-lake/create-policy-and-iam-role/alternative-authentication-method)

3.  [Add your destination](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/add-destination-for-delta-lake)
