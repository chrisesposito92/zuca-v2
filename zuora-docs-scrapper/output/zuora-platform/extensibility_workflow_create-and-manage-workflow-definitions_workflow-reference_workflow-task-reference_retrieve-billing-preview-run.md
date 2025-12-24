---
title: "Retrieve: Billing Preview Run"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/workflow/create-and-manage-workflow-definitions/workflow-reference/workflow-task-reference/retrieve-billing-preview-run"
product: "zuora-platform"
scraped_at: "2025-12-24T05:33:51.881Z"
---

# Retrieve: Billing Preview Run

This reference describes the Retrieve: Billing Preview Run task.

The billing preview run task asynchronously generates a downloadable CSV file containing a preview of invoice item data for a batch of customer accounts. Use this task to calculate how much a batch of customers will be invoiced from the most recent invoice date to a target date in the future. Alternatively, you can use data source to query Billing Preview Run Result if you do not want a CSV file to be generated.

Additionally, you can use the billing preview task to access the real-time usage data of an individual customer account.

## Task settings

-   Assume Renewal - Select the renewal model to be used in the preview run.

    -   All - The preview will be run based on the assumption that all subscriptions will renew when they expire.

    -   None - The preview will be run based on the assumption that no subscriptions will renew when they expire.

    -   Autorenew - The preview will be run based on the assumption that only subscriptions that are set to renew automatically will renew.

-   Batch - Select the batch of customer accounts for the billing preview run.

-   Charge Type to Exclude - Select the charge types that you want to filter out in the preview run. Note that you can select multiple charge types.

-   Target Date - Select the target date for the preview run.

-   Include Evergreen - Select whether to include evergreen subscriptions in the preview run.
