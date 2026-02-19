---
title: "View price update history"
url: "https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/batch-price-update/view-price-update-history"
product: "zuora-billing"
scraped_at: "2026-02-19T03:11:07.846Z"
---

# View price update history

This task topic explains how to view the history of batch price updates, including execution dates, charge names, and status details.

This section retains temporary information lasting 90 days in the production environment but 45 days in the sandbox environment.

1.  Click the Batch Price Update drop-down button on the Subscriptions page.
2.  Select View Batch History to open the Price Update History page.
3.  For each Batch Price Update, view the summary information as follows:

    | Field | Description |
    | --- | --- |
    | Execution Date | The date when the batch price update is submitted. |
    | Charge Name | The charge name against which the original price of the subscriptions in the selected batches of the subscription cohort is updated with the new price. |
    | New Price on Subscription | If the Specific value option is selected, the new price, which overrides the original price of the subscription rate plan charges in the selected batches of the subscription cohort, is displayed.If the Increase by percentage option is selected, the increased percentage is displayed. |
    | Currency | The currency used for updating to the new price. |
    | Effective Date | The date when the new price takes effect. |
    | Number Of Subscriptions | The number of subscriptions in the selected batches of the subscription cohort tried to be applied with the new price. |
    | Number Of Failures | The number of subscriptions in the selected batches of the subscription cohort failed with the new price update. |
    | Status | The status of the new price update process. The value can be QUEUED, PROCESSING, STOPPING, or FINISHED.Note: The status does not indicate whether the new price is successfully applied to the subscriptions in the selected batches of the subscription cohort. |

4.  If Zuora finds one or more subscriptions associated with the selected charge, irrespective of whether the price is applied to the subscriptions successfully, once the Status turns to FINISHED, the Download Result turns blue. In this case, you can click Download Result to download detailed subscription information for each price update.
