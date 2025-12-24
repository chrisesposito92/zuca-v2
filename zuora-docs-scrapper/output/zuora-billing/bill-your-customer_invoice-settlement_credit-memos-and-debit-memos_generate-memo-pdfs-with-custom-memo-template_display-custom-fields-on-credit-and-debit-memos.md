---
title: "Display custom fields on credit and debit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/generate-memo-pdfs-with-custom-memo-template/display-custom-fields-on-credit-and-debit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:36:26.300Z"
---

# Display custom fields on credit and debit memos

Information on displaying custom fields on credit and debit memos

You can add custom fields to your credit memo PDFs and debit memo PDFs.

You can include custom fields from Accounts, Bill To Contact, Sold To Contact, Credit Memos, Credit Memo Items, Debit Memos, and Debit Memo Items on your memo PDFs. To display custom fields on your memo PDF template, enter the custom field API name in the appropriate place on the memo PDF template. These custom fields must be created in the Zuora user interface, where you can define the label, API name, and other values.

## Supported fields

The following table lists which Region Fields support custom fields in the memo template.

Note:

Group and subtotal in nested tables is the only way you can sort by custom fields. For other cases, custom fields are not supported when using `TableSort`.

| Memo PDF tables (Region fields) | Custom fields in UI | Sample tag |
| --- | --- | --- |
| Account | Account | <<Account.ReasonCode__c>> |
| BillToContact | Contact | <<BillToContact.ReasonCode__c>> |
| SoldToContact | Contact | <<SoldToContact.ReasonCode__c>> |
| CreditMemo | CreditMemo | <<CreditMemo.ReasonCode__c>> |
| CreditMemoItem | CreditMemoItem | <<CreditMemoItem.ReasonCode__c>> |
| DebitMemo | DebitMemo | <<DebitMemo.ReasonCode__c>> |
| DebitMemoItem | DebitMemoItem | <<DebitMemoItem.ReasonCode__c>> |
| TaxItem | Not Supported | N/A |
