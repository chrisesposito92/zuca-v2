---
title: "RatingDetail schema fields and descriptions"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/configure-html-templates-for-billing-documents/customize-html-templates/configure-ratingdetails-in-html-template/ratingdetail-schema/ratingdetail-schema-fields-and-descriptions"
product: "zuora-billing"
scraped_at: "2025-12-24T05:41:28.622Z"
---

# RatingDetail schema fields and descriptions

Provides detailed descriptions of the RatingDetail schema fields, including their purposes and uses in billing and invoicing processes.

| Field | Description | Use |
| --- | --- | --- |
| Id | Unique identifier for the Rating Detail record. | Ensures each rating detail entry is distinct for tracking and referencing. |
| InvoiceItemId | Links the Rating Detail to its associated invoice item. | Correlates charges to their respective invoices. |
| CreditMemoItemId | Links the Rating Detail to its associated credit memo item. | Supports detailed credit adjustments for customers. |
| ChargeType | Specifies the type of charge (for example, recurring, usage). | Differentiates charge models for customer clarity. |
| ChargeModel | Defines the charge structure (for example, tiered, flat rate, volume-based). | Helps render pricing details accurately. |
| Formula | A mathematical representation of the charge calculation. | Displays calculations, such as tier start/end units and rates, in the UI. |
| Calculation | Breaks down the calculation process by applying values to the formula. | Demonstrates how charges are derived for transparency. |
| CalculatedAmount | The final result of the charge calculation. | Displayed as the charge amount billed. |
| Currency | The currency code for the calculated amount, such as USD or EUR. | Indicates the currency for international customers. |
| UnitOfMeasure | Defines the unit for usage charges, such as GB and hours. | Helps customers understand what was measured. |
| BilledQuantity | Quantity billed during the same period for on-demand usage rating. | Displays prior usage quantities. |
| BilledAmount | Amount billed during the same period for on-demand usage rating . | Shows previously charged amounts. |
| Quantity | The total usage or units for the charge. | Clarifies the quantity driving the charge. |
| IsProration | Indicates if the charge is prorated (true/false). | Informs customers about partial-period adjustments. |
| IsCredit | Indicates if the charge is a credit (true/false). | Identifies credit adjustments. |
| ListPriceBase | Base price set in the rate plan charge. | Establishes a baseline for discounts or calculations. |
| BillingCycleDay/Type | Indicates the cycle day or type for recurring charges. | Aligns billing with customer expectations. |
| BillingPeriod | The billing frequency (for example, monthly, yearly). | Specifies the timeframe for charges. |
| SpecificBillingPeriod | Indicates any unique billing periods. | Supports custom billing scenarios. |
| AmountWithoutTax | The pre-tax amount of the charge. | Separates tax-inclusive amounts for transparency. |
| Proration Rules | Flags and rules for prorating charges based on period, days in a month, or discount application. | Provides detailed prorated adjustments. |
| Dates | Start and end dates for billing periods, terms, charges, and subscriptions. | Tracks service timelines for accurate billing. |
| Discount Information | BasePrice : Value of discounts (fixed/percentage).DiscountClass : Classification of the discount.DiscountApplySequence : Sequence for applying multiple discounts. | Details how discounts affect the overall charge. |
| Prepaid/Commitment Balances | FundingPrice : Total price of the validity period fundRemainingBalance : Remaining fund balance. | Tracks fund usage for prepaid plans. |
