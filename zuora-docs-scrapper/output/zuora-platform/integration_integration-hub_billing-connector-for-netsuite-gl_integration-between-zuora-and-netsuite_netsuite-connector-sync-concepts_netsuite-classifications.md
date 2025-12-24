---
title: "NetSuite classifications"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/netsuite-connector-sync-concepts/netsuite-classifications"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:07.228Z"
---

# NetSuite classifications

A series of classifications fields that you can be use to segment and categorize transactions and items for reporting and accounting rollup purposes

NetSuite has a series of classifications fields that you can be use to segment and categorize transactions and items for reporting and accounting rollup purposes. NetSuite Connector gives you flexibility in configuring the values and rules for applying classifications when syncing records from Zuora to NetSuite.

## Classification fields

The NetSuite classification fields include:

-   Location

-   Department

-   Class

-   Subsidiary (subsidiaries will be used only if you have NetSuite OneWorld edition.)


The use of classifications is optional, and any configuration will be determined by your NetSuite implementation and how you want to track transactions in NetSuite.

Classification fields will not be populated in Zuora for transactions synced from NetSuite.

## Configuration

You can configure the classifications in multiple locations:

-   The "global" level within the NetSuite Connector setup

-   The Zuora customer account level

-   The Zuora product rate plan charge level


When specifying a value, enter the exact name of the classification found in NetSuite. If the classification is part of a hierarchy of values, you must enter the "full path" of the value, separating each level with three characters: space-colon-space (" : ").

For example, assume your NetSuite Location list looked like the following:

-   Americas

    -   North America

        -   Eastern

        -   Western

    -   South America

-   Europe


To specify the location `Eastern`, enter the following:

`Americas : North America : Eastern`

In addition, the NetSuite Connector setup includes preferences to determine the precedence that NetSuite Connector should use for department, location, and class values when syncing transaction header and detail records, whether from the Zuora Customer Account or the Product Rate Plan Charge. See "Classification Mapping Rules," below, for more information.

## Classifications mapping rules

NetSuite Connector includes specific mapping rules that apply to department, location, and class values, and additional rules that apply to subsidiaries.

## Department, location, class

Department, location, and class values will be mapped as follows:

-   For customer accounts, the value on the customer account will be used, if populated. Otherwise, the NetSuite Connector default will be used.

-   For product rate plan charges, the value on the product rate plan charge will be used, if populated. Otherwise, the NetSuite Connector default will be used.

-   For transaction "headers" (invoice, credit memo, payment, refund), the value on the customer account will be used, if populated. Otherwise, the NetSuite Connector default will be used.

-   For transaction "details" (invoice, credit memo), if the NetSuite Connector option Invoice Line xxx Mapping is set to `Zuora Account`, the value on the customer account will be used, regardless of whether it is populated or not (the NetSuite Connector default is not considered). If the NetSuite Connector option Invoice Line xxx Mapping is set to `Zuora Charge`, no value is mapped. This allows NetSuite to automatically populate the value from the referenced NetSuite Item.

    -   If the NetSuite Connector option Invoice Line xxx Mapping is set to `Zuora Account` and there is no value set for Zuora Account, but the NetSuite item has a value, the value from the NetSuite item will be used on the transaction detail (populated automatically by NetSuite).

    -   If you are using subsidiaries, the location referenced on a given invoice item must be valid for the subsidiary of the customer referenced on that transaction. Review the NetSuite item master for more information.


## Subsidiaries

If the NetSuite Connector sync option NetSuite Subsidiaries is set to `Yes` , subsidiary values will be mapped as follows:

-   For customer accounts, the subsidiary value on the customer account will be used, if populated. Otherwise, the NetSuite Connector default subsidiary will be used.

-   For product rate plan charges, the subsidiary value on the product rate plan charge will be used, if populated. Otherwise, the NetSuite Connector default subsidiary will be used. In addition, the Include Children field is mapped from the product rate plan charge. There is no NetSuite Connector default value.

-   For transactions, the subsidiary is derived automatically by NetSuite from the referenced NetSuite customer record.


Subsidiaries will be used only if you have NetSuite OneWorld edition.

The subsidiary cannot be changed for an existing customer record. Because of this, the subsidiary is not mapped when updating records.
