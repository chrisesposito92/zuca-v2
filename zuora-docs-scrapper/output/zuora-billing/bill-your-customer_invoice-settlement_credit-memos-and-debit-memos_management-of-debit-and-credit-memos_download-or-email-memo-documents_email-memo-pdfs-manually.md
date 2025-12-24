---
title: "Email memo PDFs manually"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/download-or-email-memo-documents/email-memo-pdfs-manually"
product: "zuora-billing"
scraped_at: "2025-12-24T08:35:10.065Z"
---

# Email memo PDFs manually

Learn how to email memo PDFs manually

After a memo is posted, you can email your customers a specific version of the memo PDF from the Zuora UI and REST API.

To email memo PDFs from REST API, see [POST Email Credit Memo](https://www.zuora.com/developer/api-references/api/operation/POST_EmailCreditMemo), [POST Email Billing Documents from Bill Run](https://www.zuora.com/developer/api-references/api/operation/POST_EmailBillingDocumentsfromBillRun) and [POST Email Debit Memo](https://www.zuora.com/developer/api-references/api/operation/POST_EmailDebitMemo).

To send memo PDFs to your customers from the Zuora UI, complete the following steps.

1.  Customize the email templates that you used to send memo PDFs.
    1.  Define or set a communication profile to targeted customer accounts.
    2.  In the profile, create or edit the notification for the Email Credit Memo | Manually email Credit Memo and Email Debit Memo | Manually email Debit Memo events. Make sure you activate the events and select the Include Credit Memo PDF or Include Debit Memo PDF check box in the Edit notification dialog.
    3.  Create or edit email templates for the events.
    4.  Set the email templates as default to use in the Delivery Options panel of the Edit notification dialog.
2.  Navigate to Billing > Credit and Debit Memos in the left-hand navigation section.
3.  On the Credit and Debit Memos page, click the memo number that you want to edit in the Credit Memos or Debit Memos tab.
4.  On the memo detail page, you can email the memo in one of the following ways:

    -   Click Email Credit Memo or Email Debit Memo .

    -   Scroll down to the History section, and click Email PDF next to the version of the memo PDF you want to download.


5.  In the pop-up dialog, specify the email addresses you want to email to:

    -   In the Credit Memo Email Address or Debit Memo Email Address field, input the valid email addresses you want to send to. Use commas to separate email addresses.
        Note: If you select the Use Email Template Setting check box, the email addresses you specified in this field will be ignored.

    -   Select the Use Email Template Setting check box to send the memo PDF to the email addresses specified in the To Email field of the email template. The email template is the one you set in the Delivery Options panel of the Edit notification dialog.

    -   Select the Include Additional Email Addresses check box to email the memo PDF to the additional email addresses of the memo account. This check box is only available if you specify email addresses in the Additional Email Addresses field on the account detail page.


6.  Click Send.

    You can check when the memo is emailed in the History section. This section shows both the original and resent emailing activities. If the email was sent to your customer, but your customer still has not received it, you can resend it by clicking Email PDF.
