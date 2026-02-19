---
title: "Configure Snowflake as a source"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-snowflake-as-a-source"
product: "zuora-platform"
scraped_at: "2026-02-19T03:26:23.127Z"
---

# Configure Snowflake as a source

Create a custom meter using Snowflake as the source for event data by configuring connection settings, selecting event definitions, and adjusting advanced settings.

1.  Navigate to
2.  Create a Custom meter.
3.  Select Snowflake as the source. The Snowflake settings page is displayed. ![Snowflake source settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1a45f65d-18bc-4a69-9667-577a299845ec?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFhNDVmNjVkLTE4YmMtNGE2OS05NjY3LTU3N2EyOTk4NDVlYyIsImV4cCI6MTc3MTU1Nzk3OCwianRpIjoiN2UwNjE5Yzg3NDM0NDRjMzgxODQ5ZTg3Zjg1MjJhZDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.fdleodHkSJFMYGo6RgB93C8KT7jyXXt-b2UGF36kD5I)
4.  Click Select to select an Event Definition on the Snowflake settings page. You can create or select an existing Event Definition or import an Event Definition.
5.  Under the Snowflake Settings section, configure the following settings:

    | Setting | Configuration |
    | --- | --- |
    | Connection | Select Snowflake from the Connection drop-down list list which includes the S3 bucket, credentials, and base path. To set up a connection, contact Zuora Support. |
    | Upload Data From | Select a value from the following options:Table: Selecting this option allows you to select a table from the list for data ingestion in Snowflake.Query: Selecting this option allows you to add a query script if you want to read multiple tables or have complex data ingestion requirements from Snowflake. |
    | Advanced Settings | Select the values for excluded fields, rolling file size, and partition by fields.Role - Allows you to add a user role. To set up usernames and keys, to change the default user role, contact Zuora Support.Warehouse - Allows you to select a warehouse size based on your calculation for the resource requirements.Database and Schema - Allows you to specify if the table you selected as data output is under a specific database and schema in Snowflake.Partition By - Allows you to specify the partition to read in and store the files in Zuora S3. |

6.  Click Save to save the Snowflake source settings.
