---
title: "Sync Failures and Retries"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/sync-failures-and-retries"
product: "zuora-platform"
scraped_at: "2025-12-24T08:32:41.242Z"
---

# Sync Failures and Retries

This article provides an overview of managing data sync between Zuora and Salesforce CRM, including common causes of sync failures, automatic retry mechanisms, and manual intervention processes.

## Overview

Keeping your Zuora and Salesforce CRM data in sync is important, but occasional failures can occur. Here's a quick rundown of what to expect:

-   Common Causes: Sync failures can happen due to expired Salesforce integration user credentials, Salesforce throttling Zuora's requests (rate limiting), or missing CRM IDs on the records being synced.

-   Automatic Retries: Don't worry about temporary hiccups! Zuora automatically retries failed sync attempts for you.

-   Manual Intervention Needed: However, these retries have a limit. This section will explain Zuora's retry process and how to manually retry a failed sync if needed.


## Sync retry process

Zuora Connector for Salesforce CRM's daily retry job to sync objects that were failed to sync is triggered twice a day, at 11:30 AM and 1 1:30 PM UTC . It retrieves records within the past 7 days , processing 50,000 records at a time.

Note:

Zuora tries retries for all records except when encountering a DACO-02 error code. This error code indicates that a Parent billing account is missing a CRM ID. For further details and more information on error codes, see the Sync Errors Reported section.

![Image: image](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/255db796-d44b-4cc9-92ef-11d33c63f48f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI1NWRiNzk2LWQ0NGItNGNjOS05MmVmLTExZDMzYzYzZjQ4ZiIsImV4cCI6MTc2NjY1MTU1OCwianRpIjoiMGEzNDE5YmEzYjg3NDQyMTkxYTc4N2M2MmE0NzVlM2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.c6JLIgHm5qU4uCwVVgWesaDztsz6wyo2wjNiimGKxtA)
