---
title: "PUT Subscription"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_Subscription/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:50:50.011Z"
---

## Update a subscription

Use this call to make the following kinds of changes to a subscription:

-   Add a note
-   Change the renewal term or auto-renewal flag
-   Change the term length or change between evergreen and termed
-   Add a new product rate plan
-   Remove an existing subscription rate plan
-   Change the quantity or price of an existing subscription rate plan
-   Change rate plans - to replace the existing rate plans in a subscription with other rate plans. Changing rate plans is currently not supported for the [Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature. When Billing - Revenue Integration is enabled, changing rate plans will no longer be applicable in Zuora Billing.

### Notes:

-   The "Update a subscription" call creates a new subscription object that has a new version number and to which the subscription changes are applied. The new subscription object has the same subscription name but a new, different, subscription ID. The `Status` field of the new subscription object will be set to `Active` unless the change applied was a cancelation or suspension in which case the status reflects that. The `Status` field of the originating subscription object changes from `Active` to `Expired`. A status of `Expired` does not imply that the subscription itself has expired or ended, merely that this subscription object is no longer the most recent.

-   In one request, this call can make:

    -   Up to 9 combined add, update, and remove changes
    -   No more than 1 change to terms & conditions
-   Updates are performed in the following sequence:

    1.  First change the notes on the existing subscription, if requested.
    2.  Then change the terms and conditions, if requested.
    3.  Then perform the remaining amendments based upon the effective dates specified. If multiple amendments have the same contract-effective dates, then execute adds before updates, and updates before removes.
-   The update operation is atomic. If any of the updates fails, the entire operation is rolled back.

-   The response of the Update Subscription call is based on the REST API minor version you set in the request header. The response structure might be different if you use different minor version numbers.

-   If you have the Invoice Settlement feature enabled, it is best practice to set the `Zuora-Version` parameter to `211.0` or later [available versions](https://developer.zuora.com/api-references/api/overview/#section/API-Versions/Minor-Version). Otherwise, an error occurs.


### Override a Tiered Price

There are two ways you override a tiered price:

-   Override a specific tier number. For example: `tiers[{tier:1,price:8},{tier:2,price:6}]`
-   Override the entire tier structure. For example: `tiers[{tier:1,price:8,startingUnit:1,endingUnit:100,priceFormat:"FlatFee"}, {tier:2,price:6,startingUnit:101,priceFormat:"FlatFee"}]`

If you just override a specific tier, do not include the `startingUnit` field in the request.

Security**bearerAuth**

Request

##### path Parameters

| subscription-keyrequired | stringSubscription number or ID. ID can be the latest version or any history version of ID.To make sure you update the last version of the subscription, use one of the following operations to retrieve the last version of ID:List subscriptions by account keyRetrieve a subscription by key by using the subscription number as the subscription-keyIf you want to use any history version of ID, the STABLE_ID_PUBLIC_API permission must be enabled. Submit a request at Zuora Global Support to enable the permission. To retrieve a history version of ID, use the Retrieve a subscription by key and version operation. |
| --- | --- |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| add | Array of objects (add)Container for adding one or more rate plans. |
| --- | --- |
| applicationOrder | Array of stringsThe priority order to apply credit memos and/or unapplied payments to an invoice. Possible item values are: CreditMemo, UnappliedPayment.Note:This field is valid only if the applyCredit field is set to true.If no value is specified for this field, the default priority order is used, ["CreditMemo", "UnappliedPayment"], to apply credit memos first and then apply unapplied payments.If only one item is specified, only the items of the spedified type are applied to invoices. For example, if the value is ["CreditMemo"], only credit memos are used to apply to invoices. |
| applyCredit | booleanWhether to automatically apply credit memos or unapplied payments, or both to an invoice.If the value is true, the credit memo or unapplied payment, or both will be automatically applied to the invoice. If no value is specified or the value is false, no action is taken.Note: This field is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information. |
| applyCreditBalance | booleanWhether to automatically apply a credit balance to an invoice.If the value is true, the credit balance is applied to the invoice. If the value is false, no action is taken.To view the credit balance adjustment, retrieve the details of the invoice using the Get Invoices method.Prerequisite: invoice must be true.Note:If you are using the field invoiceCollect rather than the field invoice, the invoiceCollect value must be true.This field is deprecated if you have the Invoice Settlement feature enabled. |
| autoRenew | booleanIf true, this subscription automatically renews at the end of the subscription term. Default is false. |
| bookingDate | string <date>The booking date that you want to set for the contract when you change the termType field of the subscription and as a result get a new version of subscription created. The booking date of an amendment is the equivalent of the order date of an order. This field must be in the yyyy-mm-dd format. The default value is the current date when you make the API call. |
| change | Array of objects (change)Use this field to change one or more rate plans - to replace the existing rate plans in a subscription with other rate plans.Note: Changing rate plans is currently not supported for the Billing - Revenue Integration feature. When Billing - Revenue Integration is enabled, changing rate plans will no longer be applicable in Zuora Billing. |
| collect | booleanDefault: falseCollects an automatic payment for a subscription. The collection generated in this operation is only for this subscription, not for the entire customer account.If the value is true, the automatic payment is collected. If the value is false, no action is taken.Prerequisite: The invoice or runBilling field must be true.Note: This field is available only if you are on the latest Zuora API version, or you set the Zuora-Version request header to 196.0 or a later available version. |
| creditMemoReasonCode | stringA code identifying the reason for the credit memo transaction that is generated by the request. The value must be an existing reason code. If you do not pass the field or pass the field with empty value, Zuora uses the default reason code. |
| currentTerm | integer <int64>The length of the period for the current subscription term. If termType is TERMED, this field is required and must be greater than 0. If termType is EVERGREEN, this value is ignored. |
| currentTermPeriodType | stringThe period type for the current subscription term.This field is used with the CurrentTerm field to specify the current subscription term.Values are:Month (default)YearDayWeek |
| documentDate | string <date>The date of the billing document, in yyyy-mm-dd format. It represents the invoice date for invoices, credit memo date for credit memos, and debit memo date for debit memos.If this field is specified, the specified date is used as the billing document date.If this field is not specified, the date specified in the targetDate is used as the billing document date. |
| externallyManagedBy | stringAn enum field on the Subscription object to indicate the name of a third-party store. This field is used to represent subscriptions created through third-party stores.Enum: "Amazon" "Apple" "Google" "Roku" |
| includeExistingDraftDocItems | booleanSpecifies whether to include draft invoice items in subscription previews. Values are:true (default). Includes draft invoice items in the preview result.false. Excludes draft invoice items in the preview result.Note: This field is available only if you are on the latest Zuora API version, or you set the Zuora-Version request header to 207.0 or a later available version. |
| invoiceSeparately | booleanSeparates a single subscription from other subscriptions and invoices the charge independently.If the value is true, the subscription is billed separately from other subscriptions. If the value is false, the subscription is included with other subscriptions in the account invoice.The default value is false. Prerequisite: The default subscription setting Enable Subscriptions to be Invoiced Separately must be set to Yes. |
| notes | string <= 1000 charactersThe notes for the subscription. |
| preview | booleanIf true the update is made in preview mode. The default setting is false. |
| previewType | stringDefault: "LegalDoc"The type of preview you will receive.Note: If your API minor version is earlier than 206.0 or you specify the Zuora-Version header for this request to 206.0 or earlier, the following values are supported for the previewType field:InvoiceItem (default)ChargeMetricsInvoiceItemChargeMetricsEnum: "LegalDoc" "ChargeMetrics" "LegalDocChargeMetrics" |
| remove | Array of objects (remove)Container for removing one or more rate plans. |
| renewalSetting | stringSpecifies whether a termed subscription will remain TERMED or change to EVERGREEN when it is renewed.Values are:RENEW_WITH_SPECIFIC_TERM (default)RENEW_TO_EVERGREEN |
| renewalTerm | integer <int64>The length of the period for the subscription renewal term. Default is 0. |
| renewalTermPeriodType | stringThe period type for the subscription renewal term.This field is used with the renewalTerm field to specify the subscription renewal term.Values are:Month (default)YearDayWeek |
| runBilling | booleanDefault: falseCreates an invoice for a subscription. If you have the Invoice Settlement feature enabled, a credit memo might also be created based on the invoice and credit memo generation rule.The billing documents generated in this operation is only for this subscription, not for the entire customer account.This field is available only if you are on the latest Zuora API version, or you set the Zuora-Version request header to 211.0 or a later available version.Possible values:true: An invoice is created. If you have the Invoice Settlement feature enabled, a credit memo might also be created.false: No invoice is created. |
| targetDate | string <date>Date through which to calculate charges if an invoice or a credit memo is generated, as yyyy-mm-dd. Default is current date.Note: The credit memo is only available if you have the Invoice Settlement feature enabled.This field is available only if you are on the latest Zuora API minor version, or you set the Zuora-Version request header to 211.0 or a later available version. |
| termStartDate | string <date>Date the subscription term begins, as yyyy-mm-dd. If this is a renewal subscription, this date is different from the subscription start date. |
| termType | stringPossible values are: TERMED, EVERGREEN. |
| update | Array of objects (update)Container for updating one or more rate plans. |
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

put/v1/subscriptions/{subscription-key}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "autoRenew": true


}`

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

`{

-   "subscriptionId": "4028bb83510f8ed7015114a503cf0373",

-   "success": true,

-   "totalDeltaMrr": 100,

-   "totalDeltaTcv": 4867.7419355


}`
