---
title: "Field descriptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/feature/field-descriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:41:07.605Z"
---

# Field descriptions

This reference lists the description of the fields of the Feature object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Field | Required? | Description |
| --- | --- | --- |
| CreatedById | Optional | Internal Zuora ID of the user who created the featureType : zns:ID Character limit : 32 |
| CreatedDate | Optional | Date and time when the feature was createdType : dateTime Character limit : 29 |
| Description | Optional | Description of the featureType : String Character limit : 1000 |
| FeatureCode | Required | Unique code of the featureType : String Character limit : 255 |
| Name | Required | Name of the featureType : String Character limit : 255 |
| Status | Optional | Status of the feature, Active or InactiveType : String Character limit : 8 |
| UpdatedById | Optional | Internal Zuora ID of the user who last updated the featureType : zns:ID Character limit : 32 |
| UpdatedDate | Optional | Date and time when the feature was last updatedType : dateTime Character limit : 29 |
