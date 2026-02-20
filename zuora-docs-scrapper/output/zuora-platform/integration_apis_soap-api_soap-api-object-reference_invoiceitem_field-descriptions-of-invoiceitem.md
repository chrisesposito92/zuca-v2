---
title: "Field descriptions of InvoiceItem"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/invoiceitem/field-descriptions-of-invoiceitem"
product: "zuora-platform"
scraped_at: "2026-02-20T21:09:14.404Z"
---

# Field descriptions of InvoiceItem

This reference provides the description of the fields of the InvoiceItem object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| AccountingCode | optional | Query Filter | The accounting code for the item's charge. Accounting codes group transactions that contain similar accounting attributes.Type : stringCharacter limit : 100Version notes : --Values : inherited from RatePlanCharge.AccountingCode |
| AppliedToChargeNumber | optional | This field is only used for subscription previews. | The charge number that the discount charge is applied to. This field is only for the invoice items that are discount charges.Note :You can preview a subscription when you: This field will be returned in the response if you specify the charge number in the rate plan charges in the request.Create a new subscription with a subscribe() callCreate an Add Product amendment with an amend() call.When you preview a subscription with an amend() call, this field will be returned in the response if the preview type is:InvoiceItemInvoiceItemChargeMetricsType : zns:IDCharacter limit : 32Version notes: WSDL 80.0+Values : inherited from RatePlanCharge.ChargeNumber for the charge associated with the invoice item that the discount charge is applied to |
| AppliedToInvoiceItemId | optional | Query Filter | Associates a discount invoice item to a specific invoice item.Type : zns:IDCharacter limit : 32Version notes: WSDL 43.0+Values : inherited from InvoiceItem.Id for the invoice item that the discount charge is applied to |
| ChargeAmount | optional | Query Filter | The amount being charged for the invoice item. This amount doesn't include taxes regardless if the charge's tax mode is inclusive or exclusive.Type : decimal (currency)Character limit :Version notes : type is double for WSDL 18.0 and olderValues : automatically calculated from multiple fields in multiple objects |
| ChargeDate | optional | Query Filter | The date when the Invoice Item is created .Type : dateTimeCharacter limit : 29Version notes : --Values : automatically generated |
| ChargeDescription | optional | Query Filter | A description of the invoice item's charge.Type : stringCharacter limit : 500Version notes : --Values : inherited from RatePlanCharge.Description |
| ChargeId | optional | Query Filter | The original ID of the rate plan charge that is associated with this invoice item upon object creation.Type : zns:IDCharacter limit : 32Version notes : WSDL 59.0+Values : inherited from RatePlanCharge.Id |
| ChargeName | optional | Query Filter | The name of the invoice item's charge.Type : stringCharacter limi t: 50Version notes : --Values: inherited from RatePlanCharge.Name |
| ChargeNumber | optional | Query Filter | The unique identifier of the invoice item's charge.Type : stringCharacter limit: 50Version notes : --Values: inherited from RatePlanCharge.ChargeNumber |
| CreatedById | optional | Query Filter | The user ID of the person who created the invoice item.Type : zns:IDCharacter limit : 32Version notes : WSDL 20.0+Values : automatically generated |
| CreatedDate | optional | Query Filter | The date the invoice item was created.Type : dateTimeCharacter limit: 29Version notes : WSDL 20.0+Values : automatically generated |
| ExcludeItemBillingFromRevenueAccounting | optional | Create Query Update | Indicates whether the billing item is to be excluded from revenue accounting.Type: booleanCharacter limit: 100Version notes: WSDL 116.0+Values: automatically generated from one of the following: True , False (default)Note : This field is only available if you have the Billing - Revenue Integration feature enabled. |
| Id | optional | Query Filter | The ID of this object. Upon creation, the ID of this object is InvoiceItemId .Type : zns:IDCharacter limit : 32Version notes: --Values : automatically generated |
| InvoiceId | optional | Query Filter | The ID of the invoice that's associated with this invoice item.Type : zns:IDCharacter limit : 32Version notes : --Values : inherited from Invoice.Id |
| ProcessingType | optional | Query Filter | Identifies the kind of charge where 0 is a charge, 1 is a discount, 2 is a prepayment, and 3 is a tax.The returned value is text not decimal on data sources.Type : decimalCharacter limit :Version notes : --Values:0: charge1: discount2: prepayment3: tax |
| ProductDescription | optional | Query Filter | A description of the product associated with this invoice item.Type : stringCharacter limit : 500Version notes : --Values : inherited from Product.DescriptionNote : This value changes if Product.Description is updated. The values of UpdatedById and UpdatedDate for the InvoiceItem do not change when Product.Description is updated. |
| ProductId | optional | Query Filter | The ID of the product associated with this invoice item.Type : zns:IDCharacter limit : 32Version notes : --Values : inherited from Product.Id |
| ProductName | optional | Query Filter | The name of the product associated with this invoice item.Type : stringCharacter limit : 255Version notes : --Values: inherited from Product.NameNote : This value changes if Product.Name is updated. The values of UpdatedById and UpdatedDate for the InvoiceItem do not change when Product.Name is updated. |
| ProductRatePlanChargeId | optional | N/A | The ID of the rate plan charge that's associated with this invoice item.Type : zns:IDCharacter limit : 32Version notes : --Values : inherited from ProductRatePlanCharge.IdYou cannot query() for this field. Only the s ubscribe() preview and the amend() preview calls will return the value of this field in the response. |
| Quantity | optional | Query Filter | The number of units for this invoice item.Type : decimalCharacter limit :Version notes : type is double for WSDL 18.0 and olderValues : inherited from RatePlanCharge.Quantity |
| RatePlanChargeId | optional | Query Filter | The ID of the rate plan charge that's associated with this invoice item.Type : zns:IDCharacter limit : 32Version notes : --Values : inherited from RatePlanCharge.Id |
| RevRecCode | optional | Query Filter | Associates this invoice item with a specific revenue recognition code.Type : zns:IDCharacter limit : 32Version notes : --Values : inherited from ProductRatePlanCharge.RevRecCode |
| RevRecStartDate | optional | Query Filter | The date when revenue recognition is triggered.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29Version notes :Values : generated from InvoiceItem.RevRecTriggerCondition |
| RevRecTriggerCondition | optional | Query Filter | Specifies when revenue recognition begins based on a triggering event.Type : stringCharacter limit :Version notes :Values : inherited from ProductRatePlanCharge.RevRecTriggerCondition |
| ServiceEndDate | optional | Query Filter | The end date of the service period associated with this invoice item. Service ends one second before the date in this value.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29Version notes :Values : automatically generated |
| ServiceStartDate | optional | Query Filter | The start date of the service period associated with this invoice item. If the associated charge is a one-time fee, then this date is the date of that charge.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit: 29Version notes :Values : automatically generated |
| SKU | optional | Query Filter | The unique SKU for the product associated with this invoice item.Type : stringCharacter limit : 255Version notes :Values : inherited from Product.SKU |
| SourceItemType | optional | Query Filter | The type of the source item.Type : string (enum)Character limit : 16Version notes : WSDL 118.0+Values : SubscriptionComponent , Rounding , ProductRatePlanCharge , None , OrderLineItem |
| SubscriptionId | optional | Query Filter | The ID of the subscription associated with the invoice item.Type : zns:IDCharacter limit : 32Version notes : --Values : inherited from Subscription.Id |
| SubscriptionNumber | optional | Query Filter | The number or the name of the subscription associated with the invoice item.Type : stringCharacter limit :Version notes : --Values : |
| TaxAmount | optional | Query Filter | The amount of tax applied to the invoice item's charge.Type : decimalCharacter limit :Version notes : Requires Z-Tax or Avalara, WSDL 20.0+Values : calculated from multiple fields in the ProductRatePlanCharge object |
| TaxCode | optional | Query Filter | Specifies the tax code for taxation rules.Type : stringCharacter limit : 6Version notes : Requires Z-Tax or Avalara, WSDL 20.0+Values : inherited from ProductRatePlanCharge.TaxCode |
| TaxExemptAmount | optional | Query Filter | The amount of the invoice item's charge that's tax exempt.Type : decimal (currency)Character limit :Version notes : Requires Z-Tax or Avalara, WSDL 20.0+Values : calculated from multiple fields in the ProductRatePlanCharge object |
| TaxMode | optional | Query Filter | The tax mode of the invoice item.Type : stringCharacter limit : 12Version notes : Requires Z-Tax or Avalara, WSDL 58.0+Values : TaxExclusive , TaxInclusive |
| UnitPrice | optional | Query Filter | The per-unit price of the invoice item.Type : decimal (currency)Character limit :Version notes : type is double for WSDL 18.0 and olderValues : calculated from multiple fields in ProductRatePlanCharge and ProductRatePlanChargeTier objets |
| UOM | optional | Query Filter | Specifies the units to measure usage. Units of measure are configured in the web-based UI: Z-Billing > SettingsType : stringCharacter limit :Version notes : --Values : inherited from ProductRatePlanCharge.UOM |
| UpdatedById | optional | Query Filter | The ID of the user who last updated the invoice item.Type : zns:IDCharacter limit : 32Version notes : --Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the invoice item was last updated.Type : dateTimeCharacter limit : 29Version notes : --Values : automatically generated |
