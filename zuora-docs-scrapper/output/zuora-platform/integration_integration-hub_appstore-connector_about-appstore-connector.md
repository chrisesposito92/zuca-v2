---
title: "About appstore connector"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/appstore-connector/about-appstore-connector"
product: "zuora-platform"
scraped_at: "2025-12-24T08:28:07.205Z"
---

# About appstore connector

The Appstore Connector facilitates seamless integration between external app stores and Zuora, ensuring accurate subscription data synchronization for effective management, billing, and reporting.

## Overview

The Appstore Connector enables seamless integration between external app stores (such as Apple App Store and Google Play Store) and Zuora. It ensures that subscription data from these external platforms is accurately reflected in Zuora, facilitating effective subscription management, billing, and reporting.

## Key capabilities

-   External Subscription Management: Synchronizes subscription statuses from external platforms with Zuora, including handling subscription states (active, canceled, expired) and providing a unified and up-to-date view of subscribers across both direct and mobile app store channels.

-   Standard Data Mapping : Maps key subscription data fields from external sources to Zuora's Data fields.

-   Extensibility: Utilize Zuora Notifications and Workflows for no-code or low-code customization of subscriber engagement, tailored to app store activity.


## Supported App Stores

-   Apple App Store

-   Google Play Store

-   Roku Pay


## Common use cases

-   Provisioning & Entitlement Management: Initiate third-party systems and processes by leveraging real-time webhooks sent from app stores through Zuora to your downstream systems.

-   Full Subscriber Lifecycle View: Obtain a comprehensive view of subscribers and subscriptions, replicated in Zuora for a unified perspective across all channels.

-   Extensibility Powered by Zuora: Utilize Zuora Workflow for no-code or low-code customization of subscriber engagement based on app store activity.

-   Highly Scalable & Real-Time Processing: Support high-scale consumer subscription businesses with the capability to process millions of subscription change events per hour.

-   Subscription Synchronization: Automatically update Zuora with subscription changes from app stores, ensuring accurate and timely data synchronization.

-   Unified Reporting: Generate consolidated reports on subscriptions from multiple external platforms, providing a unified view of your subscription data.


## Important considerations for App Store connectors

Initial Customer Acquisition

-   App Store Connectors do not handle initial customer acquisition flows due to the limited account information provided by app stores. This means that SUBSCRIPTION\_PURCHASED and INITIAL\_BUY events for Google and Apple are not processed by these connectors.

-   You must create mobile subscriber account and subscription records in Zuora to initiate subscription management. To initiate subscription management, you can use the omni-channel REST endpoint. This process allows for the seamless integration of external subscriptions (like those from Apple, Google, and Roku) directly into Zuora. For detailed instructions on how to use the REST API to create these accounts and subscriptions, refer to the Omni-Channel Subscription User Guide . This guide includes API endpoints, data requirements, and field mappings necessary to create accounts and manage subscriptions.


Subscription Status Management

-   After creating subscriber and subscription records, the connector will manage subscription statuses by referencing the ExternalSubscriptionID values you provide on the Omni-Channel Subscription object. To find the necessary ExternalSubscriptionID values for each platform, refer to the following setup resources:

    -   Apple Setup

    -   Google Setup

    -   Roku Setup

-   The connector relies on a match with ExternalSubscriptionID to update subscription statuses. If no match is found, such as when the ExternalSubscriptionID is missing, the connector cannot update these statuses. It matches these values with platform-specific transaction IDs in real-time event notifications from the app stores.


Apple App Store Connector

The Apple App Store Connector leverages app store server Notifications v2 to process real-time updates and changes in subscription status. The connector automatically supports both v1 and v2 server notifications. For detailed information, see Appstore connector’s processing logic and field mapping .

Zuora updates subscription statuses only upon receiving notifications directly from the App Store; it does not perform periodic queries to check for updates if notifications are delayed. You can configure this notification option by following the steps in our setup guide.

Revenue Recognition

-   Due to the data limitations from app stores, these connectors do not support Revenue Recognition within Zuora.

-   It is recommended to use reports directly from the app stores for revenue recognition and general ledger integration purposes.


Zuora Finance Integration

-   As a Zuora Finance customer, configure GL Segmentation rules and Accounting Codes to exclude app store-related subscription data from journal entries and revenue detail exports.

-   This helps in accurately managing and reporting financial data by segregating app store transactions.


One-Time In-App Purchases The App Store Connector syncs subscription purchases from app stores, focusing on recurring revenue management.

Family Sharing Metadata The connector supports syncing Family Sharing metadata and provides tools to customize account hierarchies to reflect family structures seamlessly.

Offer and Promo Code Metadata Zuora’s App Store Connectors efficiently sync subscription data for streamlined revenue recognition. For advanced use cases, the product and engineering teams are available to collaborate and explore tailored solutions.

Multiple Mobile Developer Accounts Zuora’s App Store Connectors are designed to integrate seamlessly with major app stores, ensuring robust support for subscription data synchronization.

Subscribe with Google Zuora’s App Store Connectors are designed to integrate with major app stores for subscription data synchronization. If you are exploring specific use cases, we encourage collaboration with the product and engineering teams to evaluate compatibility and requirements further.
