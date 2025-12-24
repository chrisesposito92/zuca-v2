---
title: "Set up destination S3 bucket"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-s3/set-up-zuora-connector-for-aws-s3/set-up-destination-s3-bucket"
product: "zuora-platform"
scraped_at: "2025-12-24T18:30:16.861Z"
---

# Set up destination S3 bucket

Create bucket

By default, S3 authentication uses role-based access. You will need the trust policy prepopulated with the data-syncing service's identifier to grant access. It should look similar to the following JSON object with a proper service account identifier:

{ "Version": "2012-10-17", "Statement": \[ { "Effect": "Allow", "Principal": { "AWS": "arn:aws:iam::123456789012:sample\_role" }, "Action": "sts:AssumeRole", } \] }

1.  Navigate to the S3 service page.
2.  Click Create bucket.
3.  Enter a bucket name and modify any of the default settings as desired.
4.  Click Create bucket.
