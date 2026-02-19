---
title: "Testing recommendations in Sovos for Saudi Arabia"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-saudi-arabia/testing-recommendations-in-sovos-for-saudi-arabia"
product: "zuora-billing"
scraped_at: "2026-02-19T03:14:37.392Z"
---

# Testing recommendations in Sovos for Saudi Arabia

Zuora's e-invoicing testing covers various billing document types and operations using default e-invoice file templates. The document provides test cases and assumptions for reference.

Zuora has tested e-invoicing on various billing document types and operations using default e-invoice file templates. The following table lists the test cases for your reference.

| Billing document type | Document source | Case category | Description |
| --- | --- | --- | --- |
| Invoice | Subscription | One charge | Create a subscription containing one rate plan charge with taxation, generate a draft invoice from the subscription, and then post the invoice. |
| Credit Memo | Invoice | One charge | Create a credit memo from the invoice, and post the credit memo. |
| Debit Memo | Invoice | One charge | Create a debit memo from the invoice, and post the debit memo. |
| Credit Memo | Invoice | One charge | Generate an invoice from the subscription, and reverse the invoice to create a credit memo from the invoice. |
| Credit Memo | Invoice | One charge | Generate an invoice from the subscription, and write off the invoice to create a credit memo from the invoice. |
| Credit Memo | Subscription | One charge | Generate a credit memo from the subscription cancellation, and post the credit memo. |
| Debit Memo | Credit Memo | One charge | Reverse the credit memo to create a debit memo from the invoice. |
| Invoice | Subscription | Multiple charges | Create a subscription containing multiple charges with taxation, generate a draft invoice from the subscription, and then post the invoice. |
| Credit Memo | Invoice | Multiple charges | Create a credit memo from the invoice, and post the credit memo. |
| Debit Memo | Invoice | Multiple charges | Create a debit memo from the invoice, and post the debit memo. |
| Credit Memo | Invoice | Multiple charges | Generate an invoice from the subscription, and reverse the invoice to create a credit memo from the invoice. |
| Credit Memo | Invoice | Multiple charges | Generate an invoice from the subscription, and write off the invoice to create a credit memo from the invoice. |
| Credit Memo | Subscription | Multiple charges | Generate a credit memo from the subscription cancellation, and post the credit memo. |
| Debit Memo | Credit Memo | Multiple charges | Reverse the credit memo to create a debit memo from the invoice. |
| Invoice | Standalone | Multiple charges | Create a standalone invoice containing multiple items from product rate plan charges, and post the invoice. |
| Credit Memo | Standalone | Multiple charges | Create a standalone credit memo containing multiple items from product rate plan charges, and post the credit memo. |
| Debit Memo | Standalone | Multiple charges | Create a standalone debit memo containing multiple items from product rate plan charges, and post the debit memo. |

Note: Please note that the testing was performed in the Sovos Sandbox with a testing account, and the following assumptions apply:

-   Zuora uses testing Tax Identification Numbers for the business supplier and buyer, which are not real.

-   All billing documents have taxation enabled. The documents without taxation have not been tested. If you have business scenarios where documents have no taxation, you must test those scenarios and modify the e-invoice file template accordingly.

-   The taxation addresses are test address data and do not represent the addresses of real business entities.

-   The billing documents include only regular charges, without discount charges. If you use Zuora discount charges, the e-invoice file template customization is required.


Refer to the following sections for more details on scenarios Zuora still needs to test. It is recommended to include these scenarios in your testing if they align with your business requirements.

## Business Category

The e-invoice data transmitted to SDI supports two types of business categories: B2B and B2C.

Zuora's default e-invoice template is configured to B2B. Zuora's testing covers the business category B2B only. B2C as the business category has not been tested.

## Invoice type description and type code

In the e-invoice file template, you need to specify a code for the functional type of the Invoice. Zuora only tested with the Invoice Type Description as 0100000. If you have other types of invoice subtypes, you’ll need to customize the e-invoice file template and plan the testing accordingly. For more information, see Specify the invoice type description and type code .
