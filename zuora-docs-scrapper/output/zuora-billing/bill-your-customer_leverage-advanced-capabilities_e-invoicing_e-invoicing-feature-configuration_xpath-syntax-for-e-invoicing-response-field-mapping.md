---
title: "XPath syntax for e-invoicing response field mapping"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-feature-configuration/xpath-syntax-for-e-invoicing-response-field-mapping"
product: "zuora-billing"
scraped_at: "2025-12-24T18:31:18.933Z"
---

# XPath syntax for e-invoicing response field mapping

An overview of using XPath syntax for mapping fields in e-invoicing responses, including examples and supported service providers.

The XML Path Language (XPath) syntax is used in the Field Path field in e-invoicing response field mappings. An XPath string indicates an XML node in the XML-formatted response payload from the service provider or the XML file extracted from the tax authority.

E-invoicing service providers that support XPath syntax are as follows:

-   Avalara

-   Sovos


For more information about e-invoicing response field mapping, see the following articles:

-   E-invoicing response field mapping for Sovos

-   E-invoicing response field mapping for Avalara


The later sections of this article use the following snippet as an example to help you understand the XPath syntax. This snippet is extracted from the Sovos’ response payload sample.

<ApplicationResponse> <ext:UBLExtensions> <ext:UBLExtension> <ext:ExtensionContent> <ad:AdditionalData> <ad:Field name="SdiId" type\="FormalIdentifier"\>a2c73…10b31 </ad:Field> … </ad:AdditionalData> </ext:ExtensionContent> </ext:UBLExtension> </ext:UBLExtensions> … <cac:DocumentResponse> … <cac:DocumentReference> <cbc:ID>JqYyq…cKje</cbc:ID> <cbc:DocumentTypeCode>LegalCleared</cbc:DocumentTypeCode> <cac:Attachment> <cbc:EmbeddedDocumentBinaryObject>ZXlKaGJH…nN3c= </cbc:EmbeddedDocumentBinaryObject> </cac:Attachment> </cac:DocumentReference> <cac:DocumentReference> <cbc:ID>JqYyq…CUcs</cbc:ID> <cbc:DocumentTypeCode>Legal</cbc:DocumentTypeCode> <cac:Attachment> <cbc:EmbeddedDocumentBinaryObject>ZXlKaGJH…kQQ== </cbc:EmbeddedDocumentBinaryObject> </cac:Attachment> </cac:DocumentReference> </cac:DocumentResponse> </ApplicationResponse>

## Commonly used expressions

The following table lists some commonly used expressions in XPath:

| Expression | Description | Example | Result |
| --- | --- | --- | --- |
| / | Selects from the root node | /ApplicationResponse | Selects the root node ApplicationResponse |
| /ApplicationResponse/cac:DocumentResponse | Selects all cac:DocumentResponse nodes that are children of ApplicationResponse |  |  |
| // | Selects nodes from the current node that match the selection no matter where they are | //cac:DocumentReference | Selects all cac:DocumentReference nodes in the document |
| /ApplicationResponse//cac:DocumentReference | Selects all cac:DocumentReference nodes that are descendants of the root node ApplicationResponse |  |  |
| @ | Selects attributes | @type | Selects all attributes that are named type |
| [] | Applies a filter to the current node | //cac:DocumentReference[cbc:DocumentTypeCode=DocumentTypeCode] | Selects all cac:DocumentReference nodes that have a cbc:DocumentTypeCode child node with the value of DocumentTypeCode |
| //ad:Field[@name=’SdiId’] | Selects all ad:Field nodes that have a name attribute with the value of SdiId |  |  |
| * | Matches any element node | //cac:DocumentReference/* | Selects all the children of cac:DocumentReference |
| text() | Selects the text of the current node | //ad:Field/text() | Selects the text of each ad:Field node |

Note: For more information about XPath syntax, see XPath Tutorial .

## Field path examples

The following table lists the field path examples for some commonly used fields:

| Field name | Field path | Selected content |
| --- | --- | --- |
| EInvoiceFile | //cac:DocumentReference[cbc:DocumentTypeCode='LegalCleared']/cac:Attachment/cbc:EmbeddedDocumentBinaryObject/text() | ZXlKaGJH…nN3c= |
| ReferenceNumber | //ad:Field[@name='SdiId']/text() | a2c73…10b31 |

See the following articles for more examples of each e-invoicing service provider:

-   E-invoicing response field mapping for Sovos

-   E-invoicing response field mapping for Avalara
