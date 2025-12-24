---
title: "Set up Zuora Connector for AWS Redshift"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift"
product: "zuora-platform"
scraped_at: "2025-12-24T08:40:30.500Z"
---

# Set up Zuora Connector for AWS Redshift

Learn how set up the Zuora Connector for AWS Redshift

As a first step towards setting up Zuora Connector for AWS Redshift, you must complete the following step

-   By default, Redshift authentication uses role-based access. You must have the trust policy pre-populated with the data-syncing service's identifier to grant access. It should look similar to the following JSON object with a proper service account identifier:

    { "Version": "2012-10-17", "Statement": \[ { "Effect": "Allow", "Principal" : { "AWS": "arn:aws:iam:123456789012:sample\_role" }, "Action": "sts:AssumeRole", } \] }

The setup process of Zuora Connector for AWS Redshift includes the following steps:

-   Configure your Redshift destination

    1.  Prerequisites

    2.  Create a limited user in Redshift

    3.  Whitelist connection

    4.  Create a staging bucket

        1.  Create policy

        2.  Create role

    5.  Add your destination

-   Verification and Data Transfer


Complete the following steps to create a user in Redshift:

CREATE USER <username> PASSWORD '<password>';

In the above query, (replace <password> with your preferred password).

Alternatively, you can create a user in Redshift without a password. Role-based auth does not require a password to create a user in Redshift

Use `CREATE USER <username> PASSWORD DISABLE;` to create the user.

GRANT CREATE, TEMPORARY ON DATABASE <database> TO <username>;

The schema will be created during the first sync. The schema name provided in Step 4 (Add your destination) will be created during the first connection. You do not need to create this manually in the destination ahead of time.

Complete the following steps to whitelist a connection:

Complete the following three substeps to create a staging bucket:

Object Ownership can be set to " ACLs disabled " and Block Public Access settings for this bucket can be set to " Block all public access " as recommended by AWS. Make a note of the Bucket name and AWS Region.

The first bucket permission in the list applies to `BUCKET_NAME` whereas the second permission applies only to the bucket's contents `BUCKET_NAME/*` .

Based on AWS recommendations, role-based authentication is the preferred authentication mode for Redshift. However, you can use the HMAC Access Key ID and Secret Access Key as alternative authentication methods.

Step 1 - Create a limited user in Redshift

1.  Connect to Redshift using the SQL client.
2.  Execute the following query to create a user to write the data.

    CREATE USER <username> PASSWORD '<password>';

    In the above query, (replace <password> with your preferred password).

    Note:

    Alternatively, you can create a user in Redshift without a password. Role-based auth does not require a password to create a user in Redshift

    Use `CREATE USER <username> PASSWORD DISABLE;` to create the user.

3.  Grant the following database privileges to the user:

    -   `create` - Allows the service to create new schemas

    -   `temporary` \- Allows the service to create temporary tables.


    GRANT CREATE, TEMPORARY ON DATABASE <database> TO <username>;
    Note: The schema will be created during the first sync. The schema name provided in Step 4 (Add your destination) will be created during the first connection. You do not need to create this manually in the destination ahead of time.


Step 2 - Whitelist connection

4.  In the Redshift console, click Clusters.
5.  From the list of cluster names, select the cluster you want to connect to.
6.  In the General information pane, gather the Endpoint details.

    ![general_information](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/128a9e98-66d9-4f88-b9bd-e85c646dfe4f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjEyOGE5ZTk4LTY2ZDktNGY4OC1iOWJkLWU4NWM2NDZkZmU0ZiIsImV4cCI6MTc2NjY1MjAyNywianRpIjoiYjNhN2UxNjQwMGMyNDA3ZDk4MmQ1MjlmYjZjYjcyMGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.xGXpHyFkB8NI-j0wSnZidH8Qp5vorkwJ_l-92TmWyL4)

7.  Use the copy icon to copy the complete details of the endpoint and port number.
8.  Navigate to the Properties tab and scroll to the Network and security settings section.
9.  In the VPC security group field, select a security group to open it.

    ![network_security_settings](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4d55f43f-5184-4ef3-9814-32732879903e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRkNTVmNDNmLTUxODQtNGVmMy05ODE0LTMyNzMyODc5OTAzZSIsImV4cCI6MTc2NjY1MjAyNywianRpIjoiYzllZTlhNmQ5YTlmNDc2ZmI0ZTFjMWJlZjcwNzViYzQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.LtJfnnMyQZTc9juve3VS80JS3nPeSxeOS62Y4fKVWKg)

10.  In the Security Groups window, click Inbound rules.
11.  Click Edit inbound rules.
12.  In the Edit the Inbound rules window, complete the following steps to create custom TCP rules for the static IP:
     1.  Select Custom TCP from the drop-down menu.
     2.  Enter your Redshift port number. (For example, \`5439\`).
     3.  Add all the IP addresses listed for that environment as per the article.
     4.  Click Add rule.

Step 3 - Create a staging bucket

13.  Navigate to the S3 service page and click Create bucket.
14.  Enter a Bucket name and modify any of the default settings as required.

     Note: Object Ownership can be set to ACLs disabled and Block Public Access settings for this bucket can be set to Block all public access as recommended by AWS. Make a note of the Bucket name and AWS Region.

15.  Click Create bucket.

Create policy

16.  Navigate to the IAM service page, click on the Policies navigation tab, and click Create policy.
17.  Click the JSON tab. Paste the following policy and replace `BUCKET_NAME` with the name of the bucket chosen in Step 2 while creating a bucket and `REGION_NAME`, `ACCOUNT_ID`, `CLUSTER_NAME`, `USERNAME`, and `DATABASE_NAME` with the proper Redshift values.

     { “Version”: “2012-10-17”, “Statement”: \[ { “Effect”: “Allow”, “Action”: “s3:ListBucket”, “Resource”: “arn:aws:s3:::BUCKET\_NAME” }, { “Effect”: “Allow”, “Action”: \[ “s3:PutObject”, “s3:GetObject”, “s3:DeleteObject” \], “Resource”: “arn:aws:s3:::BUCKET\_NAME/\*” }, { “Effect”: “Allow”, “Action”: “redshift:GetClusterCredentials”, “Resource”: \[ “arn:aws:redshift:REGION\_NAME:ACCOUNT\_ID:dbuser:CLUSTER/USERNAME”, “arn:aws:redshift:REGION\_NAME:ACCOUNT\_ID:dbname:CLUSTER/DATABASE\_NAME” \] } \] }

18.  Click through to the Review step. Choose a name for the policy, for example, transfer-service-policy (this will be referenced in the next step while creating role), add a description, and click Create policy.

     Note: The first bucket permission in the list applies to `BUCKET_NAME` whereas the second permission applies only to the bucket's contents `BUCKET_NAME/*`.


Create role

19.  Navigate to the IAM service page > Roles navigation tab, and click Create role.
20.  Select the Custom trust policy and paste the provided trust policy to allow `AssumeRole` access to this role. (Refer to the second step in the Before you begin section at the beginning of this article.) Click Next.
21.  Add the permissions policy created above, and click Next .
22.  Enter a role name, for example, transfer-role, and click Create role.
23.  Once successfully created, search for the created role in the Roles list, click the role name, and make a note of the ARN value.

Alternative authentication method: AWS User with Hash-Based Message Authentication Code (HMAC) Access Key ID & Secret Access Key

Based on AWS recommendations, role-based authentication is the preferred authentication mode for Redshift. However, you can use the HMAC Access Key ID and Secret Access Key as alternative authentication methods.

24.  Navigate to the IAM service page.
25.  Navigate to the Users navigation tab, and click Add users.
26.  Enter a User name for the service, for example, transfer-service and click Next.
27.  Under Select AWS access type, select the Access key - Programmatic access option.
28.  Click Next > Permissions.
29.  Click the Attach existing policies directly option, and search for the name of the policy created in the Create Policy step. Select the policy.
30.  Click Next > Tags.
31.  Click Next > Review and click Create user.
32.  In the Success screen, record the Access key ID and the Secret access key.

Step 4: Add your destination

33.  After completing the initial setup, access the AWS Redshift connector setup UI to start the provisioning process. For this, you will need access to the Integration Hub.
34.  Follow the steps in this article to link your Connect account to your Zuora account and install the app. If you face any issues, raise a support ticket and stay in touch with your account representative for the necessary access to the Integration Hub UI.
35.  Once you have access, navigate to the Marketplace > Integration Hub UI.
36.  Search for Zuora Connector for AWS Redshift and select.
37.  In the Setup tab, click Configure, enter the required details, and select objects for synchronization.
38.  Click Test Connection. If successful, click Save Destination to finalize the setup. This will initiate the onboarding process.
39.  After onboarding, the connector’s Status will change to Active, and you’ll see status data in the Status tab after the first successful transfer.
40.  Alternatively, If you encounter issues gaining access to this UI, share your Redshift host address with a Zuora representative. They will assist in creating a connection link. Use the provided connection link to securely input your Redshift database details, including the cluster, schema, IAM role ARN, and staging bucket information to complete the setup.
     For information on verification and data transfer, see [here](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/verification-and-data-transfer).
