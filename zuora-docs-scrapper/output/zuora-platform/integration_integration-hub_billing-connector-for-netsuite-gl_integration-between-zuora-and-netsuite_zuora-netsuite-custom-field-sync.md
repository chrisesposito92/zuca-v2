---
title: "Zuora NetSuite custom field sync"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/zuora-netsuite-custom-field-sync"
product: "zuora-platform"
scraped_at: "2025-12-24T05:50:56.873Z"
---

# Zuora NetSuite custom field sync

Learn about the Zuora NetSuite custom field sync

This article discusses the nuances of custom field support in Zuora for NetSuite Connector.

Note:

This feature is available only for customers with Invoice Settlement.

## Prerequisites

1.  Install Billing NetSuite Connector.
2.  Ensure to create "free-form text" type Custom Field in Netsuite before initiating custom field mapping in NetSuite Connector.

| Object in Zuora | Object in NetSuite | NetSuite Custom Field Category |
| --- | --- | --- |
| Account | Customer | Customer Entity Fields |
| Invoice | Invoice | Customer Transaction Body Fields |
| Product | Non InventoryInventoryService Sale Item | Custom Item Fields |
| Product Rate Plan | Non InventoryInventoryService Sale Item | Custom Item Fields |
| Product Rate Plan Charge | Non InventoryInventoryService Sale Item | Custom Item Fields |
| Credit Memo | Credit Memo | Custom Transaction Body Fields |
| Payment | Customer Payment | Custom Transaction Body Fields |

## Custom field mapping

To initiate Custom Field mapping In your Zuora Tenant, navigate to the Billing section from your settings icon. Click Manage Netsuite Billing Connector Custom Field Settings.

![Manage billing doc sett.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/868e3bc0-13fd-4adb-ab19-f46913faa1b1?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijg2OGUzYmMwLTEzZmQtNGFkYi1hYjE5LWY0NjkxM2ZhYTFiMSIsImV4cCI6MTc2NjY0MTg1NCwianRpIjoiOTlhODc1Y2U2NjMxNDhjZDkwZTJmYTdkOTRmZjU2Y2IiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.tqpXWJQIjmvAricsqlsyNNZ8rhbl0wghsob1BF3upwk)

## Set up mapping in the Zuora UI: General settings

1.  To start with Custom Field Mapping, ensure to enable the checkbox for Custom Field Sync.
2.  Obtain the Account ID and Instance ID from the Connect UI app. To do this, you will need access to the Zuora Connector for Netsuite in Connect apps.
    -   For the Account ID: In your Zuora Connect app, navigate to Zuora Connector for Netsuite > Logs > Account ID.
    -   For the Instance ID: In your Zuora Connect app, navigate to Zuora Connector for Netsuite > Logs > Instance ID.
3.  With Custom Field Mapping in Zuora, you can map the object of your choice. Besides, you can either map any one of the objects or map all of them together.
4.  Below are the different fields in the Zuora Mapping UI.
    -   Zuora Custom Field: The name of the Zuora Custom Field
    -   NetSuite Custom Field ID: The ID of the Netsuite Custom Field
    -   NetSuite Custom Field Internal Id: The internal ID of the Netsuite Custom Field

## Custom Field sync process: Overview

The following sections provide an overview of the Custom Field sync process.

## Criteria to pick up records for syncing

1.  The record should be newly created and not synced previously.
2.  The other criteria for picking up the records will remain the same as per individual objects criteria.

## Custom Field sync trigger order

The custom fields will be synced after the records have been created in NetSuite successfully with the standard fields. If the custom fields fail to sync due to any error, please refer to the troubleshooting section to understand the causes of failure.

## New NetSuite integration status

There are two new integration statuses added in Zuora related object that support custom fields sync:

1.  Updating custom fields: This implies that the record has been created in NetSuite with the standard fields and now the custom fields are starting to sync in NetSuite.
2.  Error updating custom fields: This implies that the custom field sync process was triggered but it failed to update the data in NetSuite. Please refer to the troubleshooting section to understand the causes and resolution.

Next, refer to these topics:

-   [Troubleshooting](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/zuora-netsuite-custom-field-sync/troubleshooting)

-   [Limitations](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/zuora-netsuite-custom-field-sync/limitations)
