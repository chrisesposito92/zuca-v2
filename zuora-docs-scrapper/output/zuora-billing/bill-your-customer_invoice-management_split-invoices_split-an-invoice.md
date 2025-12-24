---
title: "Split an invoice"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/split-invoices/split-an-invoice"
product: "zuora-billing"
scraped_at: "2025-12-24T08:32:24.025Z"
---

# Split an invoice

Learn how to split a draft invoice into multiple invoices by selecting invoice details, percentages, and payment terms.

1.  Navigate to Billing > Invoices.
2.  Click the number of the draft invoice, which has not been posted, to open the invoice detail page.
3.  Click the three vertical dots icon to display more applicable actions, then click Split Invoice . The Split Invoice dialog opens.
4.  Select an invoice date, the percentage of the invoice total to apply this invoice, and a payment term.

    -   Invoice date : This is the date you want to present to the customer on the invoice. Note that this is not the target date of the invoice, and is not necessarily the day the invoice is due.
    -   Percentage : You can specify any value from 0.000000001 to 100 (inclusive). You can enter a whole number or a decimal number with up to nine decimal places. The total percentage of all split invoices must add up to 100. See the Invoice percentages section for more information.
    -   Payment Term : Select the payment term to apply to this invoice. This specifies the number of days until payment is due on the invoice. You can apply different payment terms to every split invoice.

5.  To create another split invoice, click Add New.
6.  Click OK to save the invoices and generate new invoice IDs.

When viewing the details of a split invoice, you can use the Split Invoices field in the Basic Information section to navigate to other invoices that were created as part of the same original splitting process. This field lists all of the split invoices created from the original invoice. Click any of the split invoice IDs to view the details of that split invoice.

Split invoices also include a line at the bottom of the invoice detail that shows the percentage of this invoice and the total value of the invoice. For example, if the total invoice is $300, a split invoice that was set to be 40% of the total invoice will display 40% of $300.
