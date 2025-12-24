---
title: "Simultaneous refresh of Zuora central or developer sandbox with Salesforce SBX refresh"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/getting-started-with-zuora-connector-for-salesforce-crm/salesforce-refresh-best-practices-ensuring-seamless-data-transition/simultaneous-refresh-of-zuora-central-or-developer-sandbox-with-salesforce-sbx-refresh"
product: "zuora-platform"
scraped_at: "2025-12-24T08:30:43.638Z"
---

# Simultaneous refresh of Zuora central or developer sandbox with Salesforce SBX refresh

Guidelines for synchronizing Zuora Central or Developer Sandbox with Salesforce Sandbox refresh to maintain data integrity and prevent disruptions.

When considering the simultaneous refresh of Zuora Central or the Developer Sandbox along with the Salesforce Sandbox refresh, there are some key points to keep in mind:

-   When you refresh Zuora Central Sandbox (CSBX) or Developer Sandbox (DEV SBX), the Salesforce synchronization connection credentials, including both Salesforce and OAuth credentials, remain unchanged even after the refresh.

    ![Salesforce Credentials](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/efe73095-94ae-45cb-bac0-57f88a600351?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVmZTczMDk1LTk0YWUtNDVjYi1iYWMwLTU3Zjg4YTYwMDM1MSIsImV4cCI6MTc2NjY1MTQ0MiwianRpIjoiN2JkMjNkYjc2ODQ2NDZmODg0Y2E5MmIyZDIzNTQ0ODIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.3UtNhzvnVB-89J_7Jybngu12h5FlJSlvcBt1frujZyI)

    ![Using OAuth Credentials](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/9a26aa97-7282-413d-90a3-45ea26c8f577?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjlhMjZhYTk3LTcyODItNDEzZC05MGEzLTQ1ZWEyNmM4ZjU3NyIsImV4cCI6MTc2NjY1MTQ0MiwianRpIjoiZTUzZWJjY2EyYmY2NGMyZjk1NWNlMGY4YzE1MDUxMDciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.W_eFd3H4Z6knIqtKyWl0Il-hElBHNa5NgRwN6bpdn5s)

-   However, when you refresh your Salesforce Sandbox environment, it generates new Salesforce org ID, user ID, and associated security tokens. This process involves the deletion of the original Salesforce org. As a result, Zuora loses its connection with the original environment, causing real-time data synchronization from Zuora to Salesforce to fail.

-   To prevent system overload due to these failures, Zuora employs a throttling mechanism. This means that it temporarily blocks your syncs for a period of 3 hours or until the new details are configured in the user interface, whichever is shorter. After this, it attempts to retry the data synchronization.

-   To avoid such disruptions, it is highly recommended to follow these steps:

    -   First, pause the sync within the Zuora Salesforce sync settings UI page.

    -   Then, perform the refresh operations on both the Zuora and Salesforce sides.

    -   After the refresh is complete, re-establish the connection between Zuora and Salesforce.

    -   Finally, resume the sync to ensure smooth and uninterrupted data synchronization.


## Seamless transition for enhanced performance

By adhering to these Salesforce refresh best practices, you pave the way for a seamless data transition between platforms. This approach guarantees data integrity and ensures that your business processes continue to operate flawlessly even after the refresh.
