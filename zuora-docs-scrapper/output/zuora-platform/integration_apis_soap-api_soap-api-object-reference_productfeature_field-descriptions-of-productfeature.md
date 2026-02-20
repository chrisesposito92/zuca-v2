---
title: "Field descriptions of ProductFeature"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productfeature/field-descriptions-of-productfeature"
product: "zuora-platform"
scraped_at: "2026-02-20T21:09:26.853Z"
---

# Field descriptions of ProductFeature

This reference provides the description of the fields of the ProductFeature object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required? | Allowed operations | Description |
| --- | --- | --- | --- |
| CreatedById | optional | Query Filter | The ID of the Zuora user who created the Account object.Type : zns:ID Character limit : 32 Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the Account object was created.Type : dateTime Character limit : 29 Values : automatically generated |
| FeatureId | required | Create Query Update Delete Filter | Internal Zuora ID of the product feature.This field is not editable.Type : zns:ID Character limit : 32 Values : a string of 32 characters or fewer |
| ProductId | required | Create Query Update Delete Filter | Id of the product to which the feature belongs.This field is not editable.Type : zns:ID Character limit : 32 Values : a string of 32 characters or fewer |
| UpdatedById | optional | Query Filter | The ID of the user who last updated the account.Type : zns:ID Character limit : 32 Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the account was last updated.Type : dateTime Character limit : 29 Values : automatically generated |
