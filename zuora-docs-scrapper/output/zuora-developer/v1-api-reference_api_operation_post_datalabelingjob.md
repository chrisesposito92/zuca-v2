---
title: "POST DataLabelingJob"
url: "https://developer.zuora.com/v1-api-reference/api/operation/POST_DataLabelingJob/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:22:13.650Z"
---

## Submit a data labeling job

Submits a data labeling job.

Security**bearerAuth**

Request

##### header Parameters

| Idempotency-Key | string <= 255 charactersSpecify a unique idempotency key if you want to perform an idempotent POST or PATCH request. Do not use this header in other request types.With this header specified, the Zuora server can identify subsequent retries of the same request using this value, which prevents the same operation from being performed multiple times by accident. |
| --- | --- |
| Accept-Encoding | stringInclude the Accept-Encoding: gzip header to compress responses as a gzipped file. It can significantly reduce the bandwidth required for a response.If specified, Zuora automatically compresses responses that contain over 1000 bytes of data, and the response contains a Content-Encoding header with the compression algorithm so that your client can decompress it. |
| Content-Encoding | stringInclude the Content-Encoding: gzip header to compress a request. With this header specified, you should upload a gzipped file for the request payload instead of sending the JSON payload. |
| Zuora-Entity-Ids | stringAn entity ID. If you have Zuora Multi-entity enabled and the OAuth token is valid for more than one entity, you must use this header to specify which entity to perform the operation in. If the OAuth token is only valid for a single entity, or you do not have Zuora Multi-entity enabled, you should not set this header. |
| Zuora-Track-Id | string <= 64 charactersA custom identifier for tracing the API call. If you set a value for this header, Zuora returns the same value in the response headers. This header enables you to associate your system process identifiers with Zuora API calls, to assist with troubleshooting in the event of an issue.The value of this field must use the US-ASCII character set and must not include any of the following characters: colon (:), semicolon (;), double quote ("), and quote ('). |
| Zuora-Version | stringThe minor API version.For a list of available minor versions, see API upgrades. |

##### Request Body schema: application/json
required

| ids | Array of stringsThe IDs of the objects to be labeled, only required if the queryType is ById.There is a 4MB limit of the JSON payload, so in case of a large number of IDs, please make sure the payload is less than 4MB. |
| --- | --- |
| objectTyperequired | stringThe object type of the data labeling job.Currently, the following objects are supported:UserAccountAll the associated transaction objects of the account being labeled will automatically inherit the org label of the account.ProductYou have to label the Account object first, make sure all accounts have been labeled, then you can proceed with the Product object.You can get all the unlabeled accounts by running a Data Source export job, with the following query:SELECT Id, Name FROM Account WHERE Organization.Id IS NULL All the ProductRatePlanS of the product will be automatically labeled with the same orgs.When labeling products, you can omit the orgs parameter, i.e, leave it empty, the system will find all the subscriptions that include the product and get the org list of those subscriptions, then label the product with those orgs, aka, the derived orgs.You can also explicitly specify the orgs parameter, in that case, you will need to provide a super set of the derived orgs.BillRunYou don't need to specify the orgs parameter, we will label the BillRun with all the orgs because existing runs could pick up all accounts. You can definitely create new bill run with certain orgs to operate separately by orgs.PaymentRunSame as BillRun.ForecastRun |
| orgIds | Array of strings <uuid>The IDs of the organizations that the data labeling job will associate with the data to be labeled. Either the orgIds or orgs field is required.For Account object, one and only one org Id is required.For configuration objects, null and [] are treated differently, use null to unlabel the object, [] to label it with all orgs. |
| orgs | Array of stringsThe names of the organizations that the data labeling job will associate with the data to be labeled. Either the orgIds or orgs field is required.For Account object, one and only one org name is required.For configuration objects, null and [] are treated differently, use null to unlabel the object, [] to label it with all orgs. |
| query | stringThe query that the data labeling job will run to fetch the data to be labeled, only required if the queryType is ByZoql. |
| queryTyperequired | stringSpecifies the type of query that the data labeling job will run to fetch the data to be labeled.ByZoql - The data labeling job will run a ZOQL query which is specified in the query field to fetch the data to be labeled.ById - The data labeling job will fetch the data to be labeled by the IDs specified in the ids field.Enum: "ByZoql" "ById" |

Responses

200

OK

400

Bad Request

post/v1/multi-organizations/data-labeling-job

Request samples

-   Payload
-   cURL

application/json

Copy

Expand allCollapse all

`{

-   "objectType": "Account",

-   "orgIds": [

    -   "12345678-1234-1234-1234-123456789012"


    ],

-   "query": "select Id from Account where BillToContact.Country = 'US'",

-   "queryType": "ByZoql"


}`

Response samples

-   200
-   400

application/json

responseresponse

Copy

`{

-   "jobId": "ff80808186beca0a0186bedbf7d3006f",

-   "jobStatus": "Accepted",

-   "success": true


}`
