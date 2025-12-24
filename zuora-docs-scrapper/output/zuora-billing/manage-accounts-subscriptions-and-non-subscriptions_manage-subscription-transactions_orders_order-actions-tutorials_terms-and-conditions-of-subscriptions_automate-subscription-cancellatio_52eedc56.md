---
title: "Schedule a subscription cancellation using the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/terms-and-conditions-of-subscriptions/automate-subscription-cancellations-suspensions-or-resumptions-with-terms-and-conditions-order-action/schedule-a-subscription-cancellation-using-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:01.995Z"
---

# Schedule a subscription cancellation using the Zuora UI

This topic explains how to schedule a subscription cancellation using the Zuora UI by navigating through the customer subscriptions and specifying a cancellation date.

To schedule a subscription cancellation, perform the following steps:

1.  Navigate to Customers > Subscriptions in the left navigation menu.
2.  Locate the subscription you want to cancel and click the subscription number. The subscription detail page opens.
3.  Click the more actions ![icon-more-options-white-background](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/edc97054-4fd4-4d14-ae20-4649a07ab264?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVkYzk3MDU0LTRmZDQtNGQxNC1hZTIwLTQ2NDlhMDdhYjI2NCIsImV4cCI6MTc2NjY0MDI0MCwianRpIjoiZjM4NWEyNzFmNWM3NDJhNWI4OTcwNGNlYWMyMzJiYTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.7WpSEz6B3l91BKJ47ArmijWnT6goB0NcKSVLz6BJK6o) icon in the upper right and then click Schedule Cancellation, Suspension or Resumption . The Scheduled Actions dialog opens.
4.  Specify a cancellation date in the Cancel On field. The date must be greater than today. If you want to suspend or resume the subscription at a future date, specify the date in the Suspend On or Resume On field. When specifying multiple scheduled dates for a subscription, the date values must follow the rules described in Introduction to scheduled actions for subscription automation .
5.  Click Save . A new order with the Terms And Conditions order action is created.

Alternatively, you can schedule a subscription cancellation by manually creating an order with the Terms And Conditions order action. For more information, see Change terms and conditions of subscriptions .
