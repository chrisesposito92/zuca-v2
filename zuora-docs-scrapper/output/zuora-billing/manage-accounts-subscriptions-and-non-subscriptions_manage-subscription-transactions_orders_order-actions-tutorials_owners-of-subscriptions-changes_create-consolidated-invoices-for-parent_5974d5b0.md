---
title: "Use case 2: Transfer subscription ownership during subscription creation"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/owners-of-subscriptions-changes/create-consolidated-invoices-for-parent-accounts/use-case-2-transfer-subscription-ownership-during-subscription-creation"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:57.980Z"
---

# Use case 2: Transfer subscription ownership during subscription creation

This task explains how to transfer subscription ownership to a child account during the creation of a new subscription from a parent account.

If you are creating a new subscription from the parent account and want to transfer the subscription ownership to the child account during the subscription creation, perform the following steps:

1.  Navigate to Customers > Customer Accounts .
2.  On the All Customer Accounts page, search for the parent account and click the parent account name in the Customer Name column.
3.  On the account details page, click Create Order on the top right.
4.  On the Create New Order page, click Create Subscription in the Associated Subscriptions section. The parent account displays as the subscription owner by default. ![Subscription owner](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/1a2f63a0-7433-4022-a148-8c153d7c71cd?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjFhMmY2M2EwLTc0MzMtNDAyMi1hMTQ4LThjMTUzZDdjNzFjZCIsImV4cCI6MTc2NjY0MDI5NSwianRpIjoiNDRhNzA1ZGYyODg2NGMxMWI4NmZkMWQ0MDhkN2M4YWIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.eil6YB0JHBn6G2Sk_OvguLzGKJoxMYWjqE4lDn9a1sg)
5.  On the Create Subscription page, specify a child account (for example, Subsidiary A) in the Subscription Owner field to change the child account to the subscription owner.
6.  Set other fields but keep Invoice The Subscription Separately checkbox in the Terms and Conditions section unchecked.
7.  Click Continue . The Products and Charges section lists multiple products.
8.  Click > next to a product in the Product column to expand the product table and check the checkbox in the ADD column to select a rate plan and corresponding charges from the product. ![Add product](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ff0039f0-9fa4-4fb0-910c-8d307db5b1b5?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImZmMDAzOWYwLTlmYTQtNGZiMC05MTBjLThkMzA3ZGI1YjFiNSIsImV4cCI6MTc2NjY0MDI5NSwianRpIjoiOTgyNDU1ZmM2OGQ1NDExYmI1NDBkODM3N2U3ZTdhNTgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.0LTr9Xk41X8ZzZVgIHB8X4YeRvm4YOQVgGF6iWDozzo)
9.  Click Add Product . The selected rate plan and corresponding charges display exclusively in the Products and Charges section.
10.  Update editable charges fields if needed.
11.  Click Review Order .
12.  On the Review Order page, click the Terms tab to verify that the subscription owner is already changed to the child account (for example, Subsidiary A). If needed, click Create Subscription to create another subscription and set another child account (for example, Subsidiary B) to the subscription owner. ![Create another subscription in the same order](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/e9489f01-65e5-43a8-91a1-37c9975f5ab9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImU5NDg5ZjAxLTY1ZTUtNDNhOC05MWExLTM3Yzk5NzVmNWFiOSIsImV4cCI6MTc2NjY0MDI5NSwianRpIjoiMmZkYTNmYjY0MmIxNDM2Yjk0MDI1ZmVkNTU5OTA0OGYiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.qKn9SizgzhGCzIEiY1DPO8Thlf26kROBIu-d0wAktII)
13.  Click Preview Billing .
14.  On the Preview Billing page, finish preview settings and click Update Preview . The previewed invoices are listed.
15.  Click Back .
16.  On the Review Order page, click Activate to activate the order.
