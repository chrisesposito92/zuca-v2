---
title: "Zuora 360+ overview"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/zuora-360-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T18:35:04.888Z"
---

# Zuora 360+ overview

Zuora 360+ synchronizes record changes from Zuora to Salesforce in near real time, supporting high data volumes, configurable syncs, and detailed data change tracking.

Zuora 360+ automatically synchronizes record changes in Zuora to Salesforce in near real time. Zuora 360+ enables you to:

-   Sync high data volumes in a reliable and timely manner. Zuora 360+ is built on a scalable architecture that supports greater concurrency and reduced latency for high sync volumes.

-   Configure what is synced at an object and record level.

-   View each data change event and errors during a sync process.

-   Retry sync if an error occurs.

-   Sync data on a variety of objects:

    -   Account

    -   Contact

    -   Feature

    -   Invoice

    -   Invoice Payment

    -   Payment

    -   Payment Method

    -   Rate Plan

    -   Rate Plan Charge

    -   Rate Plan Charge Tier

    -   Refund

    -   Refund Invoice Payment

    -   Subscription

    -   Invoice Item

    -   Taxation Item

    -   Credit Memo

    -   Credit Memo Item

    -   Credit Memo Part

    -   Debit Memo

    -   Debit Memo Item

    -   Payment Part

    -   Refund Part

    -   Subscriptions History

    -   Subscription Rate Plan History

    -   Subscription Product & Charge History

    -   Subscription Charge Tier History

    -   Product Catalog objects, including:
        Note: To sync product catalog data, you must have the Zuora Quotes managed package installed for your Salesforce org. For more information, see Zuora Quotes .

        -   Product

        -   Product Features

        -   Product Rate Plan

        -   Product Rate Plan Charge

        -   Product Rate Plan Charge Tier


Note:

If Zuora 360+ was enabled for your tenant before January 2021, draft invoices are synced. If Zuora 360+ was enabled after January 2021, only posted invoices can be synced, which aligns with the behavior of Zuora 360.

For the detailed object and field mapping information for Zuora 360+, see the following articles:

-   Sync Field Mapping of Account and Related Objects for Zuora 360+

-   Sync Field Mapping of Product Catalog and Related Objects for Zuora 360+

-   Sync Field Mapping of Subscription and Related Objects for Zuora 360+


If you are already on Zuora 360 and want to enable Zuora 360+, see the following articles to understand the object mapping differences between Zuora 360 and Zuora 360+:

-   New Object Types Supported Only When Zuora 360+ Enabled

-   Object Types Upgraded by Zuora 360+
