---
title: "Create a destination bucket"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-athena/set-up-zuora-connector-for-aws-athena/create-a-destination-bucket"
product: "zuora-platform"
scraped_at: "2025-12-24T08:39:49.699Z"
---

# Create a destination bucket

Create Athena target bucket

By default, Athena authentication uses role-based access. You must have the trust policy pre-populated with the data-syncing service's identifier to grant access. It should look similar to the following JSON object with a proper service account identifier:

{ "Version": "2012-10-17", "Statement": \[ { "Effect": "Allow", "Principal" : { "AWS": "arn:aws:iam:123456789012:sample\_role" }, "Action": "sts:AssumeRole", } \] }

Follow these steps to create a bucket to be used for staging data before transferring to a destination.

1.  Navigate to the S3 service page.
2.  Click Create bucket.
3.  Enter a Bucket name, select an AWS Region, and modify any of the default settings as desired.

    Note:

    Object Ownership can be set to "ACLs disabled" and Block Public Access settings for this bucket can be set to "Block all public access" as recommended by AWS. Make note of the Bucket name and AWS Region.

4.  Click Create Bucket.
