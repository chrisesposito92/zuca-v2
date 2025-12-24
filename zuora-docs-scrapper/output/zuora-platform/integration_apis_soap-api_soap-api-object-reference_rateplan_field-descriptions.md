---
title: "Field descriptions"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplan/field-descriptions"
product: "zuora-platform"
scraped_at: "2025-12-24T05:43:36.232Z"
---

# Field descriptions

This reference provides the description of the fields of the RatePlan object.

All field names are case sensitive. Check enumerated values in descriptions to confirm capitalization and spacing.

| Name | Required to create? | Allowed operations | Description |
| --- | --- | --- | --- |
| AmendmentId | optional | Query Filter | The ID of the amendment associated with the rate plan. This field only applies to amendment rate plans.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : a valid amendment ID |
| AmendmentSubscriptionRatePlanId | optional | Create Query Update Delete Filter | The ID of the subscription rate plan modified by the amendment. This field only applies to amendment rate plans.Type : zns:ID Character limit : 32 Version notes : -- Values : a valid rate plan ID |
| AmendmentType | optional | Query Filter | The type of amendment associated with the rate plan. This field only applies to amendment rate plans.Type : string Character limit : 20 Version notes : -- Values : a valid amendment type |
| CreatedById | optional | Query Filter | The ID of the Zuora user who created the RatePlan object.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| CreatedDate | optional | Query Filter | The date when the RatePlan object was last updated.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values : automatically generated |
| ExternallyManagedPlanId | optional | Create Query Update | The unique identifier for the rate plan purchased on a third-party store. This field is used to represent a subscription rate plan created through third-party stores.Type : string Character limit : 32 Version notes : -- |
| Id | optional | Query Filter | The ID of this object. Upon creation, the ID of this object is RatePlanId .Type : zns:ID Character limit : 32 Version notes : -- Values : automatically generated |
| InvoiceOwnerId | required | Query | The invoice owner ID of the subscription that the rate plan belongs to.Type : zns:ID Character limit : 32 Version notes : -- Values : a valid account ID |
| Name | required | Query Filter | The name of the rate plan.Type : string Character limit : 255 Version notes : -- Values : a string of 255 characters or fewer |
| OriginalRatePlanId | required | Query | The ID of the original subscription rate plan, which is the rate plan ID of the version-1 subscription.Type : zns:ID Character limit : 32 Version notes : WSDL 136.0+ Version notes : -- Values : a valid subscription rate plan ID |
| ProductRatePlanId | required | Query Filter | The ID of the associated product rate plan.Type : zns:ID Character limit : 32 Version notes : -- Values : a valid product rate plan ID |
| SubscriptionId | required | Query Filter | The ID of the subscription that the rate plan belongs to.Type : zns:ID Character limit : 32 Version notes : -- Values : a valid subscription ID |
| SubscriptionOwnerId | required | Query | The subscription owner ID of the subscription that the rate plan belongs to.Type : zns:ID Character limit : 32 Version notes : -- Values : a valid account ID |
| UpdatedById | optional | Query Filter | The ID of the user who last updated the rate plan.Type : zns:ID Character limit : 32 Version notes : WSDL 20.0+ Values : automatically generated |
| UpdatedDate | optional | Query Filter | The date when the rate plan was last updated.Type : dateTime Character limit : 29 Version notes : WSDL 20.0+ Values : automatically generated |
| cf_txtn__c | optional | Create Subscribe Amend Update | One or more custom fields. |
| cf_pkn__c | optional | Create Subscribe Amend Update | One or more custom fields. |
