---
title: "Validate transactions"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-settlement/get-started-with-invoice-settlement/invoice-settlement-migration-checklist-and-guide/validate-transactions"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:50.776Z"
---

# Validate transactions

This reference provides the checklist and the corresponding actions that you must perform before enabling Invoice Settlement and migration.

| Scenario | Required Actions / Remarks |
| --- | --- |
| Any draft accounts with credit balance | If the Credit Balance feature is enabled and any draft accounts have credit balance, perform the following actions:Use the Account data source to export accounts with the following filter: Account.Status = Draft and Account.CreditBalance > 0Delete the draft accounts or activate them. |
| Any canceled accounts with credit balance | If the Credit Balance feature is enabled and any canceled accounts have credit balance, perform the following actions:Use the Account data source to export accounts with the following filter: Account.Status = Canceled and Account.CreditBalance > 0Delete the canceled accounts or activate them. |
| Any draft accounts with posted negative invoices | If draft accounts have posted negative invoices, perform the following actions:Use the Invoice data source to export accounts with the following filter: Account.Status = Draft and Invoice.Balance < 0Delete the draft accounts or activate them. |
| Any inactive accounts with posted negative invoices | If inactive accounts have posted negative invoices, perform the following actions:Use the Invoice data source to export accounts with the following filter: Account.Status = Canceled and Invoice.Balance < 0Delete the inactive accounts or activate them. |
| Any draft invoices with a negative balance | If draft invoices have a negative balance, perform the following actions:Use the Invoice data source to export invoices with the following filter: Invoice.Status = Draft and Invoice.Balance < 0Cancel the draft invoices or post them. |
| Draft payments | If draft payments exist, perform the following actions:Use the Payment data source to export payments with the following filter: Payment.Status = DraftCancel the draft payments or process them. |
| Error payments | If error payments exist, Zuora does not migrate the error payments during the migration process. Also, Zuora does not migrate canceled payments.The connections between invoices and error payments are still available in the Invoice Payment data source. To obtain related information, you can export data through the Invoice Payment data source. |
| Any scheduled payment runs with the option to apply credit balance before attempting payments | If the Apply Credit Balance to the invoice before attempting payment check box is selected for any scheduled payment run, perform the following actions:Cancel this payment run and all subsequent payments runs if any.After the Invoice Settlement feature is enabled, create another payment run. If you want to apply the previous credit balance, select the Auto-apply unapplied credit memos during payment runs check box.Please note that if this check box is selected, credit memos created from other sources might also be automatically applied.In this scenario, credit balance is transferred into credit memos during the Invoice Settlement migration process. |
| Tenant with the Finance permission and posted negative invoices or credit balance | If your tenant has the Zuora Finance permission and posted negative invoices or credit balance, provide an accounting code to use as the On-Account accounting code.This On-Account accounting code is used for credit memos created during the migration. If it is not provided, Accounts Receivable is used as the On-Account accounting code by default. |
