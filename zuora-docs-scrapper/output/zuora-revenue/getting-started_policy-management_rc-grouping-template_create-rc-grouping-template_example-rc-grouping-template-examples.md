---
title: "Example: RC grouping template examples"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/rc-grouping-template/create-rc-grouping-template/example-rc-grouping-template-examples"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:23:59.224Z"
---

# Example: RC grouping template examples

This document provides examples of primary and secondary grouping rules in Zuora Revenue, illustrating how transaction lines are grouped based on various criteria such as contract ID, PO number, and sales order number.

## Examples

Examples are provided to help you understand the effect of primary grouping rules and secondary grouping rules.

## Primary grouping example

In this example, the following rules are configured in the Primary RC Rules section.

![primary-grouping-example.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5bc6c234-961d-4af5-afdc-b6e1b4cbe665?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjViYzZjMjM0LTk2MWQtNGFmNS1hZmRjLWI2ZTFiNGNiZTY2NSIsImV4cCI6MTc2NjYzNjYzNywianRpIjoiNjFlMmNlZTIwY2FjNDRhODk4NGEzZGM1NmUyNjAzYjIiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.cYWuqXwk130-PW1woAUKr3zn4tytkQTI5tGXP3a6TFo)

According to the grouping rule hierarchy, Zuora Revenue groups the transaction lines in the following sequence:

1.  The transaction lines with the same contract ID are first grouped together into one revenue contract.
2.  For transaction lines that do not have the same contract ID, Zuora Revenue then groups those transaction lines with both the same PO number and the same customer ID to form one revenue contract.
3.  If the above two rules are not applicable, the transaction lines with the same Sales Order Number are grouped together. Note that the third grouping rule is valid only during the RC creation period. If the RC creation period has elapsed, the Sales Order Number is no longer used for RC grouping.

## Secondary grouping example 1

In this scenario, the secondary grouping rules are configured as follows in the RC grouping template:

-   Secondary Grouping Rules = Enable
-   Associated Contract Reference = SO Number
-   The Grouping Option setting does not matter in this scenario.

Changes happening on your customer's side and the system behavior are outlined as follows:

| Sequence | What happens on your customer side | What happens in Zuora Revenue |
| --- | --- | --- |
| 1 | On Jan 1, 2022, the customer purchased product A. | The sales order line SO#1 is collected. The SO Number on the line is OppID1234.The system creates a revenue contract RC10001 with line SO#1. |
| 2 | On Feb 15, 2022, due to implementation complexity, the customer also requested professional services but signed an amendment, which is booked as sales order line SO #24. | The sales order line SO#24 is collected for the professional services. The SO Number on the line is OppID1234.The system examines the associate contract reference (SO Number) and identifies a match between SO#1 and SO#24.The system groups SO#24 into RC10001. |

## Secondary grouping example 2

In this scenario, the secondary grouping rules are configured as follows in the RC grouping template:

-   Secondary Grouping Rules = Enable
-   Associated Contract Reference = SO Number
-   The Grouping Option setting does not matter in this scenario.

Changes happening on your customer's side and the system behavior are outlined as follows:

| Sequence | What happens on your customer's side | What happens in Zuora Revenue |
| --- | --- | --- |
| 1 | On January 1, 2022, the customer purchased product A and product B. | The sales order line SO#1 is collected with Product A and Product B items. The SO Number on the line is OppID1234.The system creates a revenue contract RC10001 with line SO#1. |
| 2 | On March 15, 2022, due to pricing issues, the customer requested to cancel Product B and booked a new replacement order for Product B. | RORD line is collected, and associated with the line SO#1 to cancel Product B in the previous line SO #1.The sales order line SO#66 is collected for the replacement order of Product B. The SO Number on the line is OppID1234.The system examines the associate contract reference (SO Number) and identifies a match between SO#1 and SO#66. The system groups the line SO#66 into RC10001. |

## Secondary grouping example 3

In this scenario, the secondary grouping rules are configured as follows in the RC grouping template:

-   Secondary Grouping Rules = Enable
-   Associated Contract Reference = SO Number
-   The Grouping Option setting does not matter in this scenario.

Changes happening on your customer's side and the system behavior are outlined as follows:

| Sequence | What happens on your customer's side | What happens in Zuora Revenue |
| --- | --- | --- |
| 1 | On January 1, 2022, the customer purchased product A with related support services. | The sales order line SO#1 is collected with Product A and related support services. The SO Number on the line is OppID1234.The system creates a revenue contract RC10001 with line SO#1. |
| 2 | Due to implementation complexity, the customer was not satisfied with the product and requested free implementation services and signed an amendment on June 15, 2022. | The sales order line SO#66 is collected for the free implementation services. The free implementation services are to compensate the line SO#1, so the SO Number on the line is OppID1234.The system examines the associate contract reference (SO Number) and identifies a match between SO#1 and SO#66.The system groups the line SO #66 into RC10001. |

## Secondary grouping example 4

In this scenario, the secondary grouping rules are configured as follows in the RC grouping template:

-   Secondary Grouping Rules = Enable
-   Associated Contract Reference = SO Number
-   Grouping Option = Separately collect the contract modifying order lines with different CT Mod IDs to the RCs where their respective associated order references are.

Changes happening on your customer's side and the system behavior are outlined as follows:

| Sequence | What happens on your customer's side | What happens in Zuora Revenue |
| --- | --- | --- |
| 1 | The customer purchased a 3-year subscription on Product A on January 1, 2022, which is booked under SO#1. | In January 2022, the sales order line SO#1 is collected for the Product A subscription. SO Number is OppID1234.The system creates a revenue contract RC10001 with line SO#1. |
| 2 | The customer purchased a 2-year subscription on Product B on June 15, 2020, which is booked under SO#14. | The sales order line SO#14 is collected for the Product B subscription. SO Number is OppID5678.The system creates a revenue contract RC10130 with line SO#14. |
| 3 | Then, the customer requested an add-on of Product C as well as an early renewal on product A and Product B by signing an amendment on Jan 15, 2022, effective Feb 1, 2022, co-terming the service end date of Product A, Product B, and Product C on June 30, 2024, booked under SO#66. | The sales order line SO#66 is collected with multiple associated contract references. SO Number for Product A is OppID1234. SO Number for Product B is OppID5678. SO Number for Product C is OppID9999.The system identifies that the associated contract reference with Product A is SO#1, Product B is SO#14, and Product C is null.Based on the grouping option, the system groups Product A in SO#66 into RC10001, groups Product B in SO#66 into RC10130, and creates RC10880 for Product C. |

## Secondary grouping example 5

In this scenario, the secondary grouping rules are configured as follows in the RC grouping template:

-   Secondary Grouping Rules = Enable
-   Associated Contract Reference = SO Number
-   Grouping Option = Collect the contract modifying order lines with different CT Mod IDs to the earliest RC of the group. If any RC is closed, unfreeze and group to the earliest.

Changes happening on your customer's side and the system behavior are outlined as follows:

| Sequence | What happens on your customer's side | What happens in Zuora Revenue |
| --- | --- | --- |
| 1 | The customer purchased a 3-year subscription on Product A on January 1, 2022, which is booked under SO #1. | The sales order line SO #1 is collected for the Product A subscription. SO Number is OppID1234.The system creates a revenue contract RC10001 with line SO#1. |
| 2 | The customer purchased a 2-year subscription on Product B on June 15, 2020, which is booked under SO #14. | The sales order line SO#14 is collected for the Product B subscription. SO Number is OppID5678.The system creates a revenue contract RC10130 with line SO#14. |
| 3 | Then, the customer requested an add-on of Product C as well as an early renewal on product A and Product B by signing an amendment on Jan 15, 2022, effective Feb 1, 2022, co-terming the service end date of Product A, Product B, and Product C on June 30, 2024, booked under SO #66. | In Feb 2022, the sales order line SO#66 is collected with multiple associated contract references. SO Number for Product A is OppID1234. SO Number for Product B is OppID5678. SO Number for Product C is OppID9999.The system identifies that the associated contract reference with Product A is SO#1, Product B is SO#14, and Product C is null.As of February 2022, RC10001 is closed and RC10130 is open. The system unfreezes RC10001 and then groups Product A, B, and C in SO#66 into RC10001. |
