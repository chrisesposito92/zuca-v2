---
title: "Field descriptions of Invoice"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoice/field-descriptions-of-invoice"
product: "zuora-platform"
scraped_at: "2026-02-19T03:28:12.150Z"
---

# Field descriptions of Invoice

This reference provides the description of the fields of the Invoice object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| AccountId | Required | Query Filter | The account ID.Type : zns:IDCharacter limit : 32Version notes : --Values : inherited from Account.ID for the invoice owner |
| AdjustmentAmount | optional | Query Filter | The amount of the invoice adjustments associated with the invoice.Type : decimal (currency)Character limi t: 16Version notes : WSDL 20.0+Values : a valid currency amount |
| Amount | optional | Query Filter | The sum of all charges and taxes associated with the invoice.Type : decimal (currency)Character limit : 16Version notes : type is double for WSDL 18.0 and olderValues : automatically generated |
| AmountWithoutTax | optional | Query Filter | The sum of all charges associated with the invoice. Taxes are excluded from this value.Type : decimal (currency)Character limit : 16Version notes : Z-Tax; type is double for WSDL 18.0 and olderValues : automatically generated |
| AutoPay | optional | Update Query Filter | Whether invoices are automatically picked up for processing in the corresponding payment run.By default, invoices are automatically picked up for processing in the corresponding payment run.Type : booleanCharacter limit : 5Version notes : WSDL 89.0+Values : automatically generated from one of the following: True (default), False |
| Balance | optional | Query Filter | The remaining balance of the invoice after all payments, adjustments, and refunds are applied.Type : decimal (currency)Character limit : 16Version notes : type is double for WSDL 18.0 and olderValues : automatically generated |
| BillRunId | optional | Query Filter | The ID of a Bill Run.Type : stringCharacter limit : 32Version notes : Available from WSDL 66.0 and aboveValues : a BillRun ID |
| BillToContactId | optional | Query Filter | The ID of the bill-to contact associated with the invoice.Type : zns:IDCharacter limit : 32Version notes : WSDL 118.0+Values : automatically generated |
| BillToContactSnapshotId | optional | Query Filter | The ID of the Bill To contact snapshot.Type : zns:IDCharacter limit : 32Version notes : WSDL 85.0+Values : automatically generated |
| Body | optional | Query Filter | A PDF that contains the contents of the invoice.Type : stringCharacter limit : --Version notes : WSDL 2.0+ |
| Comments | optional | Query Filter | Additional information related to the invoice that a Zuora user added to the invoice.Type : stringCharacter limit : 255Version notes : WSDL 20.0+Values: a string of 255 characters or fewer |
| CreatedById | optional | Query Filter | The user ID of the person who created the invoice. If a bill run generated the invoice, then the value is the user ID of person who created the bill run.Type : zns:IDCharacter limit : 32Version notes : WSDL 20.0+Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the invoice was generated.Type : dateTimeCharacter limit : 29Version notes : WSDL 20.0+Values : automatically generated |
| CreditBalanceAdjustmentAmount | optional | Query | The currency amount of the adjustment applied to the customer's credit balance.Type : decimal (currency)Character limit : 16Version notes : WSDL 22.0+Values : a valid currency amountThis field is only available if the Credit Balance feature is enabled on your tenant. Contact Zuora Global Support to enable this feature. |
| Currency | optional | Query | The currency displayed in an invoice.Type : stringVersion notes : WSDL 147.0+Values : currency code |
| DueDate | required | Query Filter | The date by which the payment for this invoice is due.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29Version notes : -- |
| Id | optional | Query Filter | The ID of this object. Upon creation, the ID for this object is InvoiceId.Type : zns:IDCharacter limit : 32Version notes : --Values : automatically generated |
| IncludesOneTime | optional | Create Query Delete Filter | Specifies whether the invoice includes one-time charges. You can use this field only with the generate() call for the Invoice object.Type : booleanCharacter limit : 5Version notes: WSDL 11.0+Values : automatically generated from one of the following: True (default), False |
| IncludesRecurring | optional | Create Query Delete Filter | Specifies whether the invoice includes recurring charges. You can use this field only with the generate() call for the Invoice object.Type : booleanCharacter limit : 5Version notes : WSDL 11.0+Values : automatically generated from one of the following: True (default), False |
| IncludesUsage | optional | Create Query Delete Filter | Specifies whether the invoice includes usage charges. You can use this field only with the generate() call for the Invoice object.Type : booleanCharacter limit : 5Version notes : WSDL 11.0+Values : automatically generated from one of the following: True (default), False |
| InvoiceDate | optional | Create Query Delete Filter | Specifies the date on which to generate the invoice.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29Version notes : -- |
| InvoiceNumber | optional | Query Filter | The unique identification number for the invoice. This number is returned as a string.Type : sequenceCharacter limit: 32Version notes : --Values : automatically generated |
| LastEmailSentDate | optional | Query Filter | The date when the invoice was last emailed.Type : dateTimeCharacter limit : 29Version notes : --Values : automatically generated |
| PaymentAmount | optional | Query Filter | The amount of payments applied to the invoice.Type : decimal (currency)Character limit : 16Version notes : WSDL 20.0+Value s: automatically generated |
| PaymentTerm | optional | Query Filter | The name of the payment term associated with the invoice.Type : decimal (currency)Character limit : 100Version notes : WSDL 118.0+Value s: automatically generated |
| PostedBy | optional | Query Filter | The user ID of the person who moved the invoice to Posted status.Type : zns:IDCharacter limit : 32Version notes : --Values : automatically generated |
| PostedDate | optional | Query Filter | The date when the invoice was posted.Type: dateTimeCharacter limit: 29Version notes : --Values : automatically generated |
| RefundAmount | optional | Query Filter | Specifies the amount of a refund that was applied against an earlier payment on the invoice.Type: decimal (currency)Character limit : 16Version notes : --Values : automatically generated |
| RegenerateInvoicePDF | optional | Update | Regenerates a PDF of an invoice that was already generated. Add this field to an update() call to regenerate an invoice PDF.For one specific invoice, you can use this field to regenerate PDF files for a maximum of 100 times.Note that when you set the RegenerateInvoicePDF field to true , you cannot update any other fields in the same update() call. Otherwise, you will receive the following INVALID_VALUE error:"When field RegenerateInvoicePDF is set to true to regenerate the invoice PDF file, changes on other fields of the invoice are not allowed."Type : booleanCharacter limit : 5Version notes : WSDL 40.0+Values : True , False |
| Source | optional | Query Filter | Specifies the source of the invoice.Note:This field is in controlled release.Type : string (enum)Character limit : 15Version notes : --Values : API, BillRun, CustomerInvoice |
| SourceId | optional | Query Filter | The ID of the value in the Source field.Note:This field is in controlled release.Type : zns:IDCharacter limit : 32Version notes : --Values : |
| SourceType | optional | Query Filter | The type of the invoice source.Type : string (enum)Character limit : 16Version notes : WSDL 118.0+Values : Subscription , Order , Standalone , Consolidation |
| Status | optional | Query Update Filter | The status of the invoice in the system. This status is not the status of the payment of the invoice, just the status of the invoice itself.Type : string (enum)Character limit : 8Version notes : --Values : one of the following:GeneratingDraft (default, automatically set upon invoice creation)PostedCanceled |
| SoldToContactSnapshotId | optional | Query Filter | The ID of the Sold To contact snapshot.Type : zns:IDCharacter limit : 32Version notes : WSDL 85.0+Values : automatically generated |
| TargetDate | required | Create Query Filter | This date is used to determine which charges are to be billed. All charges that are to be billed on this date or prior will be included in this bill run.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29Version notes : -- |
| TaxAmount | optional | Query Filter | The total amount of the taxes applied to the invoice.Type : decimal (currency)Character limit : 16Version notes : requires Z-Tax, WSDL 20.0+Values : automatically generated |
| TaxExemptAmount | optional | Query Filter | The total amount of the invoice that is exempt from taxation.Type: decimal (currency)Character limit : 16Version notes : requires Z-Tax, WSDL 20.0+Values : automatically generated |
| TaxStatus | optional | Query Filter | The status of tax calculation related to the invoice.Type : string (enum)Character limit : -Version notes : 100 and laterValues : one of the following:CompleteErrorNote: Taxes will be applied for external tax integrations like direct Avalara and tax connectors to gather tax outcomes and messages and do not apply to Zuora tax. |
| TaxMessage | optional | Query Filter | The message about the status of tax calculation related to the invoice. If tax calculation fails in one invoice, this field displays the reason for the failure.Type : stringCharacter limit : 1000Version notes : 100 and laterValues : automatically generated |
| TransferredToAccounting | optional | Query Update Filter | Specifies whether or not the invoice was transferred to an external accounting system, such as NetSuite.Note : You can only edit this field if the invoice is posted. Editing this field for draft invoices is in Limited Availability . If you wish to have access to the feature, submit a request at Zuora Global Support .Type : string (enum)Character limit : 10Version notes : WSDL 26.0+Values : Processing, Yes, Error, Ignore |
| UpdatedById | optional | Query Filter | The ID of the user who last updated the invoice.Type : zns:IDCharacter limit : 32Version notes : --Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the invoice was last updated.Type : dateTimeCharacter limit : 29Version notes : --Values : automatically generated |
