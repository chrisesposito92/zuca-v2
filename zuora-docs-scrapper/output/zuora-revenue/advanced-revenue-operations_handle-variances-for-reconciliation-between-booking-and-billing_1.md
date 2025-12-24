---
title: "Handle variances for reconciliation between booking and billing"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/handle-variances-for-reconciliation-between-booking-and-billing_1"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:41:01.358Z"
---

# Handle variances for reconciliation between booking and billing

Learn how to handle variances in reconciliation between booking and billing to ensure transaction amounts match at month-end.

Charge contractual value (CCV) is the contract value at the rate plan charge level. After you have enabled the Billing - Revenue Integration feature, CCV is generated when you create a subscription or amendment. It is equivalent to the booking value for revenue.

To close the book on month-end, the booking amount must equal the billing amount for each transaction. It requires that you reconcile the booking and billing data to ensure they are equal.

## Scenarios that cause the booking and billing variances

The following table describes the identified typical scenarios where the booking amount can mismatch the billing amount:

| Typical scenario | Description |
| --- | --- |
| Cancel regular charges and percentage discounts in a period that has been billed | It can cause a $0.01 rounding issue. See Cancel regular charges and percentage discounts in a period that has been billed for more information. |
| Change customer account bill cycle day (BCD) | When you change the customer account BCD, the actual billing amount will change due to proration differences. However, this is not reflected in the order. See Change the bill cycle day (BCD) after the subscription activation to learn the detail and the corresponding solution. |
| Change billing rule settings | There are various billing settings that control how much customers get billed. These billing settings are at the entity level. When these billing settings are modified, future billing gets changed but will not be reflected in orders. |
| Remove one-time charges | The Enable credit back for removing or canceling one time charges billing rule setting in Zuora Billing can be set to No. This can lead to the CCV calculation issue. The CCV calculation always assumes that the one-time charge is not invoiced yet, and the removal will cause it not to be invoiced in the future. In this case, Zuora will credit back the booking amount upon one-time charge removal. However, on the billing side, no credit is given. |
| Add percentage discounts | When an order updates a discount percentage as of a date that has been already invoiced, Billing - Revenue Integration does not change the invoice amount. No new invoice item is issued to reflect the discount change for the period that has already been invoiced. Therefore, the discrepancy occurs between CCV that includes the discount change over the already-invoiced period and the actual billing amount. |
| Apply multiple discount charges to the same regular charge that has been billed | When generating invoice item amounts, how discount charges are applied depends on whether the discount charge start date falls within the service period already applied to the invoice. However, CCV discount is applied to the charge effective period, regardless of the service period of the regular charge. Therefore, the discrepancy between CCV and the invoice amount is likely to occur. |
| Unpost invoices | There are cases where the calculation of CCV needs to take the partially billed amount into account. When customers unpost a previously posted invoice, the existing billed amount changes. Thus, the CCV calculation is no longer valid and will not match future billings. |
| Prorate fixed amount discounts | The RatePlanChargeTier price is used to calculate the fixed amount discount booking value in Data Transformation, which does not consider the actual proration and other billing setting logic. Therefore, the booking amount might be different from the actual billing amount. |
| Transfer invoice ownership | CCV and invoices are both associated with the invoice owner of a subscription. When the invoice owner is transferred from customer A to B, Billing - Revenue Integration backs out the entire CCV for the subscription and move that from A to B. However, in billing, Billing - Revenue Integration keeps existing invoices in A and only new invoices generated will belong to B. |
| Change tax engine | If the tax rate changes across the charge billing periods for a tax-inclusive charge, this means that for the same charge segment, the invoices generated in different billing periods will have different tax rates, leading to the result that the CCV might differ from the total billing. |

## Identify variances

You can run the Booking and Billing Variances Report in Zuora Revenue to identify the transactions where variances between booking and billing occur. With this report, you can understand why the variances occur and what to do next.
