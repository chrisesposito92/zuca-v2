---
title: "Configure the security group"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aurora-mysql/set-up-zuora-connector-for-aurora-mysql/configure-the-security-group"
product: "zuora-platform"
scraped_at: "2025-12-24T08:39:30.019Z"
---

# Configure the security group

Learn how to configure the security group

If your MySQL database is protected by security groups or other firewall settings, you will need to have the data-syncing service's static IP available to complete Step 1.

Allow write access to a portion of your Aurora MySQL database.

1.  Navigate to Amazon RDS > Databases list. Click the MySQL instance you want to send data to.
2.  On the database page, in the Connectivity & security tab, note the Endpoint and the Port number. You may need to select the Writer instance in the DB identifier list to reveal the endpoint.

    ![aws-mysql-endpoint-port](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/29a5dd0d-1579-40ff-8a63-1b9bdfacc218?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI5YTVkZDBkLTE1NzktNDBmZi04YTYzLTFiOWJkZmFjYzIxOCIsImV4cCI6MTc2NjY1MTk2OCwianRpIjoiYjRkOWZkMGM2ZGNjNGZkMTgwZWYwZGEwZDlhMjVmMzYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.AIs1Qqs5JrKQO5KMm5ZmZPEjiziRh97Poq2IA0fgOLQ)

3.  To ensure that the destination is accessible from outside your VPC, click Modify at the top right, and in the Connectivity section, within the Additional configuration dropdown, confirm the Publicly accessible setting is set to Yes. Note that it is still only accessible through whitelisted IPs at this point.

    ![aws-mysql-publicly-accessible](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1e9b2be5-58c6-4540-bc5b-3345001ac89c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFlOWIyYmU1LTU4YzYtNDU0MC1iYzViLTMzNDUwMDFhYzg5YyIsImV4cCI6MTc2NjY1MTk2OCwianRpIjoiODI2M2Y5MjU5MDdmNGE2Mjg3YTRkOGMzOWYyZjU0ODYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.JCuiCeP_iUSb49vWBZgFnlgEhtc4InxGGXWleJFjCG8)

4.  Returning to the database page, within the Writer instance details, click one of the VPC security groups (usually `default`).

    Note:

    VPC groups are permissive (vs. restrictive), and for instances with multiple VPC security groups, only one needs to be configured with the new inbound rule.

    ![aws-mysql-default-security-group](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/df15ac04-5d2b-4d09-b3ff-a75e92d45733?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRmMTVhYzA0LTVkMmItNGQwOS1iM2ZmLWE3NWU5MmQ0NTczMyIsImV4cCI6MTc2NjY1MTk2OCwianRpIjoiZWFjYjE3ZmU4NzU4NDQ0OGFjM2NmYmFkYzg0OTQ1NDMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.IeFYu6JfS7omS8sOy13DK4qOOzU1SN2_Zu1qOV3bUbw)

5.  In the Security Groups section, select the Inbound rules tab.
6.  Click Edit inbound rules and then click Add rule.
7.  Edit the newly created rule of type Custom TCP with the Port range noted in the first step (usually `5432`) and a `Custom` Source value that includes all of the service IPs. Note: you will need to add `/32` to the end of each IP (CIDR notation).
8.  Click Save rules.

    ![postgres-add-rule](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8ed58745-2bd7-4b6d-b204-a76e2de967fd?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhlZDU4NzQ1LTJiZDctNGI2ZC1iMjA0LWE3NmUyZGU5NjdmZCIsImV4cCI6MTc2NjY1MTk2OCwianRpIjoiOWVmNjgxYWVlN2U3NDAzZmI3MDNjM2U4MzMyMTM5NTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.WQskFnrAonfyt8rrTjflk62Q6C12gXnP0CdhI-bEZAo)
