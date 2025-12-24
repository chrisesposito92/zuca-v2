---
title: "Cancel a subscription with a refund using the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-cancelation-and-refund-end-customers-automatically/cancel-a-subscription-with-a-refund-using-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:10.590Z"
---

# Cancel a subscription with a refund using the Zuora UI

This topic explains how to cancel a subscription with a refund using the Zuora UI, including setting cancellation dates, refund options, and generating billing documents.

To cancel a subscription with a refund from the reinvented subscription details page, perform the following steps:

1.  On the top-right of the subscription details page, click Cancel . The Cancel Subscription window opens, and the customer account name and account balance are displayed on the top.
2.  In the Subscription cancellation effective date section, select one of the following dates or specify a Specific Date as the cancellation effective date:

    -   End of Current Term : The option is unavailable if the subscription is evergreen.

    -   Start of Current Term

    -   End of Last Invoice Period : This option is unavailable if no invoice is associated with this subscription.

    -   Subscription Start Date

    -   Specific Date : The default date is today's date. An estimated credit amount in the final invoice is calculated based on your selection.


3.  If Zuora verifies that the subscription is eligible for refunding, the Do you want to refund payment after the subscription is cancelled? section displays, configure the following options:
    1.  Select the Refund Payment checkbox if you want to refund your payment while canceling the subscription, and specify the following fields:

        -   Refund Amount : Specify a value less than the payment amount eligible for the refund.

        -   Reason Code : Specify the reason code to indicate the refund reason. The reason codes are defined in Payments Settings \> Define Reason Codes .


    2.  Select the Write-Off Invoice checkbox if you want to write off your outstanding balance.
4.  In the Do you want to generate billing documents after the subscription is cancelled? section, select the Generate billing documents (a final invoice or credit memo) checkbox and specify a date in the Document Date field. By default, the document date is today.
5.  then specify the following options. Otherwise, the section name displays as Do you want to generate the final invoice after the subscription is cancelled? and only the Generate the final Invoice checkbox displays in this section for your selection.
6.  If Order and Order Action custom fields were set, update the custom fields in the Additional Information of Order and Additional Information of Cancellation sections, respectively. For more information, see Manage Custom Fields .

    -   If required custom fields are applied, the custom fields are displayed in an expanded view. After updating the required custom fields, you can click Show optional fields to expand and update the optional custom fields if applied.

    -   If only optional fields are applied, click Expand to view all fields to expand and update the optional custom fields.


7.  Click Submit . The Cancellation Result window opens, where all cancellation results are gathered together.

    Note: You can only access the cancellation results window once. You will be redirected away from this page once you click any link or button in this window. Record the cancellation results before clicking any link or button. Otherwise, reopen the subscription details page to find out these results.

    -   If your cancellation succeeds, you can view the following steps.

        -   Cancel Subscription : Click the order number link to view the order details. You will see this result only if you don't set refund and write-off settings.

        -   Generate and Post Credit Memo : Click the credit memo number link to view the credit memo details.

        -   Unapply Payment : Click the payment number link to view the payment details.

        -   Refund Payment : Click the refund number link to view the refund details.

        -   Related Invoices : Click the invoice number link to view the invoice details.

    -   If your cancellation fails, click Retry Cancel to modify and then click Submit again.


8.  Click one of the following:

    -   Go To The Cancelled Status Page: The subscription in the cancelled status with its details page is displayed.

    -   Stay On Current Page : The subscription in the expired status with its details page is displayed.
