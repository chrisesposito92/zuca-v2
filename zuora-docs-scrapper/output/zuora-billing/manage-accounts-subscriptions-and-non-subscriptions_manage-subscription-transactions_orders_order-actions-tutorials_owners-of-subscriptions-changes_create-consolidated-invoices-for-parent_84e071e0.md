---
title: "Use case 1: Transfer subscription ownership of existing subscriptions"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/order-actions-tutorials/owners-of-subscriptions-changes/create-consolidated-invoices-for-parent-accounts/use-case-1-transfer-subscription-ownership-of-existing-subscriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:24:55.288Z"
---

# Use case 1: Transfer subscription ownership of existing subscriptions

This task guides you through transferring subscription ownership from a parent account to a child account, including steps for checking current ownership and generating consolidated invoices.

You can transfer subscription ownership of the subscriptions from the parent account to a child account. The method to do this depends on whether you want to implement the transfer during subscription creation or afterward. The invoice ownership belongs to the parent account.

Note:

You can also transfer invoice ownership of the subscriptions from child accounts to the parent account while keeping the subscription ownership belonging to the child accounts. The steps are similar to the ones described in this section.

After the ownership transfer, the child accounts become the subscription owners, while the parent account becomes the consolidated invoice owner after the bill run.

Use case 1: Transfer subscription ownership of existing subscriptions

Before transferring, you can check the subscription's ownership by opening the subscription details page.

In the Basic Information section, the ownership is shown as follows:

-   The subscription owner is shown as Customer account
-   The invoice owner is shown as Invoice Owner

If you want to generate a consolidated invoice for the parent account, perform the following steps:

1.  On the subscription details page, click Create Order at the top right, no matter whether the subscription is under the parent account or a child account.
2.  In the Associated subscriptions area, click More Order Actions to expand the list and then click Owner Transfer . ![Location of ownertransfer option](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f92a3a69-ce4b-48ba-989e-ededf2c6a611?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY5MmEzYTY5LWNlNGItNDhiYS05ODllLWVkZWRmMmM2YTYxMSIsImV4cCI6MTc2NjY0MDI5MywianRpIjoiOGU3NzE1MTE4YWMxNDdlNmEwYjk1NmNmZTc2NDBlZGQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.r99lneE92emHg04q3fB2eHadaHnlblV89TQjznh8_P8)
3.  Set the subscriptions' ownerships as follows:

    -   Subscription owner: child account

    -   ![Transfer subscription ownership to child account](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/f6fdc8d7-e348-419d-97c4-c4c82f46528e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImY2ZmRjOGQ3LWUzNDgtNDE5ZC05N2M0LWM0YzgyZjQ2NTI4ZSIsImV4cCI6MTc2NjY0MDI5MywianRpIjoiZWQyNGNhNzA3OTgwNDg5ZDliNGQ5Y2YyYWQ5ZDdhZDIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.dh54zcfXcNdbcifsIcEaQrjbz2ur6CYhZhKp8Lf2AIQ)



For more details, see Change owners of subscriptions .
