---
title: "Custom event overview"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/custom-events/custom-event-overview"
product: "zuora-platform"
scraped_at: "2025-12-24T05:24:33.825Z"
---

# Custom event overview

Custom events are user-defined events that allow you to trigger notifications based on changes to standard or custom objects.

To define a custom event, you must specify the base object and the trigger condition. When an object changes, the trigger condition defined on the object is evaluated. If the condition is satisfied, a business event will be triggered.

You can manage custom events through the Zuora UI or the Custom event triggers API operations.

## Base object for custom events

Each custom event must be associated with a base object, which can be either a standard object or a custom object.

Custom event created on base objects, such as Accounting Code, do not have the context of a customer account, so the default communication profile of the tenant is used for notifications. For example, the Accounting Code object is set up in your Zuora tenant based on your corporate business rules. This does not vary or depend on any configuration of the account. Instead, accounting codes are settings on the system level. Therefore, no customer account is associated with this object and Zuora uses and localizes notification messages based on the default communication profile.

In contrast, custom events created on objects like Invoice have the context of a customer account, and thus the the communication profile specified in the account is used for notifications. Zuora sends localized data, such as date formatting, based on the communication profile associated with the account.

Zuora also uses the default communication profile for custom events associated with custom objects.

When creating custom events through API operations, use the `baseObject` field to specify the base object. The following table list the value that you should specify in the `baseObject` field.

| Base object type | Base object value | Example |
| --- | --- | --- |
| Standard object | <object_name> | Account, PaymentMethod |
| Custom object | default__<custom_object_api_name> | default__vehicle |

For a list of supported standard objects and their communication profile behavior, see [Supported base object for custom events](/zuora-platform/extensibility/events-and-notifications/custom-events/supported-base-object-for-custom-events).

## Trigger condition

Trigger condition is an expression that determines whether to trigger the custom event when the base object changes, such as creation, modification, or deletion.

When creating custom events through API operations, use the `condition` field to specify the trigger condition.

## Trigger condition syntax

Zuora uses the Apache Commons Java Expression Language (JEXL) library syntax for defining triggers. For more information, see [Apache Commons JEXL](https://commons.apache.org/proper/commons-jexl/reference/syntax.html).

Basically, a trigger condition consists of one or more sub-conditions connected by logical operators and must return a boolean value.

Figure 1.

![Syntax of trigger condition](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a607bd15-356d-411c-a14a-495d3fae9a74?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE2MDdiZDE1LTM1NmQtNDExYy1hMTRhLTQ5NWQzZmFlOWE3NCIsImV4cCI6MTc2NjY0MDI3MSwianRpIjoiNjlhM2FmMTc4MWU5NDUzZDkxZWM5YThiOTI5ODNhZTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.rJuy3-54u-I8K8trpxAOJIec3cdOVWAlkAD6ji4n0B8)

The following table lists the most common logical operators:

| Name | Operator | Description | Example |
| --- | --- | --- | --- |
| Boolean AND | && | Return true if both sub-conditions it connects are true. | Invoice.Amount > 200.0 && Invoice.Amount < 1000.0 |
| Boolean OR | \|\| | Return true if at least one of the sub-conditions it connects is true. | changeType == 'INSERT' \|\| changeType == 'UPDATE' |

## Sub-condition syntax

A sub-condition is an expression of two values connected by a comparison operator. The result of a sub-condition is also a boolean value.

Figure 2.

![Syntax of sub-condition](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/44df28ab-e239-4f83-8a50-0198b4846538?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ0ZGYyOGFiLWUyMzktNGY4My04YTUwLTAxOThiNDg0NjUzOCIsImV4cCI6MTc2NjY0MDI3MSwianRpIjoiYjIwZGQ1OWIwNTM1NDE0ZmJiMmJjYzNkZjExYTA4ZjciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.lPENfhGbhlJzYcS9ApeQ-mZfU5hTT8At-3QBQwpARmA)

Typically, the first operand is a dynamic value of an object field or a variable provided by Zuora, and the second operand is a fixed value. When changes to the base object occur, Zuora calculates the results of sub-conditions with the context data, for example, the related object record and changing type.

The following table lists variables you can use in sub-conditions:

| Type | Expression | Note | Example |
| --- | --- | --- | --- |
| Base object change type | changeType | Available values are as follows:INSERTUPDATEDELETEIf a trigger condition does not contain change type constraints, the condition applies to all object change types. | (N/A) |
| Standard fields of standard objects | <object_name>.<field_name> | Adding _old to the end of an object field name represents the field value before the change occurred. | Invoice.Status, Invoice.Status_old |
| Custom fields of standard objects | <object_name>.<custom_field_api_name> | Adding _old to the end of an object field name represents the field value before the change occurred. | Invoice.MyData__c, Invoice.MyData__c_old |
| Custom fields of custom objects | default__<custom_object_api_name>.<custom_field_api_name> | Adding _old to the end of an object field name represents the field value before the change occurred. | default__vehicle.Color__c, default__vehicle.Color__c_old |

Sub-conditions can contain fields only from the base object on which the event trigger is defined. For more information about the available fields of each standard object, see [Data source reference](/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference).

The following table lists the most common comparison operators:

| Name | Operator | Example |
| --- | --- | --- |
| Equality | == | BillingRun.Status == 'Posted' |
| Inequality | != | PaymentMethod.AccountId != null |
| Greater Than | > | Invoice.Amount > 1000.0 |
| Greater Than Or Equal To | >= | Invoice.Amount >= 1000.0 |
| Less Than | < | Invoice.Amount < 1000.0 |
| Less Than Or Equal To | <= | Invoice.Amount <= 1000.0 |
| Starts With | =^ | Account.AccountNumber =^ 'E' |
| In or Match | =~ | Account.Batch =~ ['Batch8','Batch9'] |

JEXL also provides built-in functions (for example, size()) that can be used in sub-conditions. For all available operators and functions, see [Apache Commons JEXL](https://commons.apache.org/proper/commons-jexl/reference/syntax.html).

## Trigger condition examples

See the following examples to better understand trigger conditions.

| Example | Description |
| --- | --- |
| changeType == 'INSERT' | The event is triggered when a record of the base object is created. |
| Account.Level__c == 'Premium' | The event is triggered when a premium-level account is created, updated, or deleted. |
| changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000.0 | The event is triggered when an invoice is posted with an amount greater than 1000. |
| (changeType == 'INSERT' \|\| changeType == 'UPDATE') && size(default__vehicle.Serial__c) > 12 | The event is triggered when a record of the Vehicle custom object is created or updated, and the vehicle serial number is greater than 12 characters. In this example, two sub-conditions for change type are grouped by () because the boolean AND operator (&&) has higher precedence than the boolean OR operator (\|\|). |

## Best practice for creating trigger conditions

It is recommended to use decimals when comparing numeric values. Using decimals helps prevent unexpected results when comparing an integer with a field that contains a decimal value.

For example, if you want to trigger an event when the Account object is updated and the account balance value is positive, use the following trigger condition:

`changeType == 'UPDATE' && Account.Balance > 0.0`

Otherwise, if you use `Account.Balance > 0` in the trigger condition, the event might not be triggered because the `Account.Balance` field contains decimal values.

## Limitations

Custom events have the following limitations:

-   A maximum of 1000 custom event triggers can be created.

-   Base object values for Zuora standard objects are case sensitive. For example, `PaymentMethod` is correct, and `Paymentmethod` or `paymentmethod` is incorrect.

-   Base object values for custom objects must be lowercase. For example, `default__vehicle` .

-   When creating custom events, you cannot match fields of the RatePlanCharge object against constant values for the `condition` field. For example, the following condition will cause errors: `RatePlanCharge.ShippingProcessStatus__c == 'Shipping Confirmed'` , where `Shipping Confirmed` is a constant value.

-   Fields on objects are case-sensitive. For example, `PaymentMethod.createdbyid` can result in errors. The correct format is `PaymentMethod.CreatedById` .

-   A condition cannot contain fields from data source objects that are joined to the base object.

-   Do not create duplicate events because they will be either merged or deleted. Zuora considers events that have the same trigger condition as duplicate events, regardless of event type names.

-   For custom events triggered on the Amendment object, merge fields defined within the notification definition are only available for the amendment completed events.
