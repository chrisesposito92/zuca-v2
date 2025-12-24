---
title: "Country-based dynamic pricing with multi-currency support"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/dynamic-pricing/use-cases/country-based-dynamic-pricing-with-multi-currency-support"
product: "zuora-billing"
scraped_at: "2025-12-24T05:02:40.986Z"
---

# Country-based dynamic pricing with multi-currency support

Configure dynamic pricing based on customer location with support for multiple currencies, ensuring region-specific pricing.

You can configure different prices based on the customer's country, and return pricing in the relevant currency (USD, AUD, CAD, etc.). This ensures region-specific pricing across different markets.

Here's an example configuration:

| Condition (Country) | USD Price | AUD Price | CAD Price |
| --- | --- | --- | --- |
| United States | 100 | 145 | 130 |
| Canada | 110 | 150 | 135 |
| Australia | 120 | 160 | 140 |
| Spain | 123 | 126 | 232 |
| Netherlands | 234 | Empty | Empty |
| Default (Fallback) | 99 | 140 | 120 |

If a customer from Spain makes a purchase, they will be charged:

-   $123 USD if paying in USD

-   $126 AUD if paying in AUD

-   $232 CAD if paying in CAD


If a customer from Netherlands makes a purchase, they will be charged:

-   $234 USD if paying in USD

-   No prices are set for AUD or CAD, so the system will either use a fallback/default rule or return an error if no valid price exists.


## Configure in Zuora UI

1.  Go to and open the product.

2.  Create or edit a rate plan.

3.  Click \+ Charge.

4.  In the Pricing section, select Dynamic Pricing.

5.  In the Decision Table:

    1.  In the Field column, select Country.

    2.  In the Condition (=) column, enter countries like United States, Canada, Australia, Spain, Netherlands.

    3.  In the Price columns, enter country-specific amounts for each active currency (e.g., USD, AUD, CAD).

    4.  Add a Default (Fallback) row with base prices.

6.  (Optional) Upload a pricing CSV if you want to bulk-load multiple countries and currencies.

7.  Save the configuration.
