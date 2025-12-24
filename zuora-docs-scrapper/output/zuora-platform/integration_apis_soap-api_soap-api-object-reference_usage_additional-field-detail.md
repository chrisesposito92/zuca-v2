---
title: "Additional field detail"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/usage/additional-field-detail"
product: "zuora-platform"
scraped_at: "2025-12-24T05:44:42.597Z"
---

# Additional field detail

This reference provides additional field details on the Usage object.

## AccountId

The ID of the account associated with the usage data. This field is required if no value is specified for the AccountNumber field.

Usage data is associated primarily with a specific account. When you bill an account, the invoice includes all the usage-based fees in the billing period. If accounts can have multiple subscriptions, then you can specify charge and subscription information in other fields to prevent repeated counting of usage data. These other fields are the following:

-   `ChargeId` or `ChargeNumber`

-   `SubscriptionId` or `SubscriptionNumber`


## ChargeId, ChargeNumber

The ID or number of the rate plan charge for fees related to the usage data. Use the ChargeId or ChargeNumber fields to connect usage to its charge. Use `SubscriptionId` or `SubscriptionNumber` to apply usage data to all charges with the same unit of measure in the subscription.

If you omit all of the fields `ChargeId` , `ChargeNumber` , `SubscriptionId` , and `SubscriptionNumber` , then usage is billed against all charges associated with the account that have the same `UOM` values. The two charge-related fields, `ChargeId` and `ChargeNumber` , connect usage with a specific charge. The two subscription-related fields, `SubscriptionId` and `SubscriptionNumber` , connect usage with a specific subscription.

ChargeId changes each time an amendment is performed, however `ChargeNumber` does not, which makes it useful for tracking the charge.

## Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific Subscription object's ID with the call.

The ID for the `Usage` object is `UsageId` .

## InvoiceId, InvoiceNumber

If the usage record has been invoiced to the customer, it will contain an automatically-generated invoice ID and an invoice number. As of WSDL 33.0, you can include the invoice ID and/or the invoice number in the WHERE clause of your query. This allows you, for instance, to retrieve all the usage details for a particular invoice. Note that the invoice ID and invoice number are not queryable fields; the SOAP API will not return these fields in the result.

## SubscriptionId, SubscriptionNumber

The original ID or number of the subscription that contains the fees related to the usage data. Use the `ChargeId` or `ChargeNumber` field to connect usage to its charge. Use `SubscriptionId` or `SubscriptionNumber` to apply usage data to all charges with the same unit of measure in the subscription.

If you omit all of the fields `ChargeId` , `ChargeNumber` , `SubscriptionId` , and `SubscriptionNumber` , then usage is billed against all charges associated with the account that have the same `UOM` values. The two charge-related fields, `ChargeId` and `ChargeNumber` , connect usage with a specific charge. The two subscription-related fields, `SubscriptionId` and `SubscriptionNumber` , connect usage with a specific subscription.

Note that `ChargeId` and `SubscriptionId` are original IDs of the rate plan charge and the subscription.

## Custom Fields

In the Usage object, you can update custom fields using the SOAP API even if the object has a processed status. Only custom fields can be updated in this way. If you try to update any standard fields after the object has been processed, you will receive a `ValidateException` error.

## Example

Request

<soapenv:Body> <api:update> <api:zObjects xsi:type\="ns2:Usage"\> <obj:Id>402891f74c443614014c44f93bde07ae</obj:Id> <obj:Index1\_\_c>Index\_test</obj:Index1\_\_c> <obj:Field\_\_c>Field\_test</obj:Field\_\_c> <obj:Country\_\_c>Japan</obj:Country\_\_c> </api:zObjects> </api:update> </soapenv:Body>

Response

<soapenv:Body> <ns1:updateResponse xmlns:ns1="http://api.zuora.com/"\> <ns1:result> <ns1:Id>402891f74c443614014c44f93bde07ae</ns1:Id> <ns1:Success>true</ns1:Success> </ns1:result> </ns1:updateResponse> </soapenv:Body>

See Custom Fields for more information about custom fields.
