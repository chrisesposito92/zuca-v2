---
title: "Configure and install Secure Data Share"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/use-zuora-secure-data-share-for-snowflake-to-access-zuora-data/configure-and-install-secure-data-share"
product: "zuora-platform"
scraped_at: "2026-02-20T21:14:27.874Z"
---

# Configure and install Secure Data Share

Learn how to configure and install Secure Data Share

1.  In the Secure Data Share UI, enter your Snowflake account locator, region, and edition.
2.  Select the objects you want to share.
3.  Click Install to initiate the Secure Data Share onboarding process.

    The onboarding time depends on the total data volume in your tenant. The first transfer may take longer, as it includes a historical sync of all selected objects.

    You can monitor progress in the UI as the status moves from In Progress to Active once provisioning is complete.

    ![Secure Data Share UI 1](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/cb7dfc91-f3cf-4d17-813a-fe8731b0733f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNiN2RmYzkxLWYzY2YtNGQxNy04MTNhLWZlODczMWIwNzMzZiIsImV4cCI6MTc3MTcwODQ1OSwianRpIjoiNTc0ODkzYjdiNDVlNDBlNTg0NmUyNTYzNzMxMDk4NjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.JOKCrvea51JqMYm2lpl8VE3M1nWKTko46tNLKjB1kLs)

    ![Secure Data Share UI 2](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4a2a3cdb-0d2e-4b94-97d0-570f68031864?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRhMmEzY2RiLTBkMmUtNGI5NC05N2QwLTU3MGY2ODAzMTg2NCIsImV4cCI6MTc3MTcwODQ1OSwianRpIjoiN2IyYTM3MzJkNmI3NDM0NmExZDQ3MjAwMDAxNTkxZjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.2QNO7tf10vaj4VXr2sMxd77yULSc-gU__-sv2bmF1CQ)

    ![Secure Data Share UI 3](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1cfcdc39-1a84-4c4c-b813-1184861195f4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFjZmNkYzM5LTFhODQtNGM0Yy1iODEzLTExODQ4NjExOTVmNCIsImV4cCI6MTc3MTcwODQ1OSwianRpIjoiNmJkMDQyZGYzYzRmNGEzOTk0OWEwMjZlMDI3Y2MzN2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.vR2vYcUH5MFqoX8qkAINS5DV_PQIatGn6lWztTqAGiU)
