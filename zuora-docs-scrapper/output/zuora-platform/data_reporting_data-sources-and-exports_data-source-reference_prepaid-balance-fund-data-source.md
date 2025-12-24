---
title: "Prepaid Balance Fund data source"
url: "https://docs.zuora.com/en/zuora-platform/data/reporting/data-sources-and-exports/data-source-reference/prepaid-balance-fund-data-source"
product: "zuora-platform"
scraped_at: "2025-12-24T18:47:13.096Z"
---

# Prepaid Balance Fund data source

Data source to export the consumption information of your prepaid subscribers

## Overview

Use this data source to export the consumption information of your prepaid subscribers. A typical use case of this data source is revenue recognition.

## Objects available in the data source

The following sections list the objects available in the data source.

## Base object: Prepaid Balance Fund

The following fields on the Prepaid Balance Fund object are available for data source export:

| Field | Type | Description |
| --- | --- | --- |
| ID | string | The identifier. |
| Account ID | string | The Account Id. |
| Funded Balance | decimal | The funded balance: total units of the fund. |
| Balance | decimal | Remaining balance on the fund: remaining units of the fund. |
| Funding Price | fixed | The price amount of a fund. A rounded value that follows the associated invoice owner's currency rounding rule.Calculation: (Number of Billing Periods in one Validity Period) * (Price of one Billing Period) |
| Consumption Amount | decimal | The amount of revenue that should be recognized for the fund. A rounded value that follows the associated invoice owner's currency rounding rule.Calculation: (Funded Balance - Balance) * (Funding Price / Funded Balance) |
| Charge Segment Number | integer | The number of the charge segment. Note that one prepaid balance fund can only belong to one charge segment. |
| Start Date | date | Start date of the fund effective period. |
| End Date | date | End date of the fund effective period. |
| Created By ID | string | The ID of the user who created the Prepaid Balance Fund. |
| Created Date | datetime | The date when the Prepaid Balance Fund is created. |
| Updated By ID | string | The ID of the user who updated the Prepaid Balance Fund. |
| Updated Date | datetime | The date when the Prepaid Balance Fund is updated. |
| Priority | Integer | The priority of the Fund. Positive values: 10(high), 50(medium),100(low) |

## Related objects

| Object | Description |
| --- | --- |
| Product | The product associated with the fund. |
| Product Rate Plan | The product rate plan associated with the fund. |
| Product Rate Plan Charge | The product rate plan charge associated with the fund. |
| Rate Plan | The rate plan associated with the fund. |
| Rate Plan Charge | The rate plan charge associated with the fund. |
