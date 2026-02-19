---
title: "Manual journal entry linkage options"
url: "https://docs.zuora.com/en/zuora-revenue/month-end-process/manual-journal-entries/manual-journal-entry-linkage-options"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:38:41.448Z"
---

# Manual journal entry linkage options

Zuora Revenue supports various Manual Journal Entry (MJE) linkage options, including unlinked, line-linked, and contract-linked types, which determine how MJEs associate with Revenue Contracts and appear in revenue reports.

## Overview

Zuora Revenue supports the following Manual Journal Entry (MJE) linkage options as a part of the RC linked manual journal entry feature.

-   Unlinked
-   Line-linked
-   Revenue Contract-linked

These linkage types determine how manual journal entries associate with Revenue Contracts and how they appear in revenue reports. Further in this topic we explain the above-listed linkage options and,

-   What happens when each type is booked and approved
-   How MJEs appear in Revenue reports

## Unlinked MJE Lines

Unlinked MJE lines are not associated with a Revenue Contract. When an unlinked MJE line is booked and approved, Zuora Revenue automatically creates a new RC that includes an MJE line and a corresponding performance obligation. No Revenue Schedule is created.

## Line-linked MJE lines

When line-linked MJE lines are booked and approved, only RC Schedule (RC Schd) entries are created. Note that, as the MJE is already linked at the line level, the system does not need to create duplicate transactional data.

## Revenue Contract-linked MJE line

When booked and approved, Zuora Revenue establishes the required contract-level revenue structure for the adjustment and creates the following:

-   RC line entries
-   RC POB entries
-   LN Cost (for cost-type lines)
-   Line PA (for Variable Consideration lines)

An MJE line is treated as Revenue Contract–linked when:

-   RC ID is populated on the JE line, and
-   Sales Order Line ID (Doc Line ID) is left blank.

## Field Reference

-   RC ID – Establishes the link between the JE line and a specific Revenue Contract.
-   Sales Order Line ID (Doc Line ID) – Establishes the link between the JE line and a specific sales order line.

## Examples

Below are some examples for each linkage type and how data looks like in these scenarios.

| ID | HEADER_ID | CURR | AMOUNT | DR_ACTIVITY_TYPE | CR_ACTIVITY_TYPE | RC_ID | DOC_LINE_ID | RC_LINE_ID |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 36090006 | 12408 | USD | 1000 | Revenue |  | 10783 |  |  |
| 36090007 | 12408 | USD | 1000 |  | Contract Liability | 10783 |  |  |

## RC Line

| ID | RC_ID | TYPE | RC_POB_ID |
| --- | --- | --- | --- |
| 16000 | 10783 | SO | 12200 |
| 16001 | 10783 | SO | 12201 |
| 16003 | 10783 | SO | 12202 |
| 16005 | 10783 | SO | 12203 |
| 16007 | 10783 | SO | 12204 |
| 16009 | 10783 | SO | 12205 |
| 16011 | 10783 | SO | 12206 |
| 16013 | 10783 | SO | 12207 |
| 16014 | 10783 | SO | 12208 |
| 16015 | 10783 | SO | 12209 |
| 16016 | 10783 | SO | 12210 |
| 16018 | 10783 | SO | 12211 |
| 36090008 | 10783 | MJE | 12900 |
| 36090009 | 10783 | MJE | 12901 |

## RC POB

| ID | NAME | POB_ID | POB_VERSION | RC_ID |
| --- | --- | --- | --- | --- |
| 12900 | MJE | 2 | 1 | 10783 |
| 12901 | MJE | 2 | 1 | 10783 |
| 12200 | TEST TST_0335_7 | 10020 | 1 | 10783 |
| 12201 | TEST TST_0335_7 | 10020 | 1 | 10783 |
| 12202 | TEST TST_0335_7 | 10020 | 1 | 10783 |
| 12203 | TEST TST_0335_7 | 10020 | 1 | 10783 |
| 12204 | TEST TST_0335_7 | 10020 | 1 | 10783 |
| 12205 | TEST TST_0335_7 | 10020 | 1 | 10783 |
| 12206 | TEST TST_0335_7 | 10020 | 1 | 10783 |
| 12207 | TEST TST_0335_7 | 10020 | 1 | 10783 |
| 12208 | TEST TST_0335_7 | 10020 | 1 | 10783 |
| 12209 | TEST TST_0335_7 | 10020 | 1 | 10783 |
| 12210 | TEST TST_0335_7 | 10020 | 1 | 10783 |
| 12211 | TEST TST_0335_7 | 10020 | 1 | 10783 |

## RC Schedule

| ID | REL_ID | RC_ID | RC_VER | LINE_ID | POB_ID | CURR | AMOUNT | REL_PCT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 71362002 | 1991170950631919616 | 10783 | 0 | 36090006 | 12900 | USD | -1000 | 0 |
| 71362003 | 1991170951458197504 | 10783 | 0 | 36090007 | 12901 | USD | -1000 | 0 |

## RC Rollforward Report

In the RC Rollforward Report, the Revenue line shows up like this:

| BOOK NAME | ORG NAME | RC LINE RC ID | RC POB NAME | POB TMPL NAME | POB SATISFIED FLAG | EVENT NAME | SALES ORDER NUM | F TOTAL RELEASE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GAAP | DEFAULT | 10783 | TEST TST_0335_7 | Upon_booking | Point In Time | Upon Booking (Full Booking Release) | 4 | -4942010.87 |
| GAAP | DEFAULT | 10783 | TEST TST_0335_7 | Upon_booking | Point In Time | Upon Booking (Full Booking Release) | 3 | -782832.88 |
| GAAP | DEFAULT | 10783 | TEST TST_0335_7 | Upon_booking | Point In Time | Upon Booking (Full Booking Release) | 6 | 3119422.34 |
| GAAP | DEFAULT | 10783 | TEST TST_0335_7 | Upon_booking | Point In Time | Upon Booking (Full Booking Release) | 12 | 2076806.97 |
| GAAP | DEFAULT | 10783 | TEST TST_0335_7 | Upon_booking | Point In Time | Upon Booking (Full Booking Release) | 7 | -3437383.33 |
| GAAP | DEFAULT | 10783 | MJE | AUTO POB | Point In Time | Manual |  | 1000 |
| GAAP | DEFAULT | 10783 | TEST TST_0335_7 | Upon_booking | Point In Time | Upon Booking (Full Booking Release) | 1 | -52.47 |
| GAAP | DEFAULT | 10783 | TEST TST_0335_7 | Upon_booking | Point In Time | Upon Booking (Full Booking Release) | 2 | -145.32 |
| GAAP | DEFAULT | 10783 | TEST TST_0335_7 | Upon_booking | Point In Time | Upon Booking (Full Booking Release) | 5 | -2060548.59 |
| GAAP | DEFAULT | 10783 | TEST TST_0335_7 | Upon_booking | Point In Time | Upon Booking (Full Booking Release) | 11 | -783713.62 |
| GAAP | DEFAULT | 10783 | TEST TST_0335_7 | Upon_booking | Point In Time | Upon Booking (Full Booking Release) | 8 | 0 |
