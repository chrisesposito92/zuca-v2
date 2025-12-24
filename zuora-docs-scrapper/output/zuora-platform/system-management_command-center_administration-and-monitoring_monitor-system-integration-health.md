---
title: "Monitor system integration health"
url: "https://docs.zuora.com/en/zuora-platform/system-management/command-center/administration-and-monitoring/monitor-system-integration-health"
product: "zuora-platform"
scraped_at: "2025-12-24T05:05:25.554Z"
---

# Monitor system integration health

The Overview section displays your environment status and the system's health at a glance. The environment's health is color-coded to indicate status and, when clicked, shows detailed activity metrics over time as data cards.

As indicated in the following graphic, you can inspect the system health for the last 24 hours.

![Command Center](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/6e304460-db66-4512-a49f-b1bf2fd7c47a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjZlMzA0NDYwLWRiNjYtNDUxMi1hNDlmLWIxYmYyZmQ3YzQ3YSIsImV4cCI6MTc2NjYzOTEyMywianRpIjoiNTUxOGRmZGVjMDYyNGQ5MWFjNzIyZmNhYTRmN2VlNWMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.syCMiUH77WaHTo2KBrwG-jSiY4Tvxp3NxEP-smwv5HM)

Complete the following steps to check your system health:

1.  Select a tenant associated with your company from the drop-down list at the top right. A subsequent drop-down appears if you are a multi-entity organization, allowing you to choose an entity name as displayed in the above graphic. For example, Production - NA indicates the tenant name and Global ID represents the entity. Note: System health data displays findings at the entity level. By default, you will see the status individually for Billing, Platform, and Connect. If you are a Zuora Revenue customer, you will see Revenue.
2.  View Zuora's component status.

    -   Red: Indicates that one or more child metrics are affected due to request failures or other issues related to an instance or an environment, and further investigation is required.

    -   Green: Indicates that the instance has passed the health check and reports nil problems.


3.  View the child metrics data card with details such as error count, order intake, performance, and taxation. You can click a metric to log in and view the detailed health statistics to investigate the issue further.
4.  To access the tenant and click the card through, migrate your local user account or create user groups. For more information, see Manage user and group provisioning in OneID.

The threshold limits that change the environment's health status from green to red can be viewed in the following image:

![clipboard_e403a5d8ff499a12fc05777ab5b952bc0.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/93a99715-c01c-4693-887d-7e8c4cb1ff1b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjkzYTk5NzE1LWMwMWMtNDY5My04ODdkLTdlOGM0Y2IxZmYxYiIsImV4cCI6MTc2NjYzOTEyMywianRpIjoiN2EyMmFmZDFlOTlkNDQ2NjllM2RkOWU0MmQ2NWU5MGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.y-AWuW1VhnUzg1whH7bIiJUAWdrI3s-qP-Ayb5pX4Gg)
