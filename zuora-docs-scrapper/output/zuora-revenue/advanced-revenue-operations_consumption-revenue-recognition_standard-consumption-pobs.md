---
title: "Standard consumption POBs"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/consumption-revenue-recognition/standard-consumption-pobs"
product: "zuora-revenue"
scraped_at: "2026-02-19T03:39:42.015Z"
---

# Standard consumption POBs

Zuora Revenue offers predefined POB templates for various business needs, focusing on consumption functionality with seed POBs.

Zuora Revenue provides the following predefined POB templates. Configure the POB template to enable the appropriate POB templates based on your business needs. As explained in the following table, different templates are meant for different use cases. Note that only seed POBs must be used for consumption functionality . User-defined POBs will not be considered or supported in this context. For step-by-step instructions, see [create advanced rules](/zuora-revenue/advanced-revenue-operations/configuration-for-consumption-revenue-functionality).

| Template name | Use case addressed |
| --- | --- |
| Consumption Ratable without VC | Revenue recognition is deemed to be ratable over the term of the commitment and there is no VC impact. The template is defaulted to start revenue recognition upon booking. Any usage transactions related to the POB will be recorded in Zuora Revenue for tracking purposes and do not dictate revenue recognition. |
| Consumption Ratable with VC | Revenue recognition is deemed to be ratable over the term of the commitment and there is VC impact. The template is defaulted to start revenue recognition upon booking. Any usage transactions related to the POB will be recorded in Zuora Revenue for tracking purposes and do not dictate revenue recognition. |
| Consumption PayGo | Revenue is recognized based on the usage transactions incurred or based on invoice events. This means no booked value or allocation is expected when this template is in use. The use case is the classic pay-as-you-go model for consumption therefore revenue recognition is triggered by usage transactions incurred or on invoice events. |
| Consumption - Usage Event | The revenue recognition method is Immediate Using Open Period. There is a committed amount for this usage performance obligation. Zuora Revenue has a built-in validation to ensure that the recognized revenue amount does not exceed the committed amount. Revenue contract lines associated with this POB template can participate in allocations.For example, a usage-based contract is based on a committed amount of 100 dollars. Goods and services will drawdown against the agreed upon committed amount of 100 dollars. |
| Consumption - Usage Event (Non-Committed) | The revenue recognition method is Immediate Using Open Period. There is no committed amount for this usage performance obligation. Zuora Revenue does not have any validation to cross-check the committed amount. Revenue contract lines associated with this POB template do not participate in allocations. It is because the committed amount cannot be identified at the commencement of the contract therefore no allocatable value can be identified.A typical use case is the classic pay-as-you-go model where billing is in arrears on a quarterly basis and the revenue recognition requirement is monthly accruals. This template can allow unbilled usage revenue to be accrued on a monthly basis based on the usage transaction events. For a system walkthrough based on a specific use case, see Use case of unbilled usage revenue. |
