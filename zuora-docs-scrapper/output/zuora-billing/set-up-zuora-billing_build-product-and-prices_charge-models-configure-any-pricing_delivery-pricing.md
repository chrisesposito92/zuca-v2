---
title: "Delivery pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/delivery-pricing"
product: "zuora-billing"
scraped_at: "2025-12-24T04:59:05.673Z"
---

# Delivery pricing

The delivery pricing charge model calculates charges based on a list price per delivery and a specified delivery schedule, applicable to recurring charges.

The delivery pricing charge model applies only to recurring charges. In this model, you define a single list price per delivery and specify a delivery schedule that indicates the frequency of the delivery. Zuora Billing will use the list price per delivery and the specified delivery schedule to calculate the total charge for a billing period. This charge model is used to bill your end customers in advance for a termed subscription that includes goods delivered on a recurring basis.

-   To use this charge model, complete the following steps:

    1.  Enable the Delivery Pricing feature from the self-service interface. For information, see Enable billing features by yourself .

    2.  Enable the Delivery Pricing charge model in Billing Settings. For information, see Enable charge types and charge models .

-   The Delivery Pricing charge model is available only for tenants with Orders or Orders Harmonization enabled.


The following graphic shows an example of a recurring charge of the delivery pricing charge model. The list price for each delivery is $1.75, and the delivery occurs every weekday. If the billing period is four weeks. The total charge is $35 per billing period, which equals $1.75 \* 5 \*4.

![Delivery pricing charge model diagram](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d54f602a-520f-41d7-a44e-c09cf5ffdad7?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ1NGY2MDJhLTUyMGYtNDFkNy1hNDRlLWMwOWNmNWZmZGFkNyIsImV4cCI6MTc2NjYzODc0MywianRpIjoiNjdmM2I1OWM3YmQ2NDkwMmI3OGU2ZWUwYjZiN2QwNTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CmF1Qi22WvxSaIXYHfCKpj8bv0UZ2maxDsNsFXLnB44)

You can schedule orders for subscribing to rate plans that include charges of this charge model. You can also schedule orders for managing subscriptions that include the preceding rate plans. For more information, see Scheduled orders .

You can create delivery adjustments corresponding to end customer-initiated refunds, for example, due to unqualified deliveries. For more information, see Delivery Adjustments .
