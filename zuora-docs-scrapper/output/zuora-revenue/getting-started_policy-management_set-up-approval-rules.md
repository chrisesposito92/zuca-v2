---
title: "Set up approval rules"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/set-up-approval-rules"
product: "zuora-revenue"
scraped_at: "2026-01-15T22:03:04.893Z"
---

# Set up approval rules

Learn how to set up approval rules in Zuora Revenue to manage revenue holds and transfer holds effectively.

After revenue holds or transfer holds are placed on a revenue contract or MJE, the approval must be provided for the appropriate action to be taken.

Complete the following steps to create an approval rule in Zuora Revenue:

1.  Navigate to Policies > Holds and Approvals .
2.  Click the left pointing arrow to open the side menu and then click Approval Rules. The Approval Rules page is displayed listing all defined approval rules.
3.  To add an approval rule, click the New Rule icon (+) . The New Approval Rule window is displayed.
4.  In the Approval Rule tab, specify detailed information about the approval rule, and then click the save icon. The approval rule is created.

    | Field | Description |
    | --- | --- |
    | Applied On | Specifies whether the approval rule is applied on a manual journal entry or on a revenue contract. |
    | Name | A unique name of this approval rule. |
    | Description | A short description of the approval rule. |
    | Function Name | The function name. |
    | Start Date | The effective start date of the approval rule. |
    | End Date | The effective end date of the approval rule. |
    | Enabled | Toggle this switch to Yes to enable this approval rule. |
    | Revenue Release | Specify whether revenue can be released when the approval is in Approval Pending status.If you are using ASC 605 and set this field to Yes , the system will not restrict you from releasing revenue. However, the accounting entries cannot be posted to the general ledger if the approval is pending. |

5.  Click the Rule Criteria tab to specify the criteria based on which the approval rule is to be applied. Click the (+) icon to add a line and click the save icon to save the changes.
6.  Click the Rule Approvers tab to specify the approvers who can approve the revenue holds. Click the (+) icon to add an approver and click the save icon to save the changes.

    The approval rule is created.
