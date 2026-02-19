---
title: "Price lookup in attribute-based pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/price-lookup-in-attribute-based-pricing"
product: "zuora-billing"
scraped_at: "2026-02-19T03:09:49.239Z"
---

# Price lookup in attribute-based pricing

The Attribute-based Pricing feature allows defining a price lookup formula on the Product Rate Plan Charge object to identify the correct charge definition based on context during order preview.

With the Attribute-based Pricing feature, you can define a price lookup formula on the Product Rate Plan Charge object, which will be used to identify the correct and relevant charge definition based on the context. The price lookup formula is used during order preview to map the lookup attributes from the Account and Subscription objects to the Product Charge Definition object and assign a charge definition to the subscription rate plan charge.

The following graphic shows where to define the lookup formula in the UI. To define the price lookup formula for a product rate plan charge, use the Formula field in the Charge Amount section on the product rate plan charge detail page when you are [creating a product rate plan charge](/zuora-billing/set-up-zuora-billing/build-product-and-prices/set-up-product-catalog/create-product-rate-plan-charges).

![charge-formula.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/51b68cfd-1a03-4fd4-896a-6635d529375e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUxYjY4Y2ZkLTFhMDMtNGZkNC04OTZhLTY2MzVkNTI5Mzc1ZSIsImV4cCI6MTc3MTU1Njk4NCwianRpIjoiZjJlM2UwMjhiZTE2NDE4Mzg5YThiNDk2YzJiNjhmMzEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.nNWrIVd1OhPe7F6eLLvXpzE90nb6k-I7y3nUbjmZDCc)

## Price lookup formula

The price lookup formula is defined in the following syntax:

lookup("field\_name\_on\_charge\_definition" =fieldLookup("other\_object\_name", "field\_name"))

where:

-   `field_name_on_charge_definition` is the field on the product charge definition object.

-   `other_object_name` is another object that can be supported by price lookup.

-   `field_name` is the field name on another object whose value will be mapped to the charge definition object.


You can define as many field lookups as you want and separate them by commas. For supported lookup fields by the formula, see [Supported lookup fields](/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/price-lookup-in-attribute-based-pricing/supported-lookup-objects-and-fields).

Note:

When defining the lookup formula, keep the following things in mind to avoid syntax errors:

-   The field name used in the formula must exactly match the API field name.

-   For custom fields, remember to add the suffix `__c` (two underscores and the letter "c") at the end of the API name.

-   Use straight double quotes ("") to embrace the object and field names.

-   Use a comma and space as separators.

-   Remember to add a space before and after the equal sign (=).


## Examples

The following formula defined for a product rate plan charge is a simple example. It indicates the `state` custom field on the Product Charge Definition object will be used to identify the target charge definition, and its value is mapped from the `state` field on the account object.

lookup("state\_\_c" = fieldLookup("account", "state\_\_c"))

The following formula is a more complex one. In this example, the `market` , `variant` , `soldToRegion` , `termType` , `termPeriodType` , and `term` fields on the Product Charge Definition object are used to identify the target charge definition. The field values are mapped either from the Account object or from the Subscription object.

lookup("market\_\_c" = fieldLookup("account", "market\_\_c"), "variant\_\_c" = fieldLookup("subscription", "variant\_\_c"), "soldToRegion\_\_c" = fieldLookup("subscription", "soldToRegion\_\_c"), "termType" = fieldLookup("subscription", "termType"), "termPeriodType" = fieldLookup("subscription", "initialTermPeriodType"), "term" = fieldLookup("subscription", "initialTerm"))

Based on the formula, the lookup function will map the lookup attributes from corresponding objects to the attributes for the charge definition to identify the target charge definition.

-   If the lookup function finds only one charge definition that matches all these lookup attributes, this charge definition will be assigned to the subscription rate plan charge.

-   If the lookup function finds no charge definition that matches all the lookup attributes, it returns an error.

-   If more than one charge definition matches the lookup attributes, the lookup function returns an error.


When the matching charge definition is successfully identified, it will be displayed in the subscription that you are creating. As shown in the following graphic of creating a subscription, the CD-00001210 charge definition is identified and applied.

![charge-definition-in-sub.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/182fe2a8-ec59-4195-8ff5-df9f56ae8587?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjE4MmZlMmE4LWVjNTktNDE5NS04ZmY1LWRmOWY1NmFlODU4NyIsImV4cCI6MTc3MTU1Njk4NCwianRpIjoiYzNjOGNlYzdmN2NhNDU0YWFkODIxYzY4YTg4NGJjMGEiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.nJEbkr74iq355o2m2SrP7tcuyd6sE9UeGE2ZyT5X09U)
