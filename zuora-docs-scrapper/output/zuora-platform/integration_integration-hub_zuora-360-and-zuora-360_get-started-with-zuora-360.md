---
title: "Get started with Zuora 360+"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-360-and-zuora-360/get-started-with-zuora-360"
product: "zuora-platform"
scraped_at: "2025-12-24T18:33:33.536Z"
---

# Get started with Zuora 360+

Zuora 360+ is an advanced feature built on the Zuora 360 Salesforce package, enabling seamless integration and synchronization of data between Zuora and Salesforce.

Note:

To take advantage of more advanced features, we recommend that you upgrade to Zuora Connector for Salesforce CRM .

## Install Zuora 360 Salesforce package

Zuora 360+ is built on top of the Zuora 360 Salesforce package. Therefore, the Zuora 360 Salesforce package must be installed before enabling Zuora 360+, and no other package is required.

Zuora 360 package version needs to be on version 5.5 or higher to enable Zuora 360+. If you are already on an earlier version, contact Zuora Global Support to get the latest installation link, then follow the instructions in the "Enable Zuora 360+ in Zuora" section to get Zuora 360+ enabled.

If you have not installed the Zuora 360 package yet, contact your Zuora sales representative to make a purchase, then install Zuora 360 . Subsequently, you need to set up Sync Credentials to Connect to Salesforce . The purpose of this step is to set up a secure connection between your Salesforce organization and Zuora tenant.

## Enable Zuora 360+ in Zuora

Note:

We highly recommend that you test Zuora 360+ in API Sandbox or Central Sandbox prior to enabling it in Production.

After you have installed the Zuora 360 package, you can navigate to Settings > Commerce > 360+ Object Enablement in the Zuora UI to configure the objects that will be synced. From the hierarchical list of objects, select all objects that you want to sync, and click Save after you complete the configuration. Then Zuora 360+ is enabled for your Zuora tenant. In the object enablement page, once you enable some objects, 360+ becomes active and syncs in near real time. It can take up to 10 minutes for Zuora 360+ to get data changes synced after it is enabled.

Note that you can select the following objects only if the Invoice Settlement feature is enabled on your Zuora tenant:

-   Credit Memo

-   Credit Memo Item

-   Credit Memo Part

-   Debit Memo

-   Debit Memo Item

-   Payment Part

-   Refund Part


For the detailed information about objects and fields mapping between Zuora and Salesforce after enabling Zuora 360+, see the following articles:

-   Sync Field Mapping of Account and Related Objects for Zuora 360+

-   Sync Field Mapping of Product Catalog and Related Objects for Zuora 360+

-   Sync Field Mapping of Subscription and Related Objects for Zuora 360+


## Configure Zuora 360+

After you have installed Zuora 360 and enabled Zuora 360+, you can proceed to configure Zuora 360+ in your Salesforce organization.

Follow the instructions in Configuration for Zuora 360+ to complete the configuration.

## Work with Zuora 360+

You can now use Zuora 360+ to sync objects and fields from Zuora, and perform different tasks with the synced data. See Work with Zuora 360+ to learn more.
