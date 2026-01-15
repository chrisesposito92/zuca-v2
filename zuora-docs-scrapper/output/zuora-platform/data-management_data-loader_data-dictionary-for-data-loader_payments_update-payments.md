---
title: "Update payments"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/payments/update-payments"
product: "zuora-platform"
scraped_at: "2026-01-15T21:57:28.839Z"
---

# Update payments

This reference article lists all the fields associated with the Update Payments data dictionary.

Note: Fields with an asterisk mark indicate mandatory fields.

| Object | Field Name | Value | Required to Update | Description |
| --- | --- | --- | --- | --- |
| Payment | id* | STRING | Required for updating the payment record | The unique ID of an unapplied payment. For example, 8a8082e65b27f6c3015b89e4344c16b1. |
| Payment | Comment | STRING [ 0 .. 255 ] characters | Optional | Comments about the payment. |
| Payment | Origin NS | STRING <= 255 characters | Optional, Applicable with Netsuite Integration | Origin of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Payment | Payment Schedule Key | STRING | Optional | The unique ID or the number of the payment schedule to be linked with the payment. See Link payments to payment schedules for more information. |
| Payment | Reference Id | STRING [ 0 .. 100 ] characters | Optional | The transaction ID returned by the payment gateway. Use this field to reconcile payments between your gateway and Zuora Payments. You can only update the reference ID for external payments. |
| Payment | GatewayState | STRING | Optional | This field is mainly used for gateway reconciliation. You must have the Edit Payment Gateway Status user permission to update this field. Enum: "NotSubmitted" "Submitted" "Settled" "FailedToSettle". |
| Container for the finance information related to the payment. | Finance Information Accounting | object | Optional | Container for the finance information related to the payment. For a standalone payment, the finance information cannot be updated. |
| Container for the finance information related to the payment. | Finance Information Bank Account Accounting Code | STRING [ 0 .. 100 ] characters | Optional | The accounting code that maps to a bank account in your accounting system. |
| Container for the finance information related to the payment. | Finance Information Unapplied Payment Accounting Code | STRING [ 0 .. 100 ] characters | Optional | The accounting code for the unapplied payment. |
| Container for the finance information related to the payment. | transferredToAccounting | STRING | Optional | Whether the payment was transferred to an external accounting system. Use this field for integration with accounting systems, such as NetSuite. Enum: "Processing" "Yes" "No" "Error" "Ignore". |
| Payment | IntegrationId__NS | string <= 255 characters | Optional, Applicable with Netsuite Integration | ID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Payment | IntegrationStatus__NS | string <= 255 characters | Optional, Applicable with Netsuite Integration | Status of the payment's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Payment | SyncDate__NS | string <= 255 characters | Optional, Applicable with Netsuite Integration | Date when the payment was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Payment | Transaction__NS | string <= 255 characters | Optional, Applicable with Netsuite Integration | Related transaction in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
