---
title: "Connect Tax Engines"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/additional-resources-on-taxes/connect-tax-engines"
product: "zuora-billing"
scraped_at: "2026-02-19T03:10:53.237Z"
---

# Connect Tax Engines

This topic covers Zuora's Connect Tax Engines integration with leading tax vendors to streamline tax calculations and tailor tax behavior for various markets.

Zuora offers Connect Tax Engines to integrate with leading tax vendors through Configurable tax apps , including Marketplace Tax Apps and Direct Integration Tax Apps. Zuora’s Tax app provides robust, pre-built integrations that streamline tax calculation across a wide range of tax types and jurisdictions. It works out of the box, but also gives you the flexibility to tailor tax behavior using Tax Templates and Flexible Tax Mappings to meet your business-specific needs.

Note:

The Connect Tax Engines feature is in Limited Availability . If you wish to have access to the feature, submit a request at Zuora Global Support .

## Use cases

Use case1: Entering a new market organically

You are doing well in the U.S. and want to sell the same product in Brazil. The Connect Tax Engine you have been using in Zuora can only handle tax calculation and compliance requirements for the U.S. market. It does not work for Brazil, which has very different tax types, rates, and regulations.

In this case, you can create a new Connect Tax Engine for Brazil and configure the tax code associated with the product you sell in both countries to select different tax engines for different countries. You can achieve this flexibility by setting up a mapping formula based on country names, a standard field on the customer accounts.

Without having to duplicate your whole product catalog for Brazil, you can quickly handle tax issues in the new market and speed up your expansion.

Use Case 2: Entering new markets through acquisition

You acquired three companies as dealers to help you sell the same product in North America, Europe (116 countries), and LATAM (20 countries). Each of the acquired companies has a separate contract with their regional tax vendors.

In this case, you can create three Connect Tax Engines and configure the tax code associated with the product to select different tax engines for different dealers. You can achieve this flexibility by creating a “dealer” custom field on the customer accounts and setting up a mapping formula based on this custom field.

Without having to change the existing tax practices of the acquired companies, you can quickly leverage the acquisition to achieve business results in the new markets.

## Work with Connect Tax Engines

You can use one or multiple Connect Tax Engines by setting up a tax code , then associate the tax code to the taxable product rate plan charge .

If you are using one Connect Tax Engine and have duplicated the same product rate plan charge for different markets, you might want to switch to multiple Connect Tax Engines to simplify your product catalog, adapt to taxability changes, and pave the way for future expansions.

Let us use the following example to explain the steps and impacts when switching to multiple Connect Tax Engines.

Your existing system setups:

-   Tax Code 1: Use ConnectTaxEngineUS to calculate tax for U.S. customers.
-   Product Rate Plan Charge 1 (for U.S. customers): Taxable and is associated with Tax Code 1
-   Product Rate Plan Charge 2 (for Brazilian customers): Duplicate of Charge 1. Not taxable.

![Single connect tax engine](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/7a9270a4-9506-4b4b-882f-e2512484812e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjdhOTI3MGE0LTk1MDYtNGI0Yi04ODJmLWUyNTEyNDg0ODEyZSIsImV4cCI6MTc3MTU1NzA0OCwianRpIjoiMjMwYjM1MjU2MGVhNDBjMjkxMzM3ZDRhN2M4ZTE3MTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.tPXUqd9JUaKWLy7L24qHc9HbZch5AaiUwmmw1d1veKs)

Later, you decide to use multiple Connect Tax Engines as the product will become taxable in Brazil. You make the following changes to system setups:

-   Set up a new Connect Tax Engine called ConnectTaxEngineBrazil to calculate tax for Brazilian customers.
-   Tax Code 1: Select Use Multiple Connect Tax Engines and define a mapping formula based on the country of Sold To Contact:

{% if account.soldToContact.country == \`United States\` %} ConnectTaxEngineUS | USCompanyCode {% elsif account.soldToContact.country == \`Brazil\` %} ConnectTaxEngineBrazil | BrazilCompanyCode {% endif %}

-   Expire Product Rate Plan Charge 2 .
-   Amend subscriptions of Brazilian customers to remove Product Rate Plan Charge 2 and add Product Rate Plan Charge 1 .

![Multiple connect tax engines](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/269f27fb-d93e-4d94-8bfd-d49c5728c32a?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI2OWYyN2ZiLWQ5M2UtNGQ5NC04YmZkLWQ0OWM1NzI4YzMyYSIsImV4cCI6MTc3MTU1NzA0OCwianRpIjoiNWU2NmQ0NzJkNDk2NGU0Yjk4NTJhMjkwYmQ1ZWEyODAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.6ggBqu88TjIwetNCAiAGc_lDNEVn3wr0AMERfPglkIk)

## Impact on credit memos

Note: Credit memos are only available if you have enabled Invoice Settlement.

After you switch to Use Multiple Connect Tax Engines for an existing tax code, if you need to create credit memos for invoices before the switch, you need to create the credit memo from invoices or by bill run. Creating the credit memo from charges will use the latest tax engine selected by the mapping formula.

To explain the impact, let us build on the previous example. Suppose you switch to multiple Connect Tax Engines to handle taxes for Brazilian customers on 2022-01-01.

| Scenario 1 | Scenario 2 |
| --- | --- |
| You need to issue a credit memo on 2022-01-15 to settle a service dispute from last October. You can create this credit memo from the related invoice for the period from 2021-10-01 to 2021-10-31. This credit memo will not have tax. | You need to refund a customer who cancels his subscription for the month of last December. You can create this credit memo from a bill run on 2022-01-15 to refund the customer for the period from 2021-12-01 to 2021-12-31. This credit memo will not have tax. |
| Note: if you create the credit memo in both scenarios from Product Rate Plan Charge 1, the credit memo will have a tax based on the latest tax code configuration. |  |

## Notes and limitations

-   You can create at most 10 Connect Tax Engines for your Zuora tenant.
-   You can use at most 40 company codes for integration with a tax vendor through a configurable tax app.
-   You can only use one Connect Tax Engine for tax calculation and compliance requirements within the same account. Multiple Connect Tax Engines for the same account, invoice, or memo are not supported at this time.
