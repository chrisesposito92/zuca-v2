---
title: "RORD and CM-RO accounting entries"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/rord-and-cm-ro-accounting-entries"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:25:59.517Z"
---

# RORD and CM-RO accounting entries

Zuora Revenue streamlines RORD and CM-RO processing by updating contract liabilities, generating Contra AR when billed amounts exceed sales, and ensuring RORD lines follow parent ratable methods with their own release dates.

Beginning from version 37.007.00.00, whenever RORD line is collected, Zuora Revenue will credit the unbilled Contract Liability (CL with Unbill Flag = Y). When CM-RO line is collected, Zuora Revenue will then convert unbilled Contract Liability to billed Contract Liability (CL with Unbill Flag = N) based on the CM-RO amount.

In addition, if Net Billed Amount is greater than Net Sell Price after RORD line is collected, a Contra AR entry will be created. Net Billed Amount is the sum of the invoice, normal credit memo, invoice cancellation, and credit memo for reduction order. Net Sell Price is the sum of sales order and reduction order. The amount of the Contra AR is calculated as follows:

Contra AR = Net Billed Amount - Net Sell Price = (Sum of INV, CM, CM-C, and CM-RO) - (Sum of SO and RORD)

If RORD parent line is being released using any ratable method, the release of the RORD line follows the same ratable method of the parent line. However, the RORD line release will be based on its own dates. If no revenue is released for any periods, the RORD line will not be released for the corresponding periods.

-   Contract Ratable
-   Ratable

If RORD parent line is being released using the following method, Zuora Revenue will use either the current open period or the line start date open period, whichever is later to reduce the revenue:

-   Immediate using start date
-   Immediate using current open period

Note:

SKIP\_RORD\_PARENT\_REL\_CHECK

If you have enabled this profile by setting the Value to Y (Enabled), the RORD (return order) gets collected for the line even when revenue for the line is not released.

If you have set the Value as N (Disabled) , the RORD (return order) gets collected only when the revenue for the line is released.

Here are four scenarios that explain RORD and CM-RO accounting entries:

[RORD collected after invoicing](/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/rord-and-cm-ro-accounting-entries/rord-collected-after-invoicing)

[RORD release based on POB ratable method](/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/rord-and-cm-ro-accounting-entries/rord-release-based-on-pob-ratable-method)

[CM-C line collected after RORD](/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/rord-and-cm-ro-accounting-entries/cm-c-line-collected-after-rord)

[Both unbilled and billed contract liability exist](/zuora-revenue/data-management/transaction-processing/accounting-behaviors-of-transaction-types/rord-and-cm-ro-accounting-entries/both-unbilled-and-billed-contract-liability-exist)
