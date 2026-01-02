---
title: "API upgrades"
url: "https://developer.zuora.com/v1-api-reference/api-upgrades/"
product: "zuora-developer"
scraped_at: "2026-01-02T05:37:27.329Z"
---

#

API upgrades

This page summarizes the backward-incompatible changes made to the v1 API Reference.

Starting from May 20, 2024, all versions are in the date format such as `2024-05-20`. The versions before this date are the legacy versions in the numbered format such as `196.0`, which are still supported for backward compatibility.

To learn how to upgrade to the latest version, see [API upgrade guide](/v1-api-reference/api-upgrade-guide/).

For backward-compatible (non-breaking) changes, see [v1 API changelog](/docs/get-started/changelogs/v1-api-changelog/) for more information.

##

2025-08-12

-   We have introduced the `27` error category code. This error category code indicates that the request cannot be processed because of an invalid query parameter (`filter[]`, `expand[]`, `sort[]`, and `fields[]`) of the Object Query API. See the following table for details:
    | Category Code | Error Category | HTTP Status Code |
    | --- | --- | --- |
    | 27 | Invalid query parameter | 400 Bad Request |


-   We have unified the 4XX and 500 error response formats for Object Query API operations to the following format:

    ```json
    {
      "reasons": [
        {
          "code": {error_code},
          "message": "{error_message}"
        }
      ],
      "requestId": "{request_ID}"
    }
    ```

    This enhancement ensures that the Object Query API error response is consistent with the v1 API, which potentially simplifies your error-handling effort. The returned error code is a 8-digit code, such as `50000060`, following the standard error code convention. See [Error codes](https://developer.zuora.com/docs/guides/error-codes/) for details.

    Previously, the 4XX and 500 error response formats for Object Query API operations varied depending on the error scenarios. In some cases, the failed requests returned 200 HTTP status codes. It was also rectified to display the appropriate HTTP status code in the unified error response format.


##

2024-05-20

-   We have made the following HTTP status code changes to all v1 operations (except [Actions](https://developer.zuora.com/api-references/api/tag/Actions) and CRUD operations):

    Any errors containing an error category code now return a standard HTTP status code that aligns with the indication of the error. See the following table for details.

    Previously, any errors with an error category code were designed to return a `200 OK` HTTP status code.
    | Category Code | Error Category | HTTP Status Code |
    | --- | --- | --- |
    | 10 | Permission or access denied | 403 Forbidden |
    | 11 | Authentication failed | 401 Unauthorized |
    | 20 | Invalid format or value | 400 Bad Request |
    | 21 | Unknown field in request | 400 Bad Request |
    | 22 | Missing required field | 400 Bad Request |
    | 23 | Missing required query parameter | 400 Bad Request |
    | 30 | Rule restriction | 400 Bad Request |
    | 40 | Not found | 404 Not Found |
    | 45 | Unsupported request | 405 Method Not Allowed,406 Not Acceptable,415 Unsupported Media Type |
    | 50 | Locking contention | 409 Conflict |
    | 60 | Internal error | 500 Internal Server Error |
    | 61 | Temporary error | 500 Internal Server Error |
    | 70 | Request exceeded limit | 429 Too Many Requests |
    | 90 | Malformed request | 400 Bad Request |
    | 99 | Integration error | 500 Internal Server Error |


##

337.0

-   We have deprecated the `paymentId` field on the Payment Schedule Item object. The following operations are affected:
    -   [Add payment schedule items to a custom payment schedule](https://developer.zuora.com/v1-api-reference/api/operation/POST_AddItemsToCustomPaymentSchedule/)
    -   [Update a payment schedule](https://developer.zuora.com/v1-api-reference/api/operation/PUT_PaymentSchedule/)
    -   [Update a payment schedule item](https://developer.zuora.com/v1-api-reference/api/operation/PUT_PaymentSchedule/)
    -   [Preview the result of payment schedule update](https://developer.zuora.com/v1-api-reference/api/operation/PUT_PaymentScheduleUpdatePreview/)
    -   [Retrieve a payment schedule](https://developer.zuora.com/v1-api-reference/api/operation/GET_PaymentSchedule/)
    -   [Retrieve a payment schedule item](https://developer.zuora.com/v1-api-reference/api/operation/GET_PaymentScheduleItem/)
    -   [List payment schedules by customer account](https://developer.zuora.com/v1-api-reference/api/operation/GET_PaymentSchedules/)
    -   [Cancel a payment schedule](https://developer.zuora.com/v1-api-reference/api/operation/PUT_CancelPaymentSchedule/)
    -   [Cancel a payment schedule item](https://developer.zuora.com/v1-api-reference/api/operation/PUT_CancelPaymentScheduleItem/)
    -   [Skip a payment schedule item](https://developer.zuora.com/v1-api-reference/api/operation/PUT_SkipPaymentScheduleItem/)
    -   [Retry failed payment schedule items](https://developer.zuora.com/v1-api-reference/api/operation/POST_RetryPaymentScheduleItem/)

##

314.0

-   We have replaced the `batch` field with a `batches` field of the Billing Preview Run object. The following operations are affected:
    -   [Create a billing preview run](https://developer.zuora.com/v1-api-reference/api/operation/POST_BillingPreviewRun)
    -   [Retrieve a billing preview run](https://developer.zuora.com/v1-api-reference/api/operation/GET_BillingPreviewRun/)

##

257.0

-   We have replaced the `charges` > `chargeId` parameter with a `charges` > `productRatePlanChargeId` parameter when creating a credit memo or debit memo from a charge. The following operations are affected:
    -   [Create a credit memo from a charge](https://developer.zuora.com/v1-api-reference/api/operation/POST_CreditMemoFromPrpc)
    -   [Create a debit memo from a charge](https://developer.zuora.com/v1-api-reference/api/operation/POST_DebitMemoFromPrpc)
-   We have replaced the `charges` > `comment` parameter with a `charges` > `description` parameter when creating a credit memo or debit memo from a charge. The following operations are affected:
    -   [Create a credit memo from a charge](https://developer.zuora.com/v1-api-reference/api/operation/POST_CreditMemoFromPrpc)
    -   [Create a debit memo from a charge](https://developer.zuora.com/v1-api-reference/api/operation/POST_DebitMemoFromPrpc)
-   We have replaced the `comment` field with a `description` field of the Credit Memo Item and Debit Memo Item objects. The following operations are affected:
    -   [Create a credit memo from an invoice](https://developer.zuora.com/v1-api-reference/api/operation/POST_CreditMemoFromInvoice)
    -   [Create a debit memo from an invoice](https://developer.zuora.com/v1-api-reference/api/operation/POST_DebitMemoFromInvoice)
    -   [List credit memo items](https://developer.zuora.com/v1-api-reference/api/operation/GET_CreditMemoItems)
    -   [Retrieve a credit memo item](https://developer.zuora.com/v1-api-reference/api/operation/GET_CreditMemoItem)
    -   [List debit memo items](https://developer.zuora.com/v1-api-reference/api/operation/GET_DebitMemoItems)
    -   [Retrieve a debit memo item](https://developer.zuora.com/v1-api-reference/api/operation/GET_DebitMemoItem)

##

239.0

-   We have replaced the following fields with the `taxationItems` field on the respective object:

    -   The `creditTaxItems` field of the Credit Memo Item object
    -   The `taxItems` field of the Debit Memo Item object

    You can access these fields through the following operations:

    -   [List credit memo items](https://developer.zuora.com/v1-api-reference/api/operation/GET_CreditMemoItems)
    -   [Retrieve a credit memo item](https://developer.zuora.com/v1-api-reference/api/operation/GET_CreditMemoItem)
    -   [List debit memo items](https://developer.zuora.com/v1-api-reference/api/operation/GET_DebitMemoItems)
    -   [Retrieve a debit memo item](https://developer.zuora.com/v1-api-reference/api/operation/GET_DebitMemoItem)

##

230.0

-   We have made the following behavior changes to the returned `productRatePlans` field of the Product object in the response of the [Retrieve a product](https://developer.zuora.com/v1-api-reference/api/operation/GET_Product/) and [List all products](https://developer.zuora.com/v1-api-reference/api/operation/GET_Catalog/) operations:
    -   For `230.0` and later versions, the value of the `productRatePlans` field is a URL.
    -   For `229.0` and earlier versions, the value of this field was an array of product rate plan details. Note that the array can contain a maximum of 300 product rate plans. Additionally, across all product rate plans, at most 300 product rate plan charges are returned.

##

224.0

-   We have replaced the `charges` > `memoItemAmount` field with the `charges` > `amount` field on the Credit Memo object created from the product rate plan charge. The following operations are affected:
    -   [Create a credit memo from a charge](https://developer.zuora.com/v1-api-reference/api/operation/POST_CreditMemoFromPrpc)
    -   [Create a debit memo from a charge](https://developer.zuora.com/v1-api-reference/api/operation/POST_DebitMemoFromPrpc)

##

223.0

-   For the [Create an order](https://developer.zuora.com/v1-api-reference/api/operation/POST_Order) operation, we have replaced the returned `subscriptionNumbers` field with a `subscriptions` field as the container for the subscription number and status on the Order object.

##

215.0

-   We have made the following changes to the [Invoice and Collect](https://developer.zuora.com/v1-api-reference/api/operation/POST_TransactionInvoicePayment) operation:
    -   Replaced the `invoiceDate` parameter with the `documentDate` parameter
    -   Replaced the `invoiceTargetDate` parameter with the `targetDate` parameter

##

211.0

-   We have replaced the `invoiceTargetDate` parameter with a `targetDate` parameter. The following operations are affected:
    -   [Create a subscription](https://developer.zuora.com/v1-api-reference/api/operation/POST_Subscription)
    -   [Update a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_Subscription)
    -   [Renew a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_RenewSubscription)
    -   [Cancel a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_CancelSubscription)
    -   [Suspend a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_SuspendSubscription)
    -   [Resume a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_ResumeSubscription)
    -   [Create an account](https://developer.zuora.com/v1-api-reference/api/operation/POST_Account)
-   We have replaced the `invoice` boolean parameter (added in `196.0`) with a `runBilling` parameter. The following operations are affected:
    -   [Create a subscription](https://developer.zuora.com/v1-api-reference/api/operation/POST_Subscription)
    -   [Update a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_Subscription)
    -   [Renew a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_RenewSubscription)
    -   [Cancel a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_CancelSubscription)
    -   [Suspend a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_SuspendSubscription)
    -   [Resume a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_ResumeSubscription)
    -   [Create an account](https://developer.zuora.com/v1-api-reference/api/operation/POST_Account)

##

207.0

-   When [previewing a subscription](https://developer.zuora.com/v1-api-reference/api/operation/POST_PreviewSubscription), we have replaced the `invoiceTargetDate` field with a `targetDate` field.
-   We have replaced the `includeExistingDraftInvoiceItems` parameter with a `includeExistingDraftDocItems` parameter. The following operations are affected:
    -   [Preview a subscription](https://developer.zuora.com/v1-api-reference/api/operation/POST_PreviewSubscription)
    -   [Update a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_Subscription)
-   We have updated the possible values and the default value of the `previewType` parameter. The following operations are affected:
    -   [Preview a subscription](https://developer.zuora.com/v1-api-reference/api/operation/POST_PreviewSubscription)
    -   [Update a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_Subscription)
        Since `207.0`, the possible values are `LegalDoc`(default), `ChargeMetrics`, and `LegalDocChargeMetrics`. Previously, the possible values were `InvoiceItem`(default), `ChargeMetrics`, and `InvoiceItemChargeMetrics`.
-   We have changed the response schema of the [Preview a subscription](https://developer.zuora.com/v1-api-reference/api/operation/POST_PreviewSubscription) and [Update a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_Subscription) operations. The following top-level response fields are moved to the `invoice` container:
    -   `amount`
    -   `amountWithoutTax`
    -   `taxAmount`
    -   `invoiceItems`

##

196.0

-   We have replaced the `invoiceCollect` parameter with a `collect` parameter. The following operations are affected:
    -   [Create a subscription](https://developer.zuora.com/v1-api-reference/api/operation/POST_Subscription)
    -   [Update a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_Subscription)
    -   [Renew a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_RenewSubscription)
    -   [Cancel a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_CancelSubscription)
    -   [Suspend a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_SuspendSubscription)
    -   [Resume a subscription](https://developer.zuora.com/v1-api-reference/api/operation/PUT_ResumeSubscription)
    -   [Create an account](https://developer.zuora.com/v1-api-reference/api/operation/POST_Account)
