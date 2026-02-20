---
title: "Field descriptions of DiscountApplyDetail"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/discountapplydetail/field-descriptions-of-discountapplydetail"
product: "zuora-platform"
scraped_at: "2026-02-20T21:09:03.145Z"
---

# Field descriptions of DiscountApplyDetail

This reference lists the description of the fields of the DiscountApplyDetail object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required? | Allowed operations | Description |
| --- | --- | --- | --- |
| Id | optional | Query | The ID of the DiscountApplyDetail object.Type : zns:ID Character limit : 32 Version notes : WSDL 85.0+ Values : automatically generated |
| CreatedById | optional | Query | The ID of the Zuora user who created the DiscountApplyDetail object.Type : string Character limit : 32 Version notes : WSDL 85.0+ Values : automatically generated |
| CreatedDate | optional | Query | The date and time when the DiscountApplyDetail object was created.Type : dateTime Character limit : 29 Version notes : WSDL 85.0+ Values : a valid dateTime format in YYYY-MM-DDThh:mm:ss.sTZD |
| UpdatedById | optional | Query | The ID of the Zuora user who updated the DiscountApplyDetail object.Type : string Character limit : 32 Version notes : WSDL 85.0+ Values : automatically generated |
| UpdatedDate | optional | Query | The date when the DiscountApplyDetail object was last updated.Type : dateTime Character limit : 29 Version notes : WSDL 85.0+ Values : a valid dateTime format in YYYY-MM-DDThh:mm:ss.sTZD |
| RatePlanChargeId | optional | Query | The ID of the discount rate plan charge associated with this DiscountApplyDetail object.Type : zns:ID Character limit : 32 Version notes : WSDL 85.0+ Values : a string of 32 characters or fewer |
| AppliedProductRatePlanId | optional | Query | The ID of the product rate plan that the discount rate plan charge applies to.Type : zns:ID Character limit : 32 Version notes : WSDL 85.0+ Values : a string of 32 characters or fewer |
| AppliedProductRatePlanChargeId | optional | Query | The ID of the product rate plan charge that the discount rate plan charge applies to.Type : zns:ID Character limit : 32 Version notes : WSDL 85.0+ Values : a string of 32 characters or fewer |
