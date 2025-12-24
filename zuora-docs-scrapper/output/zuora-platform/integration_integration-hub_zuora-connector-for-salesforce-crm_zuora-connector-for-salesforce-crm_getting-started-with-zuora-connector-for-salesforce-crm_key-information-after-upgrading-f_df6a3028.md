---
title: "What is different?"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/getting-started-with-zuora-connector-for-salesforce-crm/key-information-after-upgrading-from-zuora-360/what-is-different"
product: "zuora-platform"
scraped_at: "2025-12-24T08:30:20.464Z"
---

# What is different?

Discover the enhanced sync capabilities after the upgrade, including real-time data synchronization, comprehensive sync reporting, failure retry options, object selection, and email notifications.

Once the upgrade is complete, you can expect the following changes to your sync capabilities:

-   Simplified Product Experience: With the upgrade, changed data in Zuora will synchronize to your Salesforce org in near real-time. Configuring batch sizes and batch modes will be deprecated.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/94250b0c-192c-4a46-8eb2-2a974566e49b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijk0MjUwYjBjLTE5MmMtNGE0Ni04ZWIyLTJhOTc0NTY2ZTQ5YiIsImV4cCI6MTc2NjY1MTQxOCwianRpIjoiM2U4NjEyMmY5ZTk5NGYyMThlNTFlN2NkNjU5MTE0NzIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.p9S4GAfnnhBhGbqNjh9lQ58ez4-zCImS4yST0l0WbFY)

-   Sync Execution Reporting: All sync reporting will be available on the Zuora System Health Dashboard, offering rich telemetry data on sync successes, failures, usage, and performance. You can filter data by object type, sync status, date range, and API action. Access the Zuora System Health Dashboard from the Zuora Connector for Salesforce CRM System Health Dashboard in the Zuora UI navigation panel.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ac9ebcbc-9bb5-4631-b2fd-abaea275f75d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFjOWViY2JjLTliYjUtNDYzMS1iMmZkLWFiYWVhMjc1Zjc1ZCIsImV4cCI6MTc2NjY1MTQxOCwianRpIjoiYTc2MzljNzQwMzYyNGNiMWIzZDEzNzI2YTFkYWJhNjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.r3crsI5x1KBNXzMTPbQBmtmxwflb3pGSSwPHDleGLiU)

-   Sync Failure Retry: All sync failures will be displayed in the "Failures" section of the System Health Dashboard, and any sync failures that permit manual retry can be initiated directly from the System Health Dashboard. For more information, see Failure retry function.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ce68e881-b10e-4d9b-8876-fd7850d9114f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImNlNjhlODgxLWIxMGUtNGQ5Yi04ODc2LWZkNzg1MGQ5MTE0ZiIsImV4cCI6MTc2NjY1MTQxOCwianRpIjoiZmUyNmVjODhiOTVjNDMzNDgzMGUyM2QxNTRlZjQyOWUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.JuBoliYrttLzpKj4HPiROHn-X7c1T_4SD-eQ977jKAA)

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c6e11b2b-2b15-4307-a235-bd32f8a420e1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImM2ZTExYjJiLTJiMTUtNDMwNy1hMjM1LWJkMzJmOGE0MjBlMSIsImV4cCI6MTc2NjY1MTQxOCwianRpIjoiMWFlYTA2NDA1NDc4NDZmNGJlMjg5YjI5MjVlMjhkYzYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.6TwuMvPbLJzTCgLGwfhvtLA-cx65-DJsH6jwYrGyT4s)

    For more information, see Enable objects for sync and manage sync results.

-   Object Selection Capability: You can now choose the objects you want to sync to your Salesforce org from the Sync Object Enablement configuration page. After the upgrade, all your Zuora objects will automatically switch from legacy sync to the new sync service.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/24c977c4-0372-446c-9833-dba3dda0d6f8?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI0Yzk3N2M0LTAzNzItNDQ2Yy05ODMzLWRiYTNkZGEwZDZmOCIsImV4cCI6MTc2NjY1MTQxOCwianRpIjoiZmQ1MzI0OGYwMGE4NGIwM2E4YTBlNGE0Y2JhOGNkNjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.lWgJl1SCTa2AQmSv4oToiIcItgv0Ir7E2Kl_UOuTZ1A)

    For more information, see Enable objects for sync and manage sync results.

-   Email Notifications: Set up email notifications for near real-time sync failures from the Zuora Central Platform UI. Instructions for setting up or editing existing email notification setups can be found in the Zuora Documentation Portal.

    ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/00f2553c-e9c0-483a-8375-6401e4bc839d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAwZjI1NTNjLWU5YzAtNDgzYS04Mzc1LTY0MDFlNGJjODM5ZCIsImV4cCI6MTc2NjY1MTQxOCwianRpIjoiMWY3NWYxNmNlMzI1NDI5ZDkyNTE1OTYxYTNiNWM5MGMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.JclBnoSXBwK8u45emlvkIRcR-Ur-XGgXnv44T-NaiWk)

    For more information, see Create and Edit Notifications.

    You can find a concise video detailing the mentioned changes [here](https://community.zuora.com/viewdocument/zuora?CommunityKey=f636065e-f534-4480-97df-2381079de0a3&tab=librarydocuments).
