---
title: "Update a rate plan using the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/product-update-in-subscriptions/update-a-rate-plan-using-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:12.905Z"
---

# Update a rate plan using the Zuora UI

This topic explains how to update a rate plan in Zuora by creating an order and modifying subscription details.

To update a product to a subscription by creating an order in the Zuora application:

1.  Navigate to Customers > Orders . The Orders page opens.
2.  Click Create New Order at the top right. The Create New Order page opens.
3.  In the Account field, enter the name of the account that owns the subscription.

    Note: You can enter the account by clicking either Account Name or Account Number .

    -   If you click Account Name , type part of the account name in the Account field and the filtered accounts can be dynamically listed for your selection.

    -   If you click Account Number , type the complete account number.


4.  Choose what you want to do by clicking Amend Subscription .
5.  Select either the Subscription Invoiced or Subscription Owned option from the field to list the respective subscriptions.
6.  In the Select an existing subscription area, locate the target subscription to which you are to add products by using the Search field.
7.  On the target subscription line, click Select in the ACTION column.

    ![SelectExistingSubscription](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/af38f1c5-eb94-49cc-9bd0-c5802a85199a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFmMzhmMWM1LWViOTQtNDljYy05YmQwLWM1ODAyYTg1MTk5YSIsImV4cCI6MTc2NjY0MDE5MCwianRpIjoiNmY1ZDZlOTA1MWI3NGI2MmFlYjAxOWMzZTkxYTg3OGYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.V7xALDC-EtRhGELDEMBRPPzG1oKy4eeybFGtFL4W9eI)

8.  In the Included Products tab of the Associated subscriptions area, find the product to be updated, and then click Update below the rate plan name.

    ![update-product](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ba15fdaf-f9cb-4e7c-9e79-e18674311405?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJhMTVmZGFmLWY5Y2ItNGU3Yy05ZTc5LWUxODY3NDMxMTQwNSIsImV4cCI6MTc2NjY0MDE5MCwianRpIjoiNDdkYzhiZDQ5NTI5NGQ5OWJiMzc4NTA5ZWY0MGZhMjkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.9s9c93LSDXqyeSNvoZ4Qq8NZsf39wRNQyJ58AuBAPG8)

9.  Scroll up to the top, and specify appropriate dates in the Contract effective , Service activation , and Customer acceptance fields for the operation. For more information, see Billing Trigger Dates .
10.  (Optional): In the Additional information area, enter the reason for updating the rate plan in the Change Reason field.
11.  In the Products and charges area, locate the charge to be updated, and then make the changes in the fields. If the View Price in Catalog link is displayed in the Price column in a charge row, click this charge to expand the charge details and select the Catalog Pricing checkbox in the Charge Pricing section to make the price editable.
12.  After all the desired changes are done, click Continue to review the order.
13.  Click Activate to activate the order.
