---
title: "Create usage records with the Usage custom fields"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/multi-attribute-pricing/create-usage-records-with-the-usage-custom-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T04:59:30.792Z"
---

# Create usage records with the Usage custom fields

Create usage records with custom fields by calling the CRUD: Create usage record operation after setting up the necessary custom fields, lookup table, and subscription.

Note:

The Multi-Attribute Pricing charge model for one-time and recurring charges is available to all customers.

After creating custom fields, the corresponding lookup table, and the subscription, you can call the [CRUD: Create usage record](https://www.zuora.com/developer/api-references/api/operation/Object_POSTUsage) operation to create usage records with the custom fields.

The account that you want to create the usage records for must have a corresponding usage-based rate plan charge.

## Procedure

Call the [CRUD: Create usage record](https://www.zuora.com/developer/api-references/api/operation/Object_POSTUsage) operation to create usage records, with the custom fields specified in the request body.

The following request example is used to create a single usage record with the Usage custom fields:

POST https://rest.zuora.com/v1/object/usage { "AccountNumber": "A00000002", "ChargeNumber": "C-00000229", "Quantity": 50, "StartDateTime": "2019-09-21T16:41:36.000+01:00", "SubscriptionNumber": "A-S00000100", "UOM": "Each", "state\_\_c": "California", "type\_\_c": "minicar" }

After the request is submitted successfully, the following response is returned with the usage record ID:

{ "Success": true, "Id": "2c93808457d787030157e02e0a301d0a" }

## What's Next

-   View the status and details of the created usage records
