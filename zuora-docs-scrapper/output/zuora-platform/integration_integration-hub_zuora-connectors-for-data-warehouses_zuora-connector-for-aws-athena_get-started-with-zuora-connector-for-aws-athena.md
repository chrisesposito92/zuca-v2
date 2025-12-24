---
title: "Get started with Zuora Connector for AWS Athena"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-athena/get-started-with-zuora-connector-for-aws-athena"
product: "zuora-platform"
scraped_at: "2025-12-24T08:39:44.714Z"
---

# Get started with Zuora Connector for AWS Athena

The prerequisites to get started with Zuora Connector for AWS Athena

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

To initiate the setup process for the Zuora Connector for AWS Athena, ensure you have met the following prerequisites:

-   Zuora Tenant ID: This is your unique identifier within Zuora. For more information on Tenant ID, see [Managing your tenant profile](/zuora-platform/system-management/administrator-settings/manage-your-tenant-profile).

-   AWS S3 Bucket: Your AWS S3 bucket should be pre-configured and ready for the connection. Ensure that you have the necessary permissions to manage and access the bucket within your AWS environment.

-   AWS IAM Credentials: You will need the access key ID and secret access key for an AWS IAM user with appropriate permissions to access your AWS S3 bucket. Ensure the IAM user has roles that permit it to manage S3 buckets and objects within AWS.


Once you have the prerequisites ready, you can proceed with the configuration steps to establish the link between your Zuora account and your AWS S3 bucket.

This enables streamlined data synchronization and enhances your data storage and analytics capabilities within AWS.

For the setup process of AWS Athena, see [Set up Zuora Connector for AWS Athena](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-athena/set-up-zuora-connector-for-aws-athena).
