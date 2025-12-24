---
title: "Synchronize NetSuite payments with Zuora post-upgrade"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/enable-invoice-settlement-to-support-netsuite-connector/synchronize-netsuite-payments-with-zuora-post-upgrade"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:06.068Z"
---

# Synchronize NetSuite payments with Zuora post-upgrade

Know how to synchronize NetSuite payments with Zuora

Enabling Zuora Sync Updates in NetSuite streamlines payment synchronization with Zuora, reducing manual intervention and ensuring smooth data flow between systems. The transition from Invoice Settlement Off to Invoice Settlement On will result in important modifications to the payment synchronization process from NetSuite to Zuora.

Modify the NetSuite field for Zuora sync updates. The Zuora Sync Updates field is crucial for seamless synchronization. The List/Record Type field in NetSuite contains `Yes` or `No` values. Setting the default value to `Yes` streamlines payment creation and eliminates manual updates.

Perform these steps to set the default value to the Zuora Sync Updates field.

1.  Log in NetSuite as an administrator. Navigate to Customization from the main menu.
2.  Go to Lists, Records, & Fields, and choose Transaction Body Fields.
3.  Locate the field labeled Zuora Sync Updates within Transaction Body Fields.
4.  Navigate to the validation and defaulting subtab within the Zuora Sync Updates field settings. Set the default selection to Yes and click Save.

    Note:

    The Zuora Sync Updates field must be populated for record synchronization from NetSuite payments to Zuora after migrating to Invoice Settlement On. The connector requires a value in this field to pick up records.
