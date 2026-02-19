---
title: "Display invoice information in credit memo templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/display-invoice-information-in-credit-memo-templates"
product: "zuora-billing"
scraped_at: "2026-02-19T03:13:16.869Z"
---

# Display invoice information in credit memo templates

Learn how to display invoice information in credit memo templates using specific schemas, without needing to associate credit memos with invoices.

You can view relevant invoice numbers, invoice dates, and charge details (invoice item) directly within a credit memo PDF using schemas, CreditFromInvoiceItem and CreditFromCreditMemoItem , in the HTML template. These schemas serve as structures that enable the display of credit details associated with an invoice and a credit memo, respectively. With this feature, you don’t have to associate credit memos with an invoice to access the corresponding invoice number for a credit memo.

Ensure that the Invoice Settlement feature is enabled to access and view the credit memo details. For more information, see Get started with Invoice Settlement .

To configure the credit memo table and display invoice details, perform the following steps:

1.  Log on to the Zuora Billing UI.
2.  Click your avatar at the top right and navigate to Billing > Manage Billing Document Configuration .
3.  On the Manage Invoice, Credit/Debit Memo Templates tab, click Add New Html Template . The Choose a Template from the Library page is displayed.
4.  Click the Credit Memo tab.
5.  Hover over any template and click Use . Alternatively, click Blank Template if you want to start from scratch. The Template screen is displayed.
6.  Drag and drop the Credit Memo Table component onto the template.
7.  Click the Show Object Schema icon .
8.  Search for the CreditFromInvoiceItem and CreditFromCreditMemoItem schemas.
9.  Copy and paste the new fields you desire from these schemas wherever required in the table.
10.  Click Save. The Set Template Number dialog box opens. Choose one of the following:

     -   Use a system-generated number: Let the system set a natural key for your usage.

     -   Specify template number: Enter a natural or external key to support CRUD operations.


     Note:

     The CreditFromItemId schema must be used in the template to enable the use of the CreditFromInvoiceItem.Invoice.InvoiceNumber schema. However, the CreditFromItemId schema can be hidden using HTML to prevent displaying it in the PDF.
