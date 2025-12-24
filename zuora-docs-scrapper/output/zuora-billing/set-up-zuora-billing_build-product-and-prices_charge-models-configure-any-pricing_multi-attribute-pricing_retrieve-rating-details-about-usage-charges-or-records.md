---
title: "Retrieve rating details about usage charges or records"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/multi-attribute-pricing/retrieve-rating-details-about-usage-charges-or-records"
product: "zuora-billing"
scraped_at: "2025-12-24T04:59:36.343Z"
---

# Retrieve rating details about usage charges or records

Learn how to retrieve rating details for usage charges and records, handle potential errors in charge models, and access data through the Zuora UI or API.

The rating and billing of usage charges with the Pre-Rated Pricing or Multi-Attribute Pricing charge models depend on user-entered data into custom fields, custom objects, or the price formula. In these areas, strict data validation cannot be guaranteed at the point of data entry. Therefore, it is expected that errors might occur during the rating process.

If you are using one of these charge models, errors might occur in any of the following situations:

-   Usage records are loaded with invalid data, for example, the `rate__c` custom field has a blank value or an invalid numerical value, like `abc` .

-   Custom object records are loaded with invalid data, similar to custom fields.

-   No custom object records might match the `objectLookup()` function.

-   Errors occur in the price formula calculation, for example, divided by 0.


If any of the preceding situations exists, the corresponding bill run will fail, and you will see the following error message displayed on the bill run details page:

`There are subscriptions that failed to generate invoice. See details below.`

To find the cause of the failure for these charge models only, or to understand the calculation steps, you can use Data Query to retrieve details about usage charges and usage records involved in the bill run through the Zuora UI or API. Before the retrieve, you have to obtain the related reference ID from the bill run details page through the Zuora UI, or from the error message returned in the response body of the corresponding operation through the API.

If the bill run succeeds, you can obtain the related reference ID from the bill run details page through the Zuora UI, or from the Zuora-Request-Id header in the corresponding API response.

Two data objects are available with usage rating information.

-   ChargeRatingDetail - rating details at the charge level

-   UsageRatingDetail - rating details at the usage record level


Zuora stores ChargeRatingDetail and UsageRatingDetail data for seven calendar days after the data is created.

Note:

The Pre-Rated Pricing charge models and Multi-Attribute Pricing charge model are available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see Zuora Editions for pricing information.
