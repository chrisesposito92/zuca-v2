---
title: "Update the price of a pending charge for a ramped subscription from the Zuora UI"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/pending-subscription-processing/price-updation-of-a-pending-charge-for-a-ramped-subscription/update-the-price-of-a-pending-charge-for-a-ramped-subscription-from-the-zuora-ui"
product: "zuora-billing"
scraped_at: "2025-12-24T05:30:34.990Z"
---

# Update the price of a pending charge for a ramped subscription from the Zuora UI

This topic explains how to update the price of a pending charge for a ramped subscription using the Zuora UI.

To create an active subscription with a pending charge, perform the following steps:

1.  Navigate to Customers > Subscriptions in the left navigation menu.
2.  Locate the ramped subscription you want to update and click the subscription number. The subscription detail page opens.
3.  Click Create Order. The Review Order page opens.
4.  Update the price of the pending charge for a ramp interval:
    1.  In the Included Products tab in the Associated Subscriptions section, locate the pending charge you want to update, and then click Update below the rate plan name. The Update Product page opens.
    2.  In the Trigger Dates section, click the interval list ![ramp_interval_list_icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c2cf990a-96d9-4150-8559-e877c9608bca?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMyY2Y5OTBhLTk2ZDktNDE1MC04NTU5LWU4NzdjOTYwOGJjYSIsImV4cCI6MTc2NjY0MDYzMiwianRpIjoiZDFmNmEzMmRhNTlkNDg2NzhlNjUwNGNlODBlZWE3NGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.Hfk5q0-NZVDspy40i_BUP3hbIuWmuMgogyoQVaoelF0) icon next to the Contract effective field and select a ramp interval for which you want to update the price. This specifies the Contract effective , Service activation , and Customer acceptance fields with the previously configured dates.
    3.  In the Products and Charges section, locate the rate plan charge you want to update and update the price in the Price column.
    4.  Click the charge name to expand to the charge details.
    5.  Scroll to the Timing and frequency of charge section.
    6.  Click the interval list ![ramp_interval_list_icon](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c2cf990a-96d9-4150-8559-e877c9608bca?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMyY2Y5OTBhLTk2ZDktNDE1MC04NTU5LWU4NzdjOTYwOGJjYSIsImV4cCI6MTc2NjY0MDYzMiwianRpIjoiZDYwMzc4MzkyZGRiNDgyOGIwNmU4NDAwYTY2NTFjNTAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.KC3j_VN1EpvIuumYYW1W5BtSYFs3AeUlGIHnl8MowqY) icon next to the Estimated Start Date field and select a ramp interval for which you want to update the price. This specifies the Estimated Start Date field with the previously configured date.
    7.  Click Continue .
    8.  Repeat steps a to g to update the price for other ramp intervals as needed.
5.  On the Review Order page, click Activate.
