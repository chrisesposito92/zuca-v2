---
title: "PUT PaymentRun"
url: "https://developer.zuora.com/v1-api-reference/api/operation/PUT_PaymentRun/"
product: "zuora-developer"
scraped_at: "2026-01-02T07:02:45.499Z"
---

## Update a payment run

Updates the information about an unexecuted payment run. Only pending payment runs can be updated.

If none of the **accountId**, **batch**, **billCycleDay**, **currency**, **paymentGatewayId**, and **billingRunId** fields is specified in the request body, the corresponding payment run collects payments for all accounts.

Security**bearerAuth**

Request

##### path Parameters

| paymentRunKeyrequired | stringThe unique ID of a payment run or the payment run number. For example, 402890245f097f39015f0f074a2e0566. |
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

| accountId | string <uuid>The ID of the customer account associated with the payment run.This field conflicts with each of the batch, billCycleDay, currency, paymentGatewayId, and billingRunId fields. If there are such conflicts, an error occurs and an error message is returned. |
| --- | --- |
| applyCreditBalance | booleanNote: This field is only available if you have the Credit Balance feature enabled and the Invoice Settlement feature disabled.Whether to apply credit balances in the payment run. This field is only available when you have Invoice Settlement feature disabled. |
| autoApplyCreditMemo | booleanNote: This field is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information.Whether to automatically apply a posted credit memo to one or more receivables in the payment run. |
| autoApplyUnappliedPayment | booleanNote: This field is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. If you want to enable Invoice Settlement, see Invoice Settlement Enablement and Checklist Guide for more information.Whether to automatically apply unapplied payments to one or more receivables in the payment run. |
| batch | stringThe alias name given to a batch. The batch name is a string of 50 characters or less.This field conflicts with the accountId field. If they are both specified in the request body, an error occurs and an error message is returned.Note: By default, you have 50 configurable account batches. To increase the limit to 200 batches, you must have the Performance Booster Elite package. |
| billCycleDay | stringThe billing cycle day (BCD), the day of the month when a bill run generates invoices for the account. The value must be equal to or less then 31, and 31 is mean the EOM.This field conflicts with the accountId field. If they are both specified in the request body, an error occurs and an error message is returned. |
| billingRunId | string <uuid>The ID of a bill run.This field conflicts with the accountId field. If they are both specified in the request body, an error occurs and an error message is returned. |
| collectPayment | booleanWhether to process electronic payments during the execution of payment runs.If the Payment user permission "Process Electronic Payment" is disabled, this field will be ignored. |
| consolidatedPayment | booleanNote: The Process Electronic Payment permission also needs to be allowed for a Manage Payment Runs role to work. See Payments Roles for more information.Whether to process a single payment for all receivables that are due on an account. |
| currency | stringA currency defined in the web-based UI administrative settings.This field conflicts with the accountId field. If they are both specified in the request body, an error occurs and an error message is returned. |
| organizationLabels | Array of objectsThe organizations that the run is created for.For each item in the array, either the organizationId or the organizationName field is required.This field is only required when you have already turned on Multi-Org feature. |
| paymentGatewayId | string or null <uuid>The ID of the gateway instance that processes the payment.This field conflicts with the accountId field. If they are both specified in the request body, an error occurs and an error message is returned. |
| processPaymentWithClosedPM | booleanNote: The Process Electronic Payment permission also needs to be allowed for a Manage Payment Runs role to work. See Payments Roles for more information.Whether to process payments even if the default payment method is closed. |
| runDate | string <date-time>The date and time when the scheduled payment run is to be executed, in yyyy-mm-dd hh:mm:ss format. The backend will ignore mintues and seconds in the field value. For example, if you specify 2017-03-01 11:30:37 for this value, this payment run will be run at 2017-03-01 11:00:00. |
| targetDate | string <date>The target date used to determine which receivables to be paid in the payment run. The payments are collected for all receivables with the due date no later than the target date. |

Responses

200

OK

put/v1/payment-runs/{paymentRunKey}

Request samples

-   Payload
-   cURL

application/json

Copy

`{

-   "autoApplyUnappliedPayment": true


}`

Response samples

-   200

application/json

responseresponse

Copy

`{

-   "accountId": "402890245f097f39015f0e9fcdd60558",

-   "autoApplyCreditMemo": true,

-   "autoApplyUnappliedPayment": true,

-   "collectPayment": true,

-   "completedOn": null,

-   "consolidatedPayment": true,

-   "createdById": "402881e522cf4f9b0122cf5d82860002",

-   "createdDate": "2017-09-22 12:37:22",

-   "executedOn": null,

-   "id": "402890245f097f39015f0f074a2e0566",

-   "number": "PR-00000391",

-   "processPaymentWithClosedPM": true,

-   "rundate": null,

-   "status": "Pending",

-   "success": true,

-   "targetDate": "2017-10-12",

-   "updatedById": "402881e522cf4f9b0122cf5d82860002",

-   "updatedDate": "2017-09-22 12:37:22"


}`
