---
title: "POB template setup"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/variable-consideration-processing/vc-setup/pob-template-setup"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:58.930Z"
---

# POB template setup

After the VC policies are set up, the defined VC type must be mapped to appropriate POB templates.

If POB template does not exist in Zuora Revenue yet, create it. For more information, see [Create POB Template](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/A_get_started/topics/create_pob_template.dita) .

After a POB template is created, complete the following steps to map the VC type to a POB template:

1.  Navigate to Policies > Performance Obligations . The POB Templates page is displayed listing all POB templates created in Zuora Revenue.
2.  Click the target POB template and then click the Edit Template icon (pencil icon) on the right. The Edit POB Template window is displayed.
3.  In the Edit POB Template window, click the VC Assignment tab. All defined VC types are listed.
4.  Select the checkbox in the Enabled column to map the appropriate VC type to the current POB template.
5.  Save your changes by clicking the save icon and close the window.

    When transactions are uploaded to Zuora Revenue, POB and VC criteria can be applied for the enabled VC types.

    For information about how to manually upload VC to Zuora Revenue, see VC Upload.
