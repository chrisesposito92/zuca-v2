---
title: "Additional field details"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/amendment/additional-field-details"
product: "zuora-platform"
scraped_at: "2025-12-24T05:40:01.134Z"
---

# Additional field details

Additional details of the fields of the Amendment object.

## AutoRenew

Determines whether the subscription is automatically renewed, or whether it expires at the end of the term and needs to be manually renewed.

This field is required for termed subscriptions. The `Subscription` object's `TermType` field value is `TERMED` for termed subscriptions and `EVERGREEN` for evergreen subscriptions, which are subscriptions that don't expire.

You can use this field when the `Type` field value is `TermsAndConditions` .

## CustomerAcceptanceDate

The date when the customer accepts the amendment's changes to the subscription.

This field is required if Zuora is configured to require customer acceptance in Zuora Billing and the subscription is currently in the Pending Acceptance status (the value of the `Status` field is `PendingAcceptance` ).

Use this field together with the `Status` field. When you set a date in this field as a customer acceptance date, you should also set the `Status` field as `Completed` .

## DestinationAccountId

The ID of the subscription owner that the subscription is being transferred to.

Use this field in an `amend()` call to transfer the subscription owner of a subscription. After the call is finished, this field becomes read-only.

You must specify either the `DestinationAccountId` field or the `DestinationInvoiceOwnerId` field to use the `amend()` call to transfer ownership.

If you are using an older version of the WSDL (32.0 or older), then this field is required for owner transfers; the `DestinationInvoiceOwnerId` field isn't available to you.

## DestinationInvoiceOwnerId

The ID of the invoice owner that the subscription is being transferred to.

Use this field in an `amend()` call to transfer the invoice owner of a subscription. After the call is finished, this field becomes read-only.

You must specify either the `DestinationAccountId` field or the `DestinationInvoiceOwnerId` field to use the `amend()` call to transfer ownership.

This field isn't available to you if you are using an older version of the WSDL (32.0 or older); you can use the `DestinationAccountId` field only.

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

## Status

The status of the amendment, which can be one of the following values:

-   Draft The default status. Draft is used temporarily in the code while making changes before the amendment is in Completed status.

-   PendingAcceptance The amendment is waiting for customer acceptance. This value is available only if Zuora is configured to require customer acceptance in Zuora Billing.

-   PendingActivation The amendment is waiting to be activated. This value is available only if Zuora is configured to require service activation in Zuora Billing.

-   Completed The amendment's changes are in effect.

-   Cancelled The amendment is canceled. Its changes don't take effect.


Some fields can only be updated while the object is still in Draft status. These are noted in the table above with an asterisk next to the word "Update".

## Type

The type of amendment. Each amendment type describes an action you can take to modify an existing subscription.

-   Cancellation Cancels the subscription.

-   NewProduct Adds products or services to the subscription. If you are adding multiple products, then use a separate `Amendment` object for each new product. You can submit multiple Amendment objects in a single `amend()` call unless you're using an older WSDL (41.0 and older).

-   OwnerTransfer Transfers ownership of the subscription to another account or invoice owner.

-   RemoveProduct Removes a product from a subscription. If you are switching to a different product, then you can remove a product and add a product in the same `amend()` call unless you're using an older WSDL (41.0 and older).

-   Renewal Automatically renews a termed subscription in advance of the next renewal term start date.

-   UpdateProduct Updates the charge information, including the price or quantity of a product, in the subscription. For example, add or remove seats.

-   TermsAndConditions Extends or shortens the initial term or renewal term of the subscription.

-   SuspendSubscription Suspends an active subscription. This value is in Limited Availability .

-   ResumeSubscription Resumes a suspended subscription. This value is in Limited Availability .
