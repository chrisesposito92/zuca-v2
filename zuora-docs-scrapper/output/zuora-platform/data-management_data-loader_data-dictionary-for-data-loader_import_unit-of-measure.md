---
title: "Unit of Measure"
url: "https://docs.zuora.com/en/zuora-platform/data-management/data-loader/data-dictionary-for-data-loader/import/unit-of-measure"
product: "zuora-platform"
scraped_at: "2026-02-20T17:37:10.837Z"
---

# Unit of Measure

This reference topic lists all fields for UnitOfMeasure data dictionary.

A unit of measure (UOM) is the definable unit that you measure when determining charges. Use the UnitOfMeasure object to create and manage your company's units of measure. You can create as many units of measure as you need. This article lists all the fields associated with UnitOfMeasure.

Note: Fields with an asterisk mark indicate mandatory fields.

| Name | Description | Value |
| --- | --- | --- |
| Active | Indicates if the UOM is available for new product rate plans. | TRUE,FALSE(Case insensitive boolean value) |
| Decimal Places* | The number of digits to the right of the decimal point that you want to measure for the unit. | Number(0-9) |
| Displayed As | The name of the UOM that you want displayed on invoices. The default value is the UomName field value. | Alphanumeric |
| Rounding Mode | Specifies whether to round the UOM value up or down when the value exceeds the DecimalPlaces field value. The default value is Up. | UOM valuesUp,Down |
| UOM Name* | The name of the UOM, such as license or GB. This name is displayed in query results and in the web-based UI labels. If you want a different name to be displayed on invoices, then use the DisplayedAs field to provide the invoice label. | Alphanumeric |
