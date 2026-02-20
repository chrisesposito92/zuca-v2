---
title: "Country-specific configurations in Sovos for Saudi Arabia"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-saudi-arabia"
product: "zuora-billing"
scraped_at: "2026-02-20T17:34:39.442Z"
---

# Country-specific configurations in Sovos for Saudi Arabia

This topic provides guidance on configuring the E-Invoicing feature for businesses operating in Saudi Arabia, including requirements for Tax Identification Numbers and supported document types.

If you are a business provider selling products and services in Saudi Arabia, you can configure the E-Invoicing feature to generate e-invoice files for the mandates of invoice clearance.

As a taxpayer, you must have a unique Tax Identification Number (TIN), to be able to issue invoices. For more information on the TIN for Saudi Arabia, see [Saudi Arabia TIN](https://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-identification-numbers/SaudiArabia-TIN.pdf).

The Zuora E-Invoicing feature supports the following document types that are currently supported by Saudi Arabia:

-   Electronic invoices Electronic invoices (e-invoices) are a form of issuance of sales invoices electronically and are stipulated by the government of Saudi Arabia.

-   Credit notes A credit note allows taxable persons to amend previously issued valid invoices by adjusting the amounts payable.

-   Debit notes A debit note allows taxable persons to amend previously issued valid invoices by adjusting the amounts against any payment changes.


## E-invoicing configuration in Sovos for Saudi Arabia

To configure e-invoicing for invoice clearance for Saudi Arabia, you must create a company profile in Sovos. Zuora handles the configuration process on your behalf in Sovos, ensuring a seamless setup.

ZATCA’s ([Zakat, Tax and Customs Authority](https://login.zatca.gov.sa/irj/portal?ume.logon.locale=en&login=X)) Sandbox (UAT - User Acceptance Testing) environment is not fully dynamic, so no ZATCA credentials are issued. No prerequisite steps against ZATCA are required for UAT to perform Sovos configurations and then begin transmitting documents.

To get started with Sovos’ UAT environment, you need to provide the following information required for the configuration to Zuora. This information is used to configure a company in Sovos.

-   Company Name: Legal name of your business

-   Trade Name: Doing business as (DBA) name

-   Tax Identification Number (TIN): Unique tax identification number


The following instructions are from Sovos’ developer guide for [Saudi Arabia Configuration](https://developer-guide.sovos.com/connect-once-api/integration-guides/e-invoicing-compliance/country-configurations/#saudi-arabia) in case you cannot access it.

To get started with Sovos’ Production environment, you must obtain an OTP (One Time Password) from the [Fatoora Portal (ZATCA)](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Pages/default.aspx) and compose the CSR input data in the “Provision a Branch” request via Sovos’ API. Configuring a branch in Sovos consists of creating a branch and then provisioning, which requires the following fields:

-   `otp` (string): Set it to the OTP retrieved from the Fatoora Portal. The steps required to obtain it can be found under “Fatoora Portal User Manual”, available for download from the [Fatoora Portal](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Pages/default.aspx). For Sandbox testing, set the `otp` to `123345` . Only one OTP can be used at the time, as the “multiple OTP” option is not supported by Sovos solution.

-   `csrInput` (string): A more detailed explanation of the fields of CSR input can be found in the “E-Invoicing Detailed Technical Guideline”, available for download in this [government web page](https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Pages/default.aspx).

    -   `commonName` (string): Unique name or asset tracking number of the organization unit. Free text, with the maximum limit of 500 characters.

        -   `organizationName` (string): Organization/Taxpayer Name — not to be confused with YOUR-ORG-ID used in the request path. Free text, with a maximum limit of 500 characters.

            -   `countryName` (string): Name of the country (2-letter ISO 3166 Alpha-2).

                -   `invoiceType` (string): The 4-number document type that the Taxpayer’s solution unit will be issuing/generating. It can be one or a combination of Standard Tax Invoice & Simplified Tax Invoice:

                    -   `1000` : Standard Tax Invoices only (B2B/B2G).

                    -   `0100` : Simplified Tax Invoices only (B2C).

                    -   `1100` : Simplified and Standard Tax Invoices (B2B/B2G & B2C). Free text.

    -   `location` (string): The address of the Branch or location where the device or solution unit is primarily situated (could be a website address for e-commerce). Preferably in the [Short Address format of the Saudi National Address](https://splonline.com.sa/en/national-address-1/). Free text, with a maximum limit of 500 characters.

    -   `industry` (string): Industry or sector for which the device or solution will generate invoices. Free text, with a maximum limit of 500 characters. Example: “finance”.


Note that Sovos only provides APIs for the configuration without user interface support.

## Specify building numbers on contacts and business regions

In the e-invoicing clearance process in Saudi Arabia, both the Seller and the Buyer must provide their address building numbers.

-   The building number is mandatory for the business region, which holds the business details of the Seller, and mandatory for the bill-to-contact, which contains the address of the Buyer.

-   It is best practice to use the address line 2 of the business region and bill-to-contact to store the building number. The addressLine2 field is mandatory for the business region, which holds the address building number of the Seller, and for the Bill To Contact, which contains the address building number of the Buyer.

-   If you store the building number in a standard or custom field, you must change the template accordingly.


## Business Category

The e-invoice data transmitted to SDI supports two types of business categories, identified by the following codes:

-   B2C for end-users

-   B2B for private companies and professionals


The tag in the e-invoice file template is as follows:

<Scope> <Type>BusinessCategory</Type> <InstanceIdentifier/> <Identifier>B2B</Identifier> </Scope>

Zuora's default e-invoice file template is configured to B2B. Zuora's testing covers the business category B2B only. B2C as the business category has not been tested.

## Invoice type description and type code

In the e-invoice file template, you must specify a code for the functional type of the Invoice. Zuora has only tested with the Invoice Type Description as 0100000. If you have other invoice subtypes, you must customize the e-invoice file template and plan the testing accordingly.

## Specify the invoice type description and type code

In the e-invoice file template, specify a code for the functional type of the Invoice. NNPNESB is the type code for your invoices. For example, 1100110 is the description code you must use in the e-invoice template. Refer to the table below for more information on specifying description codes for your invoices.

| Code | Description | True/False | Example | Description code |
| --- | --- | --- | --- | --- |
| N | 01 for Tax invoice 02 Simplified tax invoice | NA | Tax invoice | 0 1 |
| N |  |  |  |  |
| P | 3rd party invoice transaction | 0 for false and 1 for true | False | 0 |
| N | Nominal invoice transaction | False | 0 |  |
| E | Exports invoice transaction | True | 1 |  |
| S | Summary invoice transaction | True | 1 |  |
| B | Self-billed invoice transaction | False | 0 |  |

By default, Zuora configures the e-invoice file template with the invoice type description code 0100000. For a B2C scenario, It's assumed that the invoice is a tax invoice and not a simplified tax invoice.

Suppose you have other types of invoices. For example, if your business falls in the Exports Invoice Transaction category, you must use the description code 0100100 and customize the e-invoice file template accordingly.

## Specify the referenced document for credit memo and debit memo

A credit or debit memo requires an identifier for the referenced document (order number, agreement number, and so on). In the default e-invoice file template, for a credit or debit memo, use the invoice number as the identifier of the referenced document if they are created from an invoice or generated from subscriptions due to subscription cancellation and product removal. When they are a standalone credit or debit memo from a product rate plan charge, PurchaseOrderNumber on the Account is used.

In the e-invoice file template, the `Invoice > BillingReference > InvoiceDocumentReference > ID` tag is used to pass the reference document identifier.

The CBC tag in the default e-invoice credit memo file template is as follows:

<cbc:ID> {{#Source|EqualToVal(AdhocFromInvoice)}} {{Invoice.InvoiceNumber}} {{/Source|EqualToVal(AdhocFromInvoice)}} {{#Source|EqualToVal(BillRun)}} {{#CreditMemoItems|Map(CreditFromInvoiceItem)|GroupBy(Invoice.InvoiceNumber)|Uniq}} {{Cmd\_Assign(VAR,CreditFromItemId)}} {{Invoice.InvoiceNumber}} {{/CreditMemoItems|Map(CreditFromInvoiceItem)|GroupBy(Invoice.InvoiceNumber)|Uniq}} {{/Source|EqualToVal(BillRun)}} {{#Source|EqualToVal(AdhocFromPrpc)}} {{Account.PurchaseOrderNumber}} {{/Source|EqualToVal(AdhocFromPrpc)}} {{#Source|EqualToVal(API)}} {{#CreditMemoItems|Map(CreditFromInvoiceItem)|GroupBy(Invoice.InvoiceNumber)|Uniq}} {{Invoice.InvoiceNumber}} {{/CreditMemoItems|Map(CreditFromInvoiceItem)|GroupBy(Invoice.InvoiceNumber)|Uniq}} {{/Source|EqualToVal(API)}} </cbc:ID>

The CBC tag in the default e-invoice debit memo file template is as follows:

<cbc:ID> {{#Source|EqualToVal(AdhocFromInvoice)}} {{Invoice.InvoiceNumber}} {{/Source|EqualToVal(AdhocFromInvoice)}} {{#Source|EqualToVal(AdhocFromCreditMemo)}} {{CreditMemoId}} {{/Source|EqualToVal(AdhocFromCreditMemo)}} {{#Source|EqualToVal(AdhocFromPrpc)}} {{Account.PurchaseOrderNumber}} {{/Source|EqualToVal(AdhocFromPrpc)}} </cbc:ID>

To modify these default mappings, you should customize the e-invoice file template. For example, if you want to use the purchase order number as the reference for an individual credit or debit memo. You can store the purchase order number on a credit or debit memo.

In the following example, the `PONumberCMC__c` custom field on the Credit Memo object is used to store the purchase order number:

<cbc:ID> … {{#Source|EqualToVal(AdhocFromPrpc)}} {{PONumberCMC\_\_c}} {{/Source|EqualToVal(AdhocFromPrpc)}} … </cbc:ID>

## Reasons for issuing credit and debit memos

The reason for issuing a credit or debit note applies to the credit and debit memo e-invoice file templates.

According to Saudi Arabia VAT regulations, a credit or debit note is issued in the following five cases:

-   Cancellation or suspension of the supply occurs after the supply has been processed entirely or partially (تم إلغاء أو وقف التوريد بعد حدوثه أو اعتباره كلياً أو جزئياً).
-   Essential change or amendment in the supply leads to the change of the VAT due (وجود تغيير أو تعديل جوهري في طبيعة التوريد بحيث يؤدي الى تغيير الضريبة المستحقة).

-   Amendment of the supply value is pre-agreed upon between the supplier and consumer (تم الاتفاق على تعديل قيمة التوريد مسبقاً).

-   Goods or services are refunded (عند ترجيع السلع أو الخدمات).

-   Change in the seller's or buyer's information occurs (عند التعديل على بيانات المورد أو المشتري).


In the e-invoice file template, the `InstructionNote` tag in the `PaymentMeans` tag in the `Invoice` tag is used to pass the reason.

Zuora default e-invoice file templates use the standard field `ReasonCode` on the CreditMemo and DebitMemo objects. The CBC tag in the default e-invoice file template is as follows:

| 1 | < cbc:InstructionNote >{{ReasonCode}}</ cbc:InstructionNote > |
| --- | --- |

You can use one of the following fields in the`{{ReasonCode}}`merge field:

-   The standard field `ReasonCode` on the CreditMemo and DebitMemo objects is populated by default. However, before using the ReasonCode, you need to configure the reason code names for the credit memo and debit memo in the Zuora Billing based on the five cases above. See [Creating and Editing Reason Codes](/zuora-payments/process-payments/process-payments/manage-payment-processing/manage-payment-processing/reason-codes-for-payment-operations/creating-and-editing-reason-codes). If you use the standard field ReasonCode in the e-invoice file template for Credit Memo or Debit Memo for Saudi Arabia, Zuora maps pre-populated reason codes for credit and debit memos to the reason codes that comply with Saudi Arabia VAT regulations. The mapping rules are as follows:

    | Template type | Before mapping (pre-populated reason code for memo documents in Zuora) | After mapping |
    | --- | --- | --- |
    | Credit Memo | Invoice Reversal | Cancellation or suspension of the supply occurs after the supply has been processed entirely or partially (تم إلغاء أو وقف التوريد بعد حدوثه أو اعتباره كلياً أو جزئياً) |
    | Any other pre-populated reason codes for credit memos.For a complete list, see Pre-Populated and Default Reason Codes. | Change in the seller's or buyer's information occurs (عند التعديل على بيانات المورد أو المشتري) |  |
    | Debit Memo | Any pre-populated reason codes for debit memos.For a complete list, see Pre-Populated and Default Reason Codes. | Change in the seller's or buyer's information occurs (عند التعديل على بيانات المورد أو المشتري) |

-   You can also replace the `{{ReasonCode}}`merge field with a custom field on the CreditMemo and DebitMemo objects. Before replacing `{{ReasonCode}}`with the custom field, create the custom field by yourself based on the five cases above, and modify the e-invoice file template to align with the custom field.


## Payment means type code

Payment means type code is used to specify whether the payment mode is cash, credit/debit cards, bank transfer, credit, and/or others. Payment means type code applies to the credit and debit memo e-invoice file templates.

In the e-invoice file template, the `PaymentMeansCode` tag in the `PaymentMeans` tag in the `Invoice` tag is used to pass the payment means type code.

The CBC tag in the default e-invoice file template is as follows:

<cbc:PaymentMeansCode>30</cbc:PaymentMeansCode>

Zuora default e-invoice file templates use 30 as the default code. 30 indicates that the means of payment is the credit transfer. The allowed codes are listed in the UNTDID 4461 code list, see [unece org website](https://unece.org/fileadmin/DAM/trade/untdid/d16b/tred/tred4461.htm). If 30 is not appropriate for your business, change it to another one in the UNTDID 4461 code list.

## Identification scheme for supplier and consumer

Zuora default e-invoice file template uses CRN (Commercial Registration Number) as the scheme ID, and its value is Tax Identification Number (TIN). The scheme ID applies to invoice, credit memo, and debit memo e-invoice file templates.

Supplier

For the supplier party, the CAC tag in the default e-invoice file template is as follows:

<cac:PartyIdentification> <cbc:ID schemeID="CRN"\>{{VarBusinessNumber}}</cbc:ID> </cac:PartyIdentification>

The default schemeID is CRN. For suppliers, you can use one of the following acronyms to replace CRN:

-   MOM: MOMRAH license

-   MLS: MHRSD license

-   700: 700 Number

-   SAG: MISA license

-   OTH: Other ID


If multiple IDs exist, one of the above must be entered following the sequence specified above.

If the schemeID is CRN, the default e-invoice file template uses the `{{VarBusinessNumber}}` merge field, and the value is the legal business number configured in the business region for the suppliers.

Consumer

For the customer party, you may use one or both of the following CAC tags in the default e-invoicing template:

-   Use `<cac:PartyTaxScheme>` when a consumer has the registered VAT ID from the Saudi Tax Authority (ZATCA) but does not have another type of buyer ID.
    Note: In this case, you must delete `<cac:PartyIdentification>` from the default e-invoicing template additionally since this CAC tag is used for storing information about the other type of buyer ID other than VAT ID.

-   Use `<cac:PartyIdentification>` when a consumer does not have a registered VAT ID but has another type of buyer ID. Before using this tag, you need to create the Other ID and Other ID Type custom fields on the `EInvoiceProfile` object to display them in the Business Profile section of the account. For configuring custom fields, see [Manage custom fields with the Object Manager](/zuora-platform/extensibility/custom-fields/custom-field-management-with-the-object-manager).

-   Use both tags when a consumer has a registered VAT ID and another type of buyer ID.


The two CAC tags in the default e-invoice file template are as follows.

<cac:AccountingCustomerParty> <cac:Party> {{^Account.EInvoiceProfile.OtherIdType\_\_c|IsBlank}} <cac:PartyIdentification> <cbc:ID schemeID="{{Account.EInvoiceProfile.OtherIdType\_\_c}}"\>{{Account.EInvoiceProfile.OtherId\_\_c}}</cbc:ID> </cac:PartyIdentification> {{/Account.EInvoiceProfile.OtherIdType\_\_c|IsBlank}} <cac:PostalAddress> ...... </cac:PostalAddress> <cac:PartyTaxScheme> {{^Account.EInvoiceProfile.BusinessNumber|IsBlank}} <cbc:CompanyID>{{Account.EInvoiceProfile.BusinessNumber}}</cbc:CompanyID> {{/Account.EInvoiceProfile.BusinessNumber|IsBlank}} <cac:TaxScheme> <cbc:ID>{{VarTaxCode}}</cbc:ID> </cac:TaxScheme> </cac:PartyTaxScheme> <cac:PartyLegalEntity> ...... </cac:PartyLegalEntity> </cac:Party> </cac:AccountingCustomerParty>

For `<cac:PartyIdentification>` , the schemeID is one of the following acronyms that you specified in the Other ID Type custom field in the Business Profile section of the account. Once specified, the acronym will be populated in the `{{Account.EInvoiceProfile.OtherIdType__c}}` merge field in the e-invoicing template.

-   TIN: Tax Identification Number

-   CRN: Commercial registration number

-   MOM: MOMRAH license

-   MLS: MHRSD license

-   700: 700 Number

-   SAG: MISA license

-   NAT: National ID

-   GCC: GCC ID

-   IQA: Iqama Number

-   PAS: Passport ID

-   OTH: Other ID


The value of the `schemeID` is the value you specified in the Other ID custom field in the Business Profile section of the account. Once specified, the value will be populated in the `{{Account.EInvoiceProfile.OtherId__c}}` merge field in the e-invoicing template.

For `<cac:PartyTaxScheme>` , the value of the `companyID` is the value you specified in the Legal Business Number in the Business Profile section of the account. Once specified, the value will be populated in the `{{Account.EInvoiceProfile.BusinessNumber}}` merge field in the e-invoicing template.

## Quantity on Invoice Line

The quantity applies to invoice, credit memo, and debit memo e-invoice file templates. CBC tag in the default template is as follows:

<cbc:InvoicedQuantity unitCode="{{UOM}}"\>{{Quantity}}</cbc:InvoicedQuantity>

The quantity includes the following information:

-   `{{Quantity}}` : The quantity of items (for example, goods or services) that is charged in the Invoice line. Zuora default e-invoice file template uses a `Quantity` field on the line items. The line items refer to Zuora InvoiceItem, CreditMemoItem, and DebitMemo Item objects.

-   `{{UOM}}` : The unit of measure that applies to the invoiced quantity. Zuora default e-invoice file template uses a unit of measure field on the line items. The unit of measure has different field names on the line items, that is, the `UOM` field on the Invoice Item object, and the `UnitOfMeasure` field on the CreditMemoItem and DebitMemoItem objects.


We recommend you use these default mappings. You can change the default templates if the default field mappings don’t meet your needs.

## Zero product price with zero tax rate

When the invoice includes free trial products priced at $0, some tax vendors may return a $0 tax amount and a 0% tax rate.

For this case, Zuora uses tax category S (Standard Rate) in the default invoice, credit memo, and debit memo e-invoice file templates.

However, the tax authority ZATCA expects the tax rate for the Standard Rate VAT Category not to be zero.

To meet the ZATCA requirement, Zuora overwrites the 0% tax rate returned from the tax vendor with 15% in the default templates. This tax rate overwriting does not impact the trail product price, which is $0.

Note: If you want to use other tax categories, including E (Exempt from tax), Z (Zero rated goods), and O (Service outside scope of tax), you need to change the <cbc:ID> </cbc:ID> tag value to the corresponding tax category, customize the tax rate, and reason codes. For acceptable reason codes for tax categories E and Z, check them in the 11.2.4 VAT categories code section in [Electronic Invoice XML Implementation Standard to the E-Invoicing resolution dated 2021-05-28](https://zatca.gov.sa/ar/RulesRegulations/Taxes/Pages/default.aspx).

This overwriting logic is applied to the following two blocks in the SovosDocument:

Block 1:

{{#Wp\_Eval}} {{GroupedByTaxCode|FilterByValue(ChargeAmount,GT,0)|FlatMap(TaxationItems)|FilterByValue(TaxRate,GT,0)|Size}} > 0 ? \`{{#GroupedByTaxCode|FilterByValue(ChargeAmount,GT,0)|FlatMap(TaxationItems)|FilterByValue(TaxRate,GT,0)|First(1)}} <cac:TaxCategory> <cbc:ID>S</cbc:ID> <cbc:Percent>{{#Wp\_Eval}} {{TaxRate}} \* 100|Round(2) {{/Wp\_Eval}}</cbc:Percent> <cac:TaxScheme> <cbc:ID>{{TaxRateDescription}}</cbc:ID> </cac:TaxScheme> </cac:TaxCategory> {{/GroupedByTaxCode|FilterByValue(ChargeAmount,GT,0)|FlatMap(TaxationItems)|FilterByValue(TaxRate,GT,0)|First(1)}}\` : \`{{#GroupedByTaxCode|FlatMap(TaxationItems)|First(1)}} <cac:TaxCategory> <cbc:ID>S</cbc:ID> <cbc:Percent>15.00</cbc:Percent> <cac:TaxScheme> <cbc:ID>{{TaxRateDescription}}</cbc:ID> </cac:TaxScheme> </cac:TaxCategory> {{/GroupedByTaxCode|FlatMap(TaxationItems)|First(1)}}\` {{/Wp\_Eval}}

This block reflects two tax rate situations for the same tax category S, indicated by the following expression and constant, respectively:

-   `{{TaxRate}} * 100|Round(2)`

-   15.00


The two tax rate situations reflect the tax rate situations in the `Wp_Eval` Lambda function in Block 2.

Block 2:

<cac:ClassifiedTaxCategory> <cbc:ID>S</cbc:ID> <cbc:Percent>{{#Wp\_Eval}} {{ChargeAmount}} == 0 && {{TaxRate}} == 0 ? 15.00 : {{TaxRate}} \* 100|Round(2) {{/Wp\_Eval}}</cbc:Percent> <cac:TaxScheme> <cbc:ID>{{TaxRateDescription}}</cbc:ID> </cac:TaxScheme> </cac:ClassifiedTaxCategory>

In this block, the expression in the Wp\_Eval Lambda function is `{{ChargeAmount}} == 0 && {{TaxRate}} == 0 ? 15.00 : {{TaxRate}} * 100|Round(2)` .

This means if the charge amount is 0 and tax rate is 0%, tax rate 0% will be overwritten as 15%. Otherwise, the expression `{{TaxRate}} * 100|Round(2)` will be used to calculate the tax rate.
