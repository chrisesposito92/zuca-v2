---
title: "1. Zuora Salesforce CRM sync cleanup for full synchronization"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/getting-started-with-zuora-connector-for-salesforce-crm/salesforce-refresh-best-practices-ensuring-seamless-data-transition/1.-zuora-salesforce-crm-sync-cleanup-for-full-synchronization"
product: "zuora-platform"
scraped_at: "2025-12-24T08:30:28.112Z"
---

# 1\. Zuora Salesforce CRM sync cleanup for full synchronization

Learn how to perform a sync cleanup operation in Zuora Salesforce CRM to ensure accurate data alignment during full synchronization.

Before initiating the refresh, it is essential to execute a sync cleanup operation on your tenant that is currently connected. This operation removes all Zuora data from Salesforce including account and related objects and product catalog, prompting the next synchronization to perform a comprehensive update. This thorough sync guarantees that your data is aligned accurately across platforms. To do this, take the following steps:

1.  First, select your username located in the upper right corner, then proceed to the Commerce section.
2.  On the following screen that appears, find the option labeled Synchronize Salesforce.com Data and click on it.
3.  Within the Manual Sync section, choose Product Catalog and then click the Clean Up button. ![clipboard_eba4fc0c36ce1a00789be7344d303bc79.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/8b4495a8-fef8-46b8-a467-ea6fd995908c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjhiNDQ5NWE4LWZlZjgtNDZiOC1hNDY3LWVhNmZkOTk1OTA4YyIsImV4cCI6MTc2NjY1MTQyNiwianRpIjoiOTdiNjkzY2VkM2I5NDE0ZmE3YzFjY2VhMDFlODZlNjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.tMtP7pa9NJV-_659GDZS8Qwt9rccFfARwrNyAs84r1Q)
