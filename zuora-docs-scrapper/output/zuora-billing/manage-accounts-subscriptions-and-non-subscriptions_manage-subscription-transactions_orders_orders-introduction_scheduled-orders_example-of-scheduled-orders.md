---
title: "Example of scheduled orders"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-introduction/scheduled-orders/example-of-scheduled-orders"
product: "zuora-billing"
scraped_at: "2025-12-24T05:21:23.327Z"
---

# Example of scheduled orders

This topic provides examples of scheduled orders, detailing order actions, subscription version changes, and execution timelines.

The following diagram illustrates examples of scheduled orders, including some order actions and subscription version changes for the scheduled orders.

![Scheduled orders example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/2fbe77a1-998b-42f6-aad0-3ac8af9c98f4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjJmYmU3N2ExLTk5OGItNDJmNi1hYWQwLTNhYzhhZjljOThmNCIsImV4cCI6MTc2NjY0MDA4MCwianRpIjoiNjdiZjY2NzQyNzYyNDk1ZmJlZWI1NDc2MTRlNzQ1N2MiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.6x1rU1ONF0eSYSoBpJtpreLfxezxg880yXaNSWDXvX4)

There are four orders O-00001 to O-00004 scheduled. Order O-00001 is a normal order and the rest of the orders are scheduled orders.

The following table illustrates the order actions in the orders and the history version changes for the orders.

| Order Number | Order Action | Subscription History |
| --- | --- | --- |
| O-00001 | O-00001 includes the Create Subscription order action, and an offer A is added to the subscription. | A subscription history version V1 is generated for O-00001.Note that a subscription is not created until the scheduled order is executed and changed to a completed order. Therefore, if you query the scheduled order before it is executed, subscription information is not returned. |
| O-00002 | O-00002 includes the Suspend order action. | Although O-00004 is created on January 16, which is later than the creation date of January 15 for O-00002, O-00004 is scheduled to be completed on February 1, which is earlier than the completion date of February 5 for O-00002.In this case, a subscription history version V2 is generated for O-00004, and a subscription history version V3 is generated for O-00002. That is, the subscription history version is generated following the sequence of the completion dates. |
| O-00003 | O-00003 includes the Resume order action. | For the same reason as O-00002, a subscription history version V4 is generated for O-00003. |
| O-00004 | O-00004 includes the Update Product order action. | A subscription history version V2 is generated for O-00004. |

For more information, see Manage scheduled orders .

## FAQs

You will understand scheduled orders from the following frequently asked questions:

Q: Do scheduled orders support `Evergreen` subscriptions?

A: Yes, scheduled orders support both `Termed` and `Evergreen` subscriptions.

Q: When should I use scheduled orders, and when should I use non-scheduled orders?

A: When you need an order to take effect immediately or within the current term, you are recommended to use non-scheduled orders. The benefits of scheduled orders are: you can update and cancel the scheduled orders before the scheduled dates of the scheduled orders to cope flexibly with end-user change demands. For example, when you scheduled an order for suspending a subscription from April 1st, the status of the subscription will not be changed until April 1st. This allows any change to the subscription between March 1st and April 1st.

Q: What's the difference between the `orderDate` , order `scheduledDate` , and order action effective date?

A: The `orderDate` is the date the user specifies when creating a new order in Zuora. The `scheduledDate` is a future date (within the current term or after the term end date of the current term) when you want an order to become completed in Zuora. If you're a Zuora Revenue customer and using `orderDate` as the booking date when recognizing revenue, when creating a scheduled order, it's recommended to ensure the `orderDate` and `scheduledDate` fall into the same accounting period.

The order action effective date is the date when the order action will become effective in Zuora. An order action within a scheduled order won't take effect before the `scheduledDate` . It's recommended to set the order action effective date equal to or later than the order `scheduledDate` . For the following order actions: `createSubscription` , `updateProduct` , `addproduct` , `removeProduct` , `termsAndConditions` , `renewSubscription` , the effective date refers to the `ContractEffective` or `ServiceActivation` date of the order actions. For `suspend` , `resume` , and `cancelSubscription` order actions, the effective date refers to the specified date when creating the order actions respectively, such as `suspendSpecificDate` , `resumeSpecificDate` , and `cancellationEffectiveDate` .

Q: Is there any rule to set the order action effective date when creating a scheduled order?

A: The `ContractEffective` or `ServiceActivation` of the order actions within a scheduled order must be earlier than the end date of the future term that the order `scheduledDate` falls in. Requirements for `suspend` and `resume` order actions are listed as follows:

-   `suspendPolicy` and `resumePolicy` must be specified as `SpecificDate` .

-   `suspendSpecificDate` and `resumeSpecificDate` should not be earlier than the order `scheduledDate` .


Q: When will a scheduled order start to be executed and end?

A: A scheduled order will not be executed until the order `scheduledDate` . Your scheduled order starts to be executed based on your tenant's local time zone as follows:

-   In a US tenant using Pacific Time (PT), your scheduled order starts to be executed after 00:00 am PT on the scheduled day.

-   In a US tenant using US Eastern Time (ET), your scheduled order starts to be executed after 00:00 am ET on the scheduled day.

-   In a UK tenant using Greenwich Mean Time (GMT), your scheduled order starts to be executed after 00:00 am GMT on the scheduled day.

-   In a UK tenant using British Summer Time (BST), your scheduled order starts to be executed after 00:00 am GMT+1 on the scheduled day.


The execution ends depending on the number of scheduled orders processed on the scheduled day.

Q: Can I change a scheduled order if my customer changes their mind?

A: You can change a scheduled order as follows:

-   Before a scheduled order is executed, the order (including the order `scheduledDate` ) and the inside order actions can be updated through the API.

-   Before a scheduled order is executed, the order can be canceled.

-   After the scheduled order is completed, the order can also be deleted.


Q: How can I find out the existing scheduled order for a subscription?

A: You can use one of the following methods:

-   View the Other Related Orders section of the Subscription Change History section on the subscription details page

-   Use any of the following API operations to retrieve information about orders:

    -   List orders

    -   Retrieve an order

    -   List orders by subscription number

    -   List orders of an invoice owner

-   Run a report of the Order Data Source or export the data source

-   Query the Order object through the Data Query


Q: What status can the scheduled orders have?

A: Scheduled orders can be in any of the following statuses: `Scheduled` , `Executing` , `Completed` , `Failed` , and `Cancelled` .

Q: When I create a scheduled order in a future term, will it renew the term immediately?

A: Creating scheduled orders in a future term will not renew the current term immediately. Term renewal uses the existing auto-renew mechanism. The only special case is when a subscription is suspended, and there is a scheduled order for resuming the subscription in the future term. For this case, when the `scheduledDate` of the order for resuming the subscription arrives, Zuora will renew the term automatically to cover the resume date, then resume the order.

Q: How do we ensure a scheduled order will be completed successfully if some changes are applied to a subscription before the `scheduledDate` ?

A: Zuora will validate the changes to the subscription if there is any active scheduled order for the subscription. Some changes to subscriptions might be rejected if the changes invalidate existing scheduled orders for the subscription. These changes include creating new orders, creating scheduled orders, deleting orders, canceling scheduled orders, updating scheduled orders, completing pending orders, activating draft orders, setting subscription activation dates, and deleting subscriptions of specific versions. For example, assuming today is 2024/01/04, you have a scheduled order to add a new product rate plan A and remove product rate plan B in a scheduled order on 2024/01/05, you want to cancel this subscription from 2024/01/04. This cancellation order will be rejected because it will invalidate the adding and removing product rate plan scheduled order in the future. You need to review and cancel the scheduled order first, then cancel the subscription.

Q: When does a scheduled order impact invoicing and revenue?

A: A scheduled order impacts invoicing and revenue only after the scheduled order is executed.

Q: Can I force executing a scheduled order?

A: No, you cannot force executing a scheduled order. The scheduled orders are automatically executed on the scheduled date, so you can choose to adjust the execution date.

Q: For a scheduled order involving price, will the scheduled order take the price of the product rate plan charge at the time of scheduled order creation or execution?

A: For an update product order action, the scheduled order takes the price you put in the scheduled order.

Q: If a future scheduled order is cancelled, are other future order versions for the subscription re-numbered?

A: Yes.

Q: Can I retry a failed scheduled order?

A: For failed scheduled orders, you should review the failure reason first and resolve the conflicting orders if needed. If the failure is due to temporary internal errors, Zuora will attempt to retry the failed scheduled order throughout the execution day. Currently, manually retrying a failed scheduled order is not supported. If you need further assistance, submit a request at Zuora Global Support .

Q: Are the number limits for the scheduled orders, for example, the number limit of order action, the same as in the order asynchronous call?

A: No, the number limits for the scheduled orders are the same as in the order synchronous call .

Q: Can I add a product rate plan to a subscription in the first scheduled order, and remove the same rate plan in the second scheduled order?

A: No. This case is unsupported because the subscription rate plan ID does not exist when the first order is not executed.

Q: When a scheduled order is created, is there an order action record created for notifying the upstream or downstream system about what is done as part of the scheduled order, such as adding/removing a product? Or whether order action records are only created when the scheduled order is executed?

A: When a scheduled order is created, an order record is created. When a scheduled order is executed, its status is changed. A notification is triggered based on the scheduled order status change. The order action records are only created when a scheduled order is executed.

## Considerations

When using the scheduled orders, keep the following in mind:

-   TCB is not supported.

-   Pending order actions are not supported in a scheduled order.

-   Saving scheduled orders as draft orders or pending orders is not supported.

-   Previewing scheduled orders is not supported.

-   The order line item is not supported in scheduled orders.

-   No more than one subscription is included in one scheduled order.

-   For one subscription, only one scheduled order can be scheduled to execute on the same day.

-   No more than five scheduled orders in the "Scheduled" status per subscription. The limitation does not apply to the scheduled orders that are changed to the "Completed" status.

-   No more than 80,000 active scheduled orders are created per tenant per day.

-   Not supported with CPQ X .
