---
title: "Example 3-5: Preventing over-crediting for tax"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/credit-memos-and-debit-memos/management-of-debit-and-credit-memos/enable-preventing-over-crediting/example-3-5-preventing-over-crediting-for-tax"
product: "zuora-billing"
scraped_at: "2025-12-24T08:35:37.528Z"
---

# Example 3-5: Preventing over-crediting for tax

Preventing over-crediting for tax

The tax validation logic varies depending on whether tax amounts are calculated by a tax vendor. Zuora ensures that individual credit memo items respect the tax amounts that are returned by the tax vendor and that the total credit tax amount doesn’t exceed the available credit:

-   If the Tax Auto Calculation checkbox is selected, taxes are calculated by the tax vendor. Zuora validates the total tax amount instead of the tax amounts on individual tax items even though Header and Item-level is specified. See examples 3-4.

-   If the Tax Auto Calculation checkbox is cleared, you can manually enter tax amounts via the UI or API. Zuora validates both the total tax amount and tax amounts on individual tax items. See example 5.


Invoice:

Invoice Item: $90 (available to credit is $90)

-   Taxation Item 1: $1.42

-   Taxation Item 2: $5.85

-   Taxation Item 3: $1.88


The following examples are explained based on this invoice.

Example 3: Create a credit memo from this invoice for $99.15 inclusive of tax and set the following for the invoice item:

-   Specify Credit Amount for the invoice item to $99.15


-   Select Tax-Included


-   Select Tax Auto Calculation


The following items are generated:

-   Credit memo item: $90

-   Taxation Item 1: $1.42

-   Taxation Item 2: $5.86

-   Taxation Item 3: $1.87


Zuora generates the above credit memo item and taxation items after the following validations are passed:

-   The credit amount for the invoice item is $90, it does not exceed the available to credit amount of $90 for the invoice item.

-   Due to the rounding difference, credit memo taxation item 2 of $5.86 is greater than the corresponding invoice taxation item 2 of $5.85. However, even though Header and Item-level is selected, Zuora still validates the total tax amount instead of the tax amounts on individual tax items. The total credit amount for all taxation items is $9.15, it does not exceed the total available to credit amount for all taxation items of $9.15.


Example 4: Create a credit memo from this invoice for $90 exclusive of tax and set the following for the invoice item:

-   Specify Credit Amount for the invoice item to $90

-   Clear Tax-Included

-   Select Tax Auto Calculation


The following items are generated:

-   Credit Memo Item: $90

-   Taxation Item 1: $1.42

-   Taxation Item 2: $5.86

-   Taxation Item 3: $1.87


No matter whether the tax is inclusive or exclusive, Zuora validates the invoice and tax separately. For the same reason as Example 1, Zuora generates the above credit memo item and taxation items after the validations are passed.

Example 5: Create a credit memo from this invoice for $90 with manually added tax items and set the following for the invoice item:

-   Clear Tax Auto Calculation

-   Specify the following:

    -   Credit Amount for the invoice item: $90

    -   Credit Amount for Taxation Item 1: $1.42

    -   Credit Amount for Taxation Item 2: $5.86

    -   Credit Amount for Taxation Item 3: $1.87


Credit memo and taxation items fail to generate because the specified Credit Amount for Taxation Item 2 of $5.86 exceeds the available to credit amount of $5.85 for Taxation Item 2.

With the following data, you can create the credit memo successfully:

-   Clear Tax Auto Calculation

-   Specify the following:

    -   Credit Amount for the invoice item: $90

    -   Credit Amount for Taxation Item 1: $1.42

    -   Credit Amount for Taxation Item 2: $5.85

    -   Credit Amount for Taxation Item 3: $1.88
