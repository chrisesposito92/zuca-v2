---
title: "Percentage-based amount billing"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/overview-of-billing-schedule/percentage-based-amount-billing"
product: "zuora-billing"
scraped_at: "2025-12-24T18:33:36.466Z"
---

# Percentage-based amount billing

This topic contains information about invoice schedules using percentage-based billing, ensuring the total percentage equals 100%, and aligning billing with project milestones.

When creating invoice schedules, you can specify a percentage of the total amount for each invoice schedule item rather than a fixed amount. The sum of the percentage specified for each milestone in each invoice schedule item must equal 100%.

If you specify a percentage, the actual amount billed during the processing of an invoice schedule item is automatically calculated based on the total amount, and the calculation adheres to the currency rounding settings. If any remaining cents exist after rounding, they are covered by the last invoice schedule item. If you specify a percentage for each invoice schedule item, you cannot make any update to the Amount field.

This functionality facilitates aligning your billing with project milestones. For example, you can create an invoice schedule for a three-milestone project:

-   Bill 10% of the total amount for milestone 1 through the processing of invoice schedule 1.
-   Bill 20% of the total amount for milestone 2 through the processing of invoice schedule 2.
-   Bill 70% of the total amount for milestone 3 through the processing of invoice schedule 3.

During invoice schedule creation, no $0 schedule item is allowed. In a billing plan like 50/0/50, the second milestone cannot be recorded in the invoice schedule object. An invoice schedule containing two invoice schedule items is created, each item covering half of the total billing amount.

If the total amount is increased or decreased due to an order change, such as adding a product, percentage update behaviors vary based on the invoice schedule status.

-   If all invoice schedule items are pending, you can update the percentage specified in each invoice schedule item. If you do not update any percentage, the actual amounts are updated automatically according to the total amount.
-   If any invoice schedule item has been processed, you cannot update the percentage specified in any invoice schedule item. Invoice schedule items are billed with their existing actual amounts. The last invoice schedule item gets the unbilled amount.

If the total amount remains unchanged for an invoice schedule, you can update the percentage for any pending invoice schedule items. Then, the actual amounts billed during the processing of the affected schedule items are recalculated automatically according to the percentage updates.

For detailed information about a common use case, see Create percentage-based invoice schedules for professional services during project milestone billing .
