---
title: "Get started with Zuora connector for AWS S3"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-s3/get-started-with-zuora-connector-for-aws-s3"
product: "zuora-platform"
scraped_at: "2025-12-24T18:30:12.137Z"
---

# Get started with Zuora connector for AWS S3

Prerequisites to begin the setup process

## Zuora connectors – Outbound IP whitelisting requirement

Zuora connectors require the destination to be accessible via the public internet. Please ensure that the following Zuora outbound IPs are whitelisted at your data destination:

-   Production tenants

    -   US Cloud1 Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

    -   US Cloud2 Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

    -   EU Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

-   API Sandbox & Central Sandbox Tenants

    -   US Cloud1 Environment: [Zuora Sandbox IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

    -   US Cloud2 Environment: [Zuora Sandbox IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)

    -   EU Environment: [Zuora Production IPs](/basics/environments/zuora-data-centers/inbound-and-outbound-ip-addresses/outbound-ip-addresses-from-zuora)


If you are not sure whether to use US Cloud1 or Cloud2, see[Zuora Data Centers](/basics/environments/zuora-data-centers).

## Prerequisites

To begin the setup process for the Zuora Connector for AWS S3, ensure you have the following prerequisites:

-   Zuora Tenant ID: This is your unique identifier within Zuora. For more information on Tenant ID, see [Managing your tenant profile](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile).

-   AWS S3 Bucket: Your AWS S3 bucket should be pre-configured and ready for the connection. Ensure that you have the necessary permissions to manage and access the bucket within your AWS environment.

-   AWS IAM Credentials: You need the access key ID and secret access key for an AWS IAM user with appropriate permissions to access your AWS S3 bucket. Ensure the IAM user has roles that permit them to manage S3 buckets and objects within AWS.


Once these prerequisites are in place, you can start with the configuration steps to establish the link between your Zuora account and your AWS S3 bucket.

For the setup process of AWS S3, see [Set up Zuora Connector for AWS S3](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-s3/set-up-zuora-connector-for-aws-s3).
