---
title: "Configure Currency Lookup as a processor"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/mediation/meter-components/configure-currency-lookup-as-a-processor"
product: "zuora-platform"
scraped_at: "2025-12-24T05:29:46.671Z"
---

# Configure Currency Lookup as a processor

Add a Currency Lookup processor to a custom meter for currency conversion using Oanda exchange rates.

You can add a Currency Lookup processor to a custom meter to perform currency conversion functions. This feature supports only exchange rate types from Oanda. To create a meter with Currency Lookup as the processor:

1.  Create a Custom Meter. See Create a new meter using custom method.
2.  Select Currency Lookup as the processor.
3.  Select options for the From and To sections. You can select different currencies or select from even fields.

    -   The From Event drop-down list will show the available event fields.
    -   The Currency drop-down list will show different currency types.

4.  Select a Rate Type from the drop-down list.

    -   Click Select Rate Type to see the different rate types provided by Oanda.
    -   Click From Event to see the available event fields.

5.  Select the Date Field to determine the time format.
6.  Enter the Rate Field Name that will be returned return from Finance.

A currency lookup processor is configured for the custom meter.
