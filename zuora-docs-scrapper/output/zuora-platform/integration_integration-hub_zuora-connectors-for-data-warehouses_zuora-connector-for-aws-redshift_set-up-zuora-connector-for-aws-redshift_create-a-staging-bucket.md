---
title: "Create a staging bucket"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/create-a-staging-bucket"
product: "zuora-platform"
scraped_at: "2026-02-19T03:32:15.738Z"
---

# Create a staging bucket

Learn how to create a staging bucket in Zuora Connector for AWS Redshift

Ensure you have [whitelisted the connection](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/whitelist-connection) before creating a staging bucket.

1.  Navigate to the S3 service page.
2.  Click Create bucket.
3.  Enter a Bucket name and modify any of the default settings as desired.

    Note:

    Object Ownership can be set to "ACLs disabled" and Block Public Access settings for this bucket can be set to "Block all public access" as recommended by AWS. Make note of the Bucket name and AWS Region.

4.  Click Create bucket.

Next, create a policy.
