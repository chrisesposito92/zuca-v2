---
title: "Create writer user"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-generic-mysql/set-up-zuora-connector-for-generic-mysql/create-writer-user"
product: "zuora-platform"
scraped_at: "2025-12-24T18:32:05.152Z"
---

# Create writer user

Create writer user

Create a rule in a security group or firewall settings to:

1.  Open a connection to your MySQL database.
2.  Create a user for the data transfer by executing the following SQL command.

    CREATE USER <username>@'%' IDENTIFIED BY '<some-password>';

3.  Grant user required privileges on the database.

    GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, ALTER, CREATE TEMPORARY TABLES, CREATE VIEW ON \*.\* TO <username>@'%';

    Note:

    If the schema/database already exists

    By default, the service creates a new schema (in MySQL, `schema` is synonomous with database). If you prefer to create the schema yourself before connecting the destination, you must ensure that the writer user has the proper permissions on the schema, using `GRANT ALL PRIVILEGES ON <database_name>.* TO <username>@'%';`
