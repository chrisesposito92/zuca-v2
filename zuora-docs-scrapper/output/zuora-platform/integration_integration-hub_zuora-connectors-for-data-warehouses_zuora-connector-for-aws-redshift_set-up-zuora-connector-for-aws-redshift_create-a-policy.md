---
title: "Create a policy"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/create-a-policy"
product: "zuora-platform"
scraped_at: "2026-02-19T03:32:02.783Z"
---

# Create a policy

Learn how to create a policy in Zuora Connector for AWS Redshift

Ensure you have [created a staging bucket](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/create-a-staging-bucket) before creating a policy.

1.  Navigate to the IAM service page.
2.  Click on the Policies navigation tab.
3.  Click Create policy.

    Click the JSON tab, and paste the following policy, being sure to replace `BUCKET_NAME` with the name of the bucket entered in [Create a staging bucket](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/create-a-staging-bucket), and `REGION_NAME`, `ACCOUNT_ID`, `CLUSTER_NAME`, `USERNAME`, and `DATABASE_NAME` with the proper Redshift values.

    Note: The first bucket permission in the list applies to `BUCKET_NAME` whereas the second permission applies only to the bucket's contents — `BUCKET_NAME/*` — an important distinction.
    { "Version": "2012-10-17", "Statement": \[ { "Effect": "Allow", "Action": "s3:ListBucket", "Resource": "arn:aws:s3:::BUCKET\_NAME" }, { "Effect": "Allow", "Action": \[ "s3:PutObject", "s3:GetObject", "s3:DeleteObject" \], "Resource": "arn:aws:s3:::BUCKET\_NAME/\*" }, { "Effect": "Allow", "Action": "redshift:GetClusterCredentials", "Resource": \[ "arn:aws:redshift:REGION\_NAME:ACCOUNT\_ID:dbuser:CLUSTER\_NAME/USERNAME", "arn:aws:redshift:REGION\_NAME:ACCOUNT\_ID:dbname:CLUSTER\_NAME/DATABASE\_NAME" \] } \] }

    Credential character limitations: For user credentials containing special characters, please avoid using the following characters: `@`, `[`, `]`, `/`, `?`, `#`, `"`, `\\`, `+`, space, `&`, `:` as these characters can break connection string parsing.

4.  Click through to the Review step.
5.  Choose a name for the policy, for example, `transfer-service-policy` (this will be referenced in [Create a role](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/create-a-role)).
6.  Add a description.
7.  Click Create policy.

Next, [create a role](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/create-a-role).
