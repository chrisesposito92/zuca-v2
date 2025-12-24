---
title: "Create service policy and role"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-athena/set-up-zuora-connector-for-aws-athena/create-service-policy-and-role"
product: "zuora-platform"
scraped_at: "2025-12-24T08:39:52.001Z"
---

# Create service policy and role

Create Athena service policy and role

Create Athena service policy

1.  Navigate to the IAM service page > click on the Policies navigation tab > click Create policy.
2.  Click the JSON tab, and paste the following policy:

    Make sure to replace `ACCOUNT_ID`, `WORKGROUP`, `BUCKET_NAME` and `SCHEMA` with your account information.

    -   `WORKGROUP` should be primary unless otherwise specified during connection configuration.

    -   `BUCKET` should refer to the bucket created in the previous step.

    -   `SCHEMA` used below does not need to be created ahead of time. If it does not exist, it will be created automatically before transferring data.


    { "Version": "2012-10-17", "Statement": \[ { "Sid": "AllowAthenaAccess", "Effect": "Allow", "Action": \[ "athena:GetQueryResults", "athena:StartQueryExecution", "athena:StartSession", "athena:GetDatabase", "athena:GetDataCatalog", "athena:GetWorkGroup", "athena:GetTableMetadata", "athena:GetQueryExecution" \], "Resource": \[ "arn:aws:athena:\*:ACCOUNT\_ID:workgroup/WORKGROUP" \] }, { "Sid": "AllowGlueAccessToDestinationDatabaseAndTables", "Effect": "Allow", "Action": \[ "glue:GetDatabases", "glue:GetDatabase", "glue:GetTables", "glue:GetTable", "glue:GetPartitions", "glue:CreateTable", "glue:CreateDatabase", "glue:UpdateTable", "glue:DeleteTable" \], "Resource": \[ "arn:aws:glue:\*:ACCOUNT\_ID:catalog", "arn:aws:glue:\*:ACCOUNT\_ID:database/SCHEMA", "arn:aws:glue:\*:ACCOUNT\_ID:database/default", "arn:aws:glue:\*:ACCOUNT\_ID:table/SCHEMA/\*" \] }, { "Sid": "AllowS3AccessToBucket", "Effect": "Allow", "Action": \[ "s3:PutObject", "s3:ListBucket", "s3:GetBucketLocation", "s3:GetObject", "s3:DeleteObject" \], "Resource": \[ "arn:aws:s3:::BUCKET\_NAME", "arn:aws:s3:::BUCKET\_NAME/\*" \] } \] }

3.  Click through to the Review step. Choose a name for the policy, for example, `transfer-service-policy` (this will be referenced in the next step), add a description, and click Create policy.

    Note:

    Athena vs. S3 permissions

    Because Athena uses S3 as the underlying storage layer, the Resource access requested in the policy is scoped down via resource-specific permissions in the S3 actions.

    Schema vs. Database

    During destination onboarding, you will be asked to provide both a "schema" and a "database". Though those are mostly synonymous in Athena, they are used for two different purposes here:

    -   `schema` should be the name of the folder in S3 under which the final data will be written.
    -   `database` should be the name of the folder in S3 in which the Athena query results are written (i.e., the automatically generated `athena_output`/ data).


Create role

4.  In the IAM service page, navigate to the Roles navigation tab > click Create role.
5.  Select Custom trust policy and paste the provided trust policy (from the prerequisite) to allow AssumeRole access to this role > click Next.
6.  Add the permissions policy created above, and click Next.
7.  Enter a Role name, for example, `transfer-``role`and click Create role.
8.  Once successfully created, search for the created role in the Roles list, click the role name, and make a note of the ARN value.

    For information on alternative authentication method, see [here](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-athena/set-up-zuora-connector-for-aws-athena/create-service-policy-and-role/alternative-authentication-method).
