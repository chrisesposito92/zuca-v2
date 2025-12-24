---
title: "Grant a profile access to the Apex classes"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/configuration/edit-a-crm-account-id/change-crm-ids-for-multiple-accounts-using-the-zuora-api/grant-a-profile-access-to-the-apex-classes"
product: "zuora-platform"
scraped_at: "2025-12-24T08:31:56.789Z"
---

# Grant a profile access to the Apex classes

Learn how to grant a profile access to specific Apex classes in Salesforce by navigating through the setup and managing user profiles.

To grant a profile access to the Apex classes:

1.  Navigate to .
2.  Click the profile to whom you want to grant permissions.
3.  Click Enable Apex Class Access . ![EnableApexAccess.png](/db/organizations/zuora/repositories/prod-sitemap/__sandbox/documents/_MT_Content_Migration/Zuora_Platform/Integration/Integration_Hub/Zuora_360__and_Zuora_360/C_Configuring_Z-Force_360_plus/Edit_a_CRM_Account_ID/EnableApexAccess.png)
4.  In the Enabled Apex Class Access section, click Edit .
5.  Click the following classes in the Available Apex Classes list and click the Add arrow to move them to the Enabled Apex Classes list:

    -   Zuora.PaymentCrmIdChangeBatchable

    -   Zuora.RefundCrmIdChangeBatchable

    -   Zuora.SubObjectBatchableForCrmId

    -   Zuora.SubProdChargeCrmIdChangeBatchable

    -   Zuora.SubscriptionCrmIdChangeBatchable

    -   Zuora.ZInvoiceCrmIdChangeBatchable

    -   Zuora.SyncHistoryController


6.  Click Save .
