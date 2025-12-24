---
title: "Preview and create delivery adjustments using the API"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/delivery-based-billing/delivery-adjustments/delivery-adjustments-creation/preview-and-create-delivery-adjustments-using-the-api"
product: "zuora-billing"
scraped_at: "2025-12-24T08:39:40.226Z"
---

# Preview and create delivery adjustments using the API

Learn how to preview and create delivery adjustments using the API by verifying eligible adjustments, determining necessary variables, and executing the creation of adjustments for specified dates.

To preview and create delivery adjustments using the API, complete the following steps:

1.  Verify eligible and ineligible delivery adjustments for the subscription through the Preview an adjustment operation, specifying the start date and end date of the adjustment period as 2023-04-01 and 2023-04-02, respectively, and then decide whether to create new delivery adjustments. If yes, perform the next step.
2.  Determine the values of the following variables:

    | Variable | Description |
    | --- | --- |
    | subscriptionNumber | The subscription number for which the delivery adjustments are created.Note:You can also specify the accountNumber field instead of this field. If you specify an account number, the account number must be of the subscription owner. |
    | chargeNumbers | The charge numbers in the subscription for which the delivery adjustment needs to be created.Note:If you don’t specify a charge number, delivery adjustments are created for all charges in the specified subscription or account. |
    | startDate | Required. In this example, the start date of the delivery adjustment is 2023-04-01 . |
    | endDate | Required. In this example, the end date of the delivery adjustment is 2023-04-02 . |
    | exclusion | In case you don’t want to create delivery adjustments for other rate plan charges in the same subscription or account, you can use this field to exclude these charges from your adjustment. You must specify the charge numbers and the corresponding dates for excluding the charges, using the following nested fields:chargeNumbers : The charge numbers to be excluded from delivery adjustment on the specified delivery date.deliveryDate : The date on which the delivery adjustment has to be excluded, in yyyy-mm-dd format.In this example, the charges you want to exclude from the adjustment may be the charges whose delivery dates are 2023-04-01 and 2023-04-02 . |
    | type | The value is DeliveryCredit . |

3.  Use the Create a delivery adjustment operation to create two delivery adjustments for 2023-04-01 and 2023-04-02 for the subscription.

    | Request | POST /v1/adjustments |
    | --- | --- |
    | Request Body | { "chargeNumbers": [ "C-00000210", "C-00000211" ], "deferredRevenueAccountingCode": "Unearned Revenues", "endDate": "2023-04-02", "exclusion": [ { "chargeNumbers": [ "C-00000212", "C-00000213" ], "deliveryDate": "2023-04-01" }, { "chargeNumbers": [ "C-00000212", "C-00000213" ], "deliveryDate": "2023-04-02" } ], "reason": "string", "recognizedRevenueAccountingCode": "Earned Revenues", "revenueRecognitionRuleName": "recognized upon invoice", "startDate": "2023-04-01", "subscriptionNumber": "SM-00002", "type": "DeliveryCredit", "creditMemoCustomFields": { "someField__c": "string" } } |


After your operations, Zuora proceeds with the following steps:

-   Creates two delivery adjustments. Each is a one-day adjustment, and the first adjustment amount is 2 USD and the second adjustment amount is 5 USD.

-   Creates two credit memos, each for a delivery adjustment, then posts the credit memos.


The result of a delivery adjustment depends on whether the credit memo generation succeeds, as follows:

-   If succeeded, the credit memo status changes to `Posted` and the delivery adjustment status changes to `Billed` . The applied amount of the credit memo equals the delivery adjustment amount, and the service period of the credit memo equals the adjustment period.

-   If failed, the failure is returned in the response, and no delivery adjustment is created.
