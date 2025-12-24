---
title: "Configure network ACLs (access control list)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aurora-mysql/set-up-zuora-connector-for-aurora-mysql/configure-network-acls-access-control-list"
product: "zuora-platform"
scraped_at: "2025-12-24T08:39:32.612Z"
---

# Configure network ACLs (access control list)

Complete this procedure for database instances in a VCP.

1.  In your RDS dashboard, select the MySQL instance.
2.  Click the link to the instance's VPC.
3.  Click the VPC ID.

    ![postgres-vpc-id](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c1c27b5d-75b8-4493-a03b-d36ff1b5b04d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMxYzI3YjVkLTc1YjgtNDQ5My1hMDNiLWQzNmZmMWI1YjA0ZCIsImV4cCI6MTc2NjY1MTk3MCwianRpIjoiYjU5NjRjZDllNWIwNDMyYThiOGRhODk3NmVkZmViNTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Twd2lrxALMgqJ8SJtmGVm0n8tB9v4Di5P6RMqiK1Zq0)

4.  In the Details section, click on the link under Main network ACL.

    ![postgres-main-network-acl-id](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e2d2183f-9c93-41f1-b1b7-365df1a08919?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUyZDIxODNmLTljOTMtNDFmMS1iMWI3LTM2NWRmMWEwODkxOSIsImV4cCI6MTc2NjY1MTk3MCwianRpIjoiNDE1MDE5MDQ2MWQyNGViNGFmYTJjZGRkZmJmMzdhY2EiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.k5czI1z4fba9LxY3BjdeDu9uVKWLuI4oOm-pcL-JJS4)

5.  Click on the network ACL ID.

    ![postgres-network-acl-id](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f2afa5e6-66f9-4b7e-a40e-5eb70b725bd3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYyYWZhNWU2LTY2ZjktNGI3ZS1hNDBlLTVlYjcwYjcyNWJkMyIsImV4cCI6MTc2NjY1MTk3MCwianRpIjoiYzA1NmU4NzMyODNjNDllNDlmYTkwOTAwZjY0OWU4NDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.1IJII7Eyo59R0DTvGkbs7Nb8fsrAmiIMZ8m8yQEFirw)

6.  Edit the inbound rules:
    1.  Click on the Inbound rules tab, and check if there is an existing rule with a Source of `0.0.0.0/0` set to `Allow`. (This is a default rule created by AWS. If this rule already exists, skip to Edit outbound rules.

        ![postgres-inbound-rules](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/54875a58-5770-4d60-956e-0865d04b1bb9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU0ODc1YTU4LTU3NzAtNGQ2MC05NTZlLTA4NjVkMDRiMWJiOSIsImV4cCI6MTc2NjY1MTk3MCwianRpIjoiM2MyN2FjNDEyMmJlNGEzODk2MGQxZGUwOTMxYjRlMGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Msj9cd7mbtIScycgYF9um7b0QC0z_sE_1G4QC6jN1Zw)

    2.  Create the inbound rule (if it does not exist). Click Edit inbound rules and either Add new rule or edit an existing rule to allow access to the port number of your database instance (usually `5432` ) from the Prequel static IP. Click Save changes.
7.  Edit the outbound rules:
    1.  In the ACL menu, select the Outbound rules tab, and check if there is an existing rule with a Destination of `0.0.0.0/0` set to Allow. (This is a default rule created by AWS. If this rule already exists, skip to the next step.)

        ![postgres-outbound-rules](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a9fa1eb4-5cd6-4df4-8c45-b33fc1db2df5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE5ZmExZWI0LTVjZDYtNGRmNC04YzQ1LWIzM2ZjMWRiMmRmNSIsImV4cCI6MTc2NjY1MTk3MCwianRpIjoiY2M3YWI0ZGJjZjM5NGI4M2I1NmNiOWE0NjBlZGNhMjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.hqz52y7u7d_hBatmZ_yvUwtuK9GrxCoktFdrm3zDTPA)

    2.  Create the outbound rule (if it doesn't exist). Click Edit outbound rules and edit the rules to allow outbound traffic to ports `1024-65535` for Destination `0.0.0.0/0`.
