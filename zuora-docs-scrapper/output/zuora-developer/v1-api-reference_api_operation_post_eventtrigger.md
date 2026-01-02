---
title: "POST EventTrigger"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_EventTrigger/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:15:15.852Z"
---

## Create an event trigger

When you create an event trigger, you must specify the base object and define the trigger condition.

### Specify the base object

Use `baseObject` field to specify which object to define a trigger on. You can define an event trigger on any of the following objects:

-   Account
-   AccountingCode
-   AccountingPeriod
-   Amendment
-   BillingRun
-   Contact
-   CreditBalanceAdjustment
-   CreditMemo
-   CreditMemoApplication
-   CreditMemoApplicationItem
-   CreditMemoItem
-   CreditMemoPart
-   DebitMemo
-   DebitMemoItem
-   DeliveryAdjustment
-   Feature
-   Fulfillment
-   Fund
-   Invoice
-   InvoiceAdjustment
-   InvoiceItem
-   InvoiceItemAdjustment
-   JournalEntry
-   JournalEntryItem
-   Order
-   OrderAction
-   OrderLineItem
-   Payment
-   PaymentApplication
-   PaymentMethod
-   PaymentPart
-   PaymentSchedule
-   PaymentScheduleItem
-   Product
-   ProductFeature
-   ProductRatePlan
-   ProductRatePlanCharge
-   ProductRatePlanChargeTier
-   RatePlan
-   RatePlanCharge
-   RatePlanChargeTier
-   RatingResult
-   Refund
-   RefundApplication
-   RefundPart
-   RevenueEvent
-   RevenueEventItem
-   RevenueSchedule
-   RevenueScheduleItem
-   Subscription
-   SubscriptionChargeDeliverySchedule
-   SubscriptionChargePriceInterval
-   SubscriptionChargePriceIntervalTier
-   SubscriptionOffer
-   SubscriptionProductFeature
-   TaxationItem
-   UpdaterDetail
-   Usage
-   ValidityPeriodSummary

In addition to the above Zuora standard objects, you can also use custom objects as base objects for custom events.

#### Tenant level base objects and tenant level event triggers

Zuora identifies the following base objects and custom objects as the tenant level base objects:

-   AccountingCode
-   AccountingPeriod
-   BillingRun
-   Feature
-   JournalEntry
-   JournalEntryItem
-   Product
-   ProductFeature
-   ProductRatePlan
-   ProductRatePlanCharge
-   ProductRatePlanChargeTier

Event triggers defined on tenant level base objects are tenant level event triggers. Notifications associated with tenant level events are system notifications.

**Note:** Tenant level event triggers and system notifications are only available in the default profile.

### Define the trigger condition

The `condition` field is a [JEXL](http://commons.apache.org/proper/commons-jexl/) expression that specifies when to trigger events. The expression can contain fields from the object that the trigger is defined on.

**Note:** The condition cannot contain fields from [data source](https://knowledgecenter.zuora.com/DC_Developers/M_Export_ZOQL) objects that are joined to the object that the trigger is defined on.

For example, the following condition causes an event to be triggered whenever an invoice is posted with an amount greater than 1000:

`changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000.0`

Where:

-   `changeType` is a keyword that specifies the type of change that occurred to the Invoice object. For all objects, the supported values of `changeType` are `INSERT`, `UPDATE`, and `DELETE`.
-   `Invoice.Status` is the value of the Invoice object's `Status` field after the change occurred.
-   `Invoice.Status_old` is the value of the Invoice object's `Status` field before the change occurred.

In the above example, the value of `baseObject` is `Invoice`.

#### Limitations

This event trigger has the following limitations:

-   Base object values for Zuora standard objects are case sensitive. For example, `PaymentMethod` is correct, and `Paymentmethod` or `paymentmethod` is incorrect.
-   Base object values for custom objects must be lowercase. For example, `default__vehicle`.
-   The INSERT change type is not supported on RatePlan base objects.
-   The INSERT change type is not supported on SubscriptionProductFeature base objects.
-   When creating custom events, you cannot match fields of the RatePlanCharge object against constant values for the `condition` field. For example, the following condition will cause errors: `RatePlanCharge.ShippingProcessStatus__c == 'Shipping Confirmed'`, where `Shipping Confirmed` is a constant value.
-   Fields on objects are case-sensitive. For example, `PaymentMethod.createdbyid` can result in errors. The correct format is `PaymentMethod.CreatedById`.
-   A condition cannot contain fields from data source objects that are joined to the base object.
-   Do not create duplicate events because they will be either merged or deleted. Zuora considers events that have the same trigger condition as duplicate events, regardless of event type names.

See [Custom Events](https://knowledgecenter.zuora.com/Central_Platform/Notifications/A_Z_Custom_Events) for more information.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |

##### Request Body schema: application/json
required

| activerequired | booleanThe status of the event trigger. |
| --- | --- |
| baseObjectrequired | string [ 1 .. 100 ] charactersThe base object that the trigger rule is defined upon. The format of the value in this field depends on the base object type:Standard object: object name, which should follow the pattern ^[A-Z][\w-]*$. For example, Invoice.Custom object: default__<custom_object_api_name>. For example, default__vehicle. |
| conditionrequired | string [ 1 .. 5000 ] charactersThe JEXL expression to be evaluated against object changes. See above for more information and an example. |
| description | string <= 1000 charactersThe description of the event trigger. |
| eventTyperequired | object (EventType) |

Responses

200

OK

400

Bad Request

500

Server Error

post/events/event-triggers

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "active": true,

-   "baseObject": "Invoice",

-   "condition": "changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000.0",

-   "eventType": {

    -   "name": "LargeInvoicePosted",

    -   "displayName": "Large Invoice Posted"


    }


}`

Response samples

-   200
-   400
-   500

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "id": "5a70564ad08c412fb98e06a80c365c93",

-   "baseObject": "Invoice",

-   "condition": "changeType == 'UPDATE' && Invoice.Status == 'Posted' && Invoice.Status_old != 'Posted' && Invoice.Amount > 1000.0",

-   "eventType": {

    -   "name": "LargeInvoicePosted",

    -   "displayName": "Large Invoice Posted",

    -   "namespace": "user.notification"


    },

-   "active": true


}`
