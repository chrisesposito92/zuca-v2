---
title: "Create policy and IAM role"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-aws-s3-delta-lake/create-policy-and-iam-role"
product: "zuora-platform"
scraped_at: "2026-01-15T22:01:35.906Z"
---

# Create policy and IAM role

Learn how to create policy and IAM role

Create policy

1.  Navigate to the IAM service page.
2.  Navigate to the Policies navigation tab, and click Create policy.
3.  Click the JSON tab, and paste the following policy, being sure to replace `BUCKET_NAME` with the name of the bucket chosen in [Step 1](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-delta-lake/set-up-zuora-connector-for-delta-lake/set-up-aws-s3-delta-lake/set-up-destination-s3-bucket).

    ![Create policy for Delta Lake](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b93c4010-4789-481b-9610-69e98a22a4a6?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI5M2M0MDEwLTQ3ODktNDgxYi05NjEwLTY5ZTk4YTIyYTRhNiIsImV4cCI6MTc2ODYwMDg4OSwianRpIjoiMWQyOGUwNjQ4ZjNjNDNkNDlhYzA3ZWMyYTVhMmUwYjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiI4RWFZRjVFNjZLaVRYdnNmS3N5NSJ9._nT3t4QSO3IhQin_iZXTECRhridcK5dtN_f9P1JaUYk)

4.  Click Next: Tags, click Next: Review.
5.  Name the policy, add a description, and click Create policy.

Create role

6.  Navigate to the IAM service page.
7.  Navigate to the Roles navigation tab, and click Create role.
8.  Select Custom trust policy and paste the provided trust policy to allow AssumeRole access to the new role. Click Next.
9.  Add the permissions policy created above, and click Next.
10.  Enter a Role name, for example, `transfer-role`, and click Create role.
11.  Once successfully created, search for the created role in the Roles list, click the role name, and make a note of the ARN value.
