---
title: "Configure the security group"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-aurora-postgres/set-up-zuora-connector-for-aws-aurora-postgres/allow-access/configure-the-security-group"
product: "zuora-platform"
scraped_at: "2025-12-24T08:40:11.989Z"
---

# Configure the security group

Learn how to configure the security group

1.  In your Amazon RDS > Databases list, click the PostgreSQL instance you want to send data to.
2.  On the database page, in the Connectivity & security tab, make a note of the Endpoint and the Port number.

    ![1-postgres-endpoint.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7af65e9e-ffda-4fdd-a8d5-2823a221d470?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdhZjY1ZTllLWZmZGEtNGZkZC1hOGQ1LTI4MjNhMjIxZDQ3MCIsImV4cCI6MTc2NjY1MjAxMSwianRpIjoiN2U4YmU0NzliOTc0NDQzYThjNmZkODI3OWRmOWQxYzYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.22KkuOJboyb9yTCau9STZ3ThSUteToKbxaEcG7XyrhU)

3.  In the Security section, ensure that set the Publicly accessible setting is set to Yes to ensure that the destination is accessible from outside your VPC. Note that it is still only accessible through whitelisted IPs at this point.

    ![2-postgres-publicly-accessible.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/47778e06-80f2-4ebe-a37d-cb89ddf41ffe?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ3Nzc4ZTA2LTgwZjItNGViZS1hMzdkLWNiODlkZGY0MWZmZSIsImV4cCI6MTc2NjY1MjAxMSwianRpIjoiYTgyNzAwNmQzOWQ2NDEyNWE4MGU1YmYzNWVmNmZhZDkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.yrrmuu1Whbaod3ZsYzrs-60mr0XOXHhm7FQoNALHGhM)

4.  Click one of the VPC security groups (usually `default`).VPC groups are permissive (vs. restrictive), and for instances with multiple VPC security groups, only one needs to be configured with the new inbound rule.

    ![3-postgres-vpc-security-groups.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/47cddc02-6d37-40e5-a380-f06cfcaaae55?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ3Y2RkYzAyLTZkMzctNDBlNS1hMzgwLWYwNmNmY2FhYWU1NSIsImV4cCI6MTc2NjY1MjAxMSwianRpIjoiYTBiOWY5NWVlZDNjNDQwY2E3MmI2YTVmNWFkNDAzMmQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.TWwbzoWO3b2GpdNwI2mt9sdbllWL3DaqETQXRo59XQA)

5.  In the Security Groups section, select the Inbound rules tab.
6.  Click Edit inbound rules and then click Add rule.
7.  Edit the newly created rule of type Custom TCP with the Port range noted in the first step (usually `5432`) and a `Custom` Source value that includes all of the service IPs. You will need to add `/32` to the end of each IP (CIDR notation).
8.  Click Save rules.

    ![4-postgres-add-rule.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a0ae709c-538e-472f-8c9a-4a0dc48da779?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImEwYWU3MDljLTUzOGUtNDcyZi04YzlhLTRhMGRjNDhkYTc3OSIsImV4cCI6MTc2NjY1MjAxMSwianRpIjoiY2ZlOTdhNWRlZThjNDRjMWE2ZmQ1ZTUxY2QyMjY1M2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.GVa191GcsJqknEzwa077fRyvq06joETYtqQy6zLWSaA)
