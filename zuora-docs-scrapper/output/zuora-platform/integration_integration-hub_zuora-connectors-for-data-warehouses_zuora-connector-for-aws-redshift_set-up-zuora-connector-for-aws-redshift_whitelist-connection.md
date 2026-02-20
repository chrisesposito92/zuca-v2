---
title: "Whitelist connection"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/whitelist-connection"
product: "zuora-platform"
scraped_at: "2026-02-20T21:12:30.926Z"
---

# Whitelist connection

Learn how create a limited user in Zuora Connector for AWS Redshift

Ensure you have created a [created a limited user in AWS Redshift](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/create-a-limited-user-in-aws-redshift).

1.  In the Redshift console, click Clusters, and make a note of the cluster name.
2.  Select the cluster you would like to connect.
3.  In the General information pane, make note of the Endpoint details. You may need to use the copy icon to copy the full details to discover the full endpoint and port number.

    ![whitelist_connection_aws_redshift_1](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/18d2bf26-df02-4131-b03f-2c75bd7a6c2d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE4ZDJiZjI2LWRmMDItNDEzMS1iMDNmLTJjNzViZDdhNmMyZCIsImV4cCI6MTc3MTcwODM0NCwianRpIjoiODM2YzQwYWIyY2U2NDM5MWE1OGE4YjlhOGI0N2YyNGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.Y0abK1-nvBSF1r5-XB0oHOBaaybSzY9sXNmNgM3cWxk)

4.  Click the Properties tab.
5.  Scroll down to the Network and security settings section.
6.  In the VPC security group field, select a security group to open it.

    ![whitelist_connection_aws_redshift_2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/114cd664-d705-4d93-837f-fb24acaf9105?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjExNGNkNjY0LWQ3MDUtNGQ5My04MzdmLWZiMjRhY2FmOTEwNSIsImV4cCI6MTc3MTcwODM0NCwianRpIjoiNDM2NTgzZmI0MWZkNDVjNWI3OTM1NzVjZTQ1MWUzZTYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.iITG_zBDUeU5qC2yJ9GMC0UF65_5tHDHWsBMk2tlUjY)

7.  In the Security Groups window, click Inbound rules.
8.  Click Edit inbound rules.
9.  In the Edit the Inbound rules window, follow the steps below to create custom TCP rules for the static IP:
    1.  Select Custom TCP from the drop-down menu.
    2.  Enter your Redshift port number. (likely `5439`).
    3.  Enter the static IP.
    4.  Click Add rule.

        Public accessibility and subnet requirements:

        For IP allowlisting from outside your VPC, the Redshift cluster must be set to Publicly accessible and deployed in a public subnet with a route to an Internet Gateway. For private Redshift clusters, SSH tunneling is supported. Contact the team for instruction on configuring an SSH tunnel for your Redshift cluster.


You must [Create a staging bucket](/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-redshift/set-up-zuora-connector-for-aws-redshift/create-a-staging-bucket).
