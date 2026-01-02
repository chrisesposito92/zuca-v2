---
title: "GET DebitMemoItems"
url: "https://developer.zuora.com/v1-api-reference/api/operation/GET_DebitMemoItems/"
product: "zuora-developer"
scraped_at: "2026-01-02T06:56:51.417Z"
---

## List debit memo items

**Note:** This operation is only available if you have [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement) enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see [Invoice Settlement Enablement and Checklist Guide](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement/Invoice_Settlement_Migration_Checklist_and_Guide) for more information.

Retrieves the information about all items of a debit memo. A debit memo item is a single line item in a debit memo.

### Filtering

You can use query parameters to restrict the data returned in the response. Each query parameter corresponds to one field in the response body.

If the value of a filterable field is string, you can set the corresponding query parameter to `null` when filtering. Then, you can get the response data with this field value being `null`.

Examples:

-   /v1/debit-memos/402890245c7ca371015c7cb40b28001f/items?amount=100

-   /v1/debit-memos/402890245c7ca371015c7cb40b28001f/items?amount=100&sort=createdDate


Security**bearerAuth**

Request

##### path Parameters

| debitMemoKeyrequired | stringThe unique ID or number of a debit memo. For example, 8a8082e65b27f6c3015ba419f3c2644e or DM00000001. |
| --- | --- |

##### query Parameters

| page | integer >= 1Default: 1The index number of the page that you want to retrieve. This parameter is dependent on pageSize. You must set pageSize before specifying page. For example, if you set pageSize to 20 and page to 2, the 21st to 40th records are returned in the response. |
| --- | --- |
| pageSize | integer <= 40Default: 20The number of records returned per page in the response. |
| amount | number <double>This parameter filters the response based on the amount field. |
| beAppliedAmount | number <double>This parameter filters the response based on the beAppliedAmount field. |
| createdById | stringThis parameter filters the response based on the createdById field. |
| createdDate | string <date-time>This parameter filters the response based on the createdDate field. |
| id | stringThis parameter filters the response based on the id field. |
| serviceEndDate | string <date>This parameter filters the response based on the serviceEndDate field. |
| serviceStartDate | string <date>This parameter filters the response based on the serviceStartDate field. |
| sku | stringThis parameter filters the response based on the sku field. |
| skuName | stringThis parameter filters the response based on the skuName field. |
| sourceItemId | stringThis parameter filters the response based on the sourceItemId field. |
| subscriptionId | stringThis parameter filters the response based on the subscriptionId field. |
| updatedById | stringThis parameter filters the response based on the updatedById field. |
| updatedDate | string <date-time>This parameter filters the response based on the updatedDate field. |
| sort | stringThis parameter restricts the order of the data returned in the response. You can use this parameter to supply a dimension you want to sort on.A sortable field uses the following form:operator field_nameYou can use at most two sortable fields in one URL path. Use a comma to separate sortable fields. For example: operator field_name, operator field_nameoperator is used to mark the order of sequencing. The operator is optional. If you only specify the sortable field without any operator, the response data is sorted in descending order by this field.The - operator indicates an ascending order.The + operator indicates a descending order.By default, the response data is displayed in descending order by updated date.field_name indicates the name of a sortable field. The supported sortable fields of this operation are as below:idamountbeAppliedAmountskuskuNameserviceStartDateserviceEndDatesourceItemIdcreatedDatecreatedByIdupdatedDateupdatedByIdsubscriptionIdExamples:/v1/debit-memos/402890245c7ca371015c7cb40b28001f/items?sort=createdDate/v1/debit-memos/402890245c7ca371015c7cb40b28001f/items?amount=100&sort=createdDate |

##### header Parameters

| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| --- | --- |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Org-Ids | stringComma separated IDs. If you have Zuora Multi-Org enabled, you can use this header to specify which orgs to perform the operation in. If you do not have Zuora Multi-Org enabled, you should not set this header.The IDs must be a sub-set of the user's accessible orgs. If you specify an org that the user does not have access to, the operation fails. This header is important in Multi-Org (MO) setups because it defines the organization context under which the API should operate—mainly used for read access or data visibility filtering. If the header is not set, the operation is performed in scope of the user's accessible orgs. |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

Responses

200

OK

500

Internal Server Error

4XX

Request Errors

get/v1/debit-memos/{debitMemoKey}/items

Request samples

-   cURL

Copy

curl \-i \-X GET \\
  'https://rest.test.zuora.com/v1/debit-memos/{debitMemoKey}/items?page=1&pageSize=20&amount=0.1&beAppliedAmount=0.1&createdById=string&createdDate=2019-08-24T14%3A15%3A22Z&id=string&serviceEndDate=2019-08-24&serviceStartDate=2019-08-24&sku=string&skuName=string&sourceItemId=string&subscriptionId=string&updatedById=string&updatedDate=2019-08-24T14%3A15%3A22Z&sort=string' \\
  \-H 'Accept-Encoding: string' \\
  \-H 'Authorization: Bearer <YOUR\_TOKEN\_HERE>' \\
  \-H 'Content-Encoding: string' \\
  \-H 'Zuora-Entity-Ids: string' \\
  \-H 'Zuora-Org-Ids: string' \\
  \-H 'Zuora-Track-Id: string' \\
  \-H 'Zuora-Version: string'

Response samples

-   200
-   500
-   4XX

application/json

responseresponse

Copy

Expand allCollapse all

`{

-   "items": [

    -   {

        -   "amount": 1,

        -   "amountWithoutTax": 1,

        -   "appliedToItemId": "402890555a7d4022015a2dadb3b700a6",

        -   "balance": 1,

        -   "beAppliedAmount": 0,

        -   "comment": "This is comment!",

        -   "createdById": "402881e522cf4f9b0122cf5d82860002",

        -   "createdDate": "2017-03-01 17:13:15",

        -   "excludeItemBillingFromRevenueAccounting": true,

        -   "financeInformation": {

            -   "deferredRevenueAccountingCode": "Subscription Revenue",

            -   "deferredRevenueAccountingCodeType": "SalesRevenue",

            -   "recognizedRevenueAccountingCode": "Subscription Revenue",

            -   "recognizedRevenueAccountingCodeType": "SalesRevenue"


            },

        -   "id": "402890555a87d7f5015a89251ede0046",

        -   "processingType": "Charge",

        -   "quantity": 1,

        -   "serviceEndDate": "2017-11-30",

        -   "serviceStartDate": "2017-11-01",

        -   "sku": "SKU-00000002",

        -   "skuName": "SKU-30",

        -   "soldToContactId": "402881e522cf4f9b0122cf5d82860003",

        -   "soldToContactSnapshotId": "402881e522cf4f9b0122cf5d82860004",

        -   "sourceItemId": "402890555a7d4022015a7dadb3b700a6",

        -   "sourceItemType": "InvoiceDetail",

        -   "subscriptionId": null,

        -   "taxMode": "TaxExclusive",

        -   "taxationItems": {

            -   "data": [

                -   {

                    -   "balance": 0.01,

                    -   "creditAmount": 0,

                    -   "exemptAmount": 0,

                    -   "financeInformation": {

                        -   "salesTaxPayableAccountingCode": "Check",

                        -   "salesTaxPayableAccountingCodeType": "Cash"


                        },

                    -   "id": "402890555a87d7f5015a89251ef10047",

                    -   "jurisdiction": "CALIFORNIA",

                    -   "locationCode": "06",

                    -   "name": "STATE TAX",

                    -   "paymentAmount": 0,

                    -   "sourceTaxItemId": "402890555a7d4022015a7dadb39b00a1",

                    -   "taxAmount": 0.01,

                    -   "taxCode": "ZtaxCode",

                    -   "taxCodeDescription": "",

                    -   "taxDate": "2017-11-30",

                    -   "taxRate": 0.0625,

                    -   "taxRateDescription": "This is tax rate description!",

                    -   "taxRateType": "Percentage"


                    }


                ]


            },

        -   "unitOfMeasure": "Each",

        -   "unitPrice": 1,

        -   "updatedById": "402881e522cf4f9b0122cf5d82860002",

        -   "updatedDate": "2017-03-01 17:13:15"


        }


    ],

-   "success": true


}`
