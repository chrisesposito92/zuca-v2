---
title: "Automated collaboration and version control"
url: "https://docs.zuora.com/en/zuora-platform/data-management/zuora-devops/devops-best-practices/automated-collaboration-and-version-control"
product: "zuora-platform"
scraped_at: "2025-12-24T05:13:25.068Z"
---

# Automated collaboration and version control

Version control enhances collaboration and streamlines deployment by tracking changes, facilitating peer reviews, and supporting automated builds and tests.

Tracking changes and issues in low-code platforms and while working in a shared environment becomes difficult. Implementing version control is essential for tracking changes to metadata. It facilitates improved collaboration among teams for tasks such as peer reviews and implementing merging and branching strategies for the deployment to various tenants. These strategies are essential for managing releases, bug fixes, and maintaining an audit trail of changes, including details on who initiated the changes and when they occurred.

When the Version Control System acts as a source of truth for a given application, the continuous merging of the changes triggers a series of automated builds and tests. By merging changes continuously, the bugs identified are earlier, fixed and validated faster and released faster. After the success criteria post-testing and integration have been met, the changes can be deployed to production, thus reducing time to market.

![Version Control](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7f19e0d1-d84f-49b9-879d-512dca6a80d7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdmMTllMGQxLWQ4NGYtNDliOS04NzlkLTUxMmRjYTZhODBkNyIsImV4cCI6MTc2NjYzOTYwMywianRpIjoiZGEzMTM3MjJmNDVjNGFhNjg0OTk4NDRmNTIzODEzOTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CUSB02PCgYNu1X4Eu8oqqQbgxO-MuQ8jglf1QpvtkiM)
