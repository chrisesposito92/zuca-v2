---
title: "Pre-rated pricing"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/pre-rated-pricing"
product: "zuora-billing"
scraped_at: "2025-12-24T04:59:51.486Z"
---

# Pre-rated pricing

The Pre-Rated Pricing charge models allow external rating of usage records, which are then passed to Zuora for billing. These models support usage-based charges with pricing subtypes of Per Unit or Total Amount, but do not support on-demand usage rating.

With the Pre-Rated Pricing charge models, you can perform rating externally, by a third-party provider or in-house, and then pass-through the usage records along with the rated amount to Zuora for billing.

The Pre-Rated Pricing charge models apply only to usage-based charges.

The pricing subtypes for this type of charges can be either Per Unit or Total Amount. The Pre-Rated Pricing charge models currently do not support on-demand usage rating.

-   Pre-Rated Per Unit Pricing: With this charge model, the per-unit rated amount is passed in on the usage records that are uploaded to Zuora. Zuora will determine the total rated amount by multiplying the per unit rate with the provided quantity.

-   Pre-Rated Pricing: With this charge model, the total rated amount is passed in on the usage records that are uploaded to Zuora. Zuora will not use or calculate the per unit rate, in this case.


To use the Pre-Rated Pricing charge models, you must create a custom field on the Usage record for each charge model and not leave the custom field blank. For example, suppose two custom fields were created on the Usage object, named `totalAmount__c` for the Pre-Rated Pricing charge model and `perUnitAmount__c` for the Pre-Rated Per Unit Pricing charge model. Note that the fields can be named anything you like, as long as the values they carry are numerical. In the usage records that are loaded into Zuora, you should then use these custom fields to pass through the rated amount.

The following table lists a specific example for a usage charge with the Pre-Rated Per Unit Pricing model.

| Usage Record | Quantity | perUnitAmount__c | Calculation | Subtotal |
| --- | --- | --- | --- | --- |
| A | 10 | 10.00 | 10 * 10.00 | $100.00 |
| B | 20 | 1.00 | 20 * 1.00 | $20.00 |
| C | 1 | 10.00 | 1 * 10.00 | $10.00 |
| Invoice item gross total: | $130.00 |  |  |  |

Note that if no valid value is provided in the appropriate custom field, the bill run fails with an error. In the following example for usage record D, no value is provided for the custom field, so the corresponding bill run fails. To avoid the error, you can set the value of the custom field to `0` .

| Usage Record | Quantity | perUnitAmount__c | Calculation | Subtotal |
| --- | --- | --- | --- | --- |
| D | 5 |  | Error | Error |
| Invoice item gross total: | Error |  |  |  |

Conversely, the following table lists an example for a usage charge with the Pre-Rated Pricing model.

| Usage Record | Quantity | totalAmount__c | Calculation | Subtotal |
| --- | --- | --- | --- | --- |
| E | 10 | 10.00 | 10.00 | $10.00 |
| F | 20 | 1.00 | 1.00 | $1.00 |
| G | 1 | 10.00 | 10.00 | $10.00 |
| Invoice item gross total: | $21.00 |  |  |  |

## Considerations

Keep the following things in mind when using the Pre-Rated Pricing charge model:

-   Decimals need to be represented using the period notation, regardless of locale. For example, 1.99 will be accepted, but 1,99 will not.

-   When using the Excel file format (.xls) for usage upload, Pre-Rated prices need to be formatted as text, i.e. entered as '1.99, rather than 1.99 (please note the leading single quote, which indicates a text entry instead of a number), otherwise the prices will not include the decimal part of the number. CSV upload doesn't have the same limitation.

-   The following features or integrations are not supported yet:

    -   On-demand usage rating

    -   Usage rating by group

    -   Multi-entity - support for product sharing

    -   Marketplace applications, specifically Salesforce CPQ Connector , Netsuite Connector , and Developer Tools

    -   The Bundling feature in Zuora Quotes. It indicates that charges of the Pre-Rated Pricing charge model in the Salesforce product catalog cannot be synchronized to Zuora with the Bundling feature.

    -   Automated price change (uplift) for renewed subscriptions

    -   Previewing a subscription

-   No reporting or Data Source support for the charge model name and configuration on the productRatePlanCharge or RatePlanCharge Object

-   No AQuA/ZOQL/SOAP Query support for the charge model name and configuration on the productRatePlanCharge or RatePlanCharge Object

-   No more than 200,000 usage records in a single RatePlanCharge for a given billing period
