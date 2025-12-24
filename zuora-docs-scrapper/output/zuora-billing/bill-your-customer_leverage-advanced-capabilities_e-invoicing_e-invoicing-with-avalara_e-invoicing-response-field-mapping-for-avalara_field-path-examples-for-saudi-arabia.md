---
title: "Field path examples for Saudi Arabia"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/e-invoicing-response-field-mapping-for-avalara/field-path-examples-for-saudi-arabia"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:20.169Z"
---

# Field path examples for Saudi Arabia

Explore the field path examples for Saudi Arabia, including a sample returned file and corresponding field paths.

The following is a returned file sample for Saudi Arabia with corresponding field path examples:

<?xml version="1.0" encoding="UTF-8"?> <Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2" xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2" xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2" xmlns:ccts-cct="urn:un:unece:uncefact:data:specification:CoreComponentTypeSchemaModule:2" xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:ext="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2" xmlns:n0="urn:oasis:names:specification:ubl:schema:xsd:CommonSignatureComponents-2" xmlns:qdt="urn:oasis:names:specification:ubl:schema:xsd:QualifiedDataTypes-2" xmlns:sac="urn:oasis:names:specification:ubl:schema:xsd:SignatureAggregateComponents-2" xmlns:sbc="urn:oasis:names:specification:ubl:schema:xsd:SignatureBasicComponents-2" xmlns:udt="urn:oasis:names:specification:ubl:schema:xsd:UnqualifiedDataTypes-2" xmlns:xades="http://uri.etsi.org/01903/v1.3.2#"\> <ext:UBLExtensions> <ext:UBLExtension> <ext:ExtensionURI>urn:oasis:names:specification:ubl:dsig:enveloped:xades</ext:ExtensionURI> <ext:ExtensionContent> <sig:UBLDocumentSignatures xmlns:sig="urn:oasis:names:specification:ubl:schema:xsd:CommonSignatureComponents-2"\> <sac:SignatureInformation> <cbc:ID>urn:oasis:names:specification:ubl:signature:1</cbc:ID> <sbc:ReferencedSignatureID>urn:oasis:names:specification:ubl:signature:Invoice</sbc:ReferencedSignatureID> <ds:Signature Id="signature"\> ... <ds:Object> <xades:QualifyingProperties Target="signature"\> <xades:SignedProperties Id="xadesSignedProperties"\> <xades:SignedSignatureProperties> <xades:SigningTime>2024-05-20T02:04:13</xades:SigningTime> ... </xades:SignedSignatureProperties> </xades:SignedProperties> </xades:QualifyingProperties> </ds:Object> </ds:Signature> </sac:SignatureInformation> </sig:UBLDocumentSignatures> </ext:ExtensionContent> </ext:UBLExtension> </ext:UBLExtensions> ... <cac:AdditionalDocumentReference> <cbc:ID>QR</cbc:ID> <cac:Attachment> <cbc:EmbeddedDocumentBinaryObject mimeCode="text/plain"\> AQ9TYX…+4w0=</cbc:EmbeddedDocumentBinaryObject> </cac:Attachment> </cac:AdditionalDocumentReference> ... </Invoice>

| Field name | Field path | Selected content |
| --- | --- | --- |
| QrCode | //cac:AdditionalDocumentReference[cbc:ID='QR']/cac:Attachment/cbc:EmbeddedDocumentBinaryObject/text() | AQ9TYX…+4w0= |
| Field1-10 (Signing time) | //xades:SigningTime/text() | 2024-05-20T02:04:13 |
