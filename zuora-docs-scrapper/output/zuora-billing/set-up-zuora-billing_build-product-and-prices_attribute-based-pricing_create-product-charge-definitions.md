---
title: "Create product charge definitions"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/attribute-based-pricing/create-product-charge-definitions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:00:34.009Z"
---

# Create product charge definitions

Create and manage charge definitions to control product rate plan charge behavior, ensuring prerequisites are met and understanding inheritance logic.

A charge definition contains the context that determines the charge behavior. You can create as many charge definitions as needed for a specific charge either from the UI or through Zuora REST API.

Before you start, ensure that the prerequisite is satisfied and you understand the inheritance logic between the default charge definition and other definitions.

## Prerequisite

Ensure that the target product rate plan charge exists in your product catalog. The price lookup formula is defined for the charge so that the price lookup function can work. For more information, see Price lookup in Attribute-based Pricing .

## Default charge definition and inheritance

The Product Charge Definition object introduces the concept of default charge definition. This default charge definition is to ensure that a given product rate plan charge has a behavior defined, regardless of the context.

When a product rate plan charge is created, the information defined in this charge is saved as its default charge definition. When this product rate plan charge is linked to any other product rate plan, this definition automatically becomes available to that plan. When you create additional charge definitions, you can define the attributes specifically for this definition or inherit a set of attributes from the default definition.

## Attributes inherited from the default definition

If you do not specify the following attributes when creating a charge definition, these attributes will be inherited from the default charge definition. If these attributes are updated for the default charge definition later, the same update will also be applied to the attribute in the non-default charge definition, which is inherited from the default.

| UI label | Field name in API | Note |
| --- | --- | --- |
| Charge ID | productChargeId | This attribute is required for creating a charge definition. |
| Charge Number | productChargeNumber | This attribute is required for creating a charge definition |
| Link to Rate Plan | productRatePlanId | This attribute value is null in the default charge definition. It can be overridden in the non-default charge definition. |
| Term | term | This attribute value is null in the default charge definition. It can be overridden in the non-default charge definition. |
| Term Type | termType | This attribute value is null in the default charge definition. It can be overridden in the non-default charge definition. |
| Term Period Type | termPeriodType | This attribute value is null in the default charge definition. It can be overridden in the non-default charge definition. |

## Attributes that can be overridden

If you specify the following attributes when creating a charge definition, the following attributes will be overridden by your specified value for the non-default charge definition. If these attributes are updated for the default charge definition later, your specified value remains unchanged.

-   Charge Model ( `chargeModel` )

-   Effective Start Date ( `effectiveStartDate` )

-   Effective End Date ( `effectiveEndDate` )

-   Link to Rate Plan ( `productRatePlanId` )

-   Term Type ( `termType` )

-   Term Period Type ( `termPeriodType` )

-   Term ( `term` )

-   UOM ( `uom` )

-   List Price Base ( `listPriceBase` )

-   Default Quantity ( `defaultQuantity` )

-   Specific Month ( `specificListPriceBase` )

-   Price Table ( `tiers` )

-   Billing Periods ( `billingPeriod` )

-   Period ( `specificBillingPeriod` )

-   Taxable ( `taxable` )

-   Tax Code ( `taxCode` )

-   Tax Mode ( `taxMode` )

-   The custom field in the Charge Definition Attributes section of the UI ( `customFields` )
