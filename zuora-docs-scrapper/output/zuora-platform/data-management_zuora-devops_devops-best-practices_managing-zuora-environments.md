---
title: "Managing Zuora environments"
url: "https://docs.zuora.com/en/zuora-platform/data-management/zuora-devops/devops-best-practices/managing-zuora-environments"
product: "zuora-platform"
scraped_at: "2025-12-24T05:13:20.494Z"
---

# Managing Zuora environments

Learn how to develop a testing approach and determine the necessary environments for executing a testing strategy in Zuora, including development, merging, and production stages.

Develop a testing approach and determine the environments required to execute the testing strategy. A good practice is to have at least three or more stages in the deployment process before releasing to production.

-   Development sandbox - The environment where the developers will pursue development and testing. You can have multiple sandboxes for different testing environments.

-   Merging environment - Integrating environment where the code from all the development environments is synced before the User Acceptance Testing (UAT) is done. Zuora Central Sandbox mirrors production data, making it the ideal environment for testing the integration and syncing all the isolated developments into one and testing how they will function in Production.

-   Production environment - This is an operationally live environment where subscribers access the Catalog and Services. It must be highly stable and reliable for handling large volumes of transactions as it directly impacts the customer experience.


The Developer environments should be used for development, testing new and existing customizations and ensuring that Production data, integrations, and applications are not compromised.

![Zuora Environments](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/60fa27ec-3f93-488d-9a84-ec5747b85519?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjYwZmEyN2VjLTNmOTMtNDg4ZC05YTg0LWVjNTc0N2I4NTUxOSIsImV4cCI6MTc2NjYzOTU5OCwianRpIjoiZGJmM2NkNDA3YjAxNDFkYTgzMjViYjYwYmI5MDMzYTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.fq01O-tm2fNTQCrHSRKMY4UVI-L4M71kqSKFywuNc6Q)

There may be a merging environment, often named the SIT environment, where all the changes from various developers are merged and tested. The UAT environment is a production-like environment for understanding how the changes will work in the Production environment.

Note: Zuora recommends refreshing the lower environments with Production data and the Baseline development and testing environments with production data. This ensures that the lower environments accurately mirror the production environment and helps identify and resolve issues early in the development lifecycle.
