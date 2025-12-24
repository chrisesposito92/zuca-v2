---
title: "Create reader user"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-clickhouse/set-up-zuora-connector-for-generic-clickhouse/create-reader-user"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:41.875Z"
---

# Create reader user

Create reader user

Create a database user to perform the reading of the source data.

1.  Open a connection to your ClickHouse database.
2.  Create a user for the data transfer by executing the following SQL command.

    CREATE USER <username>@'%' IDENTIFIED BY '<some-password>';

3.  Grant user required privileges on the database.

    GRANT SELECT ON <{database.table|database.\*|\*.\*}> TO <username>@'%';

    GRANT CREATE TEMPORARY TABLE, S3 on \*.\* TO <username>@'%';

    Note:

    The `CREATE TEMPORARY TABLE` and S3 permissions:

    The `CREATE TEMPORARY TABLE` and S3 permissions are required to efficiently transfer data from ClickHouse. Under the hood, these permissions are used to stage data in a temporary table and export compressed data into object storage for transferring. By definition, the temporary table will not exist outside of the session.
