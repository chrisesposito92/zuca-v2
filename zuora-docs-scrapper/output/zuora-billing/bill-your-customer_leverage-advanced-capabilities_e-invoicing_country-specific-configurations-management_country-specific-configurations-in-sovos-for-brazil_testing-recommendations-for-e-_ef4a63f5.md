---
title: "Testing recommendations for E-invoice configuration Sovos for Brazil"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-brazil/testing-recommendations-for-e-invoice-configuration-sovos-for-brazil"
product: "zuora-billing"
scraped_at: "2026-02-20T17:35:14.730Z"
---

# Testing recommendations for E-invoice configuration Sovos for Brazil

This topic provides testing recommendations for configuring E-invoice with Sovos in Brazil, including test cases for various billing document types and operations.

Zuora has tested e-invoicing on various billing document types and operations with the default e-invoice file templates.

The following table lists the test cases for your reference.

| Billing document type | Document source | Case category | Operation | Description |
| --- | --- | --- | --- | --- |
| Invoice | Subscription | One charge | Submit to Sovos | Create a subscription containing one rate plan charge with taxation, generate a draft invoice from the subscription, and then post the invoice. |
| Invoice | Subscription | Multiple charges | Submit to Sovos | Create a subscription containing multiple charges with taxation, generate a draft invoice from the subscription, and then post the invoice. |
| Invoice | Standalone | Multiple charges | Submit E-Invoice | Create a standalone invoice containing multiple items from product rate plan charges, and post the invoice. |
| Invoice | Subscription | Multiple charges | Cancel E-Invoice | Create a subscription containing multiple charges with taxation, generate a draft invoice from the subscription, and then post the invoice.Reverse the invoiceGenerate a new invoice and submit it.Cancel the previous e-invoice |
| Invoice | Standalone | Multiple charges | Cancel E-Invoice | Create a standalone invoice containing multiple items from product rate plan charges, and post the invoice.Write-off the invoiceCancel the previous e-invoice |

Note that the testing was performed in the Sovos Sandbox environment with a testing account, and the following assumptions apply:

-   Zuora uses testing tax identification numbers for both the Seller and Buyer, which are not real.

-   All billing documents have Taxation enabled. Zuora does not test scenarios where billing documents have no taxation.

-   The taxation addresses are testing address data and do not represent the addresses of real business entities. The same testing address data is used for B2B and B2C business categories.

-   The billing documents cover only regular charges, without discount charges. If you use Zuora discount charges, you must customize the e-invoice file template.

-   Zuora has confirmed that document data has been successfully submitted through the Sovos Sandbox environment.


For more details on scenarios that Zuora has not tested, see the next sections. It is best practice to include these scenarios in your testing if they align with your business requirements.

## Business Category

The child node type BusinessCategory uses node identity: BusinessToBusiness or BusinessToConsumer. It is by default mapped from Invoice.Account.EInvoiceProfile.BusinessCategory. The default mode is BusinessToBusiness when this node is omitted, so if the transaction is business to consumer, this must be explicitly specified.

Please note that B2B or BusinessToBusiness, B2C or BusinessToConsumer both work.

Zuora's default e-invoice file template is configured for B2B. If you operate in both B2B and B2C scenarios, you must customize the default e-invoice file template according to business requirements.

## OutputSchema

The child node type OutputSchema uses node identifier nfse or nfe.

nfse (NFSe) is the value we supported in the default e-invoice file template. To support NF-e, you’ll use a different output schema NFe.

<sbd:Scope> <sbd:Type>Mapping.OutputSchema</sbd:Type> <sbd:InstanceIdentifier/> <sbd:Identifier>nfse</sbd:Identifier> </sbd:Scope>

## Supplier Party ID

The field path is Invoice/AccountingSupplierParty/Party/PartyIdentification/ID and Invoice/AccountingSupplierParty/Party/PartyIdentification/ID @schemeID.

For Brazil, two options for the identification of the identification scheme are available: "CPF" and "CNPJ". CPF and CNPJ are mandatory tax identification numbers that distinguish between individuals and businesses.

In Brazil, CNPJ stands for Cadastro Nacional da Pessoa Jurídica (National Register of Legal Entities).. It is a unique identification number assigned to legal entities, including companies, organizations, and other business entities operating in Brazil. The CNPJ is issued by the Brazilian Federal Revenue Service (Receita Federal) and is used for tax and administrative purposes.

While CPF is for individuals. It stands for: Cadastro de Pessoas Físicas (Register of Individual Persons). It’s an 11-digit number for all Brazilian citizens and resident foreigners. Social Security Number or a UK National Insurance Number. Non-residents who own assets or investments in Brazil must also have one.

Zuora's default e-invoice file template is configured for CNPJ only.

## Supplier Party Additional Account ID

The field path is Invoice/AccountingSupplierParty/AdditionalAccountID.

The AdditionalAccountID field in the e-invoice file template is mapped from TaxRegisterNumber of business region by default. The field depends on the type of transaction and the relevant tax authority.

-   IE (Inscrição Estadual): This is the State Registration Number, obtained via the relevant SEFAZ (Secretaria da Fazenda Estadual). It is required for transactions involving goods (NF-e), as these are subject to state-level ICMS (Value-Added Tax on Sales and Services).

-   CCM (Cadastro de Contribuintes Mobiliários): This is the Municipal Taxpayer's ID, obtained via the relevant municipality (Prefeitura). It is required for service transactions (NFS-e), as services are subject to municipal ISS (Tax on Services).


Here is the sample mapping.

<cbc:AdditionalAccountID>{{TaxRegisterNumber}}</cbc:AdditionalAccountID>

## DocumentTypeCode

The field path is Invoice/AdditionalDocumentReference/DocumentTypeCode.

The type of document being referenced, expressed as a code. The following options are available:

RPS = Provisional Service Receipt;

RPS-M = Provisional Service Receipt from Conjugated (Mixed) Invoice;

RPS-C = Coupon.

Zuora's default e-invoice file template is configured for RPS only.

Here is the sample mapping.

<cbc:DocumentTypeCode>RPS</cbc:DocumentTypeCode>

## Type of RPS taxation

The field path is Invoice/InvoiceLine/UUID

It’s a universally unique identifier for an instance of this document. Available options are:

T = Taxed in Sao Paulo

F = Taxed Outside Sao Paulo

A = Taxed in Sao Paulo, but Exempt

B = Taxed Outside Sao Paulo, but Exempt

D = Taxed in Sao Paulo with partial exemption

M = Taxed in Sao Paulo, but with indication of subjective immunity

N = Taxed Outside Sao Paulo, but with indication of subjective immunity

R = Taxed in Sao Paulo, but with indication of objective immunity

S = Taxed outside of Sao Paulo, but with indication of objective immunity

X = Taxed in Sao Paulo, but Requirement Suspended

V = Taxed Outside Sao Paulo, but Requirement Suspended

P = Export of Services

Zuora's default e-invoice file template is configured for T only.

## Identifier for Tax Category

The field path Invoice/InvoiceLine/WithholdingTaxTotal/TaxSubtotal/TaxCategory/ID in a Brazilian e-invoice (likely an NFS-e for services) is used to specify the type of tax. The values provided represent different types of Brazilian taxes and fiscal concepts.

-   DEDUCOES (Deductions): This category is used to report any amounts that are to be deducted from the tax base. This could include tax-exempt items, material costs, or other expenses permitted by law that lower the amount of revenue subject to tax.

-   PIS (Programa de Integração Social): This is a federal social contribution tax calculated on gross revenue. It is a federal tax on corporate billing to fund employee benefit programs. The rate for PIS varies depending on the tax regime, such as cumulative or non-cumulative.

-   COFINS (Contribuição para o Financiamento da Seguridade Social): A federal social contribution tax that is also calculated on gross revenue. It helps fund social security. Like PIS, its rate and credit calculation can differ based on the tax regime.

-   INSS (Instituto Nacional do Seguro Social): A social security contribution paid by both the employer and the employee. This is used to fund pensions, disability, and other social welfare benefits. When reported on an invoice, it represents the amount of INSS to be withheld from the service provider's payment.

-   IR (Imposto de Renda): This refers to the Income Tax, which is collected by the federal government. In the context of e-invoicing, this value represents the amount of income tax to be withheld at the source.

-   CSLL (Contribuição Social sobre o Lucro Líquido): This is a federal tax on net profit. It is a corporate tax aimed at funding social security and is often withheld on invoices, similar to IR.

-   BASE (Base de Cálculo): This is the tax base, or the amount upon which a tax is calculated. Rather than a tax itself, this identifies the subtotal that is subject to one or more of the taxes listed above.


## Identifier for withholding tax category

The field path is Invoice/InvoiceLine/WithholdingTaxTotal/TaxSubtotal/TaxCategory/ID

Available values: ISSRETIDO and VALORISSRETIDO.

In the context of Brazilian e-invoicing for services, the ISS tax can be either retained by the customer or paid by the service provider. The terms ISSRETIDO and VALORISSRETIDO represent two distinct but related pieces of information concerning the Municipal Service Tax (ISS).

ISSRETIDO is a boolean or indicator field that specifies whether the ISS tax is to be retained by the customer. The value of this field determines responsibility for paying the ISS tax to the municipality.

-   "true": Indicates that the customer is responsible for withholding the ISS tax from the service provider and paying it directly to the local government.

-   "false": Indicates that the service provider is responsible for paying the ISS tax.


VALORISSRETIDO is a numeric field that specifies the exact monetary value of the ISS tax that is being retained. This field is only populated with a value greater than zero if ISSRETIDO is set to "true".

-   Its value represents the specific amount of ISS tax that the customer must deduct from the service provider's payment and remit to the municipality.


## Catalogue Item Identification

The field path is Invoice/InvoiceLine/Item/CatalogueItemIdentification/ID.

The CatalogueItemIdentification field in a Sovos e-invoice payload provides a unique identifier for the item being billed. The specific mapping depends on the context and your internal business systems.

-   For service-related invoices (NFS-e): Map your product’s identification data. The CatalogueItemIdentification code should come from the Service Table provided by the Municipality of São Paulo. This service code is the municipal classification code for the service being delivered. While it’s not an inherent part of the RPS itself, it is a required data point that must be included in the RPS for processing.

-   For goods invoices (NF-e): Map your product’s identification data as well, but note that the code used here differs from the one used for NFS-e.


We recommend using a custom field, such as HSN\_\_c on the ProductRatePlanCharge, to store the service code. You can also define your own custom field.
