---
title: "Field descriptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplanchargetier/field-descriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:43:48.938Z"
---

# Field descriptions

This reference provides the description of the fields of the RatePlanChargeTier object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required? | Allowed operations | Description |
| --- | --- | --- | --- |
| CreatedById | optional | Query Filter | The ID of the Zuora user who created the RatePlanChargeTier object.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the RatePlanChargeTier object was created.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values : automatically generated |
| EndingUnit | optional | Query Filter | The end number of a range of units for the tier.Type : decimal Character limit : 16 Version notes : type is double for WSDL 18.0 and older Values : any positive decimal value |
| Id | optional | Query Filter | The ID of this object. Upon creation, the ID of this object is RatePlanChargeTierId .Type : zns:ID Character limit : 32 Version notes : -- Values : automatically generated |
| IsOveragePrice | optional | Query Update Filter | Indicates if the price is an overage price. An overage occurs when usage surpasses the last defined tier. This field is applicable only to tier pricing and volume pricing models.Type : boolean​ Version notes : WSDL 8.0+ Values : true, false |
| Price | optional | Query Update Filter | The price of the tier if the charge is a flat fee, or the price of each unit in the tier if the change model is tiered pricing.Type : decimal Character limit : 16 Version notes : type is double for WSDL 18.0 and older Values : any positive decimal value |
| PriceFormat | optional | Create Query Update Delete Filter | Indicates if the price is a flat fee or is per unit.Type : string Character limit : 8 Version notes : WSDL 8.0+ Values : Flat Fee , Per Unit |
| RatePlanChargeId | required | Create Query Update Delete Filter | The ID of the subscription or amendment rate plan charge associated with this tier. You can't create an unassociated tier.Type : zns:ID Character limit : 32 Version notes : -- Values : inherited from RatePlanCharge.Id |
| StartingUnit | optional | Query Filter | The start number of a range of units for the tier.Type : decimal Character limit : 16 Version notes : type is double for WSDL 18.0 and older Values : any positive decimal value |
| Tier | optional | Query Filter | A unique number that identifies the tier that the price applies to.Type : bigint Character limit : 20 Version notes : -- Values : automatically generated |
| UpdatedById | optional | Query Filter | The ID of the last user to update the object.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the object was last updated.Type : dateTime Character limit : 29 Version notes : -- Values : automatically generated |
