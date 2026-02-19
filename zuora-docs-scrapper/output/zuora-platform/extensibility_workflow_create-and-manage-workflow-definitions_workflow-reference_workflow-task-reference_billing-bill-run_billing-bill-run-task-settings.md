---
title: "Billing: Bill Run - Task settings"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/billing-bill-run/billing-bill-run---task-settings"
product: "zuora-platform"
scraped_at: "2026-02-19T03:27:12.143Z"
---

# Billing: Bill Run - Task settings

Use this reference to understand the task settings of the Billing: Bill Run task.

## Ad-hoc and single account mode

-   Batch - Select the batch of customer accounts to include. This option is only available for the ad-hoc mode.

-   BillCycleDay - Select the customer accounts that are to be billed on a particular day. Select AllBillCycleDays to include all accounts. This option is only available for the ad-hoc mode.

-   Account Id - The account id of the single customer for which invoices will be generated. This option is only available for the single account mode.

-   Invoice Date - The date displayed on the invoices in this bill run.

-   Target Date - All charges that are to be billed on this date or prior will be included in this bill run.

-   Charge Type To Exclude - Select the charge types to be excluded from the bill run.

-   Auto Email - Select whether to automatically email invoices after the bill run completes.

-   No Email for Zero Amount Invoice - Select whether to skip sending emails for zero-amount invoices.

-   Auto Post - Select whether to automatically post invoices after the bill run completes.

-   Auto Renewal - Select whether to renew all subscriptions that are configured to automatically renew and are due for renewal during this billing period.


## Replicate existing bill run mode

-   Source Bill Run Id - The id of the existing bill run that is to be performed with this task.
