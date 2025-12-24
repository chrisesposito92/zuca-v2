---
title: "Catch-Up Bill Run"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/catch-up-bill-run"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:07.767Z"
---

# Catch-Up Bill Run

Catch-up bill runs are used for migrating customer data into Zuora, facilitating a smooth transition by not generating invoices and ensuring faster processing than regular bill runs.

Catch-up bill runs facilitate migrating customer data or subscription information from other systems into Zuora. Zuora typically executes catch-up bill runs prior to commencing regular customer billing. Only an ad hoc bill run can be a catch-up bill run.

When [creating an ad hoc bill run](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/bill-runs-creation/create-an-ad-hoc-bill-run), you can select Catch Up Bill Run and specify the target date to indicate it is a catch-up bill run. In addition to the Zuora UI, you can also create catch-up bill runs through the [Create a bill run](https://developer.zuora.com/v1-api-reference/api/operation/POST_CreateBillRun/#tag/Bill-Run/operation/POST_CreateBillRun) API operation.

The Catch-Up Bill Run feature is a lightweight billing operation designed for the data migration process.

-   Catch-up bill runs do not generate any invoices, so invoices generated in the legacy system do not need to go through downstream processing.

-   A catch-up bill run is executed much faster than a regular bill run. Therefore, if you have a large data volume, catch-up bill runs can greatly reduce the migration time.


The data migration process ensures no past billing comes up in future billing, indicating that Zuora can ignore the invoicing that has already been completed in the legacy system.

Zuora supports data migration through both regular bill runs and catch-up bill runs. For information about the comparison between these two types of bill runs, see [Comparison between regular and catch-up bill runs](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/catch-up-bill-run/comparison-between-regular-and-catch-up-bill-runs).

## What happens after creating a catch-up bill run

The catch-up bill run process advances the "Processed Through" and "Charged Through" dates in the billing engine up to the present, and does not generate any billing documents in the process. You cannot cancel a catch-up bill run after a catch-up bill run is complete.

After a catch-up bill run is complete, you can apply a second catch-up bill run to the same account as long as the account has no invoice.

## Comparison between regular and catch-up bill runs

For detailed information, see see [Comparison between regular and catch-up bill runs](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/catch-up-bill-run/comparison-between-regular-and-catch-up-bill-runs).

## Restrictions and limitations

Catch-up bill runs reduce your efforts to migrate user data into Zuora. When using the Catch-Up Bill Run feature, keep the following restrictions and limitations in mind:

| Scenario | Restrictions and limitations |
| --- | --- |
| Data migration | You can use catch-up bill runs only for data migration. Do not use them for your regular billing process. |
| Rollback | You cannot undo a catch-up bill run once it starts. The only way to roll it back is to delete the corresponding account and reload it with the subscriptions and any order changes. |
| Subscriptions | Catch-up bill runs only pick up subscriptions in Active, Cancelled, and Pending status. |
| Deleting subscriptions or amendments | You cannot delete the subscriptions or amendments processed by a catch-up bill run from Zuora.To delete these subscriptions or amendments, you have to delete the corresponding accounts. |
| Order changes | Order changes cannot be applied before the catch-up bill run date. The target date of a catch-up bill run is the end date of the last service period that is billed by a catch-up bill run.The reason is that the order change might result in a credit, and the credit cannot be processed because the original invoice items do not exist. For example, a catch-up bill run is processing a charge valued $100 until the date 31 December 2022. In this case, you cannot create an order to cancel the subscription with an effective date of 1 July 2022. |
| Order line items | Catch-up bill runs do not pick up order line items. |
| Customer accounts | The Catch-Up Bill Run feature only works with the accounts that have never been billed. If an account has been billed, the account is ignored by catch-up bill runs.If one account is selected for a catch-up bill run, but the account already has a draft or posted invoice, this account cannot be processed by the catch-up bill run. To use catch-up bill runs to process such an account, you have to cancel and delete invoices of this account, and then create a catch-up bill run to process this account.If one account has already been processed by a regular bill run and generates an invoice, this account cannot be processed by the catch-up bill run. For example, an account is loaded with a subscription and processed by a regular bill run, and an invoice is generated. Later, you load a second subscription to the account and want to catch up the second subscription to a certain date. In this case, no catch-up bill run can process the second subscription for this account. To process any account that already generated invoices, it is best practice to use regular bill runs instead for processing. |
| Invoice amount | The total invoice amount no longer equates to the Total Customer Value (TCV) of a subscription because catch-up bill runs do not generate any invoice.If you want to use the total invoice amount to replace TCV, it is best practice not to use catch-up bill runs for data migration. |
