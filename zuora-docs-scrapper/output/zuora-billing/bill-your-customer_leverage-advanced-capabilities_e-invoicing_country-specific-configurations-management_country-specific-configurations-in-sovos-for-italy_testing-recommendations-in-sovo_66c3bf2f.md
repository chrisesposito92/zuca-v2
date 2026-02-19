---
title: "Testing recommendations in Sovos for Italy"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/e-invoicing/country-specific-configurations-management/country-specific-configurations-in-sovos-for-italy/testing-recommendations-in-sovos-for-italy"
product: "zuora-billing"
scraped_at: "2026-02-19T03:14:47.518Z"
---

# Testing recommendations in Sovos for Italy

Zuora has conducted e-invoicing tests on various billing document types using default templates, with results detailed in the following table.

Zuora has tested e-invoicing on various billing document types and operations with the default e-invoice file templates.

The following table lists the test cases for your reference.

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

Note that the testing was performed in the Sovos Sandbox environment with a testing account, and the following assumptions apply:

-   Zuora uses testing tax identification numbers for both the Seller and Buyer, which are not real.

-   All billing documents have Taxation enabled. Zuora does not test scenarios where billing documents have no taxation.

-   The taxation addresses are testing address data and do not represent the addresses of real business entities. The same testing address data is used for B2B and B2G business categories.

-   The billing documents cover only regular charges, without discount charges. If you use Zuora discount charges, you must customize the e-invoice file template.

-   Zuora has confirmed that document data has been successfully submitted through the Sovos Sandbox environment using a testing CD. However, note that Zuora does not validate the successful delivery of e-invoice files to the client through Sovos.


For more details on scenarios that Zuora has not tested, see the next sections. It is best practice to include these scenarios in your testing if they align with your business requirements.
