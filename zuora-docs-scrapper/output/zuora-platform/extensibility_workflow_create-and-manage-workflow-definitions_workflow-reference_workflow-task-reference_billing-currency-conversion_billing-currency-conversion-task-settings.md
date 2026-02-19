---
title: "Billing: Currency Conversion - Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-currency-conversion/billing-currency-conversion---task-settings"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:40.651Z"
---

# Billing: Currency Conversion - Task settings

Use this reference to understand the task settings of the Billing: Currency Conversion task.

## Currency tab

-   Date - Specify the exchange rate date for the data.

-   Data offset - If date offset is 1, the task will use exchange rates one day before the exchange rate date. For example, if the exchange rate date is Jan. 8, 2019 and the date offset is 1, then the exchange rates from Jan. 7, 2019 will be used in the conversion.

-   Source Currency - The original currency of the transaction data.

-   Target Currency - The currency that you want to convert to.

-   Select Field for Conversion - It's recommended to select all applicable data fields that you will use.


## Credentials tab

-   Conversion System - Select Oanda. Now it is the only supported exchange rates provider.

-   Domain - This field is automatically entered.

-   OAuth Token - Enter your OAuth token for Oanda. You need to get the token from Oanda. See the [Oanda developer guide](https://developer.oanda.com/rest-live-v20/authentication/) for more information.
