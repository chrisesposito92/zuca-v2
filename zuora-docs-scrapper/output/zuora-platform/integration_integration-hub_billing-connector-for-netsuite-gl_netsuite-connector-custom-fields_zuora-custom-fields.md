---
title: "Zuora custom fields"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/netsuite-connector-custom-fields/zuora-custom-fields"
product: "zuora-platform"
scraped_at: "2025-12-24T08:26:03.738Z"
---

# Zuora custom fields

The fields that are added automatically to Zuora by NetSuite Connector.

This reference list the fields that are added automatically to Zuora by NetSuite Connector.

## Zuora objects synced by the integration

The following objects are synced during the NetSuite Integration:

-   Account

-   Product Rate Plan Charge

-   Invoice

-   Payment

-   Refund

-   Invoice Item Adjustment


Unless noted otherwise, all fields are `Text` type.

## Common custom fields

The following custom fields are added automatically to each synced object. These values are populated by the integration and should not be modified manually, except in some rare recovery scenarios.

| Field | Description |
| --- | --- |
| Integration ID | The Internal ID of the corresponding NetSuite record. |
| Integration Status | The current status of the integration. This field can have the following values:(Empty): Initial value, no activity has occurred.Sync Complete: The record has been synced successfully.Ignore: The record will no longer be considered for sync.Error: The record had an error during the previous sync. Check the sync logs for details.Other statuses indicate in-process activity and will vary by sync process. These include Syncing customer, Creating Invoice, and Updating Revenue Recognition. |
| Sync Date | The timestamp of when the record was synced. |

## Custom fields for specific objects

Additionally, specific custom fields are added to some Zuora objects.

## Customer custom fields

| Field | Description |
| --- | --- |
| Sync to NetSuite | If Zuora is configured as the customer master in the NetSuite Connector preferences, indicates whether this account should be synced to NetSuite or not. Defaults to "Yes". |
| NetSuite Customer Type | If Zuora is configured as the customer master in the NetSuite Connector preferences, is used to indicate whether the Account should be synced to NetSuite as a Company or Individual. |
| NetSuite Department | The full name of the NetSuite Department to use for this Account's transactions. See NetSuite Classifications for more details. Optional. |
| NetSuite Location | The full name of the NetSuite Department to use for this Account's transactions. See NetSuite Classifications for more details. Optional. |
| NetSuite Class | The full name of the NetSuite Department to use for this Account's transactions. See NetSuite Classifications for more details. Optional. |
| NetSuite Subsidiary | The full name of the NetSuite Subsidiary for this Account. Required for NetSuite OneWorld edition. The full name denotes the hierarchy of the Account, using a colon with a space on each side: My Parent Subsidiary : My Child Subsidiary |
| NetSuite Customer ID | When NetSuite is configured as the customer master in the NetSuite Connector preferences, displays the Customer ID. Read only. |

## Product Rate Plan Charge custom fields

| Field | Description |
| --- | --- |
| Item Type (picklist) | The type of NetSuite Item to create: Service, Inventory, or Non Inventory. Required. Must not be changed once synced to NetSuite. |
| NetSuite Recognized Revenue Account | The full name of the NetSuite Recognized Revenue GL Account for this Charge. Should be populated if Charge has a Revenue Recognition Code. |
| NetSuite Deferred Revenue Account | The full name of the NetSuite Deferred Revenue GL Account for this Charge. Should be populated if Charge has a Revenue Recognition Code. |
| NetSuite Department | The full name of the NetSuite Department to use for this Charge. See NetSuite Classifications for more details. Optional. |
| NetSuite Location | The full name of the NetSuite Department to use for this Charge. See NetSuite Classifications for more details. Optional. |
| NetSuite Class | The full name of the NetSuite Department to use for this Charge. See NetSuite Classifications for more details. Optional. |
| NetSuite Subsidiary | The full name of the NetSuite Subsidiary for this Charge. Required for NetSuite OneWorld edition. The full name denotes the hierarchy of the Account, including a colon with a space on each side: My Parent Subsidiary : My Child Subsidiary |
| NetSuite Subsidiary Include Children | Indicates whether the NetSuite Item should be available to child Subsidiaries or not. Optional. |
| NetSuite Revenue Recognition Start Date | When syncing Invoices, indicates what value should be used for the Invoice Item Rev Rec Start Date. See Delayed Revenue Recognition Rules for details. |
| NetSuite Revenue Recognition End Date | When syncing Invoices, indicates what value should be used for the Invoice Item Rev Rec End Date. See Delayed Revenue Recognition Rules for details. |
| NetSuite Revenue Recognition Template Type | When syncing Invoices, indicates the type of Rev Rec Template (Standard or Variable) configured as the Charge's Rev Rec Template. "Variable" should only be used if the corresponding NetSuite Rev Rec Template is configured as Project-based, meaning the recognition will be based upon project status entered in NetSuite. See Delayed Revenue Recognition Rules for details. |
