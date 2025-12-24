---
title: "Country-specific configurations for Italy"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-for-italy"
product: "zuora-billing"
scraped_at: "2025-12-24T18:31:39.253Z"
---

# Country-specific configurations for Italy

This topic outlines the requirements and configurations for e-invoicing in Italy, including VAT registration, Codice Destinatario, and the use of Sovos for seamless setup.

If you are a business provider selling products and services in Italy, you must be registered for value-added tax (VAT) and have a VAT number. Additionally, to receive documents inbound, your clients must provide a VAT number and Codice Destinatario (CD). The CD enables the identification of the communication channel between the Sistema di Interscambio (SDI) and the recipient.

## E-invoicing configuration in Sovos for Italy

To configure e-invoicing for invoice clearance in Italy, you must create a company profile in Sovos. Zuora handles the configuration process on your behalf in Sovos, ensuring a seamless setup. You have to provide the following information required for the configuration to Zuora:

-   Company Name: Legal name of your business

-   Trade Name: Doing business as (DBA) name

-   VAT Number: Your VAT identification number


## Specify the type and number for an additional document

You must create and manage custom fields to store country-specific information for mapping to Sovos. The e-invoicing in Italy requires an identifier for the referenced document for credit memos and debit memos.

The e-invoicing in Italy requires an additional document about a billing document. The following values are allowed for the additional document:

-   `OrdineAcquisto` : Purchase Order

-   `Contratto` : Contract

-   `Convenzione` : Convention

-   `Ricezione` : Reception

-   `FattureCollegate` : Connected Invoices


The default e-invoice file template mapping utilizes the following types and reference numbers for additional documents:

-   For purchase orders associated with invoices, the default e-invoicing mapping uses `OrdineAcquisto` (Purchase Order) as the type, and the purchase order number of the corresponding account serves as the reference number for the invoice.

-   For credit memos and debit memos connected to an invoice, regardless of whether they are created from the invoice or generated from subscriptions, `FattureCollegate` (Connected Invoices) is used. The invoice number is used as the reference for the additional document.

-   For standalone credit memos and debit memos created from product rate plan charges, `OrdineAcquisto` (Purchase Order) is used as the type. the purchase order number of the corresponding account serves as the reference number for the additional document.


If you want to modify these default mappings, you must customize the e-invoice file template. For example, you can use the purchase order number as the reference number for an additional document specific to an individual invoice. You can store the purchase order number on either subscriptions, charges, or invoices.

## Business Category

The e-invoice data transmitted to SDI supports two types of business categories, identified by the following codes:

-   FPA12 for public administrations (B2G communication)

-   FPR12 for private companies and professionals (B2B communication)


Zuora's default e-invoice file template is configured for B2B. If you operate in both B2B and B2G scenarios, you must customize the default e-invoice file template according to business requirements.

Zuora's e-invoicing testing covers the B2G business category, utilizing the same testing data as B2B, including the address, VAT numbers of the Seller and Buyer, and CD of the Buyer.

## FatturaPA

The FatturaPA is a type of electronic invoices that are accepted by Public Administrations. As the only type supported by the Sovos solution, the FatturaPA supports about 19 types of doucments being transimtted. Zuora currently only supports the following types of documents using the default e-invoice file template:

-   TD01: Invoice

-   TD04: Credit Note

-   TD05: Debit Note


For your reference, the following allowed values are available as types of documents being transmitted in Italy:

-   TD01: Invoice

-   TD02: Advance/down payment on invoice

-   TD03: Advance/down payment on fee

-   TD04: Credit Note

-   TD05: Debit Note

-   TD06: Fee

-   TD16: Reverse charge internal invoice integration

-   TD17: Integration or self-invoicing for purchase services from abroad

-   TD18: Integration for purchase of intra UE goods

-   TD19: Integration or self-invoicing for purchase of goods ex art.17c.2 DPR 633/72

-   TD20: Self-invoicing for regularisation and integration of invoices (ex art.6 c.8 and 9-bis d.lgs 471/97 or art.46 c.5 D.L.331/93)

-   TD21: Self-invoicing for splaphoning

-   TD22: Extractions of goods from VAT Warehouse

-   TD23: Extractions of goods from VAT Warehouse with payment of VAT

-   TD24: Deferred invoice ex art.21, c.4, third period lett. a) DPR 633/72

-   TD25: Deferred invoice ex art.21, c.4, third period lett. b) DPR 633/72

-   TD26: Sale of depreciable assets and for internal transfers (ex art.36 DPR 633/72)

-   TD27: Self-invoicing for self consumption or for free transfer without recourse

-   TD28: Purchases from San Marino with VAT (paper invoice)


## SDI

With the Sovo solution, the document is transfered to FatturaPA and transimitted to Sistema di Interscambio (SDI). SDI is an electronic system capable of:

-   Receiving invoices in the form of files with the characteristics of the FatturaPA.

-   Performing checks on the files received.

-   Forwarding invoices to the addressee Administrations.


The identification of the identification schemes supports the following types:

-   IdFiscaleIVA

-   CF: CodiceFiscale

-   EORI: CodEORI

-   CD: CodiceDestinatario

-   Using both IdFiscaleIVA and CD


Italy introduces the codice destanitario (CD) that plays an essential role in its e-invoicing model. The CD acts as a recipient's tax code that defines the address to which the invoice must be transmitted to through the SDI. The following types of ways are available to deliver e-invoice files:

-   CD - most common

-   Certified Electronic Mail or PEC

-   CD with "0000000"


Zuora's testing covers the following scenarios using the default e-invoice file template:

-   Use IdFiscaleIVA for the identifier for both the Seller and Buyer.

-   Use CD for the consumer party as the reception method for the reception of the invoice. The CD enables the identification of the communication channel between the SDI and the recipient.

    -   It is assumed that a single client has only one CD for SDI. If they have multiple SDIs, you must customize the default e-invoice file template according to business requirements.

    -   Zuora uses a faked CD called OUTBOU provided by Sovos for the testing. The CD only verifies that document data is submitted successfully through the Sovos Sandbox environment. The testing cannot verify the reception of billing documents through the communication channel between the SDI and the recipient.

-   Zuora does not test other e-invoice file delivery through Certified Electronic Mail or PEC.


## Accepted means of payment

The e-invoice data transmitted to SDI supports various means of payment, including:

-   `MP01`: Cash

-   `MP02`: Cheque

-   `MP03`: Banker's draft

-   `MP04`: Cash at treasury

-   `MP05`: Bank transfer

-   `MP06`: Money order

-   `MP07`: Pre-compiled bank payment slip


To specify the payment channel for a particular means of payment, the following values are allowed:

-   `TP01`: Payment by installments

-   `TP02`: Full payment

-   `TP03`: Advance payment


In Zuora's testing, only one means of payment is specified, defaulting to `MP05` (bank transfer) and `TP02` (full payment). If you use different means of payment or have multiple means of payment, you must customize the e-invoice file template according to business requirements.
