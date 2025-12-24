---
title: "Rules for specifying the adjustment date"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/credit-balances/future-dated-credit-balance-adjustment/rules-for-specifying-the-adjustment-date"
product: "zuora-billing"
scraped_at: "2025-12-24T08:38:56.485Z"
---

# Rules for specifying the adjustment date

Learn about the rules for specifying the adjustment date

Without Future Dated Credit Balance Adjustment, the adjustment date of credit balance can only be set to today in the tenant time zone. After Future Dated Credit Balance Adjustment is enabled in your tenant, you can specify a credit balance adjustment date to a future date by following these rules:

| Use case | Rules for specifying the adjustment date |
| --- | --- |
| Transferring credit balance from a future dated negative invoice | The adjustment date must be later than or equal to the source invoice date. See Example 1 below. |
| Applying credit balance to a future dated invoice | The adjustment date and amount must match the available amount of credit balance. See Example 1 below. |
| Refunding credit balance that is transferred from a future dated negative invoice through external refund | The refund date and amount must match the available amount of credit balance. See Example 2 below. |
| Refunding credit balance that is transferred from a future dated negative invoice through electronic refund | The refund date can only be set to today or tomorrow, and the refund date and amount must match the available amount of credit balance. See Example 3 below. |

You can refer to the examples in [Use case examples](/zuora-billing/bill-your-customer/credit-balances/future-dated-credit-balance-adjustment/use-case-examples) to understand the use cases and the rules.
