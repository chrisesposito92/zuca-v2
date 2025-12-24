---
title: "Overview of Zuora Connector for  GCP Postgres"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-gcp-postgres/overview-of-zuora-connector-for-gcp-postgres"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:16.937Z"
---

# Overview of Zuora Connector for GCP Postgres

Access Zuora data directly in GCP Postgres with daily refresh for seamless, insight-driven decisions

Note:

PostgreSQL Version Support Disclaimer

Effective September 2025:

-   Standard support for PostgreSQL 12 is ending.

-   Minimum supported version: PostgreSQL 13 (Aurora 13).

-   The PostgreSQL connector will continue to run on 12, but treated as best-effort only. New features and enhancements are not guaranteed to work. Issues on 12 will receive best-effort support, but fixes may not include backward compatibility.


Related Cloud EOL Notices:

PostgreSQL: [PostgreSQL 12 EOL](https://www.postgresql.org/support/versioning/), [AWS RDS Postgres version policy](https://docs.aws.amazon.com/AmazonRDS/latest/PostgreSQLReleaseNotes/postgresql-release-calendar.html), [Azure PostgreSQL version policy](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-version-policy), [GCP Cloud SQL supported versions](https://cloud.google.com/sql/docs/postgres/db-versions)

Enable your organization to access Zuora data directly through GCP Postgres. This integration simplifies the setup process, eliminating common technical hurdles related to data extracts, integrations, and schema updates.

Once configured, your data is automatically refreshed daily within GCP Postgres, granting your teams immediate access to extensive subscription operational and analytical data from Zuora Billing. This seamless access enables your teams to swiftly make informed decisions based on valuable insights.

Note:

## How the Zuora Connector for GCP Postgres works

The Zuora Connector for GCP Postgres facilitates a direct connection between your Zuora account and your GCP Postgres environment. This connection is established through a one-time setup process during which you configure your GCP Postgres credentials.

Once configured, the connector automates the synchronization of your Zuora data into your specified GCP Postgres environment on a daily basis. Tailored to seamlessly integrate with GCP Postgres, this connector enhances your data storage and analytics capabilities within your infrastructure.
