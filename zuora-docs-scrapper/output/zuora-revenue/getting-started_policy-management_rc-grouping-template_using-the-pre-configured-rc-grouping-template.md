---
title: "Using the Pre-configured RC Grouping Template"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/rc-grouping-template/using-the-pre-configured-rc-grouping-template"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:24:01.720Z"
---

# Using the Pre-configured RC Grouping Template

Learn how to use pre-configured RC grouping templates in Zuora Revenue to efficiently form revenue contracts using predefined rules.

Before a transaction or cost data is processed in Zuora Revenue, the revenue contract grouping rules must be configured to form revenue contracts.

Use the following seeded templates to configure an RC grouping template quickly:

-   OTR Grouping Template (Pre-Configured) - If you are a Zuora OTR customer, the most common grouping rule is forming a revenue contract using the subscription name and term number. For non-subscription items, revenue contracts are formed using your customer’s account number. This template uses Zuora Billing as its source data. The Subscription name and subscription term number grouping rules are pre-configured in the Primary grouping rule. When the Subscription name and term are unavailable, this template utilizes the customer number grouping as a secondary rule.
-   Group by Customer (Pre-Configured) - This template collects data from every source. The customer number grouping rule is pre-configured in the Primary grouping rule.

If these templates meet your requirements, you need not migrate the grouping templates to other tenants since these templates are seeded to your tenants. [Read](/zuora-revenue/getting-started/policy-management/rc-grouping-template/using-the-pre-configured-rc-grouping-template/create-and-configure-an-rc) how to create and configure an RC.
