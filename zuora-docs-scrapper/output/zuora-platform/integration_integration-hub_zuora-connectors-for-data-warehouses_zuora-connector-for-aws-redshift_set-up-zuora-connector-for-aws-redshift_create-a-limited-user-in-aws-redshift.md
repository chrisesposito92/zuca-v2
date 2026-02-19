---
title: "Create a limited user in AWS Redshift"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/create-a-limited-user-in-aws-redshift"
product: "zuora-platform"
scraped_at: "2026-02-19T03:32:17.060Z"
---

# Create a limited user in AWS Redshift

Learn how create a limited user in Zuora Connector for AWS Redshift

-   If your Redshift security posture requires IP whitelisting, have the data syncing service's static IP available during the following steps. It will be required in [Whitelist connection](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/whitelist-connection).
-   By default, Redshift authentication uses role-based access. You will need the trust policy prepopulated with the data-syncing service's identifier to grant access. It should look similar to the following JSON object with a proper service account identifier:{ "Version": "2012-10-17", "Statement": \[ { "Effect": "Allow", "Action": \[ "sts:AssumeRoleWithWebIdentity" \], "Principal": { "Federated": "accounts.google.com" }, "Condition": { "StringEquals": { "accounts.google.com:oaud": "<some\_organization\_identifier>", "accounts.google.com:sub": "<some\_service\_account\_identifier>" } } } \] }

Network allowlisting

-   Cloud Hosted (US): `35.192.85.117/32`

-   Cloud Hosted (EU): `104.199.49.149/32`


If private-cloud or self-hosted, contact support for the static egress IP.

1.  Connect to Redshift using the SQL client.
2.  Execute the following query to create a user to write the data (replace `<password>` with a password of your choice).

    CREATE USER <username> PASSWORD '<password>';

    Create a user without a password. Role based auth does not require a password. You may create the user using `CREATE USER <username> PASSWORD DISABLE;`.

3.  Grant user create and temporary privileges on the database. create allows the service to create new schemas and temporary allows the service to create temporary tables.

    GRANT CREATE, TEMPORARY ON DATABASE <database> TO <username>;

    The schema will be created during the first sync. The schema name supplied as part of [Add destination for Zuora Connector for AWS Redshift](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/add-destination-for-zuora-connector-for-aws-redshift) will be created during the first connection. It does not need to be created manually in the destination ahead of time.

    By default, the service creates a new `schema` based on the destination configuration. If you prefer to create the schema yourself before connecting the destination, you must ensure that the writer user has the proper permissions on the schema, using `GRANT ALL ON schema <schema> TO <username>;`

    Once you've provided the `GRANT ALL` permission on the schema, you can safely remove the `CREATE` permission on the database (but you must retain the `TEMPORARY` permission on the database).


You must [whitelist the connection](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/whitelist-connection).
