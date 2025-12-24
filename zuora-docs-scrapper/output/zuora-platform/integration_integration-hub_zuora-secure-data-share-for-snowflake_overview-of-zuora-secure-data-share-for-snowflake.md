---
title: "Overview of Zuora Secure Data Share for Snowflake"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-secure-data-share-for-snowflake/overview-of-zuora-secure-data-share-for-snowflake"
product: "zuora-platform"
scraped_at: "2025-12-24T18:33:15.745Z"
---

# Overview of Zuora Secure Data Share for Snowflake

Zuora Secure Data Share for Snowflake enables you to access your Zuora data through your organization's Snowflake account.

## Overview

Zuora Secure Data Share for Snowflake enables your organization to access your Zuora data directly from within your organization's own Snowflake account. Secure Data Share eliminates the engineering effort traditionally required to manage data extracts, integrations, and data schema changes. Secure Data Share also provides your team with instant access to Zuora's comprehensive subscription operational and analytical data to make timely data-driven decisions based on data insights.

Accessing your Zuora data in Snowflake enables you to:

-   Run reports and perform analytics on your Zuora data using your own business intelligence (BI) tool, using Snowflake as the data source. BI tools that offer native connections to Snowflake include:

    -   Microsoft Power BI

    -   Looker

    -   Tableau

    -   Qlik

    -   Domo


    For the complete list, see [Business Intelligence (BI)](https://docs.snowflake.com/en/user-guide/ecosystem-bi) in the Snowflake documentation.

-   Combine your Zuora data with other data in Snowflake to perform holistic analysis. For example, in data science applications such as predicting subscriber churn.

-   Use Snowflake's industry-leading data compute infrastructure to run high-speed queries against virtually unlimited volumes of Zuora data. You can run exploratory queries as needed to support your business.


## How Secure Data Share works

Your Zuora data is stored in a Snowflake account that is managed by Zuora. This data is then shared with your organization's Snowflake account so that you can query the data as if it were stored in your organization's Snowflake account. You have read-only access to the shared database.

In Snowflake terminology, Zuora manages a "provider account" and your organization's account is a "consumer account."

For more information about Secure Data Share, see [Introduction to Secure Data Share](https://docs.snowflake.com/en/user-guide/data-sharing-intro) in the Snowflake documentation.

## Automatic CSBX refresh in Secure Share for Snowflake

The automatic CSBX refresh in Secure Share for Snowflake ensures a seamless synchronization between your CSBX Snowflake account and the associated CSBX sandbox.

This automaton makes data refresh seamless and eliminates manual intervention or the need to contact support for any help.

When you initiate a CSBX sandbox refresh, it immediately triggers an automatic CSBX Snowflake account refresh. This automatic refresh ensures that your Snowflake secure share is up-to-date and consistent with the latest production data in your CSBX tenant.

However, in addition to the CSBX Sandbox account refresh time the CSBX Snowflake might take a little longer to have the latest updated data during the automatic data refresh process.

The automatic refresh functionality is exclusively applicable to billing tenants. If you are a Revenue customer with a secure share in your sandbox, [contact support](https://www.zuora.com/support-center/) if you clone your sandbox and need your secure share to be refreshed.

## How Refresh works

The Snowflake Secure Share connector syncs data incrementally as updates are made in your Zuora database. A key decision you will make is what refresh rate you want for your sync. Zuora offers 5-minute, 15-minute, 60-minute, 12-hour, and 24-hour refresh options. The refresh rate you select determines when the sync process starts, with updates appearing in shared views shortly after processing is complete.

Refreshes in the Snowflake Secure Share connector occur in two main phases:

1.  Refresh Timing:

    -   The sync starts at intervals based on your selected refresh rate (e.g., hourly, every 15 minutes). For instance, if you select an hourly refresh rate, syncs will begin at 11:00 AM, 12:00 PM, 1:00 PM, and so on. Your selected refresh rate determines when the sync process starts.


2.  Processing Time

    -   Once the sync begins, it requires time (X minutes) to process the data and make it available in Snowflake shared views. The exact processing time depends on factors such as the data volume and system activity during the sync. The processing time occurs after the sync begins and varies based on your setup.



Over 95% of updates made during a given hour will be captured and reflected in the refresh at the top of the hour. However, due to the eventual consistency model, updates made toward the end of the hour may miss the refresh at the top of the hour and get processed in the following cycle. Records updated just before the hour ends may not be processed until the next refresh cycle.

## Example: Hourly refresh

1.  A new record is created at 11:45 AM in your Zuora database.

2.  The first refresh cycle starts at 12:00 PM.

    -   Most data, including the new record, will be synced and available in Snowflake shared views shortly after 12:00 PM, typically within 15 minutes (e.g., by 12:15 PM).


3.  If the record is not synced in the first cycle, it will be available in the next refresh cycle starting at 1:00 PM.


## Points to remember

-   Refresh Rate Defines Start Time: Syncs start at specific intervals (e.g., 1:00 PM, 2:00 PM) based on your selected refresh rate.

-   Processing Time: Syncs require additional processing time after they start to reflect updates in Snowflake shared views. This typically takes 15-30 minutes, depending on data volume and system activity.

-   Two-Cycle Completion: For 100% data availability, allow for two refresh cycles, accounting for processing time in each.


For more information about the SLOs or the refresh process, please contact your Zuora representative.

## Snowflake cost considerations

The following table describes how Snowflake storage and compute costs are handled for the shared database:
| Snowflake storage costs | Snowflake compute costs |
| --- | --- |
| Zuora covers all storage costs associated with the shared database. Your organization will incur no additional storage costs for accepting Zuora's shared database. | Zuora does not cover your compute costs associated with querying the shared database. Your organization will pay Snowflake directly for compute costs incurred from querying the shared database. |

## Licensing Details for Zuora Secure Data Share for Snowflake

Zuora Secure Data Share for Snowflake is licensed on a per-tenant basis . This means that each individual tenant requires its own license, regardless of the type (Billing or Revenue) or environment (Production, Sandbox, Development, etc.).

Example:

If you require Zuora Secure Data Share for the following:

-   Billing Production

-   Billing Sandbox

-   Revenue Production

-   Revenue Sandbox


You will be required to purchase four licenses in total.

Note:

Zuora Secure Data Share for Snowflake license does not cover both Billing and Revenue tenants. Licenses are tenant specific and are not shared between Billing and Revenue. And separate licenses are required for each tenant.

License cannot be transferred from one tenant to another. Licenses are non transferrable and must be purchased for each individual tenant.
