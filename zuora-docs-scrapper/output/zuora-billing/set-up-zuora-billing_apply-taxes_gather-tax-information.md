---
title: "Gather tax information"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/gather-tax-information"
product: "zuora-billing"
scraped_at: "2025-12-24T05:05:34.823Z"
---

# Gather tax information

Understand and gather the necessary tax information and rules to apply appropriate tax rates using Zuora Billing.

Taxability rules and guidelines are different for every customer. Zuora Billing has the ability to apply tax rates for addresses with matching for the address being any level from country, state, county, city, zip or a string value for tax region.

Zuora customers are responsible for gathering the tax rules and rates that must be applied. Typically, answering the following questions with a tax advisor will provide enough detail to identify tax rates:

1.  Where does your company have a Nexus or physical presence? Typically, this jurisdiction is identified by the state in the United States.
2.  Are your company’s products taxable in the jurisdictions identified in step 1?
3.  For each jurisdiction, what tax rates must be applied? For instance, some states such as Wisconsin apply various taxes based in which county the end customer resides in. In other states, a combination of county and city are required to determine the applicable tax amount.

Based on these answers, you can populate the Tax Rate Load CSV file with matching rules (for example, city, county, zip) to find which tax to apply and the tax rate that should be applied.
