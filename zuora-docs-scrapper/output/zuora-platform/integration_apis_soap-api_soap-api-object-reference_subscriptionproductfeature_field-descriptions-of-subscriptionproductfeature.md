---
title: "Field descriptions of SubscriptionProductFeature"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/subscriptionproductfeature/field-descriptions-of-subscriptionproductfeature"
product: "zuora-platform"
scraped_at: "2026-02-20T21:09:51.964Z"
---

# Field descriptions of SubscriptionProductFeature

This reference provides the description of the fields of the SubscriptionProductFeature object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| CreatedBy | Optional | Query | Internal Zuora ID of the user who added the product feature to the subscription.Type: IDCharacter limit : 32Version notes : WSDL 60.0+ |
| CreatedDate | Optional | Query | Date and time when the product feature was added to the subscription.Type : DateTimeCharacter limit : 29Version notes : WSDL 60.0+ |
| Description | Optional | QueryCreate | Description of the subscription product feature.Type : String Character limit : 500 Version notes : WSDL 60.0+ |
| FeatureCode | Optional | Query | Unique code of the feature.Type : StringCharacter limit : 255Version notes : WSDL 60.0+ |
| FeatureId | Required | QueryCreate | Internal Zuora ID of the feature.Type : IDCharacter limit : 32Version notes : WSDL 60.0+ |
| Name | Optional | Query | Name of the feature.Type : StringCharacter limit : 255Version notes : WSDL 60.0+ |
| RatePlanId | Optional | Query | Id of the product rate plan to which the feature belongs.Type : IDCharacter limit : 32Version notes : WSDL 60.0+ |
| UpdatedById | Optional | Query | Internal Zuora ID of the user who last updated the subscription product feature.Type : IDCharacter limit : 32Version notes : WSDL 60.0+ |
| UpdatedDate | Optional | Query | Date and time when the subscription product feature was last updated.Type : DateTimeCharacter limit : 29Version notes : WSDL 60.0+ |
