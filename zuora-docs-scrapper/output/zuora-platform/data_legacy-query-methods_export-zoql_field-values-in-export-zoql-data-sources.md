---
title: "Field Values in Export ZOQL Data Sources"
url: "https://docs.zuora.com/en/zuora-platform/data/legacy-query-methods/export-zoql/field-values-in-export-zoql-data-sources"
product: "zuora-platform"
scraped_at: "2025-12-24T18:52:40.397Z"
---

# Field Values in Export ZOQL Data Sources

Explains the differences in field values between data sources and the SOAP API in various versions of the Zuora WSDL, focusing on changes from version 78 to 79.

Each data source provides objects that are also available through the SOAP API.

Prior to version 79 of the Zuora WSDL, the following fields in data sources had different values from the corresponding SOAP API fields:

-   `InvoiceItem.ProcessingType`

-   `JournalEntry.TransactionType`

-   `RatePlanCharge.BillingPeriod`

-   `RatePlanCharge.BillingTiming`

-   `RatePlanCharge.EndDateCondition`

-   `RatePlanCharge.ListPriceBase`

-   `RatePlanCharge.TriggerEvent`

-   `RatePlanCharge.UpToPeriodsType`

-   `RatePlanChargeTier.PriceFormat`

-   `ProductRatePlanCharge.BillingPeriod`

-   `ProductRatePlanCharge.BillingTiming`

-   `ProductRatePlanCharge.EndDateCondition`

-   `ProductRatePlanCharge.ListPriceBase`

-   `ProductRatePlanCharge.SmoothingModel`

-   `ProductRatePlanCharge.TriggerEvent`

-   `ProductRatePlanCharge.UpToPeriodsType`

-   `ProductRatePlanChargeTier.PriceFormat`


## Guidance

In version 79 and higher of the Zuora WSDL, the values of the above data source fields match the values of the corresponding SOAP API fields. If you are using version 79 or higher of the Zuora WSDL, you do not need to consider this guidance.

If you are using an earlier version of the Zuora WSDL, your Export ZOQL queries must use data source field values, not SOAP API field values. For example, in version 78 of the Zuora WSDL, the possible values of the `RatePlanCharge.TriggerEvent` field are:

| TriggerEvent Values in RatePlanCharge Data Source | TriggerEvent Values in RatePlanCharge SOAP API Object |
| --- | --- |
| UCE | ContractEffective |
| USA | ServiceActivation |
| UCA | CustomerAcceptance |
| USD | SpecificDate |

This means that, for example, in version 78 of the Zuora WSDL the correct way to filter by a value of `RatePlanCharge.TriggerEvent` is:

select RatePlanCharge.TriggerEvent from RatePlanCharge where RatePlanCharge.TriggerEvent = 'UCE'

You can use the "Describe object" API call to compare the values of data source fields in different versions of the Zuora WSDL. See the [Zuora API Reference](https://developer.zuora.com/v1-api-reference/introduction/) for information about the "Describe object" API call.

## Example

| RatePlanCharge.TriggerEvent Values in WSDL 78 | RatePlanCharge.TriggerEvent Values in WSDL 79 |
| --- | --- |
| To view the possible values of the TriggerEvent field in the RatePlanCharge data source in version 78 of the Zuora WSDL, use the "Describe object" API call with the following URL:.../78/describe/RatePlanChargeThe response body contains the possible field values:<field> <name>TriggerEvent</name> ... <options> <option>UCE</option> <option>USA</option> <option>UCA</option> <option>USD</option> </options> | To view the possible values of the TriggerEvent field in the RatePlanCharge data source in version 79 of the Zuora WSDL, use the "Describe object" API call with the following URL:.../79/describe/RatePlanChargeThe response body contains the possible field values:<field> <name>TriggerEvent</name> ... <options> <option>ContractEffective</option> <option>ServiceActivation</option> <option>CustomerAcceptance</option> <option>SpecificDate</option> </options> |
