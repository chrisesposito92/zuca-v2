---
title: "Use case examples"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/credit-balances/future-dated-credit-balance-adjustment/use-case-examples"
product: "zuora-billing"
scraped_at: "2025-12-24T08:38:59.373Z"
---

# Use case examples

Use case examples to understand use cases and rules

Example 1: Transfer credit balance from a future-dated negative invoice and then apply credit balance to a future-dated invoice

| Context:Today is 2020-09-01 \| INV-001: amount is -$100, invoice date is 2020-09-10 \| INV-002: amount is $10, invoice date is 2020-09-05 |  |  |
| --- | --- | --- |
| Operation | Successful case | Failed case |
| 1. Transfer credit balance from a future dated negative invoice | Create a Credit Balance Adjustment with these parameters:SourceTransactionId: INV-001AdjustmentDate: 2020-09-10Amount: $100Type: IncreaseThe operation is successful. The credit balance of the billing account increases $100. | Create a Credit Balance Adjustment with these parameters:SourceTransactionId: INV-001AdjustmentDate: 2020-09-01Amount: $100Type: IncreaseThe operation fails because the adjustment date is earlier than the invoice date.Rule: For this operation, the adjustment date must be later than or equal to the invoice date. |
| 2. Apply credit balance to a future dated invoice | Create a Credit Balance Adjustment with these parameters:SourceTransactionId: INV-002AdjustmentDate: 2020-09-10Amount: $10Type: DecreaseThe operation is successful. The credit balance of the billing account decreases $10. | Create a Credit Balance Adjustment with these parameters:SourceTransactionId: INV-002AdjustmentDate: 2020-09-05Amount: $10Type: DecreaseThe operation fails because the available credit balance is $0 as of 2020-09-05. The $100 credit balance comes from the above transfer operation on 2020-09-10, so the available credit balance is $0 before 2020-09-10.Rule: For this operation, the adjustment date must be set to a date when the amount of credit balance is available. |

Example 2: Refund credit balance that is transferred from a future-dated negative invoice through external refund

| Context:Today is 2020-09-01 \| INV-001: amount is -$100, invoice date is 2020-10-01 \| INV-001 is transferred to credit balance on 2020-10-01 with amount $100 |  |
| --- | --- |
| Successful case | Failed case |
| Create a Refund with these parameters:RefundDate: 2020-10-01Amount: $100Type: ExternalThe operation is successful. The available credit balance is $100 as of 2020-10-01, so the refund date 2020-10-01 is set properly. The credit balance of the billing account decreases $100. | Create a Refund with these parameters:RefundDate: 2020-09-05Amount: $100Type: ExternalThe operation fails because the available credit balance is $0 as of 2020-09-05. The 100$ credit balance comes from the transfer operation on 2020-10-01, so the available credit balance is $0 before 2020-10-01.Rule: For this operation, the refund date must be set to a date when the amount of credit balance is available. |

Example 3: Refund credit balance that is transferred from a future-dated negative invoice through electronic refund

| Context:Tenant time zone is set to Pacific Standard Time and today is 2020-09-01 in tenant time zone.A customer in Australia (GMT+9) cancels a subscription on 2020-09-02, so a negative invoice is generated on 2020-09-02 local time in Australia (GMT+9): INV-001, amount -$100, invoice date 2020-09-02.INV-001 is transferred to credit balance on 2020-09-02 with amount 100$. |  |
| --- | --- |
| Successful case | Failed case |
| Create a Refund with these parameters:RefundDate: 2020-09-02Amount: $100Type: ElectronicThe operation is successful. The available credit balance is $100 as of 2020-09-02, so the refund date is set properly. The credit balance of the billing account decreases $100. | Create a Refund with these parameters:RefundDate: 2020-09-01 (Today in tenant time zone)Amount: $100Type: ElectronicThe operation fails because the available credit balance is $0 on 2020-09-01. The $100 credit balance comes from the transfer operation on 2020-09-02, so the available credit balance is $0 before 2020-09-02.Rule: For this operation, the refund date must be set to either today or tomorrow when the amount of credit balance is available. |
