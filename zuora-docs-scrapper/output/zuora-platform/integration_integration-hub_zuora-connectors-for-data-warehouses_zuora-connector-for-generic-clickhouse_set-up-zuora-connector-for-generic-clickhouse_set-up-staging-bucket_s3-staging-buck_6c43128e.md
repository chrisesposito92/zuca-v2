---
title: "S3 staging bucket configuration for Zuora Connector for Generic ClickHouse"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-clickhouse/set-up-zuora-connector-for-generic-clickhouse/set-up-staging-bucket/s3-staging-bucket-configuration-for-zuora-connector-for-generic-clickhouse"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:50.137Z"
---

# S3 staging bucket configuration for Zuora Connector for Generic ClickHouse

S3 staging bucket configuration

By default, S3 authentication uses role-based access. You will need the trust policy pre-populated with the data-syncing service's identifier to grant access. It should look similar to the following JSON object with a proper service account identifier:

{ "Version": "2012-10-17", "Statement": \[ { "Effect": "Allow", "Action": \[ "sts:AssumeRoleWithWebIdentity" \], "Principal": { "Federated": "accounts.google.com" }, "Condition": { "StringEquals": { "accounts.google.com:sub": "<some\_service\_account\_identifier>" } } } \] }

Some sources or destinations without built-in staging resources require a staging bucket to efficiently transfer or ingest data.

Create staging bucket

1.  Navigate to the S3 service page.
2.  Click Create bucket.
3.  Enter a Bucket name and modify any of the default settings as desired. Object Ownership can be set to ACLs disabled and Block Public Access settings for this bucket can be set to Block all public access as recommended by AWS. Make a note of the Bucket name and AWS Region.
4.  Click Create bucket.

Create policy

5.  Navigate to the IAM service page \> click on the Policies navigation tab \> click Create policy.
6.  Click the JSON tab, and paste the following policy. Make sure to replace BUCKET\_NAME with the name of the bucket chosen above. The first policy applies to BUCKET\_NAME whereas the second policy applies only to the bucket's contents — BUCKET\_NAME/\* — an important distinction.

    { "Version": "2012-10-17", "Statement": \[ { "Effect": "Allow", "Action": "s3:ListBucket", "Resource": "arn:aws:s3:::BUCKET\_NAME" }, { "Effect": "Allow", "Action": \[ "s3:PutObject", "s3:GetObject", "s3:DeleteObject" \], "Resource": "arn:aws:s3:::BUCKET\_NAME/\*" } \] }

7.  Click through to the Review step, choose a name for the policy, for example, transfer-service-policy (this will be referenced in the next step), add a description, and click Create policy.

Create role

8.  Navigate to the IAM service page.
9.  Navigate to the Roles navigation tab, and click Create role.
10.  Select Custom trust policy and paste the provided trust policy to allow AssumeRole access to the new role. Click Next.
11.  Add the permissions policy created above, and click Next.
12.  Enter a Role name, for example, transfer-role, and click Create role.
13.  Once successfully created, search for the created role in the Roles list, click the role name, and make a note of the ARN value.

     With this, your configuration is complete. Use this configured S3 staging bucket during the connection of your preferred data source or destination.
