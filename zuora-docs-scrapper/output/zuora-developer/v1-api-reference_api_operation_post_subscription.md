---
title: "POST Subscription"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_Subscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:50:50.225Z"
---

## Create a subscription

This operation describes how to create a new subscription for an existing customer account.

### Notes

If you have the Invoice Settlement feature enabled, it is best practice to set

the `Zuora-Version` parameter to `211.0` or later [available versions](https://developer.zuora.com/api-references/api/overview/#section/API-Versions/Minor-Version).

Otherwise, an error occurs.

Default values for **customerAcceptanceDate** and **serviceActivationDate** are

set as follows. This API operation does not support creating a pending subscription.

|  | serviceActivationDate(SA) specified | serviceActivationDate (SA) NOT specified |
| --- | --- | --- |
| customerAcceptanceDate (CA) specified | SA uses value in the request call; CA uses value in the request call | CA uses value in the request call;SA uses CE as default |
| customerAcceptanceDate (CA) NOT specified | SA uses value in the request call; CA uses SA as default | SA and CA use CE as default |

This call supports a subset of the functionality of our [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order/) call. We recommend using "Create an order" instead of this call because the Orders call has the following advantages:

-   Provides options for managing the entire subscription lifecycle from creation through to cancellation using different order actions.
-   Allows the creation or modifying of multiple subscriptions in a single order.
-   Allows a single order to combine both recurring subscription digital goods or services with order line items for physical goods.
-   Orders are treated as atomic transactions. If any part fails, the entire order and subscription changes are rolled back.

This call can be used to create a single subscription and there are no deprecation plans for this call. We will continue to support this call.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| accountKeyrequired | stringCustomer account number or ID |
| --- | --- |
| applicationOrder | Array of stringsThe priority order to apply credit memos and/or unapplied payments to an invoice. Possible item values are: CreditMemo, UnappliedPayment.Note:This field is valid only if the applyCredit field is set to true.If no value is specified for this field, the default priority order is used, ["CreditMemo", "UnappliedPayment"], to apply credit memos first and then apply unapplied payments.If only one item is specified, only the items of the spedified type are applied to invoices. For example, if the value is ["CreditMemo"], only credit memos are used to apply to invoices. |
| applyCredit | booleanIf the value is true, the credit memo or unapplied payment on the order account will be automatically applied to the invoices generated by this order. The credit memo generated by this order will not be automatically applied to any invoices.Note: This field is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information. |
| applyCreditBalance | booleanWhether to automatically apply a credit balance to an invoice.If the value is true, the credit balance is applied to the invoice. If the value is false, no action is taken.To view the credit balance adjustment, retrieve the details of the invoice using the Get Invoices method.Prerequisite: invoice must be true.Note:If you are using the field invoiceCollect rather than the field invoice, the invoiceCollect value must be true.This field is deprecated if you have the Invoice Settlement feature enabled. |
| autoRenew | booleanDefault: falseIf true, this subscription automatically renews at the end of the subscription term.This field is only required if the termType field is set to TERMED. |
| collect | booleanDefault: trueCollects an automatic payment for a subscription. The collection generated in this operation is only for this subscription, not for the entire customer account.If the value is true, the automatic payment is collected. If the value is false, no action is taken.Prerequisite: The invoice or runBilling field must be true.Note: This field is available only if you are on the latest Zuora API minor version, or you set the Zuora-Version request header to 196.0 or a later available version. |
| contractEffectiveDaterequired | string <date>Effective contract date for this subscription, as yyyy-mm-dd |
| creditMemoReasonCode | stringA code identifying the reason for the credit memo transaction that is generated by the request. The value must be an existing reason code. If you do not pass the field or pass the field with empty value, Zuora uses the default reason code. |
| customerAcceptanceDate | string <date>The date on which the services or products within a subscription have been accepted by the customer, as yyyy-mm-dd.Default value is dependent on the value of other fields. See Notes section for more details. |
| documentDate | string <date>The date of the billing document, in yyyy-mm-dd format. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos.If this field is specified, the specified date is used as the billing document date.If this field is not specified, the date specified in the targetDate is used as the billing document date. |
| externallyManagedBy | stringAn enum field on the Subscription object to indicate the name of a third-party store. This field is used to represent subscriptions created through third-party stores.Enum: "Amazon" "Apple" "Google" "Roku" |
| gatewayId | stringThe ID of the payment gateway instance. For example, 2c92c0f86078c4d5016091674bcc3e92.If Payment Gateway Routing is enabled:If this field is not specified, gateway routing rules will be invoked.If this field is specified, the specified gateway will be used to process the payment.If Payment Gateway Routing is disabled:If this field is not specified, the default payment gateway will be used to process the payment. The default gateway of the customer account takes precedence over the default gateway of the tenant.If this field is specified, the specified gateway will be used to process the payment. |
| initialTerm | integer <int64>The length of the period for the first subscription term. If termType is TERMED, then this field is required, and the value must be greater than 0. If termType is EVERGREEN, this field is ignored. |
| initialTermPeriodType | stringThe period type for the first subscription term.This field is used with the InitialTerm field to specify the initial subscription term.Values are:Month (default)YearDayWeek |
| invoiceOwnerAccountKey | stringInvoice owner account number or ID.Note: This feature is in Limited Availability. If you wish to have access to the feature, submit a request at Zuora Global Support. |
| invoiceSeparately | booleanSeparates a single subscription from other subscriptions and invoices the charge independently.If the value is true, the subscription is billed separately from other subscriptions. If the value is false, the subscription is included with other subscriptions in the account invoice.The default value is false.Prerequisite: The default subscription setting Enable Subscriptions to be Invoiced Separately must be set to Yes. |
| lastBookingDate | string <date>The last booking date of the subscription object. This field is writable only when the subscription is newly created as a first version subscription. You can override the date value when creating a subscription through the Subscribe and Amend API or the subscription creation UI (non-Orders). Otherwise, the default value today is set per the user's timezone. The value of this field is as follows:For a new subscription created by the Subscribe and Amend APIs, this field has the value of the subscription creation date.For a subscription changed by an amendment, this field has the value of the amendment booking date.For a subscription created or changed by an order, this field has the value of the order date. |
| notes | string <= 1000 charactersThe notes for the subscription. |
| paymentMethodId | stringThe ID of the payment method used for the payment. |
| prepayment | booleanIndicates whether the subscription will consume the reserved payment amount of the customer account. See Prepaid Cash with Drawdown for more information. |
| renewalSetting | stringSpecifies whether a termed subscription will remain termed or change to evergreen when it is renewed.Values:RENEW_WITH_SPECIFIC_TERM (default)RENEW_TO_EVERGREEN |
| renewalTermrequired | integer <int64>The length of the period for the subscription renewal term. Default is 0. |
| renewalTermPeriodType | stringThe period type for the subscription renewal term.This field is used with the renewalTerm field to specify the subscription renewal term.Values are:Month (default)YearDayWeek |
| runBilling | booleanDefault: trueCreates an invoice for a subscription. If you have the Invoice Settlement feature enabled, a credit memo might also be created based on the invoice and credit memo generation rule.The billing documents generated in this operation is only for this subscription, not for the entire customer account. Note: This field is available only if you are on the latest Zuora API minor version, or you set the Zuora-Version request header to 211.0 or a later available version.Possible values:true: An invoice is created. If you have the Invoice Settlement feature enabled, a credit memo might also be created.false: No invoice is created. |
| serviceActivationDate | string <date>The date on which the services or products within a subscription have been activated and access has been provided to the customer, as yyyy-mm-dd.Default value is dependent on the value of other fields. See Notes section for more details. |
| subscribeToRatePlansrequired | Array of objects (subscribeToRatePlans)Container for one or more rate plans for this subscription. |
| subscriptionNumber | stringSubscription Number. The value can be up to 1000 characters.If you do not specify a subscription number when creating a subscription, Zuora will generate a subscription number automatically.If the account is created successfully, the subscription number is returned in the subscriptionNumber response field. |
| targetDate | string <date>Date through which to calculate charges if an invoice or a credit memo is generated, as yyyy-mm-dd. Default is current date.Note: - This field is available only if you are on the latest Zuora API minor version, or you set the Zuora-Version request header to 211.0 or a later available version.The credit memo is only available if you have the Invoice Settlement feature enabled. |
| termStartDate | string <date>The date on which the subscription term begins, as yyyy-mm-dd. If this is a renewal subscription, this date is different from the subscription start date. |
| termTyperequired | stringPossible values are: TERMED, EVERGREEN. |
| CpqBundleJsonId__QT | string <= 32 charactersThe Bundle product structures from Zuora Quotes if you utilize Bundling in Salesforce. Do not change the value in this field. |
| OpportunityCloseDate__QT | string <date>The closing date of the Opportunity. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. |
| OpportunityName__QT | string <= 100 charactersThe unique identifier of the Opportunity. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. |
| QuoteBusinessType__QT | string <= 32 charactersThe specific identifier for the type of business transaction the Quote represents such as New, Upsell, Downsell, Renewal or Churn. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. |
| QuoteNumber__QT | string <= 32 charactersThe unique identifier of the Quote. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. |
| QuoteType__QT | string <= 32 charactersThe Quote type that represents the subscription lifecycle stage such as New, Amendment, Renew or Cancel. This field is used in Zuora data sources to report on Subscription metrics. If the subscription originated from Zuora Quotes, the value is populated with the value from Zuora Quotes. |
| IntegrationId__NS | string <= 255 charactersID of the corresponding object in NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| IntegrationStatus__NS | string <= 255 charactersStatus of the subscription's synchronization with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| Project__NS | string <= 255 charactersThe NetSuite project that the subscription was created from. Only available if you have installed the Zuora Connector for NetSuite. |
| SalesOrder__NS | string <= 255 charactersThe NetSuite sales order than the subscription was created from. Only available if you have installed the Zuora Connector for NetSuite. |
| SyncDate__NS | string <= 255 charactersDate when the subscription was synchronized with NetSuite. Only available if you have installed the Zuora Connector for NetSuite. |
| property name*additional property | anyCustom fields of the Subscription object. The name of each custom field has the form customField__c. Custom field names are case sensitive. See Custom Fields for more information. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

post/v1/subscriptions

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "accountKey": "8ad09be48db5aba7018db604776d4854",

-   "contractEffectiveDate": "2024-07-16",

-   "termType": "TERMED",

-   "initialTerm": 12,

-   "renewalTerm": 12,

-   "autoRenew": true,

-   "subscribeToRatePlans": [

    -   {

        -   "productRatePlanId": "8ad081dd9096ef9501909b40bb4e74a4"


        }


    ]


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "success": true,

-   "subscriptionId": "8ad087d290a5e7330190b98577936eaf",

-   "subscriptionNumber": "A-S00000141",

-   "contractedMrr": 14.99,

-   "totalContractedValue": 179.88


}`
