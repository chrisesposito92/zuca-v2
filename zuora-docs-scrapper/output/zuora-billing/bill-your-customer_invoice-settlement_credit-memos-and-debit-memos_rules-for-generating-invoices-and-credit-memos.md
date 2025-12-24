---
title: "Rules for generating invoices and credit memos"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/rules-for-generating-invoices-and-credit-memos"
product: "zuora-billing"
scraped_at: "2025-12-24T08:37:34.968Z"
---

# Rules for generating invoices and credit memos

Here are the rules for generating invoices and credit memos in Zuora, including options for handling negative charges and zero credit charges.

With [Invoice Settlement](/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-overview) enabled, Zuora bill run creates credit memos automatically under certain circumstances. You can control this behavior by specifying one of the following billing settings to determine how the bill run will generate invoices and credit memos:

-   Put all negative charges on a credit memo

-   Put all negative charges and zero credit charges on a credit memo

-   Create credit memos for net negative invoice totals

-   Create credit memos for net negative invoice totals without grouping charges


A positive charge is a charge, for which the amount to be billed is greater than or equal to 0. A negative charge is a charge, for which the amount to be billed is less than 0.

To access these settings, click your username at the top right and navigate to Billing > Define Billing Rules.

Note that your new configuration of the generation rule does not affect the credit memos and invoices that were generated earlier.

## Put all negative charges on a credit memo

Choose this generation rule to automatically generate credit memos for negative charges.

If you choose this generation rule, Zuora determines whether to put a charge to a credit memo or an invoice based on both the regular charge amount and its discount items amount.

With this option, the generation rule is as follows:

-   An invoice is auto-generated for all positive charges.

-   A credit memo is auto-generated for all negative charges. Currently, Zuora does not support applying discounts to negative charges.


When an invoice is posted or canceled, the related credit memo is also automatically posted or canceled; and vice versa.

The generation rule for discount charges is based on the charges that the discounts are applied to:

-   If the charge that the discount charge is applied to is included in the invoice, the discount charge is included in the invoice too.

-   If the charge that the discount charge is applied to is included in the credit memo, the discount charge is included in the credit memo too.


For example, a customer subscribes to your following product rate plan charges for a year starting from January 1:

-   Charge A: Monthly recurring product with -$10 list price per month

-   Charge B: Monthly recurring product with $50 list price per month


You create a bill run and set the target date to January 31. An invoice is generated for Charge B and a credit memo is generated for Charge A.

## Put all negative charges and zero credit charges on a credit memo

Choose this generation rule to automatically generate credit memos for all negative charges and zero-amount credit charges.

If you choose this generation rule, Zuora determines whether to put a charge to a credit memo or an invoice based on both the regular charge amount and its discount items amount.

With this option, the generation rule is as follows:

-   An invoice is auto-generated for all positive charges.

-   A credit memo is auto-generated for all negative charges and zero-amount credit charges. Currently, Zuora does not support applying discounts to negative charges.


For example, if you make any of the following changes to a subscription that might result in a proration credit, all zero-amount line items will be on an automatically generated credit memo along with negative items during invoice generation:

-   Removing a product

-   Canceling a subscription

-   Terminating a subscription early

-   Decreasing product price or quantity


When an invoice is posted or canceled, the related credit memo is also automatically posted or canceled; and vice versa.

The generation rule for discount charges is based on the charges that the discounts are applied to:

-   If the charge that the discount charge is applied to is included in the invoice, the discount charge is included in the invoice too.

-   If the charge that the discount charge is applied to is included in the credit memo, the discount charge is included in the credit memo too.


## Create credit memos for net negative invoice totals

Choose this generation rule to reduce the number of bill run generated credit memos. With this setting enabled, Zuora will automatically generate credit memos, only if the charges meet certain conditions.

With this option, Zuora calculates the total amount of the charges that are included in the bill run.

-   If the total amount is greater than or equal to 0, an invoice is auto-generated for all the charges, regardless of whether there are negative charges in the bill run.

-   If the total amount is less than 0, the generation rule is based on the charge groups. Zuora groups the charges based on the charge number and calculates the total amount for each group. Discount charges are grouped with the charges, to which the discounts are applied.

    -   An invoice is auto-generated for charge groups, of which the total amount is greater than or equal to 0. The charges in the charge groups, including the negative charges, are all included in the invoice.

    -   A credit memo is auto-generated for the groups, of which the total amount is less than 0. The charges in the groups, including the positive charges, are all included in the credit memo.


Note:

-   The credit memo creation is determined by whether the total amount of all charges included in the bill run is positive or negative before any taxes are calculated. Based on the taxes, the total amount is calculated with a negative or positive sign.


## Example 1

Suppose a customer subscribes to the following product rate plan charges for a year starting from January 1:

-   Charge A: Monthly recurring product with -$15 list price per month

-   Charge B: Monthly recurring product with $10 list price per month


You create a bill run and set the target date to March 31.

The total amount of the charges that are included in the bill run is -$15. So the generation rule is based on the charge groups. The bill run covers the following billing periods:

-   Charge A: January 1 - January 31

-   Charge B: January 1 - January 31

-   Charge A: February 1 - February 28

-   Charge B: February 1 - February 28

-   Charge A: March 1 - March 31

-   Charge B: March 1 - March 31


Zuora groups the charges based on the charge number. Two groups are in this example. The total amount of Charge A group is -$45. The total amount of Charge B group is $30. So an invoice is generated for all charges in Charge B. A credit memo is generated for all charges in Charge A.

## Example 2

A customer subscribes to a monthly recurring product with $100 list price per month. The subscription starts from January 1 and the subscription term is one year.

You create a bill run to bill the first three months (January, February, and March). An invoice is generated with total amount $300. The invoice is in draft status.

Later, you create an Update Product amendment to decrease the price to $50 starting from February 1. You create a bill run again for the first three months (January, February, and March). A credit memo is generated and no invoice is generated. This is because the total amount of the charges in the bill run is -$100, which is a negative value. There is only one charge group in this example. The total amount of the charges in the charge group is -$100. So a credit memo is generated. All the charges in the charge group are displayed in the credit memo.

## Create credit memos for net negative invoice totals without grouping charges

Choose this generation rule to automatically generate credit memos in the case of net negative billing.

With this option, Zuora calculates the total amount of the charges that are included in the bill run. The generation rule is as follows:

-   If the total amount is greater than or equal to 0, an invoice is auto-generated for all the charges, regardless of whether there are negative charges in the bill run.

-   If the total amount is less than 0, a credit memo is auto-generated for all the charges, regardless of whether there are positive charges in the bill run.


With this option, credit memos are not generated and the billing run fails in scenarios where all the following conditions are met:

-   The Rollover of the Overage Smoothing charge model is used in a usage charge.

-   The total amount of all the charges that are included in the bill run is negative.


Note:

-   The credit memo creation is determined by whether the total amount of all charges included in the bill run is positive or negative before any taxes are calculated. Based on the taxes, the total amount is calculated with a negative or positive sign.


## Example 1

Suppose a customer subscribes to the following tax-inclusive product rate plan charges for a year starting from January 1:

-   Charge A: Monthly recurring product with $200 list price per month, including $20 tax

-   Charge B: Monthly recurring product with $-300 list price per month, including $-30 tax


You create a bill run and set the target date to January 31.

The total amount of the charges that are included in the bill run is -$100. Therefore, a credit memo is generated for the charges. The generated credit memo contains the following memo items:

-   Credit memo item A with $-200 for Charge A

-   Credit memo item B with $300 for Charge B


The total amount of the generated credit memo is $100.

## Example 2

Suppose a customer subscribes to the following tax-exclusive product rate plan charges for a year starting from January 1:

-   Charge A: Monthly recurring product with $200 list price per month

-   Charge B: Monthly recurring product with $-201 list price per month


You create a bill run and set the target date to January 31.

The total amount of the charges that are included in the bill run is -$1. Therefore, a credit memo is generated for the charges. The generated credit memo contains the following memo items:

-   Credit memo item A with $-200 for Charge A, including $-20 tax

-   Credit memo item B with $201 for Charge B, including $20.1 tax


The total amount of the generated credit memo is $1.1.
