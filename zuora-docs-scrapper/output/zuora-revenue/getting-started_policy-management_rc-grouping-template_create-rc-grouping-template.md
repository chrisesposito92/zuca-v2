---
title: "Create RC grouping template"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/rc-grouping-template/create-rc-grouping-template"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:18:00.366Z"
---

# Create RC grouping template

Create and configure an RC grouping template in Zuora Revenue to organize transaction lines into revenue contracts.

1.  From the main menu, navigate to Policies > RC Grouping Template .
2.  On the RC Grouping Template page, to create an RC grouping template, click the add new icon. The New Grouping Template window is displayed.
3.  In the Definition tab, provide the following information and then click the save icon. The RC grouping template is created. ![rc-grouping-template.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/24704980-0076-42c9-98d7-5d3d8352b213?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjI0NzA0OTgwLTAwNzYtNDJjOS05OGQ3LTVkM2Q4MzUyYjIxMyIsImV4cCI6MTc3MTcwODY3NiwianRpIjoiMDliOWFkZDJmZjIyNDUyNzlkNGNiYThlNzJmZTFjYTciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.gqgWBuQ0wcxBKShPTjBKA0Aa5e2vXmLpcNHS1SgsOuM)

    -   A unique name for the new template in the Template Name field (Required).
    -   The effective start date of the template in the Start Date field.
    -   A relevant processor from the Stage Processor list.
    -   A short description of the template.

4.  To configure the grouping rules, complete the following steps in the Primary Grouping Rules section:
    1.  In the Grouping Rules section, click to add a row.
    2.  Enter a rule name in the Rule Name column.
    3.  Click the Group By column. The Edit Grouping Criteria window is displayed.
    4.  Select appropriate fields from the Available Fields list and click the right arrow icon to add them to the Selected Fields list. You can add as many fields as you want. The Sales Order Number is typically used along with other fields based on the business need. Only when the transaction lines have the same values for all the selected fields, they will be grouped together into one revenue contract.
    5.  Close the Edit Grouping Criteria window.
    6.  In the Duration Type column, select the duration when this grouping rule is effective. If you select Day(s) in the Duration Type column, also select the base date in the Duration Field column and specify the number of days in the Duration column. For example, you can specify that this grouping rule is valid within 30 days after the Sales Order date, where Zuora Revenue is preset to count from the earliest Sales Order date within the revenue contract. This grouping rule will not be applied to any data that comes into Zuora Revenue outside the specified duration.

        Note:

        -   If the RETAIN\_SO profile value is set to Yes, it will override the time-based grouping. The subsequent line of a sales order line will always be grouped into the contract where the sales order line exists, and the grouping criteria are not going to be considered by the system.
        -   If the RETAIN\_SO profile value is set to No, the group by functionality will not check the sales order number and will always have one entry for the revenue contract. Previously, the system considered the sales order line number for the revenue contract.

    7.  To enable this grouping rule, make sure that the Enabled column is set to Yes .
    8.  Click the save icon to save the grouping rule.
    9.  Repeat the above steps to add as many grouping rules as you need.
    10.  To set up a hierarchy of the grouping rules, organize the order in which the grouping rules are to be applied by editing the number in the Seq column.
    11.  Click the save icon to save your configuration.
5.  (Optional): To set secondary RC grouping rules, complete the following steps on the Definitions tab:
    1.  Toggle the Secondary Grouping Rules switch to Yes .
    2.  Select one field from the Associated Contract Reference list. A common selection is SO Number . When a contract modifying line comes, the system will examine the value for the selected field to determine whether there is an existing contract where the contract modifying line belongs. If yes, the contract modifying line will be grouped into the contract. Otherwise, the system will apply the primary grouping rules to group the line.
    3.  Select one grouping option for the circumstances when the system identifies multiple contracts by examining the associated contract reference values for the contract modifying order lines.
6.  (Optional): To filter the incoming data to which the current grouping template is to be applied, complete the following steps on the Filters tab:
    1.  Click the '+' icon to add one filter.
    2.  Select the filed name, operator, and operand to create the filter criteria.
    3.  Make sure the Enabled column is set to Yes .
    4.  Click the '+' icon to add as many filters as you need.
    5.  Click the save icon to save your configuration.
7.  (Optional): To set up the SSP hierarchy, complete the following steps on the SSP Hierarchy tab. For information about SSP setup, see [SSP Setup](/zuora-revenue/day-to-day-operation/ssp-setup) .
    1.  Click the add new icon to add a hierarchy.
    2.  Select appropriate values for SSP Template, SP Below Range, SP Above Range, and SP Within Range columns.
    3.  Make sure the Enabled column is set to Yes.
    4.  Click the add new icon to add as many hierarchies as you need.
    5.  To organize the order in which the SSP hierarchies are to be applied, edit the number in the Seq column.
    6.  Click the save icon to save your configuration.

The RC grouping template is created. When transaction data is uploaded to Zuora Revenue, Zuora Revenue will filter and group the transaction lines into revenue contracts based on the RC grouping template.
