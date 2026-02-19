---
title: "Field descriptions of ProductRatePlanChargeTier"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplanchargetier/field-descriptions-of-productrateplanchargetier"
product: "zuora-platform"
scraped_at: "2026-02-19T03:29:01.610Z"
---

# Field descriptions of ProductRatePlanChargeTier

This reference provides the description of the fields of the ProductRatePlanChargeTier object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| Active | required* | Create Query Update Filter | Determines whether the tier is active. This field is deprecated as of release R163 / WSDL 46.0 (April 2013).Type : boolean Character limit : 5 Version notes : -- Values : True , False |
| CreatedById | optional | Query Filter | The ID of the Zuora user who created the ProductRatePlanChargeTier object.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the ProductRatePlanChargeTier object was created.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values : automatically generated |
| Currency | required | Query Filter | The code corresponding to the currency for the tier's price.Type : string Character limit : 3 Version notes : Values : a valid currency code |
| DiscountAmount | optional | Create Query Update Filter | The specific amount for a fixed discount. This field is required if the value for ProductRatePlanCharge.ChargeModel is Discount-Fixed Amount .Type : decimal Character limit : 16 Version notes : WSDL 41.0+ Values : any positive decimal value |
| DiscountPercentage | optional | Create Query Update Filter | The percentage of discount for a percentage discount. This field is required if the value for ProductRatePlanCharge.ChargeModel is Discount-Percentage .Type : decimal Character limit : 16 Version notes : WSDL 41.0+ Values : a decimal value between -100 and 100, exclusive |
| EndingUnit | optional | Query Filter | The end number of a range of units for the tier.Type : decimal Character limit : 16 Version notes : type is double for WSDL 18.0 and older Values : any positive decimal value |
| Id | optional | Query Filter | The ID of this object. Upon creation, the ID of this object is ProductRatePlanChargeTierId .Type : zns:ID Character limit : 32 Version notes : -- Values : automatically generated |
| IsOveragePrice | optional | Query Filter | Indicates if the price is an overage price, which is the price when usage surpasses the last defined tier.Type : boolean Character limit : 5 Version notes : WSDL 8.0+ Values : True , false |
| Price | required | Query Update Filter | The price of the tier if the charge is a flat fee, or the price of each unit in the tier if the charge model is tiered pricing.Type : decimal (currency) Character limit : 16 Version notes : type is double for WSDL 18.0 and older Values : a valid currency value |
| PriceFormat | optional | Create Query Update Filter | Indicates if pricing is a flat fee or is per unit. This field is for tiered and volume pricing models only.Type : string (enum) Character limit : 8 Version notes : WSDL 8.0+ Values : FlatFee , PerUnitNote: The values Flat Fee and Per Unit (with spaces) is valid for create or update calls. |
| ProductRatePlanChargeId | required | Create Query Update Filter | The ID of the product rate plan charge associated with this tier. You can't create an unassociated tier.Type : zns:ID Character limit : 32 Version notes : -- Values : a valid product rate plan charge ID |
| StartingUnit | optional | Query Filter | The starting number of a range of units for the tier.Type : decimal Character limit : 16 Version notes : type is double for WSDL 18.0 and older Values : any positive decimal value |
| Tier | optional | Query Filter | A unique number that identifies the tier that the price applies to.Type : bigint Character limit : 20 Version notes : Values : automatically generated |
| UpdatedById | optional | Query Filter | The ID of the user who last updated the product rate plan charge tier.Type : zns:ID Character limit : 32 Version -- Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the product rate plan charge tier was last updated.Type : dateTime Character limit : 29 Version -- Values : automatically generated |
