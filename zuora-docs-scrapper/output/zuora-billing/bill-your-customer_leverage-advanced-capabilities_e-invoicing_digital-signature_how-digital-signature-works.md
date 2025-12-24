---
title: "How Digital Signature works"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/digital-signature/how-digital-signature-works"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:21.051Z"
---

# How Digital Signature works

Explains the process of using digital signatures for billing documents in Zuora, including best practices for uploading and signing PDF files.

If the business region a billing document belongs to has the Digital Signature feature enabled, the uploaded PDF files are signed with a digital signature each for the billing document. The best practice is to upload PDF files only when the billing document is in Posted status and the e-invoicing process is successful.

It is best practice to use the E-Invoicing feature and Digital Signature feature as follows:

1.  Generate a billing document in Zuora, an invoice, a credit memo, or a debit memo.
2.  Post the billing document to trigger the e-invoice file generation process.
3.  If the e-invoice file generation process is successful, a custom event is generated to generate the PDF file externally.
    1.  You can retrieve e-invoice file information and generate a PDF file for the billing document.
    2.  You can use the Upload a file for an invoice API operation to upload the PDF file, which takes an unsigned PDF file as input and provides the file ID of the signed PDF file as output.
    3.  Zuora determines whether to trigger the digital signature process for the billing document. If the corresponding business region has Digital Signature enabled, it proceeds to sign the PDF file. Otherwise, it does not sign the PDF file but just saves the PDF file.
    4.  Zuora submits the document PDF file to Sovos for signature, receives the signed PDF file, and stores the file.
    5.  The file ID of the signed PDF file is returned through the API.
    6.  In the case of a digital signature process failure, you must have a retry.
4.  Download the signed PDF file based on the received file ID.

    You can use the following API operations to upload externally generated PDF files for billing documents:

    -   [Upload a file for an invoice](https://www.zuora.com/developer/api-references/api/operation/POST_UploadFileForInvoice/)

    -   [Upload a file for a credit memo](https://www.zuora.com/developer/api-references/api/operation/POST_UploadFileForCreditMemo/)

    -   [Upload a file for a debit memo](https://www.zuora.com/developer/api-references/api/operation/POST_UploadFileForDebitMemo/)
