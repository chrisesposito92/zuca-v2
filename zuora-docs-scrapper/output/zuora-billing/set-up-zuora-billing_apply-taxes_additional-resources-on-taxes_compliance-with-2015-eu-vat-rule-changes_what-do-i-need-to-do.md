---
title: "What do I need to do?"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/compliance-with-2015-eu-vat-rule-changes/what-do-i-need-to-do"
product: "zuora-billing"
scraped_at: "2025-12-24T05:11:33.238Z"
---

# What do I need to do?

Zuora requires collecting customer address information for location compliance, using self-certifying and commercial evidence, and reviewing pricing structures in the Product Catalog.

## Location compliance

You must collect at least two pieces of information to verify your customer addresses. Zuora does not confirm location compliance when processing transactions. No transactions will fail as result of these new rules. Collect this information as part of your operating procedures and maintain them for auditing purposes.

## Proof 1: Self-certifying evidence

Self-certifying evidence is information such as billing or shipping addresses. Zuora is well-suited for collecting billing and shipping addresses. Use the Bill to Contact address on the Customer Account as self-certifying evidence.

See the following for more information:

-   Create a Customer Account

-   Contact Data Source

-   Contact SOAP object or Get Account Summary REST API

## Proof 2: Commercial evidence

Commercial evidence comes from external sources, such as a credit card account or bank account. Zuora recommends using an outside service to collect commercial evidence from Internet Protocol (IP) addresses, Credit Card Issuer Identification Number (IIN), or banking information.

## Pricing structures

Zuora recommends that you review your pricing structures in your Zuora Product Catalog. Your revenue will change especially if you have set Tax Mode to the Tax Inclusive option. Your pricing structure is not impacted by these new rules.

Check the Taxation options in your product rate plan charges.

See the following for more information:

-   Associate Tax Codes with Product Charges and Set the Tax Mode

-   ProductRatePlanCharge object
