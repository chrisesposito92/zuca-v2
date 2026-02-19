---
title: "Bill Run Advanced Filter - Built-in variables"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-run-advanced-filter/custom-filter-creation-through-bill-run-advanced-filter/bill-run-advanced-filter---built-in-variables"
product: "zuora-billing"
scraped_at: "2026-02-19T03:13:37.500Z"
---

# Bill Run Advanced Filter - Built-in variables

Details on built-in variables used in the Bill Run Advanced Filter, including descriptions, formats, timezone handling, example values, and use cases.

## `{{BillRunDate}}`

Description

Returns the date when the bill run was executed (started).

Format

`yyyy-MM-dd` (for example, `2024-06-15`).

Timezone handling

Converts the execution timestamp to the tenant’s configured timezone before extracting the date.

Example values

-   Executed at `2024-06-15 10:30:00 UTC` with tenant timezone `America/Los_Angeles` (UTC-7) returns `2024-06-15`.
-   Executed at `2024-06-15 02:00:00 UTC` with tenant timezone `America/Los_Angeles` returns `2024-06-14` due to timezone offset.

Use case

Filter accounts or subscriptions based on when the bill run actually started. Useful for auditing or when filtering logic depends on the physical execution date.

## `{{TargetDate}}`

Description

Returns the target date configured for the bill run. The target date determines the billing period end date for usage and recurring charges.

Format

`yyyy-MM-dd` (for example, `2024-06-30`).

Timezone handling

No timezone conversion. This is a date-only field stored as-is.

Example values

-   `2024-06-30` (end of June)
-   `2024-12-31` (end of year)

Use case

Filter accounts or subscriptions where a date custom field should be compared against the bill run’s target date. For example, filter accounts where `ContractEndDate__c <= {{TargetDate}}` to only bill accounts whose contracts have not expired by the target date.

## `{{InvoiceDate}}`

Description

Returns the invoice date configured for the bill run. This is the date that appears on generated invoices.

Format

`yyyy-MM-dd` (for example, `2024-06-15`).

Timezone handling

No timezone conversion. This is a date-only field stored as-is.

Example values

-   `2024-06-15`
-   `2024-07-01`

Use case

Filter accounts or subscriptions based on the invoice date. For example, filter accounts where `BillingStartDate__c <= {{InvoiceDate}}` to only include accounts that should start being billed by the invoice date.

## `{{AsRunDay}}`

Description

Returns the day of the month from the bill run execution date, formatted for Bill Cycle Day (BCD) matching.

Format

-   For non–last-day executions: two-digit day (for example, `01`, `15`, `28`)
-   For last-day executions: a comma-separated range from that day to 31 (for example, `28,29,30,31`)

Timezone handling

Converts the execution timestamp to the tenant’s configured timezone before extracting the day.

Example values

-   If executed on June 15th: `15`
-   If executed on June 1st: `01`
-   If executed on February 28th (non-leap year, last day): `28,29,30,31`
-   If executed on April 30th (last day): `30,31`

Use case

Filter subscriptions by their Bill Cycle Day so that only subscriptions that should be billed on the current day are processed. For example, `Subscription.BillCycleDay__c eq {{AsRunDay}}`.

## `{{Today}}`

Description

Returns the current date at the time of evaluation. This is a framework-level variable that works in any generic filter context and is not specific to bill runs.

Format

`yyyy-MM-dd` (for example, `2024-06-15`).

Timezone handling

Converts the current system time to the tenant’s configured timezone before extracting the date.

Example values

-   If the current time is `2024-06-15 10:30:00 UTC` and the tenant timezone is `America/Los_Angeles`, the value returned is `2024-06-15`.
-   If the current time is `2024-06-15 02:00:00 UTC` and the tenant timezone is `America/Los_Angeles`, the value returned is `2024-06-14`.

Use case

A general-purpose current-date variable for any filter. Unlike `{{BillRunDate}}`, this always returns the actual current system date, making it suitable for non-bill-run contexts or when the real current date is required.

## Key Differences Summary

| Variables | Source | Timezone Conversion | Stability |
| --- | --- | --- | --- |
| BillRunDate | Bill run's executedOn timestamp | Yes (tenant TZ) | Stable across re-runs |
| TargetDate | Bill run's configured target date | No | Stable (configured value) |
| InvoiceDate | Bill run's configured invoice date | No | Stable (configured value) |
| AsRunDay | Bill run's executedOn day-of-month | Yes (tenant TZ) | Stable across re-runs |
| Today | Current system time | Yes (tenant TZ) | Changes with time |
