---
title: "Limitations"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/billing-connector-for-netsuite-gl/integration-between-zuora-and-netsuite/zuora-netsuite-custom-field-sync/limitations"
product: "zuora-platform"
scraped_at: "2025-12-24T05:51:03.112Z"
---

# Limitations

Learn about the limitations of the Zuora NetSuite Custom Field sync

1.  Only one connect app instance per tenant can have custom field sync settings.
2.  Custom fields will be supported only for IS enabled customers from Zuora to Netsuite sync.
3.  Custom field sync is not supported when multithreading is enabled.
4.  It can support up to 200 records per sync.
5.  If the main fields of the object are synced successfully but only the custom fields sync fails, there will not be another dedicated process to support only custom fields sync. This needs to be handled externally, where there will be a NetSuite Integration Status for indication.
6.  Custom field sync will be supported only while creating new records.
7.  Custom field sync will not be supported when syncing invoices with large invoice items greater than or equal to 4000.
8.  The NetSuite Integration status is marked as \`Sync Complete\` but the custom fields have not been synced in NetSuite because the update custom fields API response that is returned from NetSuite does not return any error when it fails to update the data.
9.  If a customer has enabled the NetSuite connector custom field setting in the production environment and has a Central Sandbox tenant copy from that production environment, contact [Zuora Support](mailto:support@zuora.com) to turn on the custom field setting in the Central Sandbox tenant.
