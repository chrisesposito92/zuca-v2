---
title: "Notifications behavior"
url: "https://docs.zuora.com/en/zuora-platform/data-management/deployment-manager/deployment-manager-behavior-and-scope/scope-and-behavior-overview/notifications-behavior"
product: "zuora-platform"
scraped_at: "2026-02-19T03:18:43.647Z"
---

# Notifications behavior

This document outlines best practices for deploying notifications, including mapping display names, managing callout settings, and ensuring successful deployments.

The display names on the user interface of Notifications may be mapped to the following fields displayed on the compare screen of Deployment Manager.

| Configuration | Notifications User Interface | Display names on compare screen |
| --- | --- | --- |
| Basic Information | Related Event Name Description Active | Event Name Name Description Active |
| Event Parameters | Notifications Delivery Day | Param 1 Param 2 |
| Delivery Options | Email Callout Email Template Name Include Invoice PDF | Email Callout Email Template Name Param 4 |
| Merge Field and Parameter Settings | Merge Field Base Url HTTP Method Custom Request Entity Body Parameters | Not Supported in Deployment Manager Callout Base Url Http Method Use Custom Request Body Custom Request Body Content Type Callout Params- Parameter Value is Displayed |
| Retry Settings | Retry Settings | Callout Retriable |
| Callout Authentication | Username/Password OAuth OAuth 2.0 Provider | Callout Auth Callout Oauth 2 |
| Additional Options | Associated Account | Associated Account |

-   Password/OAuth is set to default value as "Test". Changing this field needs to be done manually. If the URL used in the callout is global, there is no action required. If it is environment specific, it needs to be changed manually.

-   Deployment Manager supports notification deployment preferences, allowing users to include or exclude the To, Cc, and Bcc fields during deployment from the Compare screen. By default, the checkbox is selected and email addresses are deployed from the source to the target configuration. If cleared, these fields are skipped and the target configuration remains unchanged.

    Note: When creating email templates in the target tenant, the To email address is a mandatory field.

-   Merge Field is not supported.
-   For successful deployments:

    -   Deploy Custom Fields, Custom Events, and Scheduled Custom Events before deploying Callout Notifications.
    -   After deploying Callout Templates (for both creation and updates), manually update the password field to ensure proper configuration.
    -   To maintain data consistency between the source and target, Zuora recommends deploying Reusable Blocks from the source tenant to the target tenant prior to deploying email templates. Otherwise, the deployment of email templates automatically includes the latest configuration of the associated reusable blocks.
