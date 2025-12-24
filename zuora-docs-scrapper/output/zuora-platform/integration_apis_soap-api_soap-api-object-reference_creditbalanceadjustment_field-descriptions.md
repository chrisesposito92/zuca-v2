---
title: "Field descriptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/creditbalanceadjustment/field-descriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:40:44.720Z"
---

# Field descriptions

This reference provides the description of the fields of the CreditBalanceAdjustment object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| AccountId | N/A | Query Filter | The account ID of the credit balance's account. Zuora generates this value from the source transaction.Type : zns:IDCharacter limit : 32Version notes : WSDL 22.0+Values : automatically generated from:CreditBalanceAdjustment.SourceTransactionId orCreditBalanceAdjustment.SourceTransactionNumber |
| AccountingCode | Not Required | Create Query Filter | The accounting code for the credit balance adjustment. Typically, an accounting code for a credit balance adjustment maps to a bank account in your accounting system.Type : stringCharacter limit : 100Version notes : WSDL 22.0+Values : an active accounting code in your Zuora Chart of Accounts |
| AdjustmentDate | N/A | Query Filter | The date when the credit balance adjustment is applied.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29Version notes : WSDL 22.0+Values : automatically generated |
| Amount | Required | Create Query Filter | The amount of the adjustment.Type : decimal (currency)Character limit : 16Version notes : WSDL 22.0+Values : a valid currency amount |
| CancelledOn | N/A | Query Filter | The date when the credit balance adjustment was canceled.Type : dateTimeCharacter limit : 29Version notes : --Values : automatically generated |
| Comment | Not Required | Create Query Filter | Use this field to record comments about the credit balance adjustment.Type : stringCharacter limit : 255Version notes : WSDL 22.0+Values : a string of 255 characters or fewer |
| CreatedById | N/A | Query Filter | The user ID of the person who created the credit balance adjustment.Type : zns:IDCharacter limit : 32Version notes : WSDL 22.0+Values : automatically generated |
| CreatedDate | N/A | Query Filter | The date when the credit balance adjustmentwas generated.Type : dateTime Character limit : 29 Version notes : WSDL 22.0+ Values : automatically generated |
| Id | N/A | Query Filter | The ID of this object. Upon creation of this object, this field becomes CreditBalanceAdjustmentId .Type : zns:IDCharacter limit : 32Version notes : --Values : automatically generated |
| Number | N/A | Query Filter | A unique identifier for the credit balance adjustment. Zuora generates this number in the format, CBA-xxxxxxxx, such as CBA-00375919.Type : stringCharacter limit : 255Version notes : WSDL 22.0+Values : automatically generated |
| ReasonCode | optional | Create Query Update Filter | A code identifying the reason for the transaction. Must be an existing reason code or empty. If you do not specify a value, Zuora uses the default reason code.Type : stringCharacter limit : 32Version notes : WSDL 47.0+Values : a valid reason code |
| ReferenceId | Not Required | Create Query Filter | The ID of the payment that the credit balance adjustment is for.Type : stringCharacter limit : 32Version notes : WSDL 22.0+Values : a string of 60 characters or fewer |
| SourceTransactionId | Not Required | Create Query Filter | The ID of the object that the credit balance adjustment is applied to. You must specify a value for either the SourceTransactionId field or the SourceTransactionNumber field.Type : zns:IDCharacter limit : 32Version notes : WSDL 22.0+Values : one of the following:InvoiceIdPaymentIdRefundId |
| SourceTransactionNumber | Not Required | Create Query Filter | The number of the object that the credit balance adjustment is applied to. You must specify a value for either the SourceTransactionId field or the SourceTransactionNumber field.Type : stringCharacter limit : 50Version notes : WSDL 22.0+Values : one of the following:InvoiceNumberPaymentNumberRefundNumber |
| SourceTransactionType | N/A | Query Filter | The source of the credit balance adjustment.Type : string (enum)Character limit :Version notes : WSDL 22.0+Values : automatically generated; one of the following:InvoicePaymentRefundAdjustment |
| Status | N/A | Query Update Filter | The status of the credit balance adjustment.Type : string (enum)Character limit : 9Version notes : WSDL 22.0+Values : automatically generated; one of the following:ProcessedCanceled |
| TransferredToAccounting | N/A | Query Update Filter | Indicates the status of the credit balance adjustment's transfer to an external accounting system, such as NetSuite.Type : string (enum)Character limit :Version notes : WSDL 26.0+Values : one of the following:ProcessingYesErrorIgnore |
| Type | Required | Create Query Filter | Specifies if the credit balance adjustment increases or decrease the amount of the credit balance.Type : string (enum)Character limit : 8Version notes : WSDL 22.0+Values : Increase , Decrease |
| UpdatedById | N/A | Query Filter | The ID of the user who last updated the credit balance adjustment.Type : zns:IDCharacter limit : 32Version notes : WSDL 22.0+Values : automatically generated |
| UpdatedDate | N/A | Query Filter | The date when the credit balance adjustment was last updated.Type : dateTimeCharacter limit : 29Version notes : WSDL 22.0+Values : automatically generated |
