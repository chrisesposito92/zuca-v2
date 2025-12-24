---
title: "Cancel a subscription and write off all unpaid invoices using the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/subscriptions-cancelation-and-write-off-all-unpaid-invoices/cancel-a-subscription-and-write-off-all-unpaid-invoices-using-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:25:26.348Z"
---

# Cancel a subscription and write off all unpaid invoices using the Zuora UI

This topic explains how to cancel a subscription and write off unpaid invoices using the Zuora UI.

You can cancel a subscription and write off all existing unpaid invoices from the reinvented subscription details page.

To complete the task, perform the following steps:

1.  On a reinvented subscription details page, click the down arrow on the Cancel drop-down button ![Image: Cancel_subscription_drop-down_button](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/13b7c90c-1576-4769-97ae-2bcaa15b8e48?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjEzYjdjOTBjLTE1NzYtNDc2OS05N2FlLTJiY2FhMTViOGU0OCIsImV4cCI6MTc2NjY0MDMyNCwianRpIjoiZGRkZDY0MTY4NWNkNDUwMjlhNmM2MGQ4ODkxNGIyZGEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CZcVV0rtJz_jk0OzDFnylsz74Dxf74X1mGgQtouO_dM) , and select the Cancel & Write Off option. The Cancel Subscription window opens, and the customer account name and account balance are displayed on the top.
2.  Click the calendar icon ![Image: calendar-icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/a40bc137-efaf-431d-bd68-94d95b807862?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImE0MGJjMTM3LWVmYWYtNDMxZC1iZDY4LTk0ZDk1YjgwNzg2MiIsImV4cCI6MTc2NjY0MDMyNCwianRpIjoiNTEzZjk0ZTJkZmFkNDExNzk0ZjEyMTI0YzdkMTgwMjgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.WLhWEkse_Ma3S_-jLxcB0Ztu3clXkZEP1D3rkOr9uRE) under the Subscription cancellation effective date and specify a cancellation effective date.
3.  If you want to write off all unpaid invoices, then leave the Write off all unpaid invoices as Yes; Otherwise, toggle it to No.
4.  In the Do you want to generate billing documents after the subscription is cancelled? section, select the Generate billing documents (a final invoice or credit memo) checkbox and specify a date in the Document Date field. By default, the document date is today.

    Note: If you want to cancel the subscription in the middle of the billing period and write off the outstanding invoice, Zuora recommends you select this checkbox for the following reasons:

    -   If the checkbox is selected and the generated billing document is a credit memo, Zuora applies this credit memo to the corresponding outstanding invoice and only writes off the remaining balance of all unpaid invoices.

    -   If the checkbox is selected and the generated billing document is an invoice, Zuora writes off all unpaid invoices.

    -   If the checkbox is cleared, Zuora writes off all unpaid invoices, and the next scheduled bill run may generate another invoice or credit memo.


5.  If Order and Order Action custom fields are set, update the custom fields in the Additional Information of Order and Additional Information of Cancellation Order Action sections, respectively. For more information, see Manage Custom Fields .
6.  Click Submit .
7.  Once a confirmation window pops up, click Submit in the window. The Cancellation Result window opens, and you can view the following information associated with the canceled subscription:

    Note: You can only access the cancellation results window once. You will be redirected away from this page once you click any link in this window. Record the cancellation results before clicking any link. Otherwise, reopen the subscription details page to find these results in the Automation History section.

    -   Credit memo

    -   Invoice

    -   Order


8.  Click one of the following:

    -   Go To The Cancelled Status Page : The subscription in the cancelled status with its details page is displayed.

    -   Stay On Current Page : The subscription in the expired status with its details page is displayed.
