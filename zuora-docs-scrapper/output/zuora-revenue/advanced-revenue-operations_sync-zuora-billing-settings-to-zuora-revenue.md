---
title: "Sync Zuora Billing settings to Zuora Revenue"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/sync-zuora-billing-settings-to-zuora-revenue"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:37:32.009Z"
---

# Sync Zuora Billing settings to Zuora Revenue

Configure Zuora Revenue to process Billing data for revenue recognition using the RevPro3.0 Automate Datasync Setups Process.

Some Zuora Billing settings have an impact on how Billing data will be processed in Zuora Revenue for revenue recognition. It is important for Zuora Revenue to be configured appropriately based on these Zuora Billing settings before Zuora Billing object data can flow into Zuora Revenue. Therefore, the RevPro3.0 Automate Datasync Setups Process program is introduced in Zuora Revenue 37.003.00.00 and later to retrieve the important Zuora Billing settings and then automatically configure the profiles in Zuora Revenue accordingly.

Note:

In most circumstances, you need to run the RevPro3.0 Automate Datasync Setups Process program only once unless your Billing settings are changed afterward.

## Zuora Billing settings to be considered

The following table lists the Zuora Billing settings to be reviewed as well as the desired values for Billing - Revenue Integration to work. These settings are configured in Zuora Billing by navigating to Billing Settings > Define Billing Rules. To understand why some desired values are recommended this way, see [Best practices for using Billing - Revenue Integration](/zuora-revenue/advanced-revenue-operations/billing---revenue-integration/best-practices-for-using-billing---revenue-integration).

| Billing rule setting | Desired value |
| --- | --- |
| Enable credit back for removing or canceling one time charges? | Yes |
| Bill recurring charges for partial month (with monthly based billing periods)? | Yes |
| Bill recurring charges for partial week (with weekly based billing periods)? | Yes |
| Bill usage charges for partial month (with monthly based billing periods)? | Yes |
| Bill usage charges for partial week (with weekly based billing periods)? | Yes |
| Create credit memos mirroring invoice items? | Yes or Yes but do not create for zero balance invoice items |
| When prorating a month, assume 30 days in a month or use actual days? | Use actual number of days |
| When prorating periods greater than a month, prorate by month first, or by day? | Prorate by day |
| Invoice Past End-of-Term when Auto-Renew is OFF? | No |
| Invoice Past End-of-Term when Auto-Renew is ON? | No |

The following settings in Zuora Billing also have an impact on how Zuora Revenue will process the synced data. Therefore, these settings are also picked up by the RevPro3.0 Automate Datasync Setups Process program:

-   Whether the [Orders](/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders) feature is enabled
-   Whether the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/invoice-item-settlement/overview-of-invoice-item-settlement) feature is enabled
-   Whether the [Currency Conversion](/accounts-receivable/finance/zuora-finance-settings/currency-conversion-management/foreign-currency-conversion/configure-foreign-currency-conversion) feature is enabled.

## Auto-configured Zuora Revenue settings

After the above-mentioned Zuora Billing settings are retrieved by the RevPro3.0 Automate Datasync Setups Process program, it will automatically configure the following profiles in Zuora Revenue:

-   KS\_ENABLE\_ZBILL\_EXCHG\_RATE

-   KS\_ENABLE\_PENDING\_ORDERS\_GEN


## What to do next

After the RevPro3.0 Automate Datasync Setups Process program completes, the Billing - Revenue Integration environment is ready for the Billing data to flow into Zuora Revenue. To figure out how to initiate the data sync process, refer to the diagram as illustrated in [Run jobs for Billing - Revenue Integration.](/zuora-revenue/advanced-revenue-operations/run-revenue-sync-jobs)
