---
title: "NetSuite Connector sync concepts"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/netsuite-connector-sync-concepts"
product: "zuora-platform"
scraped_at: "2025-12-24T05:49:01.157Z"
---

# NetSuite Connector sync concepts

Concepts that apply to the Zuora NetSuite Connector sync processes

## General sync behavior

If no records are found to be synced for a given type of record, that process stops and NetSuite Connector moves to the next record type.

Records are validated and synced individually. For example, if the Connector finds ten invoices to be synced, but one invoice fails the validation logic, that one invoice is logged as a warning. The other nine invoices continue to sync to NetSuite.

## Deleting records

NetSuite Connector does not support the deletion of records. If you delete a record in the source application, the record will not be deleted in the destination application, even if the record has been synced.

## Inactivating records and deleting records manually

For master data records such as Customers and Products/Items, Zuora strongly recommends you inactivate the records instead of deleting them. Deleting the records can have accounting impacts and often is prevented by the application.

However, if you need to delete a record due to an unintended sync, delete the record from each application manually. If you do not want to delete the source record, clear the Integration ID and Integration Status fields from the record.

Next, refer to these topics:

-   [Integration status and error recovery](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/netsuite-connector-sync-concepts/integration-status-and-error-recovery)

-   [NetSuite classifications](/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/netsuite-connector-sync-concepts/netsuite-classifications)
