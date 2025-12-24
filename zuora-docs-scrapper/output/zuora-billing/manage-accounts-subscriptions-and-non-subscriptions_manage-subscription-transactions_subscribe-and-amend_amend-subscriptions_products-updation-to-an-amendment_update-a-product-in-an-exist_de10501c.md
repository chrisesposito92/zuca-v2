---
title: "Update a product in an existing subscription"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/subscribe-and-amend/amend-subscriptions/products-updation-to-an-amendment/update-a-product-in-an-existing-subscription"
product: "zuora-billing"
scraped_at: "2025-12-24T05:34:39.982Z"
---

# Update a product in an existing subscription

Learn how to update a product in an existing subscription by following a series of steps, including viewing the subscription, selecting amendment types, and setting effective dates.

Use the following steps to update a product in an existing subscription. Repeat this procedure for each product you want to update.

1.  View the subscription that you want to change.
2.  Click Amendment . The Amendment Information page appears. ![Name and select the type of amendment](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/c0ec1b7d-bd3d-482e-93de-f72c5b0c83e4?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImMwZWMxYjdkLWJkM2QtNDgyZS05M2RlLWY3MmM1YjBjODNlNCIsImV4cCI6MTc2NjY0MDg3NywianRpIjoiZmNiODYwZDYxMmQyNDg3YWE3YjY2ZmNiNjM2ZWI5ZmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.NHmdefQj1fagvtD1rqSG1VMU87WjxEeY4slRBa699LY)
3.  Enter the Amendment Name and optionally the Change Description .
4.  Select Update a Product from the Amendment Type list and click Save. An Amendment Details panel appears. ![Amendment Details panel](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/4487f5af-c48b-45c6-9a92-709aef213400?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjQ0ODdmNWFmLWM0OGItNDVjNi05YTkyLTcwOWFlZjIxMzQwMCIsImV4cCI6MTc2NjY0MDg3NywianRpIjoiM2ZmZWM4Yzc0ZjQ1NDY4M2IzNzAxMTBhYWU1ODZkM2MiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.fjFD-VGkq-_pDBzT8hyVYdsdVquIHw47sTYhT2Ji-ac)
5.  Select the product and rate plan you want to update from the select product list. If there is already a draft Update a Product amendment for a product and rate plan, you cannot create another Update a Product amendment for the same product and rate plan.
6.  In the Original section, click Charge Name to view details about the current product.
7.  In the New section, click the Charge Name to view and edit the product details. Click Save .
8.  By default, the amendment is a draft amendment. To complete the amendment, click Contract effective in the Amendment Information section. Then enter a contract effective date and click save . Set the contract effective date to the date you want the product update to take effect. Most companies make product updates effective immediately during an invoice period. If you want to make product updates effective for the next invoice period or next term, set the contract effective date to the first day of the next invoice period or the first day of the next term.

    -   If proration is enabled the next invoice will include a prorated charge for any recurring fees for the partial period and full charges for any usage and one time fees for the partial period.

    -   If proration is disabled, the next invoice will only include one time fees for the partial period and will not include and recurring or usage fees for the partial period.


9.  If you have the Service Activation and Customer Acceptance dates enabled:
    1.  Click Service Activation and enter the Service Activation Date . Click Save .
    2.  Click Customer Acceptance and enter the Customer Acceptance Date . Click Save .

Note:

If a product is updated in a subscription while you are preparing to update the same product in the same subscription, you will not be able to complete your amendment. This prevents you from accidentally overwriting a newer version of the subscription. To update the product, delete your amendment then create a new amendment.
