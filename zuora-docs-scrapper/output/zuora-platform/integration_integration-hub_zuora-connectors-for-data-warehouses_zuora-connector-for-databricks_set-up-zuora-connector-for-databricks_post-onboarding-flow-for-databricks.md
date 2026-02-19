---
title: "Post-onboarding flow for Databricks"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/set-up-zuora-connector-for-databricks/post-onboarding-flow-for-databricks"
product: "zuora-platform"
scraped_at: "2026-02-19T03:33:11.084Z"
---

# Post-onboarding flow for Databricks

Know about the post-onboarding flow for Databricks

When onboarding is complete, the connector status will change to Active.

You will start seeing sync details in the Status tab after the first data transfer. The onboarding time depends on the total data volume in your tenant. The first transfer may take longer, as it includes a historical sync of all selected objects.

You can monitor the progress in the UI as the status moves from In Progress to Active when provisioning is complete.

## Network access and whitelisting

Zuora connectors require the destination to be accessible over the public internet. Whitelist the appropriate Zuora outbound IP addresses in your Databricks environment based on your tenant’s environment.

For the list of IPs to whitelist, refer to [Get started with Zuora connector for Databricks](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-databricks/get-started-with-zuora-connector-for-databricks).

## Integration Hub access

You must have access to the [Integration Hub UI](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub) to complete the setup.

-   To link your Zuora and Connect accounts, refer to [Link your connect account to your Zuora account](https://docs.zuora.com/en/zuora-platform/integration/integration-hub/get-started-with-integration-hub/link-your-connect-account-to-your-zuora-account).

-   If you do not have access, raise a support ticket and loop in your Zuora representative to request access.


## Permissions checklist

-   Workspace: Service principal or user has permission to use the target SQL warehouse ("Can use").
-   Unity Catalog: `USE CATALOG` on the target catalog; appropriate privileges on the target schema (e.g., `USE SCHEMA`, `CREATE TABLE`, and read/write volume privileges as needed), or `ALL PRIVILEGES` on the schema.
-   If using Hive Metastore (instead of UC): select `hive` metastore explicitly and configure required object storage staging (bucket and credentials), with write/delete permissions.
-   Network: If IP Access Lists are enabled, the static egress IP(s) are allowlisted.

## Key considerations

-   Auth with a service principal is the supported authentication method that is recommended for securely connecting to Databricks.

    OAuth issues short-lived tokens, scopes access via the principal's entitlements and UC grants, and supports centralized rotation and revocation. Personal Access Tokens (PATs) are supported where policy requires, but they are long-lived bearer tokens and typically inherit broader, user-level permissions.

-   The required permissions

    The connection identity needs `Can use` on the SQL warehouse, `USE CATALOG` on the target catalog, and schema-level privileges to create/manage tables (or `ALL PRIVILEGES` on the schema). Missing `USE CATALOG` is a frequent cause of test-connection failures.

-   The required credentials and connection details

    Provide Server hostname, HTTP path, Catalog, Schema, and an OAuth client (service principal) or PAT with warehouse access. Collect host/path from the SQL Warehouses console.

-   Unity Catalog and Hive Metastore support

    Unity Catalog is supported by default. For Hive Metastore, explicitly select `hive` in configuration and supply an S3 staging bucket and credentials. Using the wrong metastore type can cause discovery or permission issues.
