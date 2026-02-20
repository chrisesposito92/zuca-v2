---
title: "Add a Dynamic Pricing enabled product rate plan using the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/dynamic-pricing-support/add-a-dynamic-pricing-enabled-product-rate-plan-using-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2026-02-20T17:31:44.091Z"
---

# Add a Dynamic Pricing enabled product rate plan using the Zuora UI

This topic explains how to add a Dynamic Pricing enabled product rate plan using the Zuora UI, including configuring pricing attributes and reviewing order details.

When subscribing to a rate plan, Demo Rate Plan 1, some extra steps are added to lookup the list price based on the pricing attribute values:

1.  Click Add Product after selecting Demo Rate Plan 1. The user will be prompted to enter values for external attributes and attributes mapped to Subscription Rate Plan object fields to lookup the list price from product catalog.

    ![Rate Plan Additional](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bc29fb16-6fba-4fb3-abf2-b85221528713?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJjMjlmYjE2LTZmYmEtNGZiMy1hYmYyLWI4NTIyMTUyODcxMyIsImV4cCI6MTc3MTY5NTA5OCwianRpIjoiN2YwNmY0NjAxMTU3NDA2MzhjM2RlMGRhNGIzZTZkODYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.MVHE80hb4-fRMFi6kO2i46MHxShDZ-_zflStwl1cpNI)

    Note:

    For the attributes mapped to other Zuora objects (account, account.billto, account.soldto, payment method, subscription), their values are retrieved from those objects automatically and remain read-only during the order creation process. You must configure the values properly before creating an order.

    The effective date is automatically set to the order date. You can override this value to retrieve a list price that is effective from another specified date.

2.  Enter the pricing attribute values and save the changes. The Products and Charges page is displayed. The list price from the product catalog is displayed in the Original List Price column. Based on the pricing attribute values provided in the previous step, it matches the list price = $9 entry in the decision table.

    ![Rate Plan Pricing](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/29c09923-9435-4320-8e15-07d280c6905e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI5YzA5OTIzLTk0MzUtNDMyMC04ZTE1LTA3ZDI4MGM2OTA1ZSIsImV4cCI6MTc3MTY5NTA5OCwianRpIjoiM2Y3ZGUzNTBlNjAyNGU0OTlkMzc4OTdmZjdlMDFiYzUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.mhd0kHP3GRNn21rK1z3K6nnS13NSEwWwr3SDsjGpGr0)

3.  (Optional) For individual charges, you can update the values of external attributes and attributes mapped to the Subscription Rate Plan field by selecting the pencil ![pencil icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/01e871ac-8abe-44dc-aa88-41846e6028bb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAxZTg3MWFjLThhYmUtNDRkYy1hYTg4LTQxODQ2ZTYwMjhiYiIsImV4cCI6MTc3MTY5NTA5OCwianRpIjoiNTcwMTJjMGRlMDMxNDlkNzg0ODg2ZWU1NmU0NWIyMWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.mFNuq11hCehQEY_xY-w-nNthinYY6KCoSBhcRQcOguQ)icon next to the original list price. After you save the updated attribute values, Zuora refreshes the list price from the product catalog. If any charge uses the Subscription Rate Plan object field as the pricing attribute, updating one charge’s pricing attribute could refresh the list price and sales price of all charges under the same rate plan.

    ![Products and charges](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/75267948-b26a-4b00-bd68-d96f313ef26c?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6Ijc1MjY3OTQ4LWIyNmEtNGIwMC1iZDY4LWQ5NmYzMTNlZjI2YyIsImV4cCI6MTc3MTY5NTA5OCwianRpIjoiYWY2MTkwYzQyYjgwNDViNGI4MzM1ZDA4ZWJhOWQ4OTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.qJLnSEcn9MR-O0Q89JKxIVn62qji7-xnaVOLpw13dSo)

    Note:

    The original list price is a read-only reference to determine the sales price.

4.  (Optional) For individual charges, you can update the values of external attributes and attributes mapped to the Subscription Rate Plan field by selecting the pencil ![Pencil icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/01e871ac-8abe-44dc-aa88-41846e6028bb?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjAxZTg3MWFjLThhYmUtNDRkYy1hYTg4LTQxODQ2ZTYwMjhiYiIsImV4cCI6MTc3MTY5NTA5OCwianRpIjoiOTg0NDkxYjY1OTZiNDg3ZmIyNGJhNmI4ZWQ1Yzg4NjEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.ILISruA09PV_DYnq6ciVTLsQQnSXpuCCswQiWRGLT6g) icon next to the original list price. After you save the updated attribute values, Zuora refreshes the list price from the product catalog. If any charge uses the Subscription Rate Plan object field as the pricing attribute, updating one charge’s pricing attribute could refresh the list price and sales price of all charges under the same rate plan.

    ![Additional pricing](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7033cabc-d369-4100-b183-f6b7b8a5e803?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjcwMzNjYWJjLWQzNjktNDEwMC1iMTgzLWY2YjdiOGE1ZTgwMyIsImV4cCI6MTc3MTY5NTA5OCwianRpIjoiM2Q2MGEyMzMxMTY2NDEwNWJmYzEzMDI1NjU1ODA4MDYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.iaYxnG7-_2SQR6R18bLThEr0AHuHE6Y7FKBU-_C0He0)

    Note:

    If any charge uses the Subscription Rate Plan object field as the pricing attribute, updating one charge's pricing attribute could refresh the list price and sales price of all charges under the same rate plan.

5.  Click Review Order after configuring the correct price for the rate plans. In the Review Order page for the order actions that include Dynamic Pricing charges, you are not allowed to edit them to change the pricing attributes or other information again.
