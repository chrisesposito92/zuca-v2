---
title: "Configure network ACLs (access control list)"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aurora-mysql/set-up-zuora-connector-for-aurora-mysql/configure-network-acls-access-control-list"
product: "zuora-platform"
scraped_at: "2026-02-19T03:31:58.571Z"
---

# Configure network ACLs (access control list)

Learn how to configure network access control lists (ACLs) for database instances in a VPC using the RDS dashboard.

Complete this procedure for database instances in a VCP.

1.  In your RDS dashboard, select the MySQL instance.
2.  Click the link to the instance's VPC.
3.  Click the VPC ID.

    ![postgres-vpc-id](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c1c27b5d-75b8-4493-a03b-d36ff1b5b04d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMxYzI3YjVkLTc1YjgtNDQ5My1hMDNiLWQzNmZmMWI1YjA0ZCIsImV4cCI6MTc3MTU1ODMxMSwianRpIjoiZWM4NDgyYzA5ZmU2NGM3ZmFjNTFmY2I3ODljMDg0ODEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.OhojqUKYw333gxCEIOJS0cI02EIJzJQbPhFi9DSxeTQ)

4.  In the Details section, click on the link under Main network ACL.

    ![postgres-main-network-acl-id](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e2d2183f-9c93-41f1-b1b7-365df1a08919?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImUyZDIxODNmLTljOTMtNDFmMS1iMWI3LTM2NWRmMWEwODkxOSIsImV4cCI6MTc3MTU1ODMxMSwianRpIjoiMzkzMDFjZjdjNjIyNDgxMGFmZGM2OTgxZWE4ZjBhOTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.w-k6v2kwUy7kGWcv8uAJmKXGQ2y--xix-s7GtPrL9B8)

5.  Click on the network ACL ID.

    ![postgres-network-acl-id](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f2afa5e6-66f9-4b7e-a40e-5eb70b725bd3?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImYyYWZhNWU2LTY2ZjktNGI3ZS1hNDBlLTVlYjcwYjcyNWJkMyIsImV4cCI6MTc3MTU1ODMxMSwianRpIjoiMzg5ZThmMTNiODczNDYwY2E5MzJhYzIyNGY1NDc2NTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.O34aeEy41db6VT_qshqyrY46hFEH1WLzz4w2ChmlzN4)

6.  Edit the inbound rules:
    1.  Click on the Inbound rules tab, and check if there is an existing rule with a Source of `0.0.0.0/0` set to `Allow`. (This is a default rule created by AWS. If this rule already exists, skip to Edit outbound rules.

        ![postgres-inbound-rules](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/54875a58-5770-4d60-956e-0865d04b1bb9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjU0ODc1YTU4LTU3NzAtNGQ2MC05NTZlLTA4NjVkMDRiMWJiOSIsImV4cCI6MTc3MTU1ODMxMSwianRpIjoiYmI3YzYyYWFkZDBiNDUzM2ExMzY5ZjhjZDg2YjljMjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.3-rlvSh4dUQ1JOSB6nFFfqauMWjXxdwUHQNRyvqSsbw)

    2.  Create the inbound rule (if it does not exist). Click Edit inbound rules and either Add new rule or edit an existing rule to allow access to the port number of your database instance (usually `5432` ) from the Prequel static IP. Click Save changes.
7.  Edit the outbound rules:
    1.  In the ACL menu, select the Outbound rules tab, and check if there is an existing rule with a Destination of `0.0.0.0/0` set to Allow. (This is a default rule created by AWS. If this rule already exists, skip to the next step.)

        ![postgres-outbound-rules](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a9fa1eb4-5cd6-4df4-8c45-b33fc1db2df5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE5ZmExZWI0LTVjZDYtNGRmNC04YzQ1LWIzM2ZjMWRiMmRmNSIsImV4cCI6MTc3MTU1ODMxMSwianRpIjoiNmUwMmZmZGU1NTZjNGM0OTgzZDE4ZTNmZGM5N2UyNTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.0K3EjKIFSssyTgtnTCroeiq4uyZE1oCt_JVz-gEPOAQ)

    2.  Create the outbound rule (if it doesn't exist). Click Edit outbound rules and edit the rules to allow outbound traffic to ports `1024-65535` for Destination `0.0.0.0/0`.
