---
title: "Create writer user"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-gcp-postgres/set-up-zuora-connector-for-gcp-postgres/create-writer-user"
product: "zuora-platform"
scraped_at: "2025-12-24T18:31:25.911Z"
---

# Create writer user

Create writer user

Create a database user to perform the writing of the source data.

1.  Open a connection to your PostgreSQL database (locally or using the Google Cloud Shell).
2.  Create a user for the data transfer by executing the following SQL command.

    CREATE USER <username> PASSWORD '<some-password>';

3.  Grant user `create` and `temporary` privileges on the database. create allows the service to `create`new schemas and `temporary` allows the service to create temporary tables.

    GRANT CREATE, TEMPORARY ON DATABASE <database> TO <username>;

    Note:

    If the schema already exists:

    By default, the service creates a new schema based on the destination configuration (in the next step). If you prefer to create the schema yourself before connecting the destination, you must ensure that the writer user has the proper permissions on the schema, using `GRANT ALL ON schema``TO <username>``;`
