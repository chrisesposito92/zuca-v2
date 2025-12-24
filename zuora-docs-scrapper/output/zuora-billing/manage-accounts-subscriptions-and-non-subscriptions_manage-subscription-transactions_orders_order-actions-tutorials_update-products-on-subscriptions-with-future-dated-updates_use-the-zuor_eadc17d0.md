---
title: "Use the Zuora application - update products on subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/update-products-on-subscriptions-with-future-dated-updates/use-the-zuora-application---update-products-on-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:23:24.983Z"
---

# Use the Zuora application - update products on subscriptions

This topic explains how to update products in a Zuora subscription, including applying Premium and Special Service settings, and activating orders.

You can use the Zuora UI to update a product even when future-dated Update Product order actions already exist on the subscription.

1.  Follow the steps 1 - 7 in Update products in subscriptions to update the target rate plan for the included product. The rate plan charges in the selected rate plan are listed.

    ![update-product](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ba15fdaf-f9cb-4e7c-9e79-e18674311405?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJhMTVmZGFmLWY5Y2ItNGU3Yy05ZTc5LWUxODY3NDMxMTQwNSIsImV4cCI6MTc2NjY0MDIwMiwianRpIjoiZjk2MzI5OThmZDc0NDViMWEwMDE4MGFmYjgyNDQ2YWYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.ASw3y0yZu-1oe8pQxy4RoKG3p6DJGFZ3PEN-Xrk5DTk)

2.  Complete the following steps to apply the Premium Service settings to the rate plan charge:
    1.  Click the name of the rate plan charge to be updated, which is displayed in blue text in the UI. The rate plan charge details are expanded.
    2.  Scroll up to the top of the page, and set the dates in the Contract effective , Service activation , and Customer acceptance fields to be July 1, 2021.
    3.  In the Charge pricing section of the Products and charges area, change the price to 2 and quantity to 20.

        ![first-product-update](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4e894c9b-91ee-422e-8854-c2d7c31da5e5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjRlODk0YzliLTkxZWUtNDIyZS04ODU0LWMyZDdjMzFkYTVlNSIsImV4cCI6MTc2NjY0MDIwMiwianRpIjoiOGI2ZTgzZmU2OTNkNGEwYmE2Yjk3MmIyMjA0NmM3YTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.IHVU3M-SUj8f3QUDMcdpdG-BMYv2lOK_he8FDiUQTBE)

    4.  In the Timing and frequency of charge section, select Upon contract effective for the Trigger condition field. You can select another option as long as the setting reflects your business requirement correctly.

        ![trigger-condition](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/0fa66c4f-2e79-4ea9-acf0-b812edd88d32?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjBmYTY2YzRmLTJlNzktNGVhOS1hY2YwLWI4MTJlZGQ4OGQzMiIsImV4cCI6MTc2NjY0MDIwMiwianRpIjoiY2ViOGFkZGRjMjU4NDA3M2I4ZTM0Njk2NDkwYTFhODkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.dLSHJ9fJrEPF_RD_6bC-QiXwNwURhWc8-kNmZ5ArYtM)

    5.  After all the changes are completed, click Done and then Continue .
3.  Complete the following steps to apply the Special Service settings in another product update:
    1.  Click Update below the name of the rate plan to be updated.
    2.  Scroll up to the Trigger Dates area and set the dates in the Contract effective , Service activation , and Customer acceptance fields to be May 1, 2021.
    3.  Toggle the Make this update before a future date change switch to specify an exact date for this update. In this tutorial, select a date in May during which you are to apply the Special Service settings.

        ![specific-update-date-2020](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/3434375b-1be8-4a32-af20-9c7fc4e0212f?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjM0MzQzNzViLTFiZTgtNGEzMi1hZjIwLTljN2ZjNGUwMjEyZiIsImV4cCI6MTc2NjY0MDIwMiwianRpIjoiNDBlNGVhZjFjODdmNGM0OTlmYTFhYTk1NmVjNmU2NjUiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.fdOJrxP-2bZ_CG3BQCEqQHDm8rUzi-BCdM2YYPP12Lo)

    4.  Click the name of the rate plan charge to be updated, which is displayed in blue text in the UI. The rate plan charge details are expanded.
    5.  In the Charge pricing section of the Products and charges area, change the price to 9 and quantity to 15.

        ![second-product-update](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d56df183-1d51-4f15-b966-1b8a8d55de4d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ1NmRmMTgzLTFkNTEtNGYxNS1iOTY2LTFiOGE4ZDU1ZGU0ZCIsImV4cCI6MTc2NjY0MDIwMiwianRpIjoiZWJmMzk5N2M4MjljNDdiOGI5YTNmOWUzYTUxNDAzMWQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9._4_jEglxB5MiMdbWWnMpv1yahps9UCZ-lxmrDtiJxiU)

    6.  In the Timing and frequency of charge section, select Upon contract effective for the Trigger condition field. You can select another option as long as the setting reflects your business requirement correctly.
    7.  After all the changes are completed, click Done and then Continue .
4.  To view the update to the subscription with a future-dated update, click the Order Actions tab. You can see the first Update Product order action addresses the Premium Service update and the second addresses the Premium Service update.

    ![review-order-actions](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/178bbf9e-df5c-413f-a7f5-27d2c6e68726?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE3OGJiZjllLWRmNWMtNDEzZi1hN2Y1LTI3ZDJjNmU2ODcyNiIsImV4cCI6MTc2NjY0MDIwMiwianRpIjoiMThlNjc2MDAwNTI0NDA1MTgyN2Q0MjUzOTdhNjc1MDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.zHOr7Eyg4iUj_8l3WM_BDXQPWll5OJFzbM_hr3iYNAM)

5.  Click Activate to activate the order.
