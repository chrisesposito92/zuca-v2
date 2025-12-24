---
title: "Use case of unbilled usage revenue"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/consumption-revenue-recognition/use-case-of-unbilled-usage-revenue"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:34:53.329Z"
---

# Use case of unbilled usage revenue

In the use case of unbilled usage revenue, the Consumption Revenue functionality provides the ability to accrue usage revenue when the invoice term is in arrears. This article provides an example to understand this particular use case.

This section walks you through a series of events and system behaviors upon data collection.

1.  On January 1, 2022, a customer contract is executed and effective immediately based on the usage pricing model, which is a basic pay-as-you-go model with billing in arrears. In Zuora Revenue, a revenue contract is created with a sales order line based on the performance obligation (POB) template called Consumption - Usage Event (Non-Committed). No accounting entry is created.
2.  On January 15, 2022, $100 of usage is incurred and recorded. In Zuora Revenue, revenue is recognized to the Unbilled Revenue account because the invoice has not been issued. The sales order amount is greater than the invoice amount. Accounting entries are created as follows:

    | Account | Debit | Credit |
    | --- | --- | --- |
    | Unbilled Revenue | $100 |  |
    | Revenue |  | $100 |

3.  On January 31, 2022, an invoice for $100 is issued. In Zuora Revenue, the invoice is collected and processed. Unbilled revenue is cleared with the following accounting entries created:

    | Account | Debit | Credit |
    | --- | --- | --- |
    | AR | $100 |  |
    | Unbilled Revenue |  | $100 |

4.  On February 15, 2022, $20 of usage is incurred and recorded. In Zuora Revenue, revenue is recognized as Unbilled Revenue because the invoice has not been issued. The sales order amount is still greater than the invoice amount. Accounting entries are created as follows:

    | Account | Debit | Credit |
    | --- | --- | --- |
    | Unbilled Revenue | $20 |  |
    | Revenue |  | $20 |

5.  On February 16, 2022, a negative $50 of usage is incurred and recorded. In Zuora Revenue, revenue is adjusted from Unbilled Revenue first for the related negative usage recorded. Now, the sales order amount is less than the invoice amount. The system reconciles the difference between invoiced and yet-to-be-invoiced amounts to Contra AR. The expectation is for the Contra AR account to be cleared when further usage is incurred or through the collection of the corresponding credit memo. Accounting entries are created as follows:

    | Account | Debit | Credit |
    | --- | --- | --- |
    | Revenue | $50 |  |
    | Unbilled Revenue |  | $50 |
    | Unbilled Revenue | $30 |  |
    | Contra AR |  | $30 |

6.  On February 28, 2022, there is no event of invoice or credit memo. Nothing happens in the system.
7.  On March 15, 2022, $20 of usage is incurred and recorded. Revenue is first recognized to Unbilled Revenue because the invoice has not been issued. The sales order amount is less than the invoice amount. The system reconciles the difference between the invoiced and yet-to-be-invoiced amounts to existing Contra AR. Contra AR is adjusted to reconcile an updated difference. The expectation is for the Contra AR account to be cleared when further usage is incurred or through the collection of the corresponding credit memo. Accounting entries are created as follows:

    | Account | Debit | Credit |
    | --- | --- | --- |
    | Unbilled Revenue | $20 |  |
    | Revenue |  | $20 |
    | Contra AR | $30 |  |
    | Unbilled Revenue |  | $30 |
    | Unbilled Revenue | $10 |  |
    | Contra AR |  | $10 |

8.  On March 31, 2022, a credit memo is created for $10. In Zuora Revenue, the credit memo is collected and processed, which offsets the remaining AR. Till now, the sales order amount equals the invoice amount in this contract.

    | Account | Debit | Credit |
    | --- | --- | --- |
    | Contra AR | $10 |  |
    | AR |  | $10 |

    For a use case summary, see [here](/zuora-revenue/advanced-revenue-operations/consumption-revenue-recognition/use-case-of-unbilled-usage-revenue/use-case-summary).
