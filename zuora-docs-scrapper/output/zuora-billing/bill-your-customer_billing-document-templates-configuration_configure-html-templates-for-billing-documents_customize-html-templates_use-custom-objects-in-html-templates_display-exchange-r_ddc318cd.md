---
title: "Display exchange rates using FxCustomRate object"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/use-custom-objects-in-html-templates/display-exchange-rates-using-fxcustomrate-object"
product: "zuora-billing"
scraped_at: "2025-12-24T05:42:17.243Z"
---

# Display exchange rates using FxCustomRate object

Learn how to use the FxCustomRate object to retrieve and display custom foreign exchange rates within HTML templates efficiently.

The `FxCustomRate` object allows you to retrieve and display custom foreign exchange (FX) rates directly within HTML templates, without the need to duplicate data in separate custom objects. This object allows you to:

-   Retrieve exchange rates using filters such as `CurrencyFrom` , `CurrencyTo` , and `RateDate` .

-   Display the latest or matching rate for an invoice.

-   Assign the rate to a variable using `Cmd_Assign` .

-   Multiply by an amount to display converted currency on an invoice, credit memo, or debit memo.


Example:

{{#Invoice}} <br> Converted Amount to EUR: {{#FxCustomRates|FilterByRef(CurrencyTo,EQ,Invoice.Currency)|FilterByValue(CurrencyFrom,EQ,'EUR')|SortBy(RateDate,DESC)|First(1)}} {{Cmd\_Assign(EurConversionRate,Rate,True)}} <br> "Rate:RateDate:RateSetName" <br> {{Rate}}:{{RateDate}}:{{RateSetName}} {{/FxCustomRates|FilterByRef(CurrencyTo,EQ,Invoice.Currency)|FilterByValue(CurrencyFrom,EQ,'EUR')|SortBy(RateDate,DESC)|First(1)}} <br> Original Amount: {{Amount|Round(2)|Localise}} {{Invoice.Currency}} <br> Converted Amount: {{#Wp\_Eval}} {{Amount}} \* {{EurConversionRate}} |Round(2)|Localise {{/Wp\_Eval}} EUR {{/Invoice}}

Note:

If you previously stored FX rates using custom objects, we recommend migrating to the FxCustomRate object for a cleaner and more reliable solution.

For more on uploading or managing FX rates, see:

-   Import Foreign Exchange Rates

-   Manage Currency Conversion
