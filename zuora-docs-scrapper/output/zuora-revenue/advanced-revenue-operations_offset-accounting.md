---
title: "Offset accounting"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/offset-accounting"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:20:02.338Z"
---

# Offset accounting

Offset accounting in Zuora Revenue involves reclassifying initial accounting entries to Deferred Offset or Revenue Offset accounts during billing, ensuring accurate financial reporting.

Offset accounting usually refers to the cancellation of an accounting entry with an equal but opposite entry. In Zuora Revenue, the initial accounting entries created can be reclassified to either Deferred Offset account or Revenue Offset account for offset accounting. The following general rules apply to offset accounting in Zuora Revenue:

-   The trigger of this reclassification is at the time of billing.
-   The offset accounting entry is created in the transactional currency of the associated transaction line.

## Account type requirement

For Zuora Revenue to process offset accounting, the Revenue Offset account and the Deferred Offset account must be created based on the appropriate balance sheet account or income statement account in the system. To create an account type, navigate to Setups > Application > Account Setup > Account Type . For more information, see Accounting Setup (link to the topic under System Related Configuration when available).

## Input data requirement

For Zuora Revenue to perform reclassification for offset accounting, at the time of billing, you must provide the appropriate offset account type in the uploaded invoice transactions (Line Type = INV).

One transaction line can have only one offset account specified. If both Deferred Offset account and Revenue Offset account are provided for the same transaction line, an error will be reported against this line in Zuora Revenue staging table. You must fix the error and upload the source data again to Zuora Revenue.

## Accounting examples

Three examples are provided to help you understand the offset accounting behaviors in Zuora Revenue.

## Offset to revenue account

The following table displays the accounting entries that are created for offsetting to the Revenue Offset account.

The Contract Liability entry is an existing entry that Zuora Revenue creates as part of billing. The first Revenue Offset entry line is created as part of reclassification. The second Revenue Offset entry line represents the entry in the upstream system, which is created as part of reclassification.

| Account Type | Account # | Dr | Cr | Initial Entry | Initial Entry Reporting | Postable |
| --- | --- | --- | --- | --- | --- | --- |
| Revenue Offset | 40000 | 100 |  | N | Y | Y |
| Contract Liability | 23000 |  | 100 | N | Y | Y |
| Revenue Offset | 40000 |  | 100 | Y | Y | N |

## Offset to deferred account

The following table displays the accounting entries that are created for offsetting to the Deferred Offset account.

The Contract Liability entry is an existing entry that Zuora Revenue creates as part of billing. The first Revenue Offset entry line is created as part of reclassification. The second Revenue Offset entry line represents the entry in the upstream system, which is created as part of reclassification.

| Account Type | Account # | Dr | Cr | Initial Entry | Initial Entry Reporting | Postable |
| --- | --- | --- | --- | --- | --- | --- |
| Deferred Offset | 27000 | 100 |  | N | Y | Y |
| Contract Liability | 23000 |  | 100 | N | Y | Y |
| Deferred Offset | 27000 |  | 100 | Y | Y | N |

## Offset for bundle lines

When a bundle line is involved in offset accounting, Zuora Revenue first performs reclassification of the offset account at the parent line level, and then reclassify the deferred or contract liability initial entries for children lines.

The following tables explain the two-step reclassification for offsetting to the Revenue Offset account.

The Contract Liability entry is an existing entry that Zuora Revenue creates as part of billing. The first Revenue Offset entry line is created as part of reclassification. The second Revenue Offset entry line represents the entry in the upstream system, which is created as part of reclassification.

For the three children lines, Zuora Revenue updates the Initial Entry flag to N and sets the Postable flag to N.

| Line item | Account Type | Account # | Dr | Cr | Initial Entry | Initial Entry Reporting | Postable |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Parent 1 | Revenue Offset | 40000 | 100 |  | N | Y | Y |
| Parent 1 | Contract Liability | 20000 |  | 100 | N | Y | Y |
| Parent 1 | Revenue Offset | 40000 |  | 100 | Y | Y | N |
| Child 1 | Contract Liability | 21000 |  | 25 | N | Y | Y |
| Child 2 | Contract Liability | 22000 |  | 25 | N | Y | Y |
| Child 3 | Contract Liability | 23000 |  | 50 | N | Y | Y |
