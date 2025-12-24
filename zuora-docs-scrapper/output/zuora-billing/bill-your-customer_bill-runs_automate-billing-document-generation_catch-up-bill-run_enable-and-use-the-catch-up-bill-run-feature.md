---
title: "Enable and use the Catch-Up Bill Run feature"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/catch-up-bill-run/enable-and-use-the-catch-up-bill-run-feature"
product: "zuora-billing"
scraped_at: "2025-12-24T08:27:10.331Z"
---

# Enable and use the Catch-Up Bill Run feature

Learn how to enable and use the Catch-Up Bill Run feature, including necessary permissions and step-by-step instructions.

To access the Catch-Up Bill Run feature, you must have both of the following permissions:

-   Create Bill Runs permission in the Bill Runs subsection

-   Manage Billing Settings permission in the Admin subsection


For more information about these permissions, see [Billing Roles](/zuora-platform/system-management/administrator-settings/user-roles/billing-roles).

To use the Catch-Up Bill Run feature, perform the following steps:

1.  Enable the Catch-Up Bill Run feature.
    1.  Click your avatar at the upper right and navigate to Billing > Define Billing Rules .
    2.  On the Billing Rules page, select Yes from the Enable catch-up bill run? list.
2.  [Create a catch-up bill run](/zuora-billing/bill-your-customer/bill-runs/automate-billing-document-generation/catch-up-bill-run) by clicking Catch Up Bill Run and specify the target date in the Bill Run Dates section of the Create Bill Run page. You cannot see the Catch Up Bill Run option if you do not have the Manage Billing Settings permission. You can create multiple catch-up bill runs according to your data volume, so that each catch-up bill run can be executed faster. For example, you can create one catch-up bill run by batch or by bill cycle day.
3.  Wait for the catch-up bill run to complete. After the catch-up bill run is complete, it brings the charged through dates on all charges forward to the target dates.
4.  Disable the Catch-Up Bill Run feature.

    1.  Click your avatar at the upper right and navigate to Billing > Define Billing Rules .
    2.  On the Billing Rules page, select No from the Enable catch-up bill run? list.

    Note: After the data migration is complete, it is best practice to disable the Catch-Up Bill Run feature to prevent using the catch-up bill runs by mistake.
