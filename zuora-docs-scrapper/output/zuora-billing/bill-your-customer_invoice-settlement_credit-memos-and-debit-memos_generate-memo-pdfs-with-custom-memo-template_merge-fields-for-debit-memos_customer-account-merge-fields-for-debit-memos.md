---
title: "Customer account merge fields for debit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/generate-memo-pdfs-with-custom-memo-template/merge-fields-for-debit-memos/customer-account-merge-fields-for-debit-memos"
product: "zuora-billing"
scraped_at: "2026-02-20T17:34:20.330Z"
---

# Customer account merge fields for debit memos

Learn about the Customer Account fields

| Merge field | Description |
| --- | --- |
| Account.AccountNumber | The unique account number assigned to the account being created.Example: A000842911This field cannot be translated. |
| Account.Autopay | Indicates if future payments are automatically collected when they're due during a Payment Run. Example: true, false |
| Account.Balance | Note:Zuora recommends that you use the Previous Balance and New Balance instead of this field.Previous account balance at time of invoice generation. Does not include any charges from this invoice as this invoice is in draft mode.Example: $304.50 |
| Account.BillCycleDay | Indicates the account's billing cycle day (BCD), which is when the bill runs generate invoices for the account.Type: int Values: any activated system-defined bill cycle day (1 - 31)Example : 1st of the month |
| Account.BillingBatch | A batch organizes your customer accounts into groups to optimize your billing and payment operations.Values: any system-defined batch ( Batch1 - Batch50 or by name).Example: 1st of the month |
| Account.CompanyCode | Unique code that identifies a company account in Avalara.Corresponds to:The Tax Company Code field in the customer account on the Zuora UIThe TaxCompanyCode field on the Account SOAP API objectExample: CCAPACThis field cannot be translated. |
| Account.CrmId | The CRM account ID for the account. A CRM is a customer relationship management system, such as Salesforce.com.Values: a string of 100 characters or fewerExample : 912D24U2482904820948This field cannot be translated. |
| Account.Currency | The currency that invoices associated with the account are paid with. Values: a currency value defined in the administrative web-based UIExample: USD |
| Account.CustomerSupportRepName | The name of the account's customer service representative, if applicable.Example: Melanie Dolgachev |
| Account.DefaultPaymentMethod | The ID of the default payment method for the account. This field is required if the AutoPay field is set to true. Values: a valid ID for an existing payment methodExample: CreditCard |
| Account.MRR | This is the Monthly Recurring Revenue for the Account. This value is the sum of all subscription MRRs.Example: $316.80 |
| Account.Name | The name of the account. The account name displays on lists of accounts in the web-based UI.Example: Super Subscription Emporium |
| Account.NewBalance | This field is the <<Account.PreviousBalance>> merge field from the invoice tenant plus the invoice balance. This field is needed for some invoice presentation rules as the Account Balance field on the customer account does not include draft invoices.Example: $304.50 |
| Account.Notes | Use this field to record comments about the account.Example: Platinum Customer |
| Account.Parent.Name | The parent account name of the current account. You can specify the parent account name in the account detail page.Note:This merge field correlates with the Customer Hierarchy feature. The Customer Hierarchy feature is in Limited Availability. If you wish to have access to the feature, submit a request at Zuora Global Support .Example: Finance Dept |
| Account.PaymentTerm | Indicates when the customer pays for subscriptions. Values: a valid, active payment term defined in the web-based UI administrative settingsExample : Due Upon Receipt |
| Account.PaymentMethodMandateId | The ID of the mandate. A mandate is a signed authorization for UK and NL customers. This field is used only for the direct debit payment method.Example: CCJW9VR |
| Account.PreviousBalance | The previous account balance is a dynamic field that is the account balance for draft invoices or the current account balance less the invoice balance when the invoice is posted. This field is needed for some invoice presentation rules as the Account Balance field on the customer account does not include draft invoices.Example: $0.00 |
| Account.PreviousTransactionImpactTotal | The sum of all rows that appear in the Previous Transactions table based on specific table filters, such as LastInvoice or UptoDaysOld.Example : $0.00 |
| Account.PreviousTransactionStartAmount | The Starting Balance with respect to the Previous Transaction table. The difference of Account.PreviousBalance - Account.PreviousTransactionImpactTotal .Example: $0.00 |
| Account.PurchaseOrderNumber | The number of the purchase order associated with this account. Purchase order information generally comes from customers. Values: a string of 100 characters or fewerThis field cannot be translated.Example : PO102925 |
| Account.SalesRep | The name of the sales representative associated with this account, if applicable.Example : Travis Huch |
| Account.TaxExempt | The status of the account's tax exemption. Values: one of the following:YesNoPendingVerificationExample: Pending VerificationNote:You must use this field if you use Zuora Tax. This field is unavailable if you don't use Zuora Tax. |
| Account.TaxExemptCertificateID | The ID of your customer's tax exemption certificate.Example: CA8592555This field cannot be translated.Note:Requires Zuora Tax. |
| Account.TaxExemptCertificateType | The type of the tax exemption certificate that your customer holds.Example: Reseller PermitNote:Requires Zuora Tax. |
| Account.TaxExemptDescription | A description of the tax exemption certificate that your customer holds.Example: Fax ID: 1031374242Note:Requires Zuora Tax. |
| Account.TaxExemptEffectiveDate | Date when the the customer's tax exemption starts.Corresponds to the TaxExemptEffectiveDate field on the Account SOAP API object.Example: 01/01/2016 |
| Account.TaxExemptExpirationDate | Date when the customer's tax exemption ends.Corresponds to the TaxExemptExpirationDate field on the Account SOAP API object.Example: 12/31/2016 |
| Account.TaxExemptIssuingJurisdiction | Indicates the jurisdiction in which the customer's tax exemption certificate was issued.Example: CaliforniaNote:Requires Zuora Tax. |
| Account.VATID | Customer’s Value Added Tax (VAT) ID.Corresponds to:The VAT ID field in the customer account on the Zuora UIThe VATId field on the Account SOAP API objectExample: VATID12345This field cannot be translated. |
