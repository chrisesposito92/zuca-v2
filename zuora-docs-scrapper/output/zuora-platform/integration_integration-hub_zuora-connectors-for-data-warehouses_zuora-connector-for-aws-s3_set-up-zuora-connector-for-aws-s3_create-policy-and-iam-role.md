---
title: "Create policy and IAM role"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-s3/set-up-zuora-connector-for-aws-s3/create-policy-and-iam-role"
product: "zuora-platform"
scraped_at: "2025-12-24T18:30:19.664Z"
---

# Create policy and IAM role

Create policy and role

Create policy

1.  Navigate to the IAM service page.
2.  Navigate to the Policies navigation tab, and click Create policy.
3.  Click the JSON tab, and paste the following policy, being sure to replace `BUCKET_NAME` with the name of the bucket chosen in [Step 1](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-s3/set-up-zuora-connector-for-aws-s3/set-up-destination-s3-bucket).

    { "Version": "2012-10-17", "Statement": \[ { "Effect": "Allow", "Action": \["s3:PutObject", "s3:DeleteObject"\], "Resource": "arn:aws:s3:::BUCKET\_NAME/\*" } \] }

4.  Click Next: Tags > Next: Review.
5.  Name the policy, add a description, and click Create policy.

    Note:

    Understanding the s3:DeleteObject requirement

    By default, a connection test is performed against the destination during initial configuration and `s3:DeleteObject` is required to clean up test artifacts. Once the test has been performed successfully and the destination added, this action can be safely removed, as S3 destinations are append-only by default


Create a role

6.  In the IAM service page, navigate to the Roles navigation tab, and click Create role.
7.  Select Custom trust policy and paste the provided trust policy to allow AssumeRole access to the new role > click Next.
8.  Add the permissions policy created above, and click Next.
9.  Enter a Role name, for example, `transfer-role,` and click Create role.
10.  Once successfully created, search for the created role in the Roles list, click the role name, and make a note of the ARN value.
