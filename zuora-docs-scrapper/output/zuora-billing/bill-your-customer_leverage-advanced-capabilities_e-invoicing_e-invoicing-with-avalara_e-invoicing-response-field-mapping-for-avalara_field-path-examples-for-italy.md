---
title: "Field path examples for Italy"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/e-invoicing-response-field-mapping-for-avalara/field-path-examples-for-italy"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:22.995Z"
---

# Field path examples for Italy

Explore the field path examples for Italy, including a sample e-invoice file and corresponding field paths.

The following is a returned file sample for Italy with corresponding field path examples:

<?xml version="1.0" encoding="utf-8"?> <q1:FatturaElettronica versione="FPR12" xmlns:q1="http://ivaservizi.agenziaentrate.gov.it/docs/xsd/fatture/v1.2"\> <FatturaElettronicaHeader> ... <CessionarioCommittente> <DatiAnagrafici> <IdFiscaleIVA> <IdPaese>IT</IdPaese> <IdCodice>07643520567</IdCodice> </IdFiscaleIVA> <Anagrafica> <Denominazione>Italy e-invoice sanity 20240519\_120055</Denominazione> </Anagrafica> </DatiAnagrafici> <Sede> <Indirizzo> Via Montiglioni 42-44 </Indirizzo> <CAP>00046</CAP> <Comune>Grottaferrata Roma</Comune> <Provincia>RM</Provincia> <Nazione>IT</Nazione> </Sede> </CessionarioCommittente> ... </FatturaElettronicaHeader> ... <ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:xades="http://uri.etsi.org/01903/v1.3.2#" Id="SignatureId"\> ... <ds:Object> <xades:QualifyingProperties Id="QualifyingPropertiesId" Target="#SignatureId"\> <xades:SignedProperties Id="SignedPropertiesId"\> <xades:SignedSignatureProperties> <xades:SigningTime>2024-05-19T20:01:42Z</xades:SigningTime> ... </xades:SignedSignatureProperties> </xades:SignedProperties> </xades:QualifyingProperties> </ds:Object> </ds:Signature> </q1:FatturaElettronica>

| Field name | Field path | Selected content |
| --- | --- | --- |
| Field1-10 (VAT Tax ID) | //FatturaElettronicaHeader/CessionarioCommittente/DatiAnagrafici/IdFiscaleIVA/IdCodice/text() | 07643520567 |
| Field1-10 (Signing time) | //xades:SigningTime/text() | 2024-05-19T20:01:42Z |
