---
title: "Amend or Cancel the Subscription Before the Last Invoice Date"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/amendment-or-cancelation-of-subscriptions-before-the-last-invoice-dates/amend-or-cancel-the-subscription-before-the-last-invoice-date"
product: "zuora-billing"
scraped_at: "2025-12-24T05:36:05.280Z"
---

# Amend or Cancel the Subscription Before the Last Invoice Date

This topic explains how to amend or cancel a subscription before the last invoice date to ensure accurate billing.

After posting the invoices, you may need to make an amendment or cancelation that becomes effective before the last invoice date. For example, a customer subscribed to a new product last month but you did not add the new product to the customer's subscription.

The following diagram shows today's date and that you have already posted the invoice for the current month.

![Current Month Already Invoiced](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5e9dcd84-2e6f-4e4a-81a6-8fda29e5107d?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjVlOWRjZDg0LTJlNmYtNGU0YS04MWE2LThmZGEyOWU1MTA3ZCIsImV4cCI6MTc2NjY0MDk2MywianRpIjoiN2NjNzJjYmQwNWZhNDhmY2E2YmVmOWQxMzk1MDBkYTIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.8iWW-2nUdcU34eu82xR1x901Vo6JSNwK5TP-Off1uPk)

Do the following:

1.  Create an Add a Product amendment with an effective date in the previous month.
2.  Create a bill run.
3.  Post the new invoice.

As shown in the following diagram, the amendment is included in the new invoice.

![Create Amendment Before Last Invoice Date and Generate New Invoice](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/b6e5ab13-549e-4a7e-8e76-e58524ee3ba9?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImI2ZTVhYjEzLTU0OWUtNGE3ZS04ZTc2LWU1ODUyNGVlM2JhOSIsImV4cCI6MTc2NjY0MDk2MywianRpIjoiZjdjYzYwY2MwMWE1NGQxMWJiYTQ1MjEwNmY0MzFkMGIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.DpPuONTPUeKRlkfRh6E0xmzYP5zxHAU3xtQFLb5svD4)

Zuora bills for amendments and cancelations even if they become effective:

-   before the last invoice date

-   before today's date


Zuora then reflects the changes in the new invoice. You do not need to unpost, cancel, and delete the first invoice.
