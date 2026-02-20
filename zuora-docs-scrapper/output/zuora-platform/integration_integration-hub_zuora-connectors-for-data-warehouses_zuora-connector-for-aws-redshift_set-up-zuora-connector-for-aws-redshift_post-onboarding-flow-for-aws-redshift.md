---
title: "Post-onboarding flow for AWS Redshift"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/post-onboarding-flow-for-aws-redshift"
product: "zuora-platform"
scraped_at: "2026-02-20T21:12:47.953Z"
---

# Post-onboarding flow for AWS Redshift

Know about the post-onboarding flow for Zuora Connector for AWS Redshift

When onboarding is complete, the connector status will change to Active.

You will start seeing sync details in the Status tab after the first data transfer. The onboarding time depends on the total data volume in your tenant. The first transfer may take longer, as it includes a historical sync of all selected objects.

You can monitor progress in the UI as the status moves from In Progress to Active once provisioning is complete.

## Network access and whitelisting

Zuora connectors require the destination to be accessible over the public internet. Whitelist the appropriate Zuora outbound IP addresses in your AWS Redshift environment based on your tenant’s environment.

For the list of IPs to whitelist, refer to [Get started with Zuora Connector for AWS Redshift](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/get-started-with-zuora-connector-for-aws-redshift).

## Integration Hub access

You must have access to the [Integration Hub UI](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub) to complete the setup.

-   To link your Zuora and Connect accounts, refer to [Link your connect account to your Zuora account](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub/link-your-connect-account-to-your-zuora-account).

-   If you do not have access, raise a support ticket and loop in your Zuora representative to request access.


## Permissions checklist

-   Redshift database user exists and has `CREATE` and `TEMPORARY` on the database. If you pre-created the schema, ensure `GRANT ALL ON SCHEMA <schema> TO <username>`.
-   IAM role trust policy allows data syncing service's to assume the role.
-   IAM policy includes:
    -   `redshift:GetClusterCredentials` on your target cluster (db user and db name resources).
    -   S3 `ListBucket` on `arn:aws:s3:::BUCKET_NAME`.
    -   S3 `GetObject`, `PutObject`, `DeleteObject` on `arn:aws:s3:::BUCKET_NAME/*`.
-   Network allowlisting (if enforced) permits egress IP/CIDR for the Redshift port (typically 5439).

## Key considerations

-   To secure the Redshift connection, we use role-based authentication with your AWS IAM Role. The data syncing service's assumes your role to obtain short-lived database credentials and network access can be constrained by allowlisting the static egress IPs noted above.

-   An S3 bucket is required. Redshift's high-throughput path loads data from S3 using `COPY`. We stage files briefly in your bucket to maximize throughput and reliability. Files are cleaned up after load.

-   The `oaud` vs `sub` IDs are identity claims used in the IAM trust policy when federating from GCP to AWS. `sub` uniquely identifies our Google principal in federation. `oaud` is an additional claim used to bind role assumption to your organization.

-   The common causes of authentication errors with Redshift are:

    -   Missing or incorrect permission on `redshift:GetClusterCredentials` (ensure it targets the correct cluster ARN and region/account).
    -   Trust policy mismatch (the data syncing service's principal isn't permitted to assume your role).
    -   Using a Serverless workgroup permission or `redshift-serverless:GetCredentials` instead of provisioned cluster + `redshift:GetClusterCredentials`.
    -   Propagation delay: IAM changes can take a few minutes to apply. Retry after 5-10 minutes.
-   You do not have to pre-create the schema. The schema provided in the destination configuration is created automatically on first sync. If you pre-create it, grant `ALL` on the schema to the writer user and you may remove the database-level `CREATE` permission (retain `TEMPORARY`).
