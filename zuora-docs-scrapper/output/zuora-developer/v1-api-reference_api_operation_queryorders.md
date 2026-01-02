---
title: "QueryOrders"
url: "https://developer.zuora.com/v1-api-reference/api/operation/queryOrders/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:07:12.792Z"
---

## List orders

Lists orders. You can use the query parameters to filter, expand, and sort the returned results.

Security**bearerAuth**

Request

##### query Parameters

| pageSize | integer [ 1 .. 99 ]Default: 10The maximum number of results to return in a single page. If the specified pageSize is less than 1 or greater than 99, Zuora will return a 400 error. |
| --- | --- |
| cursor | stringA cursor for use in pagination. A cursor defines the starting place in a list. For instance, if you make a list request and receive 100 objects, ending with next_page=W3sib3JkZXJ=, your subsequent call can include cursor=W3sib3JkZXJ= in order to fetch the next page of the list. |
| sort[] | Array of stringsA case-insensitive query parameter that specifies the sort order of the list, which can be either ascending (e.g. accountnumber.ASC) or descending (e.g. accountnumber.DESC). You cannot sort on properties in arrays. If the array-type properties are specified for the sort[] parameter, they are ignored. Supported sortable fields:idupdateddateorderdateordernumberaccountidstatusinvoicescheduleid |
| expand[] | Array of stringsAllows you to expand responses by including related object information in a single call.Note: For draft and scheduled orders, information on the subscription, rate plan, and rate plan charges is not available nor displayed until the following conditions are met:A scheduled order is executed and its status is changed to completed.A draft order is activated and its status is changed to pending or completed.For example, if an order is in the scheduled or draft status, information on the subscription, rate plan, and rate plan charges is not displayed.Items Enum: "account" "orderlineitems" "orderlineitems.invoiceitems" "orderactions" "orderactions.subscription" "orderactions.subscription.rateplans" "orderactions.subscription.rateplans.rateplancharges" |
| filter[] | Array of stringsA case-insensitive filter on the list.Supported filterable fields:idupdateddateorderdateordernumberaccountidstatusinvoicescheduleid{indexedcustomfield}: Use the format like customField__c to filter on custom fields. |
| fields[] | Array of stringsA case-insensitive query parameter that allows you to specify which fields are returned in the response.Example: fields[]=id,createddate |
| includeNullFields | booleanDefault: falseSpecifies whether to include fields with the null value in the response.If set to true, all fields will be returned in the response, including those with the null value.If set to false, only fields with non-null values will be returned. |

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal server error

4XX

Invalid input

get/object-query/orders

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/object-query/orders?pageSize=10&cursor=string&sort%5B%5D=string&expand%5B%5D=account&filter%5B%5D=string&fields%5B%5D=string&includeNullFields=false' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Idempotency-Key: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   500
-   4XX

application/json

Copy

Expand allCollapse all

`{

-   "nextPage": "string",

-   "data": [

    -   {

        -   "id": "string",

        -   "createdById": "string",

        -   "createdDate": "2019-08-24T14:15:22Z",

        -   "updatedById": "string",

        -   "updatedDate": "2019-08-24T14:15:22Z",

        -   "description": "string",

        -   "orderDate": "2019-08-24",

        -   "orderNumber": "string",

        -   "accountId": "string",

        -   "status": "Draft",

        -   "state": "string",

        -   "createdByMigration": true,

        -   "category": "string",

        -   "invoiceScheduleId": "string",

        -   "scheduledDate": "2019-08-24",

        -   "scheduledDatePolicy": "SpecificDate",

        -   "errorCode": "string",

        -   "errorMessage": "string",

        -   "response": "string",

        -   "account": {

            -   "id": "string",

            -   "createdById": "string",

            -   "createdDate": "2019-08-24T14:15:22Z",

            -   "updatedById": "string",

            -   "updatedDate": "2019-08-24T14:15:22Z",

            -   "accountNumber": "string",

            -   "additionalEmailAddresses": "string",

            -   "allowInvoiceEdit": false,

            -   "autoPay": true,

            -   "balance": 0.1,

            -   "batch": "string",

            -   "bcdSettingOption": "ManualSet",

            -   "billCycleDay": 0,

            -   "billToId": "string",

            -   "communicationProfileId": "string",

            -   "creditBalance": 0.1,

            -   "crmId": "string",

            -   "currency": "string",

            -   "customerServiceRepName": "string",

            -   "defaultPaymentMethodId": "string",

            -   "eInvoiceProfileId": "string",

            -   "invoiceDeliveryPrefsEmail": true,

            -   "invoiceDeliveryPrefsPrint": true,

            -   "invoiceTemplateId": "string",

            -   "lastInvoiceDate": "2019-08-24",

            -   "lastMetricsUpdate": "2019-08-24T14:15:22Z",

            -   "name": "string",

            -   "notes": "string",

            -   "organizationId": "string",

            -   "parentId": "string",

            -   "partnerAccount": true,

            -   "paymentMethodCascadingConsent": true,

            -   "purchaseOrderNumber": "string",

            -   "salesRepName": "string",

            -   "sequenceSetId": "string",

            -   "shipToId": "string",

            -   "soldToId": "string",

            -   "status": "Active",

            -   "taxCompanyCode": "string",

            -   "taxExemptCertificateID": "string",

            -   "taxExemptCertificateType": "string",

            -   "taxExemptDescription": "string",

            -   "taxExemptEffectiveDate": "2019-08-24",

            -   "taxExemptEntityUseCode": "string",

            -   "taxExemptExpirationDate": "2019-08-24",

            -   "taxExemptIssuingJurisdiction": "string",

            -   "taxExemptStatus": "No",

            -   "totalInvoiceBalance": 0.1,

            -   "unappliedBalance": 0,

            -   "vATId": "string",

            -   "mrr": 0,

            -   "totalDebitMemoBalance": 0.1,

            -   "unappliedCreditMemoAmount": 0.1,

            -   "creditMemoTemplateId": "string",

            -   "debitMemoTemplateId": "string",

            -   "paymentGateway": "string",

            -   "paymentTerm": "string",

            -   "billTo": { },

            -   "shipTo": { },

            -   "soldTo": { },

            -   "defaultPaymentMethod": { },

            -   "subscriptions": [

                -   { }


                ],

            -   "payments": [

                -   { }


                ],

            -   "refunds": [

                -   { }


                ],

            -   "creditMemos": [

                -   { }


                ],

            -   "debitMemos": [

                -   { }


                ],

            -   "invoices": [

                -   { }


                ],

            -   "usages": [

                -   { }


                ],

            -   "paymentMethods": [

                -   { }


                ],

            -   "property1": { },

            -   "property2": { }


            },

        -   "orderLineItems": [

            -   {

                -   "id": "string",

                -   "createdById": "string",

                -   "createdDate": "2019-08-24T14:15:22Z",

                -   "updatedById": "string",

                -   "updatedDate": "2019-08-24T14:15:22Z",

                -   "accountingCode": "string",

                -   "billTargetDate": "2019-08-24",

                -   "amountPerUnit": 0,

                -   "description": "string",

                -   "amount": 0,

                -   "amountWithoutTax": 0,

                -   "itemName": "string",

                -   "itemNumber": "string",

                -   "itemState": "Executing",

                -   "itemType": "Product",

                -   "listPricePerUnit": 0,

                -   "listPrice": 0,

                -   "orderId": "string",

                -   "productCode": "string",

                -   "purchaseOrderNumber": "string",

                -   "quantity": 0,

                -   "revenueRecognitionRule": "string",

                -   "productRatePlanChargeId": "string",

                -   "billToId": "string",

                -   "billToSnapshotId": "string",

                -   "shipTo": "string",

                -   "shipToSnapshotId": "string",

                -   "soldTo": "string",

                -   "soldToSnapshotId": "string",

                -   "soldToOrderContactId": "string",

                -   "ownerAccountId": "string",

                -   "invoiceOwnerAccountId": "string",

                -   "taxCode": "string",

                -   "taxMode": "TaxInclusive",

                -   "transactionDate": "2019-08-24",

                -   "uOM": "string",

                -   "relatedSubscriptionNumber": "string",

                -   "transactionEndDate": "2019-08-24",

                -   "transactionStartDate": "2019-08-24",

                -   "excludeItemBillingFromRevenueAccounting": true,

                -   "excludeItemBookingFromRevenueAccounting": true,

                -   "originalOrderDate": "2019-08-24",

                -   "amendedByOrderOn": "2019-08-24",

                -   "itemCategory": "Sales",

                -   "originalOrderId": "string",

                -   "originalOrderLineItemId": "string",

                -   "originalOrderLineItemNumber": "string",

                -   "originalOrderNumber": "string",

                -   "quantityAvailableForReturn": 0,

                -   "quantityFulfilled": 0,

                -   "quantityPendingFulfillment": 0,

                -   "requiresFulfillment": true,

                -   "billingRule": "TriggerWithoutFulfillment",

                -   "inlineDiscountPerUnit": 0,

                -   "inlineDiscountType": "Percentage",

                -   "discount": 0,

                -   "recognizedRevenueAccountingCodeId": "string",

                -   "deferredRevenueAccountingCodeId": "string",

                -   "contractAssetAccountingCode": "string",

                -   "contractLiabilityAccountingCode": "string",

                -   "contractRecognizedRevenueAccountingCodeId": "string",

                -   "unbilledReceivablesAccountingCodeId": "string",

                -   "adjustmentRevenueAccountingCodeId": "string",

                -   "adjustmentLiabilityAccountingCodeId": "string",

                -   "invoiceItems": [

                    -   { }


                    ],

                -   "property1": { },

                -   "property2": { }


                }


            ],

        -   "orderActions": [

            -   {

                -   "id": "string",

                -   "createdById": "string",

                -   "createdDate": "2019-08-24T14:15:22Z",

                -   "updatedById": "string",

                -   "updatedDate": "2019-08-24T14:15:22Z",

                -   "contractEffectiveDate": "2019-08-24",

                -   "customerAcceptanceDate": "2019-08-24",

                -   "type": "CreateSubscription",

                -   "sequence": 0,

                -   "subscriptionVersionAmendmentId": "string",

                -   "orderId": "string",

                -   "subscriptionId": "string",

                -   "subscriptionNumber": "string",

                -   "serviceActivationDate": "2019-08-24",

                -   "autoRenew": false,

                -   "renewSetting": "RENEW_WITH_SPECIFIC_TERM",

                -   "renewalTerm": 0,

                -   "renewalTermPeriodType": "Month",

                -   "termStartDate": "2019-08-24",

                -   "termType": "TERMED",

                -   "currentTerm": 0,

                -   "currentTermPeriodType": "Month",

                -   "suspendDate": "2019-08-24",

                -   "resumeDate": "2019-08-24",

                -   "cancellationEffectiveDate": "2019-08-24",

                -   "cancellationPolicy": "EndOfCurrentTerm",

                -   "paymentTerm": "string",

                -   "billToContactId": "string",

                -   "invoiceTemplateId": "string",

                -   "sequenceSetId": "string",

                -   "shipToContactId": "string",

                -   "soldToContactId": "string",

                -   "clearingExistingPaymentTerm": false,

                -   "clearingExistingBillToContact": false,

                -   "clearingExistingInvoiceTemplate": false,

                -   "clearingExistingSequenceSet": false,

                -   "clearingExistingShipToContact": false,

                -   "clearingExistingSoldToContact": false,

                -   "communicationProfileId": "string",

                -   "clearingExistingCommunicationProfile": false,

                -   "subType": "Upgrade",

                -   "effectivePolicy": "EffectiveImmediately",

                -   "subscription": { },

                -   "property1": { },

                -   "property2": { }


                }


            ],

        -   "property1": { },

        -   "property2": { }


        }


    ]


}`
