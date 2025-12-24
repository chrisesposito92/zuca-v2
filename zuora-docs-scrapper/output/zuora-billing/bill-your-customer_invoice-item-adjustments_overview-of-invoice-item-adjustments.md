---
title: "Overview of Invoice Item Adjustments"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-item-adjustments/overview-of-invoice-item-adjustments"
product: "zuora-billing"
scraped_at: "2025-12-24T08:38:03.485Z"
---

# Overview of Invoice Item Adjustments

Use Invoice Item Adjustments to modify invoice details, ensuring accurate accounting and reporting

The Invoice Settlement feature provides you with the capabilities to handle advanced payment management, credit and debit memos, and item-level transactions.

After you have created an invoice for your customer, you might need to adjust the invoice so that the customer does not need to pay the full amount due on the invoice. For example, if you have decided to give the customer a discount. You can use Invoice Item Adjustments (with a credit or charge type) to reduce or eliminate the amount a customer has to pay for an invoice.

Invoice item adjustments allow you to adjust the invoice details, including taxes at the charge level, and have those adjustments reported in the system under the same accounting code as the items that are being adjusted. Thus, the invoice item adjustments help to ensure greater accuracy of reports and accounting integration. An Invoice Item Adjustment fundamentally impacts the invoice balance and can bring the invoice balance to zero. The Invoice Item Adjustment adjusts a specific invoice item at the line level.

For example, if an invoice has a $100 one-time charge and a $50 recurring charge, plus a line item for $5 in taxes applied to the one-time charge, you might choose to apply an Invoice Item Adjustment to adjust the $50 recurring charge, which will automatically tie the adjustment to the accounting and revenue recognition code associated with that charge.

The following applies to invoice item adjustments:

-   Invoice item adjustments are always performed against an invoice item on an invoice.
-   Invoice item adjustments always include the accounting code, service period, and all other information from the invoice item for revenue recognition.
    Note: If you have the Billing - Revenue Integration feature enabled, you can exclude an invoice item adjustment from revenue accounting by checking the Exclude Item Billing From Revenue option when creating or editing the invoice item adjustment.

    -   Multiple invoice item adjustments can be made against one invoice item, as long as each adjustment drives the balance of the invoice item closer to 0.
    -   Invoice item adjustments are named with a prefix of "IIA-".

    Invoice Item Adjustment can be used for several business processes, including writing off the invoice and issuing a credit. For a list of business processes supported by payment operations, see the article How do I understand the "Invoice to Cash" business processes that Payment Operations supports?


Note:

The Invoice Settlement feature is a replacement for Invoice Item Adjustments. We recommend that you enable Invoice Settlement to take advantage of the improved functionalities. After Invoice Settlement is enabled, the Invoice Item Adjustments feature will be deprecated for your tenant, and invoice item adjustments are not presented in the UI. If you need to export data for invoice item adjustments, use Data Source, Data Query, or [REST API](https://www.zuora.com/developer/api-references/older-api/tag/Invoice-Item-Adjustments). See Invoice Settlement migration checklist and guide for more information.

## View invoice item adjustments

You can view adjustments from the customer account record or from the Invoice Item Adjustments page. You can create new adjustments from either view.

Sorting: On the Invoice Item Adjustments page, you can sort adjustments by clicking the following column headers:

-   Last Modified Date
-   Create Date
-   Adjustment Number

Searching: You can search for an adjustment by searching for its adjustment number. If you do not know the adjustment number, you can go to your customer account to find your adjustment.
