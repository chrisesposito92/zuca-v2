---
title: "Field descriptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/refundinvoicepayment/field-descriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:44:04.643Z"
---

# Field descriptions

This reference provides the description of the fields of the RefundInvoicePayment object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Require to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| CreatedById |  | Query Filter | The ID of the Zuora user who created the RefundInvoicePayment object.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| CreatedDate |  | Query Filter | The date when the RefundInvoicePayment object was created.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values : automatically generated |
| Id |  | Query Filter | The ID of this object. Upon creation, the ID of this object is RefundInvoicePaymentId .Type : zns:ID Character limit : 32 Version notes : -- Values : automatically generated |
| InvoiceId |  | Query Filter | The unique ID of the invoice associated with this refund invoice payment.Type : zns:ID Character limit : 32 Version notes : 64+ Values : a valid invoice ID |
| InvoicePaymentId |  | Query Filter | The ID of the InvoicePayment object associated with the refund.Type : zns:ID Character limit : 32 Version notes : -- Values : inherited from InvoicePayment.Id |
| RefundAmount |  | Query Filter | Specifies the amount of a refund applied against a payment.Type : decimal (currency) Character limit : 16 Version notes : -- Values : automatically generated |
| RefundId |  | Query Filter | The ID of the Refund object that created the refund.Type : zns:ID Character limit : 32 Version notes : -- Values : inherited from Refund.Id |
| UpdatedById |  | Query Filter | The ID of the last user to update the object.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| UpdatedDate |  | Query Filter | The date when the object was last updated.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values : automatically generated |
