---
title: "Prepaid with Drawdown troubleshooting"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/usage-billing/prepaid-with-drawdown/prepaid-with-drawdown-troubleshooting"
product: "zuora-billing"
scraped_at: "2025-12-24T08:30:44.212Z"
---

# Prepaid with Drawdown troubleshooting

Common errors and troubleshooting suggestions for the Prepaid with Drawdown feature.

| Error message | Troubleshooting steps |
| --- | --- |
| The current term of Charge ### cannot be divided into successive validity periods. | Certain order actions must happen at the beginning of a validity period, check if the Contract effective date is the first day of a validity period.Check if the validity period of the prepayment charge operated on is equal to or can be divided evenly by the subscription term. For example, if you want to add a new prepayment charge to an existing subscription whose term is 3 months, the validity period of the prepayment charge can only be Month or Quarter; Semi-annual and Annual will be blocked.If this message is encountered when adding a prepayment charge to a subscription not containing any prepayment charge(s), check if term start date was modified in any of the previous versions. This operation in this case is not allowed at the moment. |
| All prepayment charges in a prepaid balance must have the same validity period type. | Prepayment charges in a subscription with the same Prepaid UOM must have the same validity period. For example, if a subscription contains a prepayment charge whose Prepaid UOM is Each and validity period is Month, then when you add a new prepayment charge whose Prepaid UOM is also Each to this subscription, its validity period needs to be Month. |
| Invalid validity periods in Charge ###. The validity periods must be evenly distributed over the subscription term. | When renewing a prepayment subscription, the length of the renewal term must be one or multiple times of the existing validity period. For example, if the validity period of the prepayment charge in a subscription is Quarter, a 3-month renewal term will work, but a 4-month renewal term will fail. |
| Validity period ( x months) must be equal to or multiple times of the billing period ( y months). | Check the configuration of the validity period and billing period of the prepayment charge. |
