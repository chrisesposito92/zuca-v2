---
title: "RORD collection sequence"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-impairment-overview/rord-collection-sequence"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:35:08.681Z"
---

# RORD collection sequence

Due to the accounting impact for Type 4 impairments, the collection sequence matters when RORD lines with Type 4 and other types are expected within the same batch or the same period.

## RORD Lines without Type 4

In general, if no RORD lines of Type 4 are involved, RORD lines with other types can be collected in the same batch or different batches in the same period.

| Scenario | Descriptions | System treatment | End-user action |
| --- | --- | --- | --- |
| 1 | Collect RORD lines of Type 1,2, or 3 in one batch.Collect RORD lines of Type 1, 2, or 3 in another batch. | Both batches can be collected.The latest type specified on the line will prevail and be used for contract impairment. The revenue contract will be reallocated. | N/A |

## RORD Lines with Type 4

When RORD lines of Type 4 and other types are involved, the lines with Type 4 should be collected last in a separate batch.

| Scenario | Descriptions | System treatment | End-user action |
| --- | --- | --- | --- |
| 1 | Collect RORD lines of Type 4 in one batch.Collect RORD lines of Type 4 in another batch. | Both batches can be collected.The system will stop allocation for the revenue contract and release the adjustment revenue on the line. | N/A |
| 2 | Collect RORD lines of Type 1, 2 or 3, and Type 4 in one batch. | The batch is stopped in staging. | Option 1: Update the Impairment Type flag on the RORD line in the batch and make sure that Type 4 does not coexist with other impairment types. Option 2: Delay the RORD line of Type 4 to the next open period. Option 3: Separate into two batches. Collect the RORD lines of lines of Type 1, 2 or 3 first. And collect RORD lines of Type 4 in a separate batch. See scenario 3 below for system expectations. |
| 3 | Collect RORD lines of Type 1, 2, or 3 in one batch.Collect RORD lines of Type 4 in another batch. | The first batch can be collected Whether the second batch can be collected falls into different circumstances:If RORD lines of Type 1 or Type 3 are collected in the first patch and revenue has been posted before the RORD line of Type 4 is collected, the second batch can be collected. The system will freeze allocation based on the posted amount, and set the R&R flag of the impaired revenue contract to R, which is visible in the Overview tab on the Revenue Contract Detail page.In any other circumstances, the second batch is stopped in staging. The latest type specified on the line in the first batch will prevail and be used for contract impairment. The revenue contract will be reallocated. | When the revenue contract is frozen by the system, you can manually unfreeze the contract. Then, the R&R Flag will be changed to Y.To collect the second batch:Option 1: Update the Impairment Type flag on the RORD line in the second batch.Option 2: Delay the second batch to the next open period.Option 3: Post the revenue for the RC and re-collect the second batch. |
| 4 | Collect the RORD lines of Type 4 in one batch.Collect RORD lines of Type 1, 2, or 3 in another batch. | The first batch can be collected, but the second batch is stopped in staging.The system will stop allocation and release the adjustment revenue on the line for Type 4. | To collect the second batch:Option 1: Update the Impairment Type flag on the RORD line in the second batch.Option 2: Change the revenue contract to a non R&R contract, go to Revenue Workbench, and unfreeze the revenue contract. |

Note:

Supported Impairment Types — R AND R WITHIN SSP (Type 4)

The impairment amount is kept as is and amortized over the term of the ripped contract. The ripped contract is closed for further linking. No new POB can be collected for the ripped contract. Instead, the new POB will go to a new revenue contract created by the system. If any deferral (either full or partial) happens to any line in the existing revenue contract, the system will not unfreeze the revenue contract, and the allocation will remain unaffected.
