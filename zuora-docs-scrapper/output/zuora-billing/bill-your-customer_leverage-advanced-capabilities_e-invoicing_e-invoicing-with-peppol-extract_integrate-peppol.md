---
title: "Integrate PEPPOL"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-peppol-extract/integrate-peppol"
product: "zuora-billing"
scraped_at: "2026-01-15T21:56:35.476Z"
---

# Integrate PEPPOL

This task guides you through integrating PEPPOL with Zuora, including setting up service providers, configuring business regions, and customizing e-invoice templates.

Perform the following steps in your Zuora tenant:

1.  Create an e-invoicing service provider for PEPPOL in Zuora UI or through the REST API.

    To create a service provider in Zuora UI, see [Set up your e-invoicing service provider through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoicing-service-providers-configuration). Remember to select PEPPOL from the Provider list for the configuration.

    Alternatively, you can use the [Create an e-invoicing service provider](https://developer.zuora.com/api-references/api/operation/POST_EInvoicingServiceProvider/) API operation.

    The following is the endpoint and a sample request body.

    POST /v1/einvoice/service-providers { "name": "PEPPOL e-invoice service provider", "provider": "PEPPOL" }

    The following is a sample response body.

    { "id": "8a90d6128dfd1585018dfd356bb704ab", "provider": "PEPPOL", "apiKey": null, "test": false, "name": "PEPPOL e-invoice service provider", "companyIdentifier": null, "serviceProviderNumber": "EISP-00000002", "success": true }

2.  Create e-invoicing business regions for the PEPPOL service provider

    After setting up a service provider for PEPPOL, you need to create one or more e-invoicing business regions for the PEPPOL service provider in Zuora UI or through the REST API.

    To create an e-invoicing business region in Zuora UI, see [Create e-invoicing business regions through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoicing-business-regions-configuration/create-e-invoicing-business-regions-through-the-zuora-ui). Remember to select the PEPPOL service provider you created in step 1 from the Provider list for the configuration.

    The following table lists the business region settings and field mapping in PEPPOL. You can modify the mapping to meet your business needs by customizing the e-invoice file templates. For more information, see [Customize e-invoice file templates](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-peppol-extract/integrate-peppol).

    | UI section | UI field | API field | Required or optional | Default PEPPOL field mapping |
    | --- | --- | --- | --- | --- |
    | Basic Info | Country | country | Required | cac:PostalAddress->cac:Country |
    | Legal Business Name | businessName | Required | cbc:PartyLegalEntity->cbc:RegistrationName |  |
    | Legal Business Number | businessNumber | Optional | cac:PartyIdentification or cbc:PartyLegalEntity->cbc:CompanyID |  |
    | Business Number Schema Id | businessNumberSchemeId | Optional | cac:PartyIdentification@schemeID or cbc:PartyLegalEntity->cbc:CompanyID@schemeID |  |
    | Trade Name | tradeName | Optional | cac:PartyName |  |
    | Tax Register Number | taxRegisterNumber | Optional | cbc:PartyTaxScheme->cbc:CompanyID |  |
    | E-Invoice Destination Code | endpointId | Optional | cbc:EndpointID |  |
    | E-Invoice Destination Code Schema Id | endpointSchemeId | Optional | cbc:EndpointID@schemeID |  |
    | Business Address | Address 1 | addressLine1 | Optional | cac:PostalAddress->cbc:StreetName |
    | Address 2 | addressLine2 | Optional | cac:PostalAddress->cbc:AdditionalStreetName |  |
    | Postal Code | postalCode | Optional | cac:PostalAddress->cbc:PostalZone |  |
    | City | city | Optional | cac:PostalAddress->cbc:CityName |  |
    | State/Province | state | Optional | cac:PostalAddress->cbc:CountrySubentity |  |
    | Contact Info | Contact Name | contactName | Optional | cac:Contact->cbc:Name |
    | Email | email | Optional | cac:Contact->cbc:ElectronicMail |  |
    | Business Phone Number | phoneNumber | Optional | cac:Contact->cbc:Telephone |  |
    | Service Provider | Provider | serviceProviderId | Required | (N/A) |

    Alternatively, you can use the [Create an e-invoicing business region](https://developer.zuora.com/api-references/api/operation/POST_CreateEInvoicingBusinessRegion/) API operation.

    The following is the endpoint and a sample request body.

    POST /v1/einvoice/business-regions { "country": "GB", "businessName": "UK ABC Corp.", "businessNumber": "20002039", "businessNumberSchemeId": "088", "tradeName": "Zuora", "taxRegisterNumber": "5544332211", "endpointId": "08992", "endpointSchemeId": "088", "addressLine1": "", "addressLine2": "", "postalCode": "", "city": "", "state": "", "contactName": "", "email": "", "phoneNumber": "", "serviceProviderId": "8a90d6128dfd1585018dfd356bb704ab" }

    The following is a sample response body.

    { "id": "8a90a04d8dfd2bda018dfdaa0ad50d8d", "country": "GB", "businessName": "UK ABC Corp.", "businessNumber": "20002039", "businessNumberSchemeId": "088", "tradeName": "Zuora", "endpointId": "08992", "endpointSchemeId": "088", "taxRegisterNumber": "5544332211", "state": "", "city": "", "postalCode": "", "addressLine1": "", "addressLine2": "", "contactName": "", "phoneNumber": "", "email": "", "serviceProviderId": "8a90d6128dfd1585018dfd356bb704ab", "businessRegionNumber": "EIBR-00000006", "digitalSignatureEnable": false, "digitalSignatureBoxEnable": false, "digitalSignatureBoxPosX": 0, "digitalSignatureBoxPosY": 0, "success": true }

3.  Configure e-invoice file templates for billing documents.

    There are two sub-steps for configuring e-invoice file templates for billing documents:

    1.  Create e-invoice file templates

        An e-invoice file template applies to a specific billing document type such as Invoice, Credit Memo, or Debit Memo. You can create an e-invoice file template in Zuora UI or through the REST API.

        Note that Zuora provides a default e-invoice file template only for the Invoice billing document type. If you need e-invoice file templates for Credit Memo or Debit Memo, you must build the templates from scratch.

        In addition, the default e-invoice file template for Invoice does not support discount charges and standalone invoices. You need to customize the template to support these features.

        To create an e-invoice file template in Zuora UI, see [Create and preview e-invoice file templates for billing documents through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoice-file-templates-configuration-for-billing-documents/create-and-preview-e-invoice-file-templates-for-billing-documents-through-the-zuora-ui). Pay attention to the following fields for the configuration:

        -   Provider: Select PEPPOL from the list.

        -   Country: Select the country in the PEPPOL business region created in step 2.


        Alternatively, you can use the [Create an e-invoice file template API operation](https://developer.zuora.com/api-references/api/operation/POST_CreateEInvoiceFileTemplate/).

        The following is the endpoint and a sample request body for creating an e-invoice file template for Invoice.

        POST /v1/einvoice/templates { "name": "PEPPOL e-invoice template for Invoice - UK", "country": "GB", "provider": "PEPPOL", "documentType": "Invoice", "content": "<base64 encoded content>" }

        The following is a sample response body.

        { "id": "8a90d6128dfd3d13018dfdda246a0d78", "country": "GB", "name": "PEPPOL e-invoice template for Invoice - UK", "documentType": "Invoice", "provider": "PEPPOL", "templateNumber": "EITEMP-00000029", "content": "<base64 encoded content>", "success": true }

        Note that you must specify the content for the template when creating e-invoice templates through the REST API. If the template is for Invoice, the content will overwrite the default template provided by Zuora.

    2.  (Optional) Customize e-invoice file templates

        One advantage of using PEPPOL is the flexibility to customize e-invoice templates to accommodate country-specific mappings and customer-specific configurations.

        After creating an e-invoice file template for a PEPPOL business region, you can customize the template in Zuora UI or through the REST API.

        To customize an e-invoice file template in Zuora UI, see [E-invoice file template editor](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoice-file-templates-configuration-for-billing-documents) and [Edit e-invoice file templates for billing documents through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/e-invoice-file-templates-configuration-for-billing-documents/edit-e-invoice-file-templates-for-billing-documents-through-the-zuora-ui).

        Alternatively, you can use the [Update an e-invoice file template](https://developer.zuora.com/api-references/api/operation/PUT_EInvoiceFileTemplate/) API operation.

        The following is the endpoint and a sample request body for updating an e-invoice file template for Invoice.

        PUT /v1/einvoice/templates/<key> { "country": "GB", "provider": "PEPPOL", "documentType": "Invoice", "content": "<base64 encoded content>" }

        The following is a sample response body.

        { "id": "8a90d6128dfd3d13018dfdda246a0d78", "country": "GB", "name": "PEPPOL e-invoice template for Invoice - UK", "documentType": "Invoice", "provider": "PEPPOL", "templateNumber": "EITEMP-00000029", "content": "<base64 encoded content>", "success": true }

4.  Configure the e-invoicing profile for customer accounts.

    You can configure the e-invoicing profile when creating or updating a customer account in Zuora UI or through the REST API.

    To configure the e-invoicing profile in Zuora UI, see [Configure e-invoicing profiles for accounts through the Zuora UI](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/configure-e-invoicing-profiles-for-accounts).

    The following table lists the e-invoicing profile settings and field mapping in PEPPOL. You can modify the mapping to meet your business needs by customizing the e-invoice file templates. For more information, see [Customize e-invoice file templates](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-peppol-extract/integrate-peppol).

    | UI field | API field | Required or optional | Default PEPPOL field mapping |
    | --- | --- | --- | --- |
    | Generate E-Invoice for Customer | enabled | Optional | (N/A) |
    | Legal Business Name | businessName | Optional | cbc:PartyLegalEntity->cbc:RegistrationName |
    | Legal Business Number | businessNumber | Optional | cac:PartyIdentification or cbc:PartyLegalEntity->cbc:CompanyID |
    | Business Number Schema Id | businessNumberSchemeId | Optional | cac:PartyIdentification@schemeID or cbc:PartyLegalEntity->cbc:CompanyID@schemeID |
    | Trade Name | tradeName | Optional | cac:PartyName |
    | Tax Register Number | taxRegisterNumber | Optional | cbc:PartyTaxScheme->cbc:CompanyID |
    | E-Invoice Destination Code | endpointId | Optional | cbc:EndpointID |
    | E-Invoice Destination Code Schema Id | endpointSchemeId | Optional | cbc:EndpointID@schemeID |

    Alternatively, you can use the [Create an account](https://developer.zuora.com/api-references/api/operation/POST_Account/) or [Update an account](https://developer.zuora.com/api-references/api/operation/PUT_Account/) API operation.

    The following is the endpoint and a sample request body for creating an account and an associated e-invoicing profile.

    POST /v1/accounts { "additionalEmailAddresses": \[ "contact1@example.com", "contact2@example.com" \], "autoPay": false, "billCycleDay": 0, "billToContact": { "address1": "", "city": "", "country": "United Kingdom", "firstName": "John", "lastName": "Smith", "workEmail": "smith@example.com", "zipCode": "94404" }, "creditMemoReasonCode": "Unsatisfactory service", "currency": "EUR", "hpmCreditCardPaymentMethodId": "2c92c0f93cf64d94013cfe2d20db61a7", "invoiceDeliveryPrefsEmail": true, "invoiceDeliveryPrefsPrint": false, "name": "Zuora Test Account", "notes": "This account is for demo purposes.", "paymentTerm": "Due Upon Receipt", "einvoiceProfile": { "enabled" : "true", "businessName" : "legal business name", "businessNumber" : "20002039", "businessNumberSchemeId" : "088", "taxRegisterNumber" : "TAX393999", "endpointId" : "08992", "endpointSchemeId" : "088" } }

    The following is the endpoint and a sample request body for creating an e-invoicing profile by updating an existing account.

    PUT /v1/accounts/<account-key> { "additionalEmailAddresses": \[ "contact3@example.com", "contact4@example.com" \], "paymentGateway": "Test Gateway", "einvoiceProfile": { "enabled" : "true", "businessName" : "legal business name", "businessNumber" : "20002039", "businessNumberSchemeId" : "088", "taxRegisterNumber" : "TAX393999", "endpointId" : "08992", "endpointSchemeId" : "088" } }

5.  Create custom events and notifications for e-invoice file generations.

    This is an optional step that creates custom events and notifications for e-invoice file generations.

    The custom events will be triggered when e-invoice files are generated and ready for extraction, and Zuora will send callout notifications to your system. After the notifications are detected in your system, you can extract the e-invoice files from Zuora and distribute them to your business partners via the PEPPOL network.

    You can skip this step if the PEPPOL distribution in your system relies on a billing document querying approach against Zuora. For more information, see [Extract the generated e-invoice files](/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-peppol-extract/integrate-peppol).

    The procedures for creating custom events and notifications for different billing documents (Invoice, Credit Memo, and Debit Memo) are similar. The following sections use Invoice as an example.

    1.  Create a custom event for e-invoice file generations

        You can create the custom event in Zuora UI or through the REST API.

        To create the custom event in Zuora UI, see [Create a custom event](/zuora-platform/extensibility/events-and-notifications/custom-events/create-a-custom-event). Remember to enable Advanced (JEXL) and specify the following condition in the Set Conditions field:

        `changeType == 'UPDATE' && Invoice.EInvoiceStatus == 'Generated' && Invoice.EInvoiceStatus_old != 'Generated'`

        Alternatively, you can use the [Create an event trigger](https://developer.zuora.com/api-references/api/operation/POST_EventTrigger/) API operation.

        The following is the endpoint and a sample request body.

        POST /events/event-triggers { "active": true, "baseObject": "Invoice", "condition": "changeType == 'UPDATE' && Invoice.EInvoiceStatus == 'Generated' && Invoice.EInvoiceStatus\_old != 'Generated'", "description": "Trigger an event when an e-invoice file for invoice is generated.", "eventType": { "description": "An e-invoice file for invoice is generated.", "displayName": "E-Invoice File Generated", "name": "EInvoiceFileGenerated" } }

    2.  Create a notification for e-invoice file generations

        You can create the associated notification in Zuora UI or through the REST API.

        To create the notification in Zuora UI, see [Create a notification](/zuora-platform/extensibility/events-and-notifications/notifications/create-a-notification). Remember to select the custom event for e-invoice file generations from the Related Events list and specify the callout settings for your system, such as Base URL and Callout Authentication .

        Alternatively, you can use the [Create a notification definition](https://developer.zuora.com/api-references/api/operation/POST_Create_Notification_Definition/) API operation.

        The following is the endpoint and a sample request body.

        POST /notifications/notification-definitions { "name": "E-Invoice file generated", "description": "An e-invoice file for invoice has been generated.", "eventTypeName": "EInvoiceFileGenerated", "eventTypeNamespace":"user.notification", "active": true, "calloutActive": true, "callout": { "active": true, "calloutBaseurl": "<the callout URL of your system>", "calloutRetry": true, "description": "Callout when an e-invoice file for invoice has been generated.", "eventTypeName": "EInvoiceFileGenerated", "httpMethod": "POST", "name": "Callout for E-Invoice file generated" } }


1.  Extract the generated e-invoice files

    By performing the preceding steps, you have completed the configuration for PEPPOL in Zuora. When a billing document related to a PEPPOL business region is posted, Zuora generates an e-invoice file based on the e-invoice file template.

    If you have performed step 5 to create custom events and notifications for e-invoice file generations, Zuora will send you a notification when an e-invoice file is generated and ready for extraction. You can then extract the e-invoice files from Zuora and send them to your business partners via the PEPPOL network.

    Alternatively, you can perform queries against billing documents as needed and determine whether to extract the e-invoice files depending on the query results.

2.  Query the e-invoice file status and ID of a particular billing document

    The procedures for querying e-invoice file status and ID for different billing documents (Invoice, Credit Memo, and Debit Memo) are similar. This section uses Invoice as an example.

    To query the e-invoice file status and ID of a particular invoice, you can use the [Retrieve an invoice](https://developer.zuora.com/api-references/api/operation/Get_GetInvoice/) API operation. The information is stored in the following fields in the response body:

    -   `einvoiceStatus` : the e-invoice file status of the invoice. If the status is `Generated` , the e-invoice file is generated successfully and ready for extraction.

    -   `einvoiceFileId` : the generated e-invoice file ID. This field is not NULL only if the `einvoiceStatus` field is `Generated` .


    The following is the endpoint and a sample response body.

    GET /v1/invoices/<invoiceKey> { "id": "8a90b8708dfe2061018e089b944435bb", "invoiceNumber": "INVCA00002447", "accountId": "8a90d6128dfe2666018e08990ccb1267", "amount": 125.000000000, "amountWithoutTax": 97.500000000, "discount": 0.000000000, "invoiceDate": "2024-03-04", "dueDate": "2024-04-03", "autoPay": true, "comments": "", "status": "Posted", "taxAmount": 27.500000000, "taxExemptAmount": 0.000000000, "transferredToAccounting": null, "sourceType": "Subscription", "billToContactId": "8a90d6128dfe2666018e08990cdf1269", "soldToContactId": null, "templateId": "2c92c8fb7a2d26b6017a2eaa6f6f2f61", "paymentTerm": "Net 30", "sequenceSetId": "2c92c8fb7a2d26b6017a2eaa71bc2f84", "adjustmentAmount": 0.000000000, "balance": 125.000000000, "billToContactSnapshotId": null, "createdById": "09539a92259e4f0886d67ed036798c96", "createdDate": "2024-03-04 00:36:37", "creditBalanceAdjustmentAmount": 0.000000000, "creditMemoAmount": 0.000000000, "includesOneTime": true, "includesRecurring": true, "includesUsage": false, "lastEmailSentDate": null, "paymentAmount": 0.000000000, "postedBy": "09539a92259e4f0886d67ed036798c96", "postedDate": "2024-03-04", "refundAmount": 0.000000000, "soldToContactSnapshotId": null, "source": "BillRun", "sourceId": "BR-00002542", "targetDate": "2024-03-04", "taxMessage": null, "taxStatus": "Complete", "eInvoiceStatus": "Generated", "eInvoiceErrorCode": null, "eInvoiceErrorMessage": null, "eInvoiceFileId": "8a90a04d8dfde784018e08a052a30338", "updatedById": "09539a92259e4f0886d67ed036798c96", "updatedDate": "2024-03-04 00:36:42", "billRunId": "8a90a04d8dfde784018e089b90310308", "currency": "EUR", "invoiceGroupNumber": null, "success": true }
3.  Extract an e-invoice file

    To extract the e-invoice file with a file ID, you can use the [Retrieve a file](https://developer.zuora.com/api-references/api/operation/GET_Files/) API operation.

    The following is the endpoint and a sample response body.

    GET /v1/files/<file-id> <?xml version="1.0" encoding="UTF-8"?> <Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"\> <cbc:CustomizationID>urn:cen.eu:en16931:2017#compliant#urn:fdc:peppol.eu:2017:poacc:billing:3.0</cbc:CustomizationID> <cbc:ProfileID>urn:fdc:peppol.eu:2017:poacc:billing:01:1.0</cbc:ProfileID> <cbc:ID>8a90b8708dfe2061018e089b944435bb</cbc:ID> <cbc:IssueDate>2024-03-04</cbc:IssueDate> <cbc:DueDate>2024-04-03</cbc:DueDate> <cbc:InvoiceTypeCode>380</cbc:InvoiceTypeCode> <cbc:Note></cbc:Note> <cbc:DocumentCurrencyCode>EUR</cbc:DocumentCurrencyCode> <cbc:TaxCurrencyCode>EUR</cbc:TaxCurrencyCode> <cac:InvoicePeriod> <cbc:StartDate>2024-03-04</cbc:StartDate> <cbc:EndDate>2024-03-04</cbc:EndDate> </cac:InvoicePeriod> <cac:AccountingSupplierParty> <cac:Party> <cbc:EndpointID schemeID="088"\>08992</cbc:EndpointID> <cac:PartyIdentification> <cbc:ID schemeID="088"\>20002039</cbc:ID> </cac:PartyIdentification> <cac:PartyName> <cbc:Name>UK ABC Corp.</cbc:Name> </cac:PartyName> <cac:PostalAddress> <cbc:CityName></cbc:CityName> <cbc:PostalZone></cbc:PostalZone> <cbc:CountrySubentity></cbc:CountrySubentity> <cac:AddressLine> <cbc:Line></cbc:Line> </cac:AddressLine> <cac:Country> <cbc:IdentificationCode>GB</cbc:IdentificationCode> </cac:Country> </cac:PostalAddress> <cac:PartyTaxScheme> <cbc:CompanyID></cbc:CompanyID> <cac:TaxScheme> <cbc:ID>VAT</cbc:ID> </cac:TaxScheme> </cac:PartyTaxScheme> <cac:PartyLegalEntity> <cbc:RegistrationName>UK ABC Corp.</cbc:RegistrationName> <cbc:CompanyID schemeID="088"\>20002039</cbc:CompanyID> </cac:PartyLegalEntity> <cac:Contact> <cbc:Name></cbc:Name> <cbc:Telephone></cbc:Telephone> <cbc:ElectronicMail></cbc:ElectronicMail> </cac:Contact> </cac:Party> </cac:AccountingSupplierParty> <cac:AccountingCustomerParty> <cac:Party> <cbc:EndpointID schemeID="088"\>08992</cbc:EndpointID> <cac:PartyIdentification> <cbc:ID schemeID="088"\>20002039</cbc:ID> </cac:PartyIdentification> <cac:PartyName> <cbc:Name>legal business name</cbc:Name> </cac:PartyName> <cac:PostalAddress> <cbc:CityName></cbc:CityName> <cbc:PostalZone></cbc:PostalZone> <cbc:CountrySubentity></cbc:CountrySubentity> <cac:AddressLine> <cbc:Line></cbc:Line> </cac:AddressLine> <cac:Country> <cbc:IdentificationCode>United Kingdom</cbc:IdentificationCode> </cac:Country> </cac:PostalAddress> <cac:PartyTaxScheme> <cbc:CompanyID>TAX393999</cbc:CompanyID> <cac:TaxScheme> <cbc:ID>VAT</cbc:ID> </cac:TaxScheme> </cac:PartyTaxScheme> <cac:PartyLegalEntity> <cbc:RegistrationName>legal business name</cbc:RegistrationName> <cbc:CompanyID schemeID="088"\>20002039</cbc:CompanyID> <!--No CompanyLegalForm --> <cbc:CompanyLegalForm></cbc:CompanyLegalForm> </cac:PartyLegalEntity> <cac:Contact> <cbc:Name>John Smith</cbc:Name> <cbc:Telephone></cbc:Telephone> <cbc:ElectronicMail></cbc:ElectronicMail> </cac:Contact> </cac:Party> </cac:AccountingCustomerParty> <cac:PaymentTerms> <cbc:Note>Net 30</cbc:Note> </cac:PaymentTerms> <cac:TaxTotal> <cbc:TaxAmount currencyID="EUR"\>27.5</cbc:TaxAmount> </cac:TaxTotal> <cac:LegalMonetaryTotal> <!-- LineExtensionAmount should be GrossAmount which is not exposed by Hawk --> <cbc:LineExtensionAmount currencyID="EUR"\>0</cbc:LineExtensionAmount> <cbc:TaxExclusiveAmount currencyID="EUR"\>97.5</cbc:TaxExclusiveAmount> <cbc:TaxInclusiveAmount currencyID="EUR"\>125.0</cbc:TaxInclusiveAmount> <cbc:AllowanceTotalAmount currencyID="EUR"\>0</cbc:AllowanceTotalAmount> <cbc:ChargeTotalAmount currencyID="EUR"\>0</cbc:ChargeTotalAmount> <cbc:PayableAmount currencyID="EUR"\>125.0</cbc:PayableAmount> </cac:LegalMonetaryTotal> <cac:InvoiceLine> <cbc:ID>8a90e7b58dfe2060018e0911eed339c1</cbc:ID> <cbc:InvoicedQuantity unitCode=""\>1.0</cbc:InvoicedQuantity> <cbc:LineExtensionAmount currencyID="EUR"\>97.5</cbc:LineExtensionAmount> <cac:InvoicePeriod> <cbc:StartDate>2024-03-04</cbc:StartDate> <cbc:EndDate>2024-03-04</cbc:EndDate> </cac:InvoicePeriod> <cac:Item> <cbc:Name>New Component</cbc:Name> <cac:ClassifiedTaxCategory> <cbc:ID>S</cbc:ID> <cac:TaxScheme> <cbc:ID>VAT</cbc:ID> </cac:TaxScheme> <cbc:Percent>22</cbc:Percent> </cac:ClassifiedTaxCategory> </cac:Item> <cac:Price> <cbc:PriceAmount currencyID="EUR"\>125.0</cbc:PriceAmount> <!-- No unitCode --> <cbc:BaseQuantity unitCode=""\>1</cbc:BaseQuantity> </cac:Price> </cac:InvoiceLine> </Invoice>
