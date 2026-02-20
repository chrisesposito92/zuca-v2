---
title: "Create and configure an RC"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/rc-grouping-template/using-the-pre-configured-rc-grouping-template/create-and-configure-an-rc"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:18:00.855Z"
---

# Create and configure an RC

Learn how to create and configure an RC grouping template in Zuora Revenue by following a series of steps, including selecting a pre-configured template, providing necessary details, and reviewing grouping rules.

1.  Navigate to Policies > RC Grouping Template from the main menu.
2.  Select the applicable pre-configured grouping template from the following: -

    -   OTR Grouping Template (Pre-Configured)
    -   Group by Customer (Pre-Configured)

3.  In the Definition tab, provide the following information.

    -   A unique name for the new template in the Template Name field.
    -   The effective start date of the template in the Start Date field.
    -   A relevant processor from the Stage Processor list.
    -   A short description of the template.

4.  Review the pre-configured rules in the Primary Grouping Rules section. If you want to create rules that meet your requirements, see, Create RC grouping template.
5.  Review the Filter tab to analyze the incoming data to which the current grouping template will be applied:

| RC Grouping template | Procedure |
| --- | --- |
| OTR Grouping Template (Pre-Configured) | This template uses Zuora Billing as its source data. No action is required from your side. |
| Group by Customer (Pre-Configured) | This template collects data from every source. You must add applicable incoming data sources for this template to collect data.Click the '+' icon to add one filter.Select the filed name, operator, and operand to create the filter criteria.Make sure the Enabled column is set to Yes .Click the '+' icon to add as many filters as you need.Click the save icon to save your configuration. |

1.  (Optional): To set up the SSP hierarchy, complete the following steps on the SSP Hierarchy tab. For information about SSP setup, see [SSP Setup](/zuora-revenue/day-to-day-operation/ssp-setup) .
    1.  Click the '+'' icon to add a new hierarchy.
    2.  Select appropriate values for the SSP Template, SP Below Range, SP Above Range, and SP Within Range columns.
    3.  Make sure the Enabled column is set to Yes.
    4.  Click the add new icon to add as many hierarchies as you need.
    5.  To organize the order in which the SSP hierarchies are to be applied, edit the number in the Seq column.
    6.  Click the save icon to save your configuration.
2.  Click the save icon. The RC grouping template is created.

The RC grouping template is created. When transaction data is uploaded to Zuora Revenue, Zuora Revenue filters, and groups the transaction lines into revenue contracts based on the RC grouping template.
