---
title: "Use case for retrieving rating details through Data Query"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing/multi-attribute-pricing/retrieve-rating-details-about-usage-charges-or-records/use-case-for-retrieving-rating-details-through-data-query"
product: "zuora-billing"
scraped_at: "2025-12-24T04:59:41.161Z"
---

# Use case for retrieving rating details through Data Query

This use case demonstrates retrieving rating details through Data Query when a bill run fails due to issues with usage records and custom fields.

Imagine a scenario where:

-   You created a subscription with two usage charges, one with the Pre-Rated Pricing charge model and the other with the Pre-Rated Per Unit charge model. The charges are configured to look at two separate custom fields for their rate data, `rate__c` and `total__c`.

-   Two usage records were uploaded against the subscription, meaning they will be rated by both charges mentioned above.

-   One of the usage records was loaded with only one of the custom fields containing the appropriate rate information that the charges required for proper calculation.

-   You created a bill run, BR-00000041, to rate and bill the two uploaded usage records.


The bill run failed. To find the failure cause, retrieve details about each data object, for the two usage records.
