---
title: "Use FxCustomRate in HTML templates"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/common-use-cases-of-html-templates/use-fxcustomrate-in-html-templates"
product: "zuora-billing"
scraped_at: "2025-12-24T05:43:39.062Z"
---

# Use FxCustomRate in HTML templates

The FxCustomRate object is used in HTML templates to apply custom exchange rates for invoices, credit memos, and debit memos, available when the Custom Exchange Rates Finance feature is enabled.

Note: The object, `FxCustomRate`, is available in the HTML Template feature only if the

[Custom Exchange Rates Finance](https://developer.zuora.com/v1-api-reference/api/tag/Custom-Exchange-Rates/)

feature (currently in Limited Availability) is enabled. To request access to the

[Custom Exchange Rates Finance](https://developer.zuora.com/v1-api-reference/api/tag/Custom-Exchange-Rates/)

feature, contact Zuora Global Support.

The `FxCustomRate` object can be used in HTML templates for the following document types:

-   Invoices

-   Credit Memos

-   Debit Memos


1.  Navigate to .
2.  Click Add New HTML Template or select an existing one.
3.  On the bottom left corner of the screen, select the Show Object Schema icon ![Show Object Schema icon .png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/adf8fdfa-9872-41f4-b798-f7cfe0480400?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImFkZjhmZGZhLTk4NzItNDFmNC1iNzk4LWY3Y2ZlMDQ4MDQwMCIsImV4cCI6MTc2NjY0MTQxNywianRpIjoiNmNjYzY4NjhmZGYyNDliNjhjOTE5OWUyM2M4YTk3NzAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.lrEmb2IuUfxzGRnME0u8kvz9diUMS8R603z0bfznz6I) . This object includes all the exchange rates. You can either upload exchange rates via a file or utilize a third-party custom exchange rate provider.
4.  Search for the `FxCustomRate` object. The fields in the `FxCustomRate` object are explained in the table. .
5.  Click Copy .
6.  In the Content tab, drag and drop the HTML component into the HTML template.
7.  In the HTML template, click the HTML block. The Content panel is displayed on the right of the template editor.
8.  In the HTML section, enter the following HTML code in the HTML editor:

    {{#Invoice}} <br> Converted Amount to EUR: {{#FxCustomRates|FilterByRef(CurrencyTo,EQ,Invoice.Currency)|FilterByValue(CurrencyFrom,EQ,'EUR')|SortBy(RateDate,DESC)|First(1)}} {{Cmd\_Assign(EurConversionRate,Rate,True)}} <br> "Rate:RateDate:RateSetName" <br> {{Rate}}:{{RateDate}}:{{RateSetName}} {{/FxCustomRates|FilterByRef(CurrencyTo,EQ,Invoice.Currency)|FilterByValue(CurrencyFrom,EQ,'EUR')|SortBy(RateDate,DESC)|First(1)}} <br> Original Amount: {{Amount|Round(2)|Localise}} {{Invoice.Currency}} <br> Converted Amount: {{#Wp\_Eval}} {{Amount}} \* {{EurConversionRate}} |Round(2)|Localise {{/Wp\_Eval}} EUR {{/Invoice}}

    This code filters the foreign exchange (FX) rate for converting from EUR to the invoice currency, for example, USD, sorts the results by `RateDate` in descending order to retrieve the most recent rate, and assigns that rate to a temporary variable called `EurConversionRate` using `Cmd_Assign`. It then displays the rate details, including the rate value, its date, and the rate set name, followed by the original invoice amount in its billing currency. Finally, it calculates and displays the converted amount by multiplying the original amount by the retrieved FX rate.

    Also, if you're generating an invoice and want to display a custom FX rate for a given `CurrencyFrom` and `RateDate`, you can filter it dynamically using invoice fields, like `Invoice.Currency` and `Invoice.InvoiceDate`.

    -   Retrieve rate based on invoice date:

        {{#FXCustomRates|FilterByRef(CurrencyTo,EQ,Invoice.Currency)|FilterByValue(CurrencyFrom,EQ,GBP)|FilterByValue(RateDate,EQ,Invoice.InvoiceDate)|First(1)}}
    -   Retrieve the latest:

        Rate:{{#FxCustomRates|FilterByRef(CurrencyTo,EQ,Invoice.Currency)|FilterByValue(CurrencyFrom,EQ,'EUR')|SortBy(RateDate,DESC)|First(1)}}

9.  Click Preview , and select an account and an invoice in the Preview Settings section to preview the corresponding PDF file. If a PDF file has multiple pages due to the conditional page breaks, you can see it in the invoice PDF file displayed.
