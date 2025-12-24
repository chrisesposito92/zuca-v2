---
title: "Use the Zuora UI - cancel a subscription"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-cancelation/use-the-zuora-ui---cancel-a-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:33.683Z"
---

# Use the Zuora UI - cancel a subscription

This topic explains how to cancel a subscription by creating an order in the Zuora application.

To cancel a subscription by creating an order in the Zuora application:

1.  Navigate to Customers > Orders . The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  In the Account field, enter the name of the account that owns the subscription.

    Note: You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the exact account number.


4.  In the Associated Subscriptions area, click the Amend Subscription button on the right. A list of subscriptions is displayed under the Select an existing subscription area.
5.  Do one of the following to select an existing subscription:

    -   If the subscription is displayed in the list, go to the subscription row and click Select in the ACTION column.

    -   If the subscription is not displayed in the list, enter the subscription number in the Search field to filter the subscription and display it exclusively in the list, and then click Select in the ACTION column.


6.  In the Associated Subscriptions area, click More Order Actions on the right to expand a list of available order actions that you can perform on the subscription, and then click Cancel Subscription .

    ![cancel-subscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bb8676c1-5922-4b88-9679-911ea5276fca?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJiODY3NmMxLTU5MjItNGI4OC05Njc5LTkxMWVhNTI3NmZjYSIsImV4cCI6MTc2NjY0MDMzMSwianRpIjoiY2JiMjgxMDczMjg1NGFkMmI3MmQwYjM1M2IyNTQyN2YiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.qG1VyHE_8wcq-h7G2fMAaO_BkX_G6Uj325C1XyGXzvI)

7.  In the Cancel subscription window, specify appropriate dates in the Contract effective , Service activation , and Customer acceptance fields for the operation. For more information, see Billing Trigger Dates .
8.  For the Cancelation policy field, select one of the following dates as the cancelation effective date. For more information, see Cancellation Effective Dates .

    -   End of current term

    -   End of Last Invoice Period

    -   Specific Date If the Specific Date option is selected, a new Cancellation Effective field displays. You need to specify an exact subscription cancelation date in this field.


9.  (Optional): Enter the reason for canceling the subscription in the Change Reason field.
10.  Click Continue to close the Cancel subscription window and review the order.
11.  Click Activate to activate the order. The status of the order changes to Completed , and the status of the subscription changes to Cancelled .
