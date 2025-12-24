---
title: "Create writer user"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-sql-server/set-up-zuora-connector-for-sql-server/create-writer-user"
product: "zuora-platform"
scraped_at: "2025-12-24T18:33:08.628Z"
---

# Create writer user

Create writer user

Create a database user to perform the writing of the source data.

1.  Open a connection to your SQL Server database.
2.  Create a user for the data transfer by executing the following SQL command. This should be the target destination database.

    USE <database>; CREATE LOGIN <username> WITH PASSWORD = '<password>'; CREATE USER <username> FOR LOGIN <username>;

3.  Grant user `CREATE TABLE` privileges on the database.

    Note:

    Understanding the CREATE TABLE permission in SQL Server

    The CREATE TABLE permission is a database-level permission that allows for the creation of new tables in a given database. The user must also have the ALTER permission granted on a given schema in order to create new tables in that schema (see the next step for details).

    `GRANT``CREATE``TABLE``TO``<username>;`

4.  Grant user `CREATE SCHEMA` privileges on the database (if the schema does not exist).
    `GRANT``CREATE``SCHEMA``TO``<username>;`

    Note:

    If the SCHEMA already exists

    By default, the service creates a new schema based on the destination configuration. If you prefer to create the schema yourself before connecting the destination, you may must ensure that the writer user has the proper permissions on the schema, using GRANT SELECT, INSERT, UPDATE, DELETE, ALTER ON SCHEMA :: TO ;.

    If the SCHEMA already exists, the user does not need the GRANT CREATE SCHEMA permission.
