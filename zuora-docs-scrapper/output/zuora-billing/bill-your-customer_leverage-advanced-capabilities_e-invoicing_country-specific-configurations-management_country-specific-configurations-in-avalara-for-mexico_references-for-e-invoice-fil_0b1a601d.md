---
title: "References for e-invoice file templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-avalara-for-mexico/references-for-e-invoice-file-templates"
product: "zuora-billing"
scraped_at: "2026-02-19T03:15:35.161Z"
---

# References for e-invoice file templates

Provides reference information for e-invoice file templates, including invoice type codes, project references, item identifiers, tax codes, and payment means.

## Invoice type code and ProjectReference

Invoice type code

`Invoice/cbc:` `InvoiceTypeCode`

A code specifying the functional type of the Invoice, including the following values:

-   `380` : invoice

-   `381` : credit note

-   `383` : debit not


The following examples list how these values are used for credit and debit memos:

-   For credit memos, it uses `CreditNote/cbc:CreditNoteTypeCode` . Example: `<cbc:CreditNoteTypeCode>381</cbc:CreditNoteTypeCode>`

-   For debit memos, it uses `Invoice/cbc:InvoiceTypeCode` . Example: `<cbc:InvoiceTypeCode>383</cbc:InvoiceTypeCode>`


ProjectReference

`Invoice/cac:ProjectReference/cbc:ID`

An attribute required to express the key of the effect of the tax receipt for the issuing taxpayer, including the following values:

-   I: Ingreso

-   E: Egreso

-   T: Traslado

-   P: Pago

-   N: Nómina


The default value in the the Zuora e-invoice file template is I.

## Item standard identifier and Item classification identifier

Item standard identifier

`Invoice/cac:InvoiceLine/cac:Item/cac:StandardItemIdentification/cbc:ID`

An item identifier based on a registered scheme. An attribute required to express the number of the request that covers the import of the good. For example, `21 24 3719 1000404`

The item standard identifier maps to a custom field on `ProductRatePlanCharge.ProductRatePlanCharge.ItemCode__c`

Item classification identifier

`Invoice/cac:InvoiceLine/cac:Item/cac:CommodityClassification/cbc:ItemClassificationCode`A code for classifying the item by its type or nature.

The item classification identifier use `02` as the default value. You need to modify it according to your own business.

| c_ObjetoImp | Descripción | Fecha inicio de vigencia |
| --- | --- | --- |
|  |  |  |
| 01 | No objeto de impuesto. | 1/1/2022 |
| 02 | Sí objeto de impuesto. | 1/1/2022 |
| 03 | Sí objeto del impuesto y no obligado al desglose. | 1/1/2022 |
| 04 | Sí objeto del impuesto y no causa impuesto. | 10/7/2022 |
| 05 | Sí objeto del impuesto, IVA crédito PODEBI. | 12/6/2023 |

## Tax Code

`Invoice/cac:AccountingSupplierParty/cac:Party/cac:PartyTaxScheme/cbc:TaxLevelCode`

An attribute required to incorporate the key of the issuing taxpayer regime to which the fiscal effect of this receipt will apply, for example, 601.

| c_RegimenFiscal | Descripción | Física | Moral | Fecha de inicio de vigencia | Fecha de fin de vigencia |
| --- | --- | --- | --- | --- | --- |
| 601 | General de Ley Personas Morales | No | Sí | 1/1/2022 |  |
| 603 | Personas Morales con Fines no Lucrativos | No | Sí | 1/1/2022 |  |
| 605 | Sueldos y Salarios e Ingresos Asimilados a Salarios | Sí | No | 1/1/2022 |  |
| 606 | Arrendamiento | Sí | No | 1/1/2022 |  |
| 607 | Régimen de Enajenación o Adquisición de Bienes | Sí | No | 1/1/2022 |  |
| 608 | Demás ingresos | Sí | No | 1/1/2022 |  |
| 610 | Residentes en el Extranjero sin Establecimiento Permanente en México | Sí | Sí | 1/1/2022 |  |
| 611 | Ingresos por Dividendos (socios y accionistas) | Sí | No | 1/1/2022 |  |
| 612 | Personas Físicas con Actividades Empresariales y Profesionales | Sí | No | 1/1/2022 |  |
| 614 | Ingresos por intereses | Sí | No | 1/1/2022 |  |
| 615 | Régimen de los ingresos por obtención de premios | Sí | No | 1/1/2022 |  |
| 616 | Sin obligaciones fiscales | Sí | No | 1/1/2022 |  |
| 620 | Sociedades Cooperativas de Producción que optan por diferir sus ingresos | No | Sí | 1/1/2022 |  |
| 621 | Incorporación Fiscal | Sí | No | 1/1/2022 |  |
| 622 | Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras | No | Sí | 1/1/2022 |  |
| 623 | Opcional para Grupos de Sociedades | No | Sí | 1/1/2022 |  |
| 624 | Coordinados | No | Sí | 1/1/2022 |  |
| 625 | Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas | Sí | No | 1/1/2022 |  |
| 626 | Régimen Simplificado de Confianza | Sí | Sí | 1/1/2022 |  |

## Payment means type code

`Invoice/cac:PaymentMeans/cbc:PaymentMeansCode`

A conditional attribute to express the key of the form of payment of the goods or services covered by the receipt, for example, `01`.

Zuora e-invoice file templates use `99` as the default value.

| c_FormaPago | Descripción |
| --- | --- |
| 01 | Efectivo |
| 02 | Cheque nominativo |
| 03 | Transferencia electrónica de fondos |
| 04 | Tarjeta de crédito |
| 05 | Monedero electrónico |
| 06 | Dinero electrónico |
| 08 | Vales de despensa |
| 12 | Dación en pago |
| 13 | Pago por subrogación |
| 14 | Pago por consignación |
| 15 | Condonación |
| 17 | Compensación |
| 23 | Novación |
| 24 | Confusión |
| 25 | Remisión de deuda |
| 26 | Prescripción o caducidad |
| 27 | A satisfacción del acreedor |
| 28 | Tarjeta de débito |
| 29 | Tarjeta de servicios |
| 30 | Aplicación de anticipos |
| 31 | Intermediario pagos |
| 99 | Por definir |

## Tax Category

Tax category name

`Invoice/cac:TaxTotal/cac:TaxSubtotal/cac:TaxCategory/cbc:Name`

A conditional attribute to indicate the value of the rate or quota of the tax that is transferred for this concept. It is required when the tag `TipoFactor` attribute has a key that corresponds to the tag `TasaOCuota`

Total Transfer/TipoFactor include the following values:

-   S: Tasa
-   E: Exento
-   O: Cuota

Zuora templates use `S` as the default value.

Tax category ID

`Invoice/cac:TaxTotal/cac:TaxSubtotal/cac:TaxCategory/cac:TaxScheme/cbc:ID`

A attribute required to indicate the key of the transferred tax type applicable to this Concepto.

Zuora templates use `IVA` as the default value.
