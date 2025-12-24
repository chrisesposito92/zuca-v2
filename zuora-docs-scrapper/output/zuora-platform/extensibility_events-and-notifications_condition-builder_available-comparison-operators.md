---
title: "Available comparison operators"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/events-and-notifications/condition-builder/available-comparison-operators"
product: "zuora-platform"
scraped_at: "2025-12-24T05:25:35.785Z"
---

# Available comparison operators

Provides available comparison operators for the condition builder, including value examples.

In a condition, the comparison operator checks the values in the Field and Value fields and returns a boolean value.

The following table lists all supported comparison operators and examples:

| Operator | Example of the Field field | Example of the Value field |
| --- | --- | --- |
| Is equal to | Change Type | UPDATE |
| Is not equal to | Change Type | DELETE |
| Is greater than | (Invoice) Amount | 1000.0 |
| Is greater than or equal to | (Invoice) Amount | 1000.0 |
| Is less than | (Invoice) Amount | 1000.0 |
| Is less than or equal to | (Invoice) Amount | 1000.0 |
| Starts with | (Account) AccountNumber | A |
| In or match | (Account) Batch | Batch8, Batch9 |
| Is null | (Account) CrmId | (N/A) |
| Is not null | (Account) CrmId | (N/A) |
| Is empty | (Account) Notes | (N/A) |
| Is not empty | (Account) Notes | (N/A) |
