---
title: "Field descriptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplan/field-descriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:43:08.039Z"
---

# Field descriptions

This reference provides the description of the fields of the ProductRatePlan object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| ActiveCurrencies | optional | Create Query Update Delete | A comma-separated list of 3-letter currency codes representing active currencies for this rate plan, e.g., " USD, EUR, CAD, GBP ".Type : string Character limit : (see below) Version notes : WSDL 46.0+ Values : valid currency codes enabled in your tenant settingsThis field cannot be queried in conjunction with any other fields except id , and it cannot be used to modify the status of more than four currencies in a single call. Both of these are discussed in more detail below. |
| CreatedById | optional | Query Filter | The ID of the Zuora user who created the ProductRatePlan object.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the ProductRatePlan object was created.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values : automatically generated |
| Description | optional | Create Query Update Delete Filter | A description of the product rate plan.Type : string Character limit : 500 Version notes : -- Values : a string of 500 characters or fewer |
| EffectiveEndDate | required | Create Query Update Delete Filter | The date when the product rate plan expires and can't be subscribed to.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29 Version notes : -- Values : a valid date and time value |
| EffectiveStartDate | required | Create Query Update Delete Filter | The date when the product rate plan becomes available and can be subscribed to.Type :date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit : 29 Version notes : -- Values : a valid date and time value |
| Grade | optional | Create Query Update Delete Filter | The grade that is assigned for the product rate plan. The value of this field must be a positive integer. The greater the value, the higher the grade.A product rate plan to be added to a Grading catalog group must have one grade. You can specify a grade for a product rate plan in this request or update the product rate plan indvidually.Type : number Character limit : -- Version notes : 116 or later Values : automatically generated |
| Id | optional | Query Filter | The ID of this object. Upon creation, the ID of this object is ProductRatePlanId .Type : zns:ID Character limit : 32 Version notes : -- Values : automatically generated |
| Name | required | Create Query Update Delete Filter | The name of the product rate plan. The name doesn't have to be unique in a Product Catalog, but the name has to be unique within a product.Type : string Character limit : 100 Version notes : -- Values : a string of 100 characters or fewer |
| ProductId | optional | Create Query Delete Filter | The ID of the product that contains the product rate plan.Type : zns:ID Character limit : 32 Version notes : Values : a string of 32 characters or fewer |
| ProductRatePlanNumber | optional | Create Update Query | The natural key of the product rate plan.For existing objects that were created before this field was introduced, this value will be null. Use this field in the CRUD: Update a product rate plan operation to specify a value. Zuora also provides a tool to help you automatically backfill this field with tenant ID for your existing product catalog. If you want to use this backfill tool, contact Zuora Global Support .Type: stringCharacter limit : 100Values : one of the following:leave null for automatically generated stringan alphanumeric string of 100 characters or fewerVersion notes : WSDL 133.0+ |
| UpdatedById | optional | Query Filter | The ID of the last user to update the object.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the object was last updated.Type : dateTime Character limit : 29 Version notes : -- Values : automatically generated |
