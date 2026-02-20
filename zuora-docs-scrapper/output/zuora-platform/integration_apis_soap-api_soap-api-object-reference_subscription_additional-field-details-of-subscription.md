---
title: "Additional field details of Subscription"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/subscription/additional-field-details-of-subscription"
product: "zuora-platform"
scraped_at: "2026-02-20T21:09:52.457Z"
---

# Additional field details of Subscription

Addition field details of the Subscription object.

## AutoRenew

Indicates if the subscription automatically renews at the end of the term, or if the subscription expires at the end of the term and must be manually renewed. This field is required if this subscription is termed. Omit the field if this subscription is evergreen.

A termed subscription uses the value, `Termed` , for the `TermType` . An evergreen subscription uses the value, `EVERGREEN` , for the `TermType` .

## ContractAcceptanceDate

The date when the customer accepts the contract. If the subscription includes charges that trigger at specific date points, then this date triggers charges set to the value, Customer Acceptance Date .

Trigger dates must follow this rule:

`ContractEffectiveDate <= ServiceActivationDate <= ContractAcceptanceDate`

If your configuration doesn't require customer acceptance, then this field is optional.

If your configuration requires customer acceptance, then this field is required if you want to create a subscription that is in Active status directly upon creation. If you don't pass this field, then the subscription is in Pending Acceptance status.

## ContractEffectiveDate

The date when the contract takes effect. If the subscription includes charges that trigger at specific date points, then this date triggers charges set to the value, Upon Contract Effective .

Trigger dates must follow this rule:

`ContractEffectiveDate <= ServiceActivationDate <= ContractAcceptanceDate`

The value of the `ContractEffectiveDate` field is often the same as the value for the `SubscriptionStartDate` , but it doesn't have to be.

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the `Subscription` object is `SubscriptionId` .

## InitialTerm

The number of periods for the first term of the subscription. This field is required if this subscription is termed. Omit the field if this subscription is evergreen.

A termed subscription uses the value, `Termed` , for the `TermType` . An evergreen subscription uses the value, `EVERGREEN` , for the `TermType` .

## RenewalTerm

The number of periods for the renewal term of the subscription. This field is required if this subscription is termed. Omit the field if this subscription is evergreen.

A termed subscription uses the value, `Termed` , for the `TermType` . An evergreen subscription uses the value, `EVERGREEN` , for the `TermType` .

## ServiceActivationDate

The date when the subscription is activated. If the subscription includes charges that trigger at specific date points, then this date triggers charges set to the value, Upon Service Activation .

Trigger dates must follow this rule:

`ContractEffectiveDate <= ServiceActivationDate <= ContractAcceptanceDate`

This field is optional unless your configuration requires service activation. If your configuration requires service activation, then this field is required if you want to create a subscription that is in Active status directly upon creation. If you don't pass this field, then the subscription is in Pending Activation status.

## Status

The status of the subscription. This field is automatically generated, and can be one of the following values:

-   `Draft`

-   `Pending Activation`

-   `Pending Acceptance`

-   `Active`

-   `Cancelled`

-   `Expired`

-   `Suspended`


Fields that affect the `Status` field value are subscription date fields, such as `ContractEffectiveDate` , `ServiceActivationDate` , and `CustomerAcceptanceDate` . Calls that affect the `Status` field value are calls that create, cancel, or amend the subscription, such as subscribe() and amend().

Some fields can only be updated while the object is still in Draft status. These are noted in the table above with an asterisk next to the word "Update".
