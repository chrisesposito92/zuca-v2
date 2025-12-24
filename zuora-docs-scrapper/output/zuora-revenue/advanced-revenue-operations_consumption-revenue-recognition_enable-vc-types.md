---
title: "Enable VC types"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/consumption-revenue-recognition/enable-vc-types"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:34:40.405Z"
---

# Enable VC types

Learn how to enable VC types for the Consumption Ratable POB template to address various accounting needs, including revenue accrual and rollover automation.

If the POB template called Consumption Ratable with VC is in use, you need to enable appropriate VC types for this POB template to facilitate the VC accounting needs. The following VC types are predefined and meant for different use cases. For step-by-step instructions, see Enable VC types .

| VC type name | Use case addressed |
| --- | --- |
| VC Estimates_Consumption | This VC type is for revenue accrual of anticipated overages based on variable consideration estimation. The estimation amount is based on CSV upload or entered in the UI. The estimated amount will be accrued and amortized over the term of the contract. The estimated amount will expire upon the contract expiration date allowing end users to true up the usage amount by overage invoice or reduction in contract value. |
| VC Rollover | This VC type is for automation in calculating roll-forward balance based on the actual usage revenue recognized upon the cancelation and replacement of an existing consumption revenue contract. It triggers rollover of over-recognized or under-recognized revenue upon contract renegotiation when cancellation and replacement event takes place. If your company applies the rollover policy upon contract modification, use this VC type. |
