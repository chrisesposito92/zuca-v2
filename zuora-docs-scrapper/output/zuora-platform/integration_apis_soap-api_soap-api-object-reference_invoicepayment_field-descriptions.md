---
title: "Field descriptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoicepayment/field-descriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:41:56.448Z"
---

# Field descriptions

This reference lists the description of the fields of the InvoicePayment object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| Amount | required | Create Query Update Filter | The amount of the payment.Type : decimal (currency) Character limit : 16 Version notes : type is double in WSDL 18.0 and older Values : a valid currency amount |
| CreatedById | optional | Query Filter | The user ID of the person who created the invoice payment.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the invoice payment was generated.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values : automatically generated |
| Id | required | Query Filter | The ID of this object. Upn creation, the ID of this object is InvoicePaymentId .Type : zns:ID Character limit : 32 Version notes : -- Values : automatically generated |
| InvoiceId | required | Create Query Filter | The unique ID of the invoice associated with this invoice payment.Type : zns:ID Character limit : 32 Version notes : -- Values : a valid invoice ID |
| PaymentId | required | Create Query Filter | The unique ID of the payment associated with this invoice payment.Type : zns:ID Character limit : 32 Version notes : -- Values : a valid payment ID |
| RefundAmount | optional | Query Filter | Specifies the amount of a refund applied against this InvoicePayment.Type : decimal (currency) Character limit : 16 Version notes : -- Values : automatically generated |
| UpdatedById | optional | Query Filter | The ID of the user who last updated the invoice payment.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the invoice payment was last updated.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values : automatically generated |
