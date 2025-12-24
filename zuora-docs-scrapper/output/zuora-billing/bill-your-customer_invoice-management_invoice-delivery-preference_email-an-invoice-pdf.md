---
title: "Email an invoice PDF"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-delivery-preference/email-an-invoice-pdf"
product: "zuora-billing"
scraped_at: "2025-12-24T08:31:32.946Z"
---

# Email an invoice PDF

Learn how to email an invoice PDF using the Zuora UI or REST API.

To enable automatically emailing invoice PDFs upon posting bill run, follow the instructions in Download or Email Memo Documents.

Ensure that you configure the following notifications:

-   Invoice Posted | Invoice Posted Manually
-   Invoice Posted | Invoice Posted via API
-   Invoice Posted | Invoice Posted within a Bill Run of Auto-Post
-   Manual Email For Invoice | Manual Email For Invoice

Perform the following steps to email an invoice PDF from the Zuora UI:

Note: To email an invoice PDF from REST API, see

[POST Email Invoice](https://www.zuora.com/developer/api-references/api/operation/POST_EmailInvoice)

and

[POST Email Billing Documents from Bill Run](https://www.zuora.com/developer/api-references/api/operation/POST_EmailBillingDocumentsfromBillRun).

1.  Log in to the Zuora application.
2.  Go to Billing > Invoices.
3.  In the invoice list, click the invoice number that you want to send.
4.  On the invoice detail page, click Email Invoice.
5.  Specify the email address of the recipient.
6.  Click Send.
