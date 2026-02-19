---
title: "Field descriptions of ProductDiscountApplyDetail"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productdiscountapplydetail/field-descriptions-of-productdiscountapplydetail"
product: "zuora-platform"
scraped_at: "2026-02-19T03:28:44.038Z"
---

# Field descriptions of ProductDiscountApplyDetail

This reference provides the description of the fields on the ProductDiscountApplyDetail object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required? | Allowed operations | Description |
| --- | --- | --- | --- |
| Id | optional | Query | The ID of the ProductDiscountApplyDetail object.Type : zns:ID Character limit : 32 Version notes : WSDL 85.0+ Values : automatically generated |
| CreatedById | optional | Query | The ID of the Zuora user who created the ProductDiscountApplyDetail object.Type : string Character limit : 32 Version notes : WSDL 85.0+ Values : automatically generated |
| CreatedDate | optional | Query | The date and time when the ProductDiscountApplyDetail object was created.Type : dateTime Character limit : 29 Version notes : WSDL 85.0+ Values : a valid dateTime format in YYYY-MM-DDThh:mm:ss.sTZD |
| UpdatedById | optional | Query | The ID of the Zuora user who updated the ProductDiscountApplyDetail object.Type : string Character limit : 32 Version notes : WSDL 85.0+ Values : automatically generated |
| UpdatedDate | optional | Query | The date and time when the ProductDiscountApplyDetail object was last updated.Type : dateTime Character limit : 29 Version notes : WSDL 85.0+ Values : a valid dateTime format in YYYY-MM-DDThh:mm:ss.sTZD |
| ProductRatePlanChargeId | optional | Query | The ID of the discount product rate plan charge associated with the ProductDiscountApplyDetail object.Type : zns:ID Character limit : 32 Version notes : WSDL 85.0+ Values : a string of 32 characters or fewer |
| AppliedProductRatePlanId | optional | Query | The ID of the product rate plan that the discount product rate plan charge applies to.Type : zns:ID Character limit : 32 Version notes : WSDL 85.0+ Values : a string of 32 characters or fewer |
| AppliedProductRatePlanChargeId | optional | Query | The ID of the product rate plan charge that the discount product rate plan charge applies to.Type : zns:ID Character limit : 32 Version notes : WSDL 85.0+ Values : a string of 32 characters or fewer |
