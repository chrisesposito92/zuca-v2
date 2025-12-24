---
title: "Use case summary"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/consumption-revenue-recognition/use-case-of-unbilled-usage-revenue/use-case-summary"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:34:55.730Z"
---

# Use case summary

This reference provides a summary of the same use case for your quick reference.

| Date | Event | Zuora Revenue | Journal entries |
| --- | --- | --- | --- |
| Jan/01/2022 | A customer contract is executed and effective immediately based on the usage pricing model, which is a basic pay-as-you-go model with billing in arrears. | A revenue contract is created with a sales order line based on the performance obligation (POB) template called Consumption - Usage Event (Non-Committed). | N/A |
| Jan/15/2022 | $100 of Usage is incurred and recorded. | Revenue is recognized to the Unbilled Revenue account because the invoice has not been issued.The sales order amount is greater than the invoice amount. | Dr. Unbilled Revenue $100 Cr. Revenue $100 |
| Jan/31/2022 | An invoice for $100 is issued and processed by Zuora Revenue. | The invoice is collected and processed. Unbilled revenue is cleared. | Dr. AR $100 Cr. Unbilled Revenue $100 |
| Feb/15/2022 | $20 of usage is incurred and recorded. | Revenue is recognized as Unbilled Revenue because the invoice has not been issued.The sales order amount is greater than the invoice amount. | Dr. Unbilled Revenue $20 Cr. Revenue $20 |
| Feb/16/2022 | A negative $50 of usage is incurred and recorded. | Revenue is adjusted from Unbilled Revenue first for the related negative usage recorded. The sales order amount now is less than the invoice amount.The system reconciles the difference between invoiced and yet-to-be-invoiced amounts to Contra AR. The expectation is for the Contra AR account to be cleared when further usage is incurred or through the collection of the corresponding credit memo. | Dr. Revenue $50 Cr. Unbilled Revenue $50Dr. Unbilled Revenue $30 Cr. Contra AR $30 |
| Feb/28/2022 | There is no invoice or credit memo event. | N/A | N/A |
| Mar/15/2022 | $20 of usage is incurred and recorded. | Revenue is first recognized to Unbilled Revenue because the invoice has not been issued. The sales order amount is less than the invoice amount.The system reconciles the difference between the invoiced and yet-to-be-invoiced amounts to existing Contra AR. Contra AR is adjusted to reconcile an updated difference. The expectation is for the Contra AR account to be cleared when further usage is incurred or through the collection of the corresponding credit memo. | Dr. Unbilled Revenue $20 Cr. Revenue $20 Dr. Contra AR $30 Cr. Unbilled Revenue $30 Dr. Unbilled Revenue $10 Cr. Contra AR $10 |
| Mar/31/2022 | A credit memo is created for $10 and processed by Zuora Revenue. | The credit memo is collected and processed, which offsets the remaining AR.The sales order amount now equals the invoice amount in this contract. | Dr. Contra AR $10 Cr. AR $10 |
