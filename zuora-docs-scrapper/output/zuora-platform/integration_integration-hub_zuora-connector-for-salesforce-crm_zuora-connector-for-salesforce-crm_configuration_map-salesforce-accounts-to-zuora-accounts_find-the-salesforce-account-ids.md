---
title: "Find the Salesforce account IDs"
url: "https://docs.zuora.com/en/zuora-platform/integration/integration-hub/zuora-connector-for-salesforce-crm/zuora-connector-for-salesforce-crm/configuration/map-salesforce-accounts-to-zuora-accounts/find-the-salesforce-account-ids"
product: "zuora-platform"
scraped_at: "2025-12-24T08:32:24.176Z"
---

# Find the Salesforce account IDs

Learn how to generate and export a list of Salesforce Account IDs for active accounts.

To generate a list of Salesforce Account IDs :

1.  On the Reports tab in Salesforce, open the Account and Contact Reports folder.
2.  Click Active Accounts . ![Active_Accounts_Reports.png](/db/organizations/zuora/repositories/prod-sitemap/__sandbox/documents/_MT_Content_Migration/Zuora_Platform/Integration/Integration_Hub/Zuora_360__and_Zuora_360/C_Configuring_Z-Force_360_plus/E_Associate_the_Corresponding_Accounts/Active_Accounts_Reports.png)
3.  Drag and drop Account ID from the Account General folder to the table in the Preview section to add the Account ID field to the report. ![Add_AccountID.png](/db/organizations/zuora/repositories/prod-sitemap/__sandbox/documents/_MT_Content_Migration/Zuora_Platform/Integration/Integration_Hub/Zuora_360__and_Zuora_360/C_Configuring_Z-Force_360_plus/E_Associate_the_Corresponding_Accounts/Add_AccountID.png)
4.  Click Run Report . Account IDs for active Salesforce accounts appear in the report. ![SFDCAccountID.png](/db/organizations/zuora/repositories/prod-sitemap/__sandbox/documents/_MT_Content_Migration/Zuora_Platform/Integration/Integration_Hub/Zuora_360__and_Zuora_360/C_Configuring_Z-Force_360_plus/E_Associate_the_Corresponding_Accounts/SFDCAccountID.png)
5.  If you have a large number of accounts to map, export the list for a bulk import into Zuora.
