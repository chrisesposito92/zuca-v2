---
title: "Configure Snowflake as a target"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-snowflake-as-a-target"
product: "zuora-platform"
scraped_at: "2026-02-20T17:50:01.026Z"
---

# Configure Snowflake as a target

Create a custom meter using a Snowflake data warehouse as the target by configuring connection, data upload, and advanced settings.

1.  Navigate to
2.  Create a Custom meter.
3.  Select Snowflake as the target. The Snowflake settings page is displayed. ![Snowflake target settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a3432f6a-c37d-43c4-907e-cb52cda4368d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEzNDMyZjZhLWMzN2QtNDNjNC05MDdlLWNiNTJjZGE0MzY4ZCIsImV4cCI6MTc3MTY5NjE5NiwianRpIjoiZDM5ZjRmNDk1N2VjNDhiOTg5N2FhNDkyZDUyNWNjMTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.djWo2Rkk1fVUXF3O4c8RvlBEjTaIGxZAmgPvKOo0OZo)
4.  Under the Snowflake Settings section, configure the following settings:

    | Setting | Configuration |
    | --- | --- |
    | Connection | Select Snowflake from the Connection drop-down list which includes the S3 bucket, credentials, and base path. To set up a connection, contact Zuora Support. |
    | Upload Data From | Select a value from the following options:Table: Selecting this option allows you to select a table from the list for data ingestion in Snowflake.Query: Selecting this option allows you to add a query script if you want to read multiple tables or have complex data ingestion requirements from Snowflake. |
    | Advanced Settings | Select the values for excluded fields, rolling file size, and partition by fields.Role - Allows you to add a user role. To set up usernames and keys, to change the default user role, contact Zuora Support.Warehouse - Allows you to select a warehouse size based on your calculation for the resource requirements.Database and Schema - Allows you to specify if the table you selected as data output is under a specific database and schema in Snowflake. |

5.  Click Save to save the Snowflake target settings.
