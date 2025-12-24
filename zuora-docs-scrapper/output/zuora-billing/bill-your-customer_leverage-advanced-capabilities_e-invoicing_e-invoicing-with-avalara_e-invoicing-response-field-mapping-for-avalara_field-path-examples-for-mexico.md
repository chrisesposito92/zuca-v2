---
title: "Field path examples for Mexico"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/e-invoicing-with-avalara/e-invoicing-response-field-mapping-for-avalara/field-path-examples-for-mexico"
product: "zuora-billing"
scraped_at: "2025-12-24T18:30:18.067Z"
---

# Field path examples for Mexico

Explore the field path examples for Mexico, including a sample returned file and corresponding field paths.

The following is a returned file sample for Mexico with corresponding field path examples:

<?xml version="1.0" encoding="UTF-8"?> <cfdi:Comprobante Folio="EINV100001" Sello="hHX/vdfgc...DTtw==" NoCertificado="00001000000508795571" Certificado="MIIF/zC...r7sun" Total="287.27" Exportacion="01" Version="4.0" Serie="F2" Fecha="2023-11-01T22:53:00" FormaPago="03" SubTotal="247.65" Moneda="MXN" TipoDeComprobante="I" MetodoPago="PUE" LugarExpedicion="20290" xmlns:cfdi="http://www.sat.gob.mx/cfd/4" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/cfd/4 http://www.sat.gob.mx/sitio\_internet/cfd/4/cfdv40.xsd"\> ... <cfdi:Complemento> <tfd:TimbreFiscalDigital xmlns:tfd="http://www.sat.gob.mx/TimbreFiscalDigital" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/TimbreFiscalDigital http://www.sat.gob.mx/sitio\_internet/cfd/TimbreFiscalDigital/TimbreFiscalDigitalv11.xsd" Version="1.1" UUID="AECD4389-DEAA-490B-8DDA-9253E184BB4E" FechaTimbrado="2023-11-02T00:57:08" RfcProvCertif="ASE0201179X0" SelloCFD="hHX/vdfg...Ttw==" NoCertificadoSAT="30001000000500003456" SelloSAT="JQm4qT...LfdA==" /> </cfdi:Complemento> </cfdi:Comprobante>

| Field name | Field path | Selected content |
| --- | --- | --- |
| Field1-10 (Voucher) | /cfdi:Comprobante/@NoCertificado | 00001000000508795571 |
| Field1-10 (Digital Fiscal Stamp) | //tfd:TimbreFiscalDigital/@FechaTimbrado | 2023-11-02T00:57:08 |
