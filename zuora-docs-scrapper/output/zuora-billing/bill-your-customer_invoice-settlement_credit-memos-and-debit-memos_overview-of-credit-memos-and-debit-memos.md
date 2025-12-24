---
title: "Overview of credit memos and debit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/overview-of-credit-memos-and-debit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:34:29.209Z"
---

# Overview of credit memos and debit memos

With the Invoice Settlement feature enabled, you can use Zuora Billing to generate credit memos and debit memos when necessary.

Like invoices, credit and debit memos are legal documents vendors issue to their customers. They are used to correct charge mistakes on invoices and to manage the balance due on a particular invoice or account.

-   Credit memos reduce invoice and account balances. By applying one or more credit memos to invoices with positive balances, you can reduce the invoice balances in the same way that you apply a payment to an invoice.

-   Debit memos increase the amount a customer owes. It is a separate document from the invoice. Debit memos can be used to correct undercharging on an invoice or to levy ad hoc charges outside the context of a subscription. Just like an invoice, debit memo balances can be settled by applying either a payment or a credit memo.


## Purposes

Credit and debit memos provide a detailed justification of the amount stated on the memo. You can use the memos to adjust invoices at a line item level and provide your customers with memo documents to track billing changes.

You might need to issue credit and debit memos under any of the following situations:

-   Correct invoice errors, such as overcharging, undercharging, and other billing mistakes

-   Credit an account without refunding payment

-   Issue ad hoc charges or discounts

-   Write off account balances, such as reducing an invoice balance to zero due to bad debt.

-   Reflect negative charges

-   Debit an over-delivery for your customer


With the [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) feature enabled, you can use Zuora Billing to generate credit memos and debit memos when necessary. The credit and debit memos can be issued in the following ways:

-   Refer to specific invoices. These memos aim to adjust specific items in a given invoice. In this case, the memo refers to a specific invoice; the memo items refer to corresponding invoice items.

-   Standalone. The purpose of these memos is to raise an ad hoc charge or credit not related to a specific invoice. The memo items refer to one-time product rate plan charges. These charges do not have to be part of any subscription. With a positive balance, standalone credit memos can be applied to any invoice or debit memo.

-   Generate credit memos by bill run. Rather than generating negative invoices, the bill run creates credit memos populated by any negative charge event resulting from the charge rating process. Directly creating credit memos in this case makes it easier to manage negative charges and balances for Accounts Receivable settlement purposes.


You can find the memos list by navigating to in the left navigation from the Zuora UI.

## Key features

In many countries, credit and debit memos are actually required by law for adjusting invoices. These regulations are particularly widespread in Europe. Credit and debit memos are a widely adopted and well-understood billing construct that makes it easier to audit a company's billing and verify the correctness of receivables accounting.

After the Invoice Settlement feature, which includes credit and debit memo support, is enabled, it fully replaces Invoice Adjustments , Invoice Item Adjustments , and Credit Balance Adjustments .

Zuora Credit and Debit Memos provide the following capabilities in both the Zuora UI and REST API:

-   Create credit and debit memos either from invoices or from one-time charges.

-   Apply credit memos to invoices and debit memos to settle outstanding balances.

-   Unapply the applied credit memos from invoices and debit memos. Reapply the memos to other invoices and debit memos.

-   Refund a certain amount of the credit memo balance to your customer.

-   Calculate taxes for credit and debit memos, such as Zuora Tax , Avalara Integration , and other third-party tax software.

-   Adjust tax items on invoices.

-   Customize the credit and debit memo templates. Generate credit and debit memos in PDF using the templates.

-   Reverse invoice and write off invoice . Write off the invoice with a credit memo and generate a new invoice for the same period.

-   Send callout or email notifications to your customers when credit or debit memos are created or posted.

-   Preview credit memos in billing previews, bill run previews, subscription previews, or amendment previews through the REST API.

-   Specify how credit memos are automatically applied during payment runs.

-   Apply and unapply the credit memos that are in closed accounting periods.

-   Finance integration with Invoice Settlement .


## Use cases

The common use cases for credit and debit memos are as follows:

-   Correct errors

-   Undercharges or overcharges

-   Proration credit

-   Charge disputes

-   Discounts

-   Ad hoc charges or credits


## Correct errors

The price calculated for the customer is not correct.

For example, you apply the incorrect price to your customer because the wrong scale prices are used or a discount has not been applied. In such cases, you can issue a credit memo or debit memo to correct the amount on the mistaken invoice items.

## Undercharges or overcharges

Due to billing mistakes, customers are either undercharged or overcharged.

For example:

-   The first partial month of a new subscription is not billed because the proration credit setting is disabled. The customer is undercharged. In such cases, you can issue a debit memo to increase the amount due on the account balance.

-   A canceled subscription continues to bill because the subscription cancel date is after the next scheduled bill run. The customer is overcharged. In such cases, you can issue a credit memo and apply the memo to the invoice to reduce the invoice amount.


## Proration credit

You issue a credit to your customer for an unused portion of the service.

For example, your customer pays $500 in advance for an annual service on January 1. On April 4, the customer cancels their subscription. In such cases, you can issue a prorated credit to your customer.

## Charge disputes

Due to billing mistakes, service interruptions, or confusion about invoices, a customer might contact you to contest a charge on the invoice. In such cases, you might need to issue a credit or debit memo to resolve the dispute.

## Discounts

You want to give your customers a percentage or fixed amount discount on the price of a product or service only for a certain period of time. In such cases, you can issue credit memos to your customers with the credit amount.

## Ad hoc charges or credits

Occasionally, a vendor might want to issue an ad hoc charge or credit, for example, a customer loyalty credit. These one-time events are independent of ongoing recurring subscription billing activity, such as billing mistakes, programmatic discounts, price changes, subscription amendments, or other account credits. They provide another mechanism for organizations to manage their customer relationships and billing operations. For example, give your customer one-month of free service or a discount for a month.
