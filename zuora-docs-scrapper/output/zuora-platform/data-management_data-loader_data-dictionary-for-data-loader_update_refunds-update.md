---
title: "refunds update"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/update/refunds-update"
product: "zuora-platform"
scraped_at: "2026-02-19T03:17:21.680Z"
---

# refunds update

This reference page lists all fields in Refunds data dictionary.

.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Id* | The unique ID of a refund. For example, 4028905f5a87c0ff015a889e590e00c9. | string |
| Comment | Comments about the refund. | string [ 0 .. 255 ] characters |
| Integration Id NS | ID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Integration Status NS | Status of the refund's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Origin NS | Origin of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Reason Code | A code identifying the reason for the transaction. The value must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code. | string |
| Reference Id | The transaction ID returned by the payment gateway. Use this field to reconcile refunds between your gateway and Zuora Payments. You can only update the reference ID for external refunds. | string [ 0 .. 100 ] characters |
| Sync Date NS | Date when the refund was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Sync To Net Suite NS | Specifies whether the refund should be synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. | string <= 255 characters |
| Finance Information Bank Account Accounting Code | The accounting code that maps to a bank account in your accounting system. | string [ 0 .. 100 ] characters |
| Finance Information Transferred To Accounting | Whether the payment was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite. Enum: "Processing" "Yes" "No" "Error" "Ignore" | string |
| Finance Information Unapplied Payment Accounting Code | The accounting code for the unapplied payment. | string [ 0 .. 100 ] characters |
