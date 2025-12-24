---
title: "Use the Zuora UI - change owners of  subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/owners-of-subscriptions-changes/use-the-zuora-ui---change-owners-of-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:44.902Z"
---

# Use the Zuora UI - change owners of subscriptions

This topic explains how to change the owner of a subscription using the Zuora UI by navigating through various customer and subscription options.

To change the owner of a subscription:

1.  Navigate to one of the following places:

    -   Customers > Subscriptions > subscription details page

    -   Customers > Subscriptions

    -   Customers > Orders

    -   Customer > Customer Accounts > customer details page


2.  Click Create New Order or Create Order at the top right. The Create New Order page opens.

    Note: If selected the Customers > Subscriptions > subscription details page in step 1, you see the Review Order page directly. Skip the following steps 3 to 6 and perform step 7.

3.  If the Account field is not populated automatically, enter the name of the account that owns the subscription as an invoice owner.

    Note: You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


4.  Choose what you want to do by clicking Amend Subscription .
5.  Select either the Subscription Invoiced or Subscription Owned option from the field to list the respective subscriptions.
6.  In the Select an existing subscription area, locate the target subscription to which you are to add products by using the Search field.
7.  On the target subscription line, click Select in the ACTION column. ![select-subscriptions](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/27d51686-8b9d-4a61-af52-dfcf85cf3d60?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI3ZDUxNjg2LThiOWQtNGE2MS1hZjUyLWRmY2Y4NWNmM2Q2MCIsImV4cCI6MTc2NjY0MDI4MywianRpIjoiY2MyMWU2NDQ0YzllNDQ5Y2E2NjkyNDZkMDUxZDU0MzAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.pithgRTSdHmHoFRFJpa_DN7a-V8Srl-0xYPxM_F6vVI)
8.  In the Associated subscriptions area, the operations that you can perform on the selected subscription are listed to the right of the subscription name. Click More Order Actions to expand the list and then click Owner Transfer . ![Location of ownertransfer option](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f92a3a69-ce4b-48ba-989e-ededf2c6a611?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY5MmEzYTY5LWNlNGItNDhiYS05ODllLWVkZWRmMmM2YTYxMSIsImV4cCI6MTc2NjY0MDI4MywianRpIjoiNzlkNzI5ODkzMzVhNDQ3ZmE1Y2NiYjA1OTk5MTE0ZTMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.fqPX5i4wXquE7cuWg4ZI5wL2hrB9VjX7g7__vrA5B3o)
9.  In the pop-up window, complete the following steps:

    Note: After this step, do not perform any additional order action to this subscription. Otherwise, an error message will be displayed indicating that Owner Transfer must be the last order action.

    1.  On the Trigger Dates line, specify the appropriate dates for this operation in the Contract Effective , Service Activation , and Customer Acceptance fields. For more information, see Billing Trigger Dates .
    2.  Note:

        -   The new owner must have the same currency setting as that of the original owner.

        -   If you only update the sold-to or bill-to contact without changing the corresponding subscription owner or invoice owner account, the owner transfer is not allowed.


        In the Account field next to the Subscription Owner or Invoice Owner field, click the cross button to clear and change the subscription owner or invoice owner account. (Optional): If the Sold To Contact or Bill To Contact field is displayed, update the sold-to or bill-to contact.

    3.  (Optional): Enter the reason for transferring the ownership in the Change Reason field.
    4.  Enter the Payment Method and Payment Gateway information.
    5.  Click Continue . An order overview is displayed.
10.  Click Activate to activate the order.
