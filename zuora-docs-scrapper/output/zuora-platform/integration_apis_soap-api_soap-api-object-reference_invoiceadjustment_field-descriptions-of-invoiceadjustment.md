---
title: "Field descriptions of InvoiceAdjustment"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoiceadjustment/field-descriptions-of-invoiceadjustment"
product: "zuora-platform"
scraped_at: "2026-02-19T03:28:28.615Z"
---

# Field descriptions of InvoiceAdjustment

This reference provides the description of the fields of the InvoiceAdjustment object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to Create? | Allowed Operations | Description |
| --- | --- | --- | --- |
| AccountId | optional | Query Filter | The ID of the account that owns the invoice.Type : zns:ID Character limit : 32 Version notes : -- Values : inherited from Account .ID for the invoice owner |
| AccountingCode | optional | Create Query Filter | The accounting code for the invoice adjustment. Accounting codes group transactions that contain similar accounting attributes.Type : string Character limit : 100 Version notes : -- Values : an accounting code that is in your Zuora Chart of Accounts and is active |
| AdjustmentDate | optional | Create Query Filter | The date when the invoice adjustment is applied. This date must be the same as the invoice's date or later.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29 Version notes : -- Values : Leave null to automatically generate the current date |
| AdjustmentNumber | optional | Query Filter | A unique string to identify an individual invoice adjustment.Type : string Character limit : 255 Version notes : -- Values : automatically generated |
| Amount | required | Create Query Filter | The amount of the invoice adjustment.Type : decimal (currency) Character limit : 16 Version notes : -- Values : a valid currency amount |
| CancelledById | optional | Query Filter | The ID of the Zuora user who canceled the invoice adjustment. Zuora generates this read-only field only if the adjustment is canceled.Type : zns:ID Character limit : 32 Version notes : -- Values : automatically generated |
| CancelledOn | optional | Query Filter | The date when the invoice adjustment is canceled. Zuora generates this read-only field if this adjustment is canceled.Type : dateTime Character limit : 29 Version notes : -- Values : automatically generated |
| Comments | optional | Create Query Filter | Use this field to record comments about the invoice adjustment.Type : string Character limit : 255 Version notes : -- Values : a string of 255 characters or fewer |
| CreatedById | optional | Query Filter | The user ID of the person who created the invoice adjustment.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| CreatedDate | optional | Query Filter | The date the invoice adjustment was created.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values : automatically generated |
| CustomerName | optional | Query Filter | The name of the account that owns the associated invoice.Type : string Character limit : 50 Version notes : -- Values : inherited from Account .NameNote : This value changes if Account.Name is updated. The values of UpdatedById and UpdatedDate for the InvoiceAdjustment do not change when Account.Name is updated. |
| CustomerNumber | optional | Query Filter | The unique account number of the customer's account.Type : string Character limit : 70 Version notes : -- Values : inherited from Account .AccountNumberNote : This value changes if Account.AccountNumber is updated. The values of UpdatedById and UpdatedDate for the InvoiceAdjustment do not change when Account.AccountNumber is updated. |
| Id | optional | Query Filter | The ID of this object. Upon creation, the ID for this object is InvoiceAdjustmentId .Type : zns:ID Character limit : 32 Version notes : -- Values : automatically generated |
| ImpactAmount | optional | Query Filter | The amount that changes the balance of the associated invoice.Type : decimal (currency) Character limit : 16 Version notes : -- Values : automatically calculated |
| InvoiceId | optional | Create Query Filter | The ID of the invoice associated with the adjustment. This field is required if you don't specify a value for the InvoiceNumber field.Type : zns:ID Character limit : 32 Version notes : -- Values : a valid invoice ID |
| InvoiceNumber | optional | Create Query Filter | The unique identification number for the associated invoice. This field is required if you don't specify a value for the InvoiceId field.Type : string Character limit : 32 Version notes : -- Values : a valid invoice number |
| ReasonCode | optional | Create Query Update Filter | A code identifying the reason for the transaction. Must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.Type : string Character limit : 32 Version notes : WSDL 47.0+ V alues : a valid reason code |
| ReferenceId | optional | Create Query Filter | A code to reference an object external to Zuora. For example, you can use this field to reference a case number in an external system.Type : string Character limit : 60 Version notes : -- Values : a string of 60 characters or fewer |
| Status | optional | Query Update Filter | The status of the invoice adjustment. This field is required in query() calls, but is automatically generated in other calls.Type : string (enum) Character limit : 9 Version notes : -- Values : Canceled , Processed |
| TransferredToAccounting | optional | Query Update Filter | Indicates the status of the adjustment's transfer to an external accounting system, such as NetSuite.Type : string (enum) Character limit : 10 Version notes : -- Values : Processing , Yes , Error , Ignore |
| Type | required | Create Query Filter | Indicates whether the adjustment credits or debits the invoice amount.Type : string (enum) Character limit : 6 Version notes : -- Values : Credit , Charge |
| UpdatedById | optional | Query Filter | The ID of the user who last updated the invoice.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the invoice was last updated.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values : automatically generated |
