---
title: "Getting Started with Zuora Connector for Salesforce CRM"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/getting-started-with-zuora-connector-for-salesforce-crm"
product: "zuora-platform"
scraped_at: "2025-12-24T08:29:54.482Z"
---

# Getting Started with Zuora Connector for Salesforce CRM

Zuora Connector for Salesforce CRM enables seamless synchronization of data between Zuora and Salesforce, supporting high data volumes, object-level configuration, and error management.

Zuora Salesforce Connector enables you to:

-   Sync high data volumes in a reliable and timely manner. Zuora Connector for Salesforce CRM is built on a scalable architecture that supports greater concurrency and reduced latency for high sync volumes.

-   Configure what is synced at an object level.

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

    -   Rate Plan Charge Tier (Currently, this object is not accessible in the user interface. Submit a request at [Zuora Global Support](https://support.zuora.com/) to have this enabled/disabled.)

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

    -   Subscription Product Feature

    -   Subscription Charge Tier History

    -   Product Catalog objects: To sync product catalog data, you must have the Zuora Quotes managed package installed for your Salesforce org. For more information, see Zuora Quotes.

        -   Product

        -   Product Features

        -   Product Rate Plan

        -   Product Rate Plan Charge

        -   Product Rate Plan Charge Tier


    Note:

    The `Zuora_ZContact__c` object contains the `ZuoraCustomerAccount__c` field with a "Lookup" data type. In this field's settings, the option "What to do if the lookup record is deleted? Delete this record also" is selected.

    To sync the `Contact (Zuora_ZContact__c)` object, ensure that cascade delete for Lookup relationships is enabled. If not, the deletion of `Zuora_ZContact__c` or `ZuoraCustomerAccount__c` records may fail. Please contact Salesforce Support to enable cascade delete for Lookup relationships. To know more, refer [Cascade Delete for Lookup Relationship](https://help.salesforce.com/s/articleView?id=000382017&type=1).
