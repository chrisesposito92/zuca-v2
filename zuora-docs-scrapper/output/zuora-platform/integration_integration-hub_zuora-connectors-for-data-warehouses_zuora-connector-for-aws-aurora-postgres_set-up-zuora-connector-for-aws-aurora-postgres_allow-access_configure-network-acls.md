---
title: "Configure network ACLs"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connectors-for-data-warehouses/zuora-connector-for-aws-aurora-postgres/set-up-zuora-connector-for-aws-aurora-postgres/allow-access/configure-network-acls"
product: "zuora-platform"
scraped_at: "2025-12-24T08:40:15.340Z"
---

# Configure network ACLs

Configure network ACLs (Access Control List)

For database instances in a VCP, complete this procedure.

1.  In your RDS dashboard, select the PostgreSQL instance.
2.  Click the link to the instance's VPC.
3.  Click the VPC ID.

    ![4_1postgres-vpc-id.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4e5a2ed5-3fbb-4263-b333-1173ea61ea6b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRlNWEyZWQ1LTNmYmItNDI2My1iMzMzLTExNzNlYTYxZWE2YiIsImV4cCI6MTc2NjY1MjAxMiwianRpIjoiM2FlZTAwNTAwM2NkNDAyNjk2ZTVlY2NhMjgzYmI4OGUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9._tmomEbst2Jgg6sjzovbNxjPXRXpii_ARLqjmtv0fJA)

4.  In the Details section, click on the link under Main network ACL.

    ![5-postgres-main-network-acl-id.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6fc4f03e-6f0f-4b93-b957-dd07fa257d7c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZmYzRmMDNlLTZmMGYtNGI5My1iOTU3LWRkMDdmYTI1N2Q3YyIsImV4cCI6MTc2NjY1MjAxMiwianRpIjoiNWQxNWY1OWUxNDljNDI0ZjhmMWY1MzZhNWNiMTc2YjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.UZZBPNjxn52WysbQalq3nA8t6nCkCHlfWSLcnxqRRx0)

5.  Click on the network ACL ID.

    ![5.1-postgres-network-acl-id.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a9ad4a8d-0029-4f23-bf1e-74ceba80dbb1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE5YWQ0YThkLTAwMjktNGYyMy1iZjFlLTc0Y2ViYTgwZGJiMSIsImV4cCI6MTc2NjY1MjAxMiwianRpIjoiNGUyZjIyNTkxOTRjNGJjNjhhODYyNzQ5OGQ0NjFkYWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ddGufu8MfI9ogpRmhlETjhOo3_NrdESwUHZxVK2VVKo)

6.  Edit the inbound rules:

    -   Click on the Inbound rules tab. Check whether there is an existing rule with a Source of `0.0.0.0/0` set to Allow. (This is a default rule created by AWS. If this rule already exists, skip to Edit outbound rules.)


    ![6-postgres-inbound-rules.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3697b1cd-3e27-42fc-b318-1c76e63332f4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM2OTdiMWNkLTNlMjctNDJmYy1iMzE4LTFjNzZlNjMzMzJmNCIsImV4cCI6MTc2NjY1MjAxMiwianRpIjoiMmJhOTg5NzMzZmJlNGZlZDg0YWI5MTg0NmExNjNlODkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.yjopPFIsphsQn9SDxnWzo6o5TokJX9OTiGP9FkED1Ug)

7.  Create the inbound rule (if it does not already exist). Click Edit inbound rules and either Add new rule or edit an existing rule to allow access to the port number of your database instance (usually `5432` ) from the Prequel static IP. Click Save Changes.
8.  Edit the outbound rules:

    -   In the ACL menu, select the Outbound rules tab, and check if there is an existing rule with a Destination of `0.0.0.0/0` set to Allow. (This is a default rule created by AWS. If this rule already exists, skip to the next step.)


    ![7-postgres-outbound-rules.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6e2e25cb-e32b-4cf7-9d03-390e284f9088?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZlMmUyNWNiLWUzMmItNGNmNy05ZDAzLTM5MGUyODRmOTA4OCIsImV4cCI6MTc2NjY1MjAxMiwianRpIjoiOGNkYmRlNzJkYzdhNGExOWJlYjI5MWZmN2VkZWViNmUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.-vPESj0ZHvvJAE1HtsYpcBDLIMLsm5gQQe-P3J_2lRA)

9.  Create the outbound rule (if it doesn't exist). Click Edit outbound rules and edit the rules to allow outbound traffic to ports `1024-65535` for Destination `0.0.0.0/0.`
