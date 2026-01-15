---
title: "Overview of Zuora Connector for AWS RDS Postgres"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-rds-postgres/overview-of-zuora-connector-for-aws-rds-postgres"
product: "zuora-platform"
scraped_at: "2026-01-15T22:01:18.646Z"
---

# Overview of Zuora Connector for AWS RDS Postgres

Access and analyze Zuora data directly in your AWS RDS Postgres environment

Note:

PostgreSQL Version Support Disclaimer

Effective September 2025:

-   Standard support for PostgreSQL 12 is ending.

-   Minimum supported version: PostgreSQL 13 (Aurora 13).

-   The PostgreSQL connector will continue to run on 12, but treated as best-effort only. New features and enhancements are not guaranteed to work. Issues on 12 will receive best-effort support, but fixes may not include backward compatibility.


Related Cloud EOL Notices:

PostgreSQL: [PostgreSQL 12 EOL](https://www.postgresql.org/support/versioning/), [AWS RDS Postgres version policy](https://docs.aws.amazon.com/AmazonRDS/latest/PostgreSQLReleaseNotes/postgresql-release-calendar.html), [Azure PostgreSQL version policy](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-version-policy), [GCP Cloud SQL supported versions](https://cloud.google.com/sql/docs/postgres/db-versions)

Enable your organization to access Zuora data directly through AWS RDS Postgres. This integration simplifies the setup process, eliminating common technical hurdles related to data extracts, integrations, and schema updates.

Once configured, your data is automatically refreshed daily within AWS RDS Postgres, granting your teams immediate access to extensive subscription operational and analytical data from Zuora Billing. This seamless access enables your teams to swiftly make informed decisions based on valuable insights.

Note:

The Zuora Connector for Data Warehouses feature is in the Early Adopter phase. This is a paid add-on. If you are interested in joining our early adopter program, please reach out to your Zuora Representative for further details.

## How the Zuora Connector for AWS RDS Postgres works

The Zuora Connector for AWS RDS Postgres facilitates a direct connection between your Zuora account and your AWS RDS Postgres environment. This connection is established through a one-time setup process during which you configure your AWS RDS Postgres credentials.

Once configured, the connector automates the synchronization of your Zuora data into your specified AWS RDS Postgres environment on a daily basis. Tailored to seamlessly integrate with AWS RDS Postgres, this connector enhances your data storage and analytics capabilities within your infrastructure.
