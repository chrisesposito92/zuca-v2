---
title: "Configure to display prepaid balance fund information on invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/configure-to-display-prepaid-balance-fund-information-on-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:11.021Z"
---

# Configure to display prepaid balance fund information on invoices

Learn how to configure HTML templates to display prepaid balance fund information on invoices.

If you are using the Prepaid with Drawdown feature, you can configure HTML templates to display information about the Prepaid Balance Fund object and its fields on invoices. All fields of the Prepaid Balance Fund object are available when you access this object through the Rate Plan Charge object. In the charge details table, you can access the Prepaid Balance Fund object by joining from InvoiceItem.RatePlanCharge.PrepaidBalanceFunds.

Assume that you want to display the values of the following fields of the Prepaid Balance Fund object in the charge details table of an invoice:

-   StartDate

-   EndDate

-   Balance

-   FundedBalance

-   FundingPrice


To configure HTML templates to display information about order line items on invoices, perform the following steps:

1.  Create an HTML invoice template where you choose the starter template called Basic from the invoice template library.
2.  In the online HTML template editor, click the Data Table block for the charge details table. The Content panel is displayed on the right of the template editor.
3.  In the Columns subsection of the Data Table section, click Add in the Header column.
4.  In the Add Column dialog box that is displayed, configure the following information :
    1.  Enable Advanced Options next to the Field field.
    2.  In the Field field, enter the following merge fields to search for the appropriated prepaid balance fund based on period matching, and display the fund-related information in the charge details table: If the service period of a charge line item falls into the validity period of a prepaid balance fund, information about the fund is displayed in the Prepaid Balance Fund column of the corresponding charge item row. Generally, only one data record is matched. If the charge line item does not use any prepaid balance fund, fund information is displayed blank for the charge line item. You can also use the following functions only to pick up the first matched data record:

        {{Cmd\_Assign(TheStartDate,ServiceStartDate)}} {{Cmd\_Assign(TheEndDate,ServiceEndDate)}} {{#RatePlanCharge.PrepaidBalanceFunds|FilterByRef(StartDate,LE,TheStartDate)|FilterByRef(EndDate,GE,TheEndDate)}} {{StartDate}}, {{EndDate}}, {{Balance}}, {{FundedBalance}}, {{FundingPrice}} {{/RatePlanCharge.PrepaidBalanceFunds|FilterByRef(StartDate,LE,TheStartDate)|FilterByRef(EndDate,GE,TheEndDate)}} {{Cmd\_Assign(TheStartDate,ServiceStartDate)}} {{Cmd\_Assign(TheEndDate,ServiceEndDate)}} {{#RatePlanCharge.PrepaidBalanceFunds|FilterByRef(StartDate,LE,TheStartDate)|FilterByRef(EndDate,GE,TheEndDate)|Nth(1)}} {{StartDate}}, {{EndDate}}, {{Balance}}, {{FundedBalance}}, {{FundingPrice}} {{/RatePlanCharge.PrepaidBalanceFunds|FilterByRef(StartDate,LE,TheStartDate)|FilterByRef(EndDate,GE,TheEndDate)|Nth(1)}}

    3.  In the Header field, enter a header name for the selected field to display in the data table, for example, Prepaid Balance Fund .
    4.  Click Add to save the column information. A column with the Prepaid Balance Fund header is added to the data table.
5.  In the HTML template editor, click Save to save the HTML template.
6.  Click Preview to switch to the Preview mode to preview an invoice using the HTML template .

The displayed HTML template changes to an invoice PDF file with actual data for you to preview. If a charge line item uses any prepaid balance fund, information about the fund is displayed in the Prepaid Balance Fund column of the corresponding invoice item row, as shown in the following format:

2022-03-01, 2023-03-01, 30.0, 30.0, 60.0

If a charge line item does not use any prepaid balance fund, fund information is displayed blank for the corresponding charge line item.
