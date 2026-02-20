---
title: "Additional field details of RatePlan"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/rateplan/additional-field-details-of-rateplan"
product: "zuora-platform"
scraped_at: "2026-02-20T21:09:39.737Z"
---

# Additional field details of RatePlan

Additional details of the fields of the RatePlan object.

## AmendmentType

The type of amendment associated with the rate plan. This field only applies to amendment rate plans, which are rate plans that are part of amendments.

The value for this field is inherited from the `Type` field in the Amendment object, which can have the following values:

-   Cancellation

-   NewProduct

-   OwnerTransfer

-   RemoveProduct

-   Renewal

-   TermsAndConditions

-   UpdateProduct


## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an amend() call to modify an existing subscription, then you need to include the specific Subscription object's ID with the call.

The ID for the RatePlan object is `RatePlanId` .

## SubscriptionId

The ID of the subscription that the rate plan belongs to. A subscription has a one-to-many relationship with rate plans. When you create a subscription, the product rate plans that you select for it are stored as subscription rate plans.
