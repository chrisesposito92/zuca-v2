---
title: "Configure Notifications"
url: "https://docs.zuora.com/en/zuora-platform/system-management/command-center/zuora-trust-status-in-command-center/configure-notifications"
product: "zuora-platform"
scraped_at: "2025-12-24T05:06:02.768Z"
---

# Configure Notifications

Learn how to configure notifications to receive updates via email or webhook when Zuora incidents occur or component statuses change.

To receive updates when Zuora creates an incident, updates an incident, resolves an incident or changes a component status:

1.  Navigate to Trust Status and click the ![Subscribe to updates.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/537b6c93-24e4-4754-b9a1-60ee84c06a61?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUzN2I2YzkzLTI0ZTQtNDc1NC1iOWExLTYwZWU4NGMwNmE2MSIsImV4cCI6MTc2NjYzOTE2MSwianRpIjoiN2JmNzc2ZjFmMmU2NDkwYWE1Y2Y4ZjYwMjdlODYzMzgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.u3u5ztAUUKXTCllMnLaKX6VUiMrPHE4xk6HELGXz_ak) button on the top right.
2.  Select the type of notification you would like to receive: Email or Webhook

    -   For Email notifications -

        -   Click the ![Subscribe to email.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4f255513-f889-4379-bca9-c343167dfcb7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRmMjU1NTEzLWY4ODktNDM3OS1iY2E5LWMzNDMxNjdkZmNiNyIsImV4cCI6MTc2NjYzOTE2MSwianRpIjoiYTI3YWExNjM5ZGQzNGE1MTk1Y2FiOWNkYmUyN2U0NTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.g-ej5OKDko7hLPUI9b9vCgf5fJbJohQPsFxCIKZN434) button.

    -   For Webhook notifications -

        -   You can add a webhook only after you have an email associated with it to receive notifications about the webhook. See Atlassian Documentation for more detailed information on how webhook notifications work.

        -   Click ![Add webhook URL.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/506ae072-cac3-4e81-a15f-e5a586d87bdb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUwNmFlMDcyLWNhYzMtNGU4MS1hMTVmLWU1YTU4NmQ4N2JkYiIsImV4cCI6MTc2NjYzOTE2MSwianRpIjoiZmVlZWI4MTFmMjVhNGQwYTkxOTRjNmNmMGY5NmU0OTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.3OiEwcA1jhVp65H7KSoxX09z2pTtxm40qd65l7nWoEc) to add the URL. You can add up to 7 webhooks.



To understand the structure of a typical webhook response, review the example below:

{ "page": { "id": "f70d01brn2px", "name": "Zuora", "url": "https://trust.zuora.com", "time\_zone": "America/Los\_Angeles", "updated\_at": "2025-01-13T04:20:21.677-08:00" }, "incident": { "id": "zg7lksnxckc9", "name": "Intermittent API performance degradation for a subset of tenants on NA1 Production", "status": "monitoring", "created\_at": "2024-10-25T16:23:31.411-07:00", "updated\_at": "2024-10-25T16:23:31.411-07:00", "monitoring\_at": "2024-10-25T16:23:31.411-07:00", "impact": "none", "shortlink": "https://stspg.io/xtbw8j3hqx6q", "started\_at": "2024-10-24T08:47:41.339-07:00", "page\_id": "f70d01brn2px", "incident\_updates": \[ { "id": "d17tnz9351gp", "status": "monitoring", "body": "We continue to monitor the performance.", "incident\_id": "zg7lksnxckc9", "created\_at": "2024-10-25T16:23:31.411-07:00", "updated\_at": "2024-10-25T16:23:31.411-07:00", "display\_at": "2024-10-25T16:23:31.411-07:00", "affected\_components": \[ { "code": "fv9cbs0g91v0", "name": "AMERICAS - CLOUD 1 (NA1) - \*.na.zuora.com - Production API", "old\_status": "operational", "new\_status": "operational" } \] }, { "id": "19c4v3kfwxp4", "status": "monitoring", "body": "We have investigated an intermittent API performance degradation impacting a subset of tenants on the NA1 Production environment (na.zuora.com).\\nThe impacted windows were:\\n2024-10-23 9:25am to 3:16pm (Pacific)\\n2024-10-24 6:09am to 6:49am (Pacific)\\nMitigation measures were implemented, and the impact is resolved. We continue to monitor the performance.", "incident\_id": "zg7lksnxckc9", "created\_at": "2024-10-24T08:47:41.394-07:00", "updated\_at": "2024-10-24T08:47:41.394-07:00", "display\_at": "2024-10-24T08:47:41.394-07:00", "affected\_components": \[ { "code": "fv9cbs0g91v0", "name": "AMERICAS - CLOUD 1 (NA1) - \*.na.zuora.com - Production API", "old\_status": "operational", "new\_status": "operational" } \] } \], "components": \[ { "id": "fv9cbs0g91v0", "name": "Production API", "status": "operational", "created\_at": "2018-11-05T17:07:20.910-08:00", "updated\_at": "2024-11-28T02:21:44.322-08:00", "position": 2, "description": "URLs/Endpoints: https://rest.na.zuora.com/ (REST API)" } \] } }
