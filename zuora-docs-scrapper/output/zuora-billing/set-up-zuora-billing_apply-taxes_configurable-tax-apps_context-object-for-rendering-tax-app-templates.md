---
title: "Context object for rendering tax app templates"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/configurable-tax-apps/context-object-for-rendering-tax-app-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:11.308Z"
---

# Context object for rendering tax app templates

The Context object is a JSON-based collection of data used to exchange information between applications, particularly for populating tax app templates in Zuora.

The Context object is a collection of contextual data stored in the JSON format. Such data represents background information about a person, an event, or a thing. The Context object is primarily used to facilitate the exchange of data between applications.

Zuora uses the Context object to populate information needed in a tax app template, which serves as the request body of the call Zuora sends to your tax vendor.

Here is the structure of the Context object in Zuora.

## Objects

| Field name | Type | Description |
| --- | --- | --- |
| document | object | Standard fields and custom fields of an invoice item, credit memo item, or debit memo item. |
| customer | object | Represents the soldTo or shipTo address for the document. If the document includes multiple addresses, item-level addresses should be used for accuracy. When a billing document contains different addresses for its items, the customer object reflects the address of the first document item. For more information about the selection of sold-to and ship-to contacts for tax calculation, see the Ship To Contact feature. |
| seller | object | Seller information configured for the engine settings. This is applicable when configuring a seller in the Configurable Tax App, or when setting up both a company and seller in the Direct Integration Tax App. You can reference seller fields in a template using the following syntax:seller["address1"] |
| today | string | The date when the object is created. |
| billTo | object | Represents the billTo address for the document. Reference it in the template using:document_item["billTo"] |
| account | object | Represents the Account object that owns the billing document (the invoice owner). Custom fields for the Account object are supported. You can reference it in the template using:customer["Account.CompanyCode__c"]Note:CompanyCode__c is a custom field of the Account. |
| invoiceOwner | object | Represents the Account object that owns the billing document. This is applicable regardless of the document items being from subscription charges or non-subscription charges. You can reference it in the template with:document_item["invoiceOwner"] |
| subscriptionOwner | object | Represents the Account object that owns the subscription (the subscription owner) when document items are from subscription charges. Reference it in the template using:document_item["subscriptionOwner"] |
| Subscription | object | Represents the subscription object applicable for document items from subscription charges. Reference it's custom fields in the template using:document_item["Subscription.customFieldName__c"] |
| ratePlanCharge | object | Represents the Subscription Rate Plan Charge object applicable for document items from subscription charges. Reference it's custom fields in the template using:document_item["RatePlanCharge.customFieldName__c"] |
| productRatePlanCharge | object | Represents the Product Rate Plan Charge object associated with the billing document item. It applies in the following scenarios:Document items are from subscription charges.Document items are from product rate plan charges (e.g., standalone invoice/credit memo or debit memo from product rate plan charge).Document items are from Order Line Items (OLIs) linked to product rate plan charges.Reference it's custom fields in the template using:document_item["ProductRatePlanCharge.customFieldName__c"] |
| Product | object | Represents a product associated with the document item. Custom fields for the Product are supported, and you can reference these custom fields in templates. For example:document_item["Product.customFieldName1__c"]Note:This is supported only in the Direct Integration Tax app.Where customFieldName1__c is the custom field of the Product. |
| ProductRatePlan | object | Represents a product rate plan associated with the document item. Custom fields for the ProductRatePlan are supported, and you can reference these custom fields in templates. For example:document_item["ProductRatePlan.customFieldName1__c"]Where customFieldName1__c is the custom field of the ProductRatePlan.Note:This is supported only in the Direct Integration Tax app. |

## Fields on the document object

| Field name | Type | Description |
| --- | --- | --- |
| id | string | The ID of the document. |
| invoiceNumber | string | The identification number of the invoice, credit memo, or debit memo. |
| invoiceDate | string | The date that appears on the invoice in YYYY-MM-DD format. |
| taxCompanyCode | string | The unique code that identifies a company account in the tax vendor's system. Note:For the standard template (tax calculation), this field is at the document_item level: document_item["taxCompanyCode"]For the void template (tax void), this field is at the document level: document["taxComapnyCode"] |
| currency | string | The ISO 3-letter Currency Code. See Currency code for reference.You can specify the currency on the subscription level or invoice, credit memo, debit memo level for the Billing Document Level Currency. The currency value will not be the account default currency anymore.You must have the Multiple Currencies feature enabled to change the currency value. |
| preview_mode | boolean | Specifies whether to calculate tax in preview mode. |
| call_type | string | The type of the call. Enum: “invoice”, “memo”. |
| event_type | string | The type of the event. Enum: “taxPreview”, “taxGenerate”, “taxVoid”, "taxOverride". Note that prior to using "taxOverride," confirm vendor compatibility, as this value is exclusive to certain vendors. |
| memoType | string | The type of the memo. Enum: “CreditMemo”, “DebitMemo”. |
| transactionId | string | The ID of the transaction. |
| custom fields | string | Custom fields are supported for invoices, credit memos, and debit memos. Below are some examples of how to reference custom fields in templates:For an Invoice custom field:{{document["Invoice.purchaseNumber__c"]}} ( purchaseNumber__c is a custom field of the Invoice object.)For a Credit Memo custom field: {{document["CreditMemo.customFieldName1__c"]}} ( customFieldName1__c is a custom field of the Credit Memo object.)For a Debit Memo custom field: {{document["DebitMemo.customFieldName1__c"]}} ( customFieldName1__c is a custom field of the Debit Memo object.) |

## Fields on the customer object

| Field name | Type | Marketplace Apps | Direct Integration Tax App | Description |
| --- | --- | --- | --- | --- |
| username | string | Yes | N.A. | The username to log into the tax vendor's system. |
| password | string | Yes | N.A. | The password to log into the tax vendor's system. |
| endpoint | string | Yes | N.A. | The endpoint URL provided by the tax vendor to receive tax requests. |
| company_code | string | Yes | Yes | A unique code that identifies a company account in the tax vendor's system. |
| division | string | Yes | N.A. | The division name as defined in Seller Information when configuring tax engine settings. |
| auth_type | string | Yes | N.A. | The type of authentication as defined in System Configuration when configuring tax engine settings. |
| address 1 | string | Yes | Yes | The first address line as defined in Seller Information when configuring tax engine settings. |
| address 2 | string | Yes | Yes | The second address line as defined in Seller Information when configuring tax engine settings. |
| addressId | string | N.A. | Yes | The unique ID for the seller's address. It helps identify the address record.Note: This field is only available for Direct Integration Tax Apps. |
| city | string | Yes | Yes | The city name as defined in Seller Information when configuring tax engine settings. |
| county | string | Yes | Yes | The county name as defined in Seller Information when configuring tax engine settings. |
| state | string | Yes | Yes | The state name as defined in Seller Information when configuring tax engine settings. |
| country | string | Yes | Yes | The country name as defined in Seller Information when configuring tax engine settings. |
| zipCode | string | Yes | Yes | The zip code as defined in Seller Information when configuring tax engine settings. |
| taxRegion | string | Yes | N.A. | The tax region as defined in Seller Information when configuring tax engine settings. |

## Fields on the seller object

| Field name | Type | Marketplace Apps | Direct Integration Tax App | Description |
| --- | --- | --- | --- | --- |
| username | string | Yes | N.A. | The username to log into the tax vendor's system. |
| password | string | Yes | N.A. | The password to log into the tax vendor's system. |
| endpoint | string | Yes | N.A. | The endpoint URL provided by the tax vendor to receive tax requests. |
| company_code | string | Yes | Yes | A unique code that identifies a company account in the tax vendor's system. |
| division | string | Yes | N.A. | The division name as defined in Seller Information when configuring tax engine settings. |
| auth_type | string | Yes | N.A. | The type of authentication as defined in System Configuration when configuring tax engine settings. |
| address 1 | string | Yes | Yes | The first address line as defined in Seller Information when configuring tax engine settings. |
| address 2 | string | Yes | Yes | The second address line as defined in Seller Information when configuring tax engine settings. |
| addressId | string | N.A. | Yes | The unique ID for the seller's address. It helps identify the address record.Note : This field is only available for Direct Integration Tax Apps . |
| city | string | Yes | Yes | The city name as defined in Seller Information when configuring tax engine settings. |
| county | string | Yes | Yes | The county name as defined in Seller Information when configuring tax engine settings. |
| state | string | Yes | Yes | The state name as defined in Seller Information when configuring tax engine settings. |
| country | string | Yes | Yes | The country name as defined in Seller Information when configuring tax engine settings. |
| zipCode | string | Yes | Yes | The zip code as defined in Seller Information when configuring tax engine settings. |
| taxRegion | string | Yes | N.A. | The tax region as defined in Seller Information when configuring tax engine settings. |

## Fields on the document\_item object

| Field name | Type | Description |
| --- | --- | --- |
| Id | string | The ID of the document item. |
| productName | string | The name of the product. |
| productRatePlanChargeName | string | The name of the product rate plan charge. |
| productRatePlanChargeId | string | The ID of the product rate plan charge. |
| taxExemptStatus | string | The status of your customer's tax exemption. Enum values are:0: No1: Yes2: PendingVerificationNote:For an invoice item, the tax exemption–related fields retrieve the latest values from the account.For a credit memo item, the tax exemption–related fields retain the original values from the corresponding invoice. |
| taxExemptCertificateType | string | The type of the tax exemption certificate that your customer holds. |
| taxExemptEntityUseCode | string | A unique entity use code to apply exemptions in the tax engine. |
| totalAmount | number | The total amount on the document item. |
| unitPrice | number | The per-unit price on the document item. |
| taxCompanyCode | string | The unique code that identifies a company account in the tax vendor's system. Note:For the standard template (tax calculation), this field is at the document_item level: document_item["taxCompanyCode"]For the void template (tax void), this field is at the document level: document["taxComapnyCode"] |
| quantity | number | The number of units on the document item. |
| vatId | string | The ID of the value-added tax. |
| discountAmount | number | The amount of a fixed-amount discount on the document item. |
| subscriptionRatePlanChargeId | string | The ID of the subscription rate plan charge that is associated with this document item. |
| taxCode | string | The tax code identifies which tax rules and tax rates to apply to the document item. |
| taxCalculationOwnerOption | number | Specifies the owner of the tax calculation. Enum: 0: Subscription Owner; 1: Invoice Owner.` |
| taxDate | string | The date when the tax is applied to the document item. |
| taxMode | number | The tax mode of the document item indicating whether the total amount includes tax. Enum: 0: TaxExclusive; 1: TaxInclusive. |
| subscriptionOwnerId | string | The ID of the subscription owner. |
| taxExemptIssuingJurisdiction | string | The jurisdiction in which the customer tax exemption certificate was issued. |
| subscriptionName | string | The name of the subscription. |
| subscriptionId | string | The ID of the subscription. |
| taxExemptCertificateID | string | The ID of your customer's tax exemption certificate. |
| appliedToItemId | string | The ID of the document item that the discount charge is applied to. |
| ChargeNumber | string | The number of the rate plan charge associated with the billing item generated from the subscription rate plan charge. |
| ServiceStartDate | string | The start date of the service for the document item. |
| ServiceEndDate | string | The end date of the service for the document item. |
| customer | object | The same definition as Customer object .To avoid incorrect addresses generating, set addresses at the document_item level instead of the document level.The document can include different addresses at the document item level when you specify a sold-to or ship-to contact on subscriptions or order line items. Refer to the Flexible Billing Attributes and Ship To Contact features for more details.For example, to set addresses in the template, use the following syntax:Document_item["customer"]["address1"] document_item["customer"]["pcode__c"]Where address1 is a standard field on customer (represented to Contact object) and pcode__c is a custom field. |
| billTo | object | The Liquid tax template allows tax apps to extract BillTo address information. The document_items object is useful for retrieving BillTo information to share with external app vendors.An example of the syntax is as follows:<StreetAddress1>{{document_item["billTo"]["address1"]}} </StreetAddress1> <StreetAddress2>{{document_item["billTo"]["address2"]}} </StreetAddress2> <City>{{document_item["billTo"]["city"]}}</City>Custom fields of Contact object are supported. The syntax is as follows:{{document_item["billTo"]["pcode__c"]}}Where pcode __c is a custom field on Contact object. |
| invoiceOwner | object | Refers to the Account object, to which the billing document belongs. This is applicable regardless of the document items being from subscription charges or non-subscription charges.It only has the following fields as standard fields:crmAccountIdcurrencyidaccountNumbertaxExemptStatustaxExemptCertificateIDtaxExemptEntityUseCodeYou can reference them using document_item["invoiceOwner"]["taxExemptStatus"]You can also reference custom fields of the Account object. For example:document_item["invoiceOwner"]["CompanyCode__c"] |
| seller | object | Refers to the company information that the document item is associated with.For credit items, it refers to the company information of the original invoice item being credited.For charge items, it refers to the company information of the billing document to which the item belongs.You can reference it in a template using:Document_item["seller"]["address1"]Note: : This field is only available for Direct Integration Tax Apps. |
| subscriptionOwner | object | Refers to the Account object, which is the subscription owner. This is applicable when document items come from subscription charges.It only has the following fields as standard fields:crmAccountIdcurrencyidaccountNumbertaxExemptStatustaxExemptCertificateIDtaxExemptEntityUseCodeYou can reference them using document_item["subscriptionOwner"]["taxExemptStatus"]You can also reference custom fields of the Account object. For example:document_item["subscriptionOwner"]["CompanyCode__c"] |
| Custom Fields of InvoiceItem | string | Custom fields for InvoiceItem are supported. Here's an example:{{document_item["XXXXX__c"]}}Where XXXXX__c is a custom field of InvoiceItem .Note: : Custom fields for CreditMemoItem and DebitMemoItem are not supported. |
| Custom Fields of Subscription | string | Custom fields for Subscription are supported. Here's an example:document_item["Subscription.customFieldName1__c"]Where customFieldName1__c is a custom field of Subscription . |
| Custom Fields of RatePlanCharge | string | Custom fields for RatePlanCharge are supported. Here's an example:document_item["RatePlanCharge.customFieldName1__c"] Where customFieldName1__c is a custom field of RatePlanCharge . |
| Custom Fields of ProductRatePlanCharge | string | Custom fields for ProductRatePlanCharge are supported. Here's an example:document_item["ProductRatePlanCharge.customFieldName1__c"] Where customFieldName1__c is a custom field of ProductRatePlanCharge . |
| Custom fields of Product | string | Custom fields for Product are supported. Here's an example:document_item["Product.customFieldName1__c"]Where customFieldName1__c is a custom field of the product.Note: : This is supported only in the Direct Integration Tax app. |
| Custom Fields of ProductRatePlan | string | Custom fields for ProductRatePlan are supported. Here's an example:document_item["ProductRatePlan.customFieldName1__c"]Where customFieldName1__c is a custom field of the ProductRatePlan.Note: : This is supported only in the Direct Integration Tax app. |

## Example of the Context object

The following example gives you a glimpse of what a Context object looks like. Note that a field name with the suffix of "\_\_c", like "InvoiceItem.Location\_\_c", represents a custom field.

{ "document": { "invoiceNumber": "INV00000033", // It could be a memo number, e.g. "CM00000016". "invoiceDate": "2020-12-03", // It could be a memo date in the billing request. "currency": "USD", "id": "2c92c8957621951d017627c52ab30e1c", }, "customer": { "country": "US", "accountNumber": "A00000008", }, "seller": { "username": "abc@example.com", "password": "1234567890!", "endpoint": " https://sandbox-rest.avatax.com/api/v2/transactions/create", }, "document\_item": \[ { "id": "2c92c8957621951d017627c52ad80e1e", "productRatePlanChargeId": "2c92c8fb7621951e01762261402608c5", "ProductRatePlanCharge.TextCustom\_\_c": "RatePlanComponent-cfText", "subscriptionRatePlanChargeId": "2c92c8fe76218dcc017627b2b6234c7c", "subscriptionOwnerId": "2c92c8fb76219524017627b22dc568bc", "customer": { "country": "US", "accountNumber": "A00000008", }, //Customer tax evidence at item level "invoiceOwner": { "id": "2c92c8fb76219524017627b22dc568bc", "accountNumber": "A00000008", "Taxamo\_tax\_exempt\_status\_\_c": "No", }, "subscriptionOwner": { "id": "2c92c8fb76219524017627b22dc568bc", "accountNumber": "A00000008", "Taxamo\_tax\_exempt\_status\_\_c": "No", } } \], "today": "2021-02-07-12:01" }

## Context object and tax app templates

The following example shows how information stored in the Context object fills a tax app template written in the Liquid language.

{ "cmpn": { "bscl": 1, "svcl": 0, "fclt": false, "frch": false, "reg": true }, "inv": \[ { "doc": "{{document\["invoiceNumber"\]}}", "ccycd": "{{document\["currency"\]}}", "cmmt": false, "bill": { "ctry": "{{customer\["country"\]}}", "pcd":"{{customer\["Contact.Pcode\_\_c"\]}}" }, "cust": 1, "lfln": false, "date": "{{document\["invoiceDate"\]}}", "itms": \[ {% for document\_item in document\_items %} { "ref": "{{document\_item\["id"\]}}", "chg": "{{document\_item\["totalAmount"\]}}", "sale": 1, "bill": { "ctry": "{{document\_item\["customer"\]\["country"\]}}" } "tran": "{{document\_item\["ProductRatePlanCharge.BillSoft\_TransactionType\_\_c"\]}}", "serv": "{{document\_item\["ProductRatePlanCharge.BillSoft\_ServiceType\_\_c"\]}}", "dbt": false, "adj": false, "disc": 0 } {% endfor %} \], "custref": "{{customer\["accountNumber"\]}}", "invn": "{{document\["id"\]}}", "invm": true, "dtl": true, "summ": true } \] }

## Best practices for writing tax app templates

If you use multiple company codes on the tax vendor side, it is recommended NOT to use control flows (IF/ELSE/ELSE IF/END IF) in the standard template to override the company code you use in Zuora Billing (The company code you provided when setting up your Connect Tax Engine ). Otherwise, the tax void requests might fail.

## Custom Fields

Custom fields can also be used with the Connect Tax App. The custom fields of the following objects are available in the tax app templates:

-   Account
-   Contact (Contact supports legacy custom fields only)
-   CreditMemo
-   DebitMemo
-   Invoice
-   InvoiceItem (Invoice Item supports legacy custom fields only)
-   ProductRatePlanCharge
-   RatePlanCharge
-   Subscription

Note:

The Contact and Invoice Item objects only support legacy custom fields.

## Tax app templates for standalone invoices and Order Line Items (OLI)

If you enable Unified invoicing , you can create a standalone invoice without a subscription, an order, or even a product catalog. In this case, subscription-related and product-related fields on the Context object are correspondingly impacted.

## Impact on subscription-related fields

The following custom fields do not exist and can not be referenced on the tax app templates:

-   Subscription custom fields
-   Rate plan charge custom fields
-   Subscription owner information

## Impact on product-related fields

If an invoice item is associated with a product rate plan charge, the custom fields of the product rate plan charge still exist; otherwise, the custom fields do NOT exist and can not be referenced on the tax app templates.

Note:

If you include the above-mentioned subscription-related fields or product-related fields in your tax app templates, their values are rendered as empty strings in the request body that Zuora sends to your tax vendor.

## Order Line Items

When an invoice item comes from an Order Line Item (OLI), the following fields cannot be referenced in tax app templates:

-   Standard fields of OLIs
-   Custom fields of OLIs
-   Custom fields from linked subscriptions. For more details, see Order Line Items with New Subscriptions .

However, when you specify the Bill-To, Sold-To, or Ship-To contacts at the Order Line Item level, you can reference them in the tax app template through the \`document\_item\` object. For example:

-   To refer to Sold-To or Ship-To contact details, use: \`{{document\_item\["customer"\]\["address1"\]}} \`
-   To refer to Bill-To contact fields, use:\`{{document\_item\["billTo"\]\["address1"\]}} \`
