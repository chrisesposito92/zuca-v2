---
title: "Configure contract modification rules"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/contract-modifications/understanding-contract-modification-rules-configuration/configure-contract-modification-rules"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:20:01.051Z"
---

# Configure contract modification rules

Learn how to configure contract modification rules in Zuora Revenue, including navigating to the Contract Modification page, adjusting timeline settings, and selecting allocation treatments.

Complete the following steps to configure contract modification rules in Zuora Revenue:

-   No: Apply the contract modification rules, which you will configure later in the Contract Modification Rules section, to determine the contract modification allocation treatment.

-   Yes: All the contract modification rules that are configured in the Contract Modification Rules section are ignored.


1.  Navigate to Policies > Contract Modification . The Contract Modification page opens.
2.  In the Contract Modification Timeline section, switch the Skip Contract Modification Rules toggle to either of the following options:
3.  If you select Yes in the previous step, select Prospective or Retrospective for the Default Allocation Treatment field. If you select No , proceed to the next step.
4.  In the Initial Contract Timeline section, specify the fields as documented in Initial Contract Timeline Fields .
5.  In the Revision Timeline section, specify the fields as documented in Revision Timeline Fields .
6.  In the Contract Modification Rules section, select the appropriate allocation treatment from the drop-down list in the Modification Treatment column for each rule. ![](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/E_Advanced_revenue_operation/media/contract_modification_rules.jpg)

    Note:

    Note: If you select New Revenue Contract for the new POB rules, you also need to further specify the treatment for the newly created RC. Valid options are:

    -   Create and Keep Open
    -   Create and Close RC

    If a window does not pop up for you to select, hover the mouse over the line and click the cogwheel icon.

7.  Click the save icon to save your settings.
