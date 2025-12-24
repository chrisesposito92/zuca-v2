---
title: "Configure advanced settings"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/install-netsuite-connector/configure-advanced-settings"
product: "zuora-platform"
scraped_at: "2025-12-24T08:25:35.628Z"
---

# Configure advanced settings

Learn how to configure advanced settings

## Overview

In the Advanced Settings screen, configure cutover dates and whether to disable sync operations for specific processes. Click Submit to make your settings effective for your NetSuite Connector instance.

-   See the following screenshot for the available advanced settings when Invoice Settlement is not enabled in your Zuora tenant. ![Connector_IV](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/19a07a4d-185c-437d-96f5-96ec5d1285fd?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE5YTA3YTRkLTE4NWMtNDM3ZC05NmY1LTk2ZWM1ZDEyODVmZCIsImV4cCI6MTc2NjY1MTEzMywianRpIjoiNTVkNTkwM2RkOTRmNDE3ZTg0Zjg3NTE1NWJiNWUyYjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.yC9H3BpV5LoXnDIlFenDJ7-4fu_o4B77geOcxUr824I)

-   See the following screenshot for the available advanced settings when Invoice Settlement is enabled in your Zuora tenant.
    Note: This feature is currently in development and is subject to change without advance notice. We are actively soliciting feedback from a small set of early adopters.
    ![clipboard_e356f7384f369068285ea8812e7885067.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e6af746e-24ee-4ece-baf5-8292c818994b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU2YWY3NDZlLTI0ZWUtNGVjZS1iYWY1LTgyOTJjODE4OTk0YiIsImV4cCI6MTc2NjY1MTEzMywianRpIjoiYTMxYjMzZWNmZGZlNDFlMzllZmZhNTM2YTIyZjI4MWMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.s7afUDfB7TJo_gUYJ5GIukhNbeW2kMy7vVEtZA3pNXA)


## Transaction cutover dates

When migrating data to Zuora Billing, you can set a cutover date to have the integration process ignore transactions created or modified prior to the cutover date. A cutover date can be specified for the following sync types:

-   Zuora Invoices

-   Zuora Payments

-   Zuora Payment Refunds

-   Zuora Invoice Item Adjustments (only available when Invoice Settlement is not enabled in your Zuora tenant)

-   Zuora Debit/Credit Memos (only available when Invoice Settlement is enabled in your Zuora tenant)

-   NetSuite Payments


This feature is intended to be used if both Zuora and NetSuite systems have been in use prior to NetSuite Connector setup and each contains data that will need to be manually replicated.

## Disable/force syncs

You can use the following options to disable or force syncs:

-   Disable Zuora Invoice Sync

-   Disable Zuora Payment Sync

-   Disable Zuora Payment Refund Sync

-   Disable Zuora Invoice Item Adjustment Sync (only available when Invoice Settlement is not enabled in your Zuora tenant)

-   Disable Zuora Product Rate Plan Charge Sync

-   Disable NetSuite Payment Sync

-   Disable NetSuite Credit Memo Sync (only available when Invoice Settlement is not enabled in your Zuora tenant)

-   Disable NetSuite Refund Sync

-   Force Zuora Product Catalog sync

-   Disable Customer Account Sync

-   Disable Zuora Credit Memo Sync (only available when Invoice Settlement is enabled in your Zuora tenant)
    Note: This feature is currently in development and is subject to change without advance notice. We are actively soliciting feedback from a small set of early adopters.

-   Disable Zuora Debit Memo Sync (only available when Invoice Settlement is enabled in your Zuora tenant)
    Note: This feature is currently in development and is subject to change without advance notice. We are actively soliciting feedback from a small set of early adopters.


Disable the sync processes if you are using a custom sync in place of the sync processes included as part of the NetSuite Integration. See [Disabling sync processes](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/using-netsuite-connector/disabling-sync-processes) for more information.

Note:

If you disable a sync without having a custom sync deployed, the NetSuite Integration may not sync properly.

## Avoid zero amount invoice items

This feature provides a convenient method to enable or disable the synchronization of zero amount invoice items during the Zuora to Netsuite invoice sync process when the "IS" feature is enabled.

## Credit Memo and refund sync preferences

By default, the NetSuite Credit Memo Sync and NetSuite Refund Sync processes are disabled. See [Credit Memo transactions](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/credit-memo-transaction-sync-netsuite-to-zuora) and [Refund transactions](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/refund-transaction-sync) for more information about these sync processes.

## Error handling

-   NetSuite Error Limit for Debugging: This option is ignored without enabling debug logging. If you choose 100 from the drop-down, the first 100 error messages from NetSuite are printed to the logs. If Default from the drop-down is selected, 50 errors are displayed. If debug logging is not enabled, errors are grouped and limited to a total of 10,000 characters for performance.


## Other settings

Use Standard Invoice Sync: If Zuora is calculating tax, select `Yes` to prevent NetSuite from applying taxation rules. If NetSuite is calculating tax, select `No`.

-   Zuora recommends that you use the default value, `Yes`, to use the Standard Invoice sync.
-   If you select `Yes - NetSuite Int'l Edition`, tax-related fields will not be mapped during the Zuora Invoice sync. This differs from the `No` values in that the subsequent transaction syncs (payment, refund) will continue to run.
-   If you select `No`, only Invoices will be synced from Zuora to NetSuite. Zuora will not modify the invoice header tax code and Zuora and NetSuite transactions (other than Invoices) will not be synced. If you are calculating tax in Zuora, you must confirm that sales tax is disabled for customers who are being charged sales tax in Zuora. Please contact Zuora before changing this setting to `No`.

Note:

If Zuora is calculating the tax, you must include the jurisdiction when you upload the tax information to Zuora. If you do not include the jurisdiction, NetSuite Connector will not sync the tax information.
