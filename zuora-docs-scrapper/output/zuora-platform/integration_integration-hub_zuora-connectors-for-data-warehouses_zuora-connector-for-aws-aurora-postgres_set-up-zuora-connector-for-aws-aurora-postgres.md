---
title: "Set up Zuora Connector for AWS Aurora Postgres"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-aurora-postgres/set-up-zuora-connector-for-aws-aurora-postgres"
product: "zuora-platform"
scraped_at: "2025-12-24T08:40:07.489Z"
---

# Set up Zuora Connector for AWS Aurora Postgres

Detailed instructions for setting up the Zuora Connector for AWS Aurora Postgres

Note:

PostgreSQL Version Support Disclaimer

Effective September 2025:

-   Standard support for PostgreSQL 12 is ending.

-   Minimum supported version: PostgreSQL 13 (Aurora 13).

-   The PostgreSQL connector will continue to run on 12, but treated as best-effort only. New features and enhancements are not guaranteed to work. Issues on 12 will receive best-effort support, but fixes may not include backward compatibility.


Related Cloud EOL Notices:

PostgreSQL: [PostgreSQL 12 EOL](https://www.postgresql.org/support/versioning/), [AWS RDS Postgres version policy](https://docs.aws.amazon.com/AmazonRDS/latest/PostgreSQLReleaseNotes/postgresql-release-calendar.html), [Azure PostgreSQL version policy](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-version-policy), [GCP Cloud SQL supported versions](https://cloud.google.com/sql/docs/postgres/db-versions)

Use this guide to configure your AWS Aurora Postgres destination within the Zuora Connector. It includes steps for setting up AWS Aurora Postgres database credentials, managing permissions, configuring access to the database, and other necessary configurations to facilitate a smooth data transfer process from Zuora to AWS Aurora Postgres:

1.  [Allow access](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-aurora-postgres/set-up-zuora-connector-for-aws-aurora-postgres/allow-access)

2.  [Create writer user](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-aurora-postgres/set-up-zuora-connector-for-aws-aurora-postgres/create-writer-user)

3.  [Add your destination](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-aurora-postgres/set-up-zuora-connector-for-aws-aurora-postgres/add-your-destination)

4.  [Verification and data transfer](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-aurora-postgres/set-up-zuora-connector-for-aws-aurora-postgres/verification-and-data-transfer)
