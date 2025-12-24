---
title: "Review holds in Workbench"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/revenue-holds-and-transfer-holds/review-holds-in-workbench"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:24:42.712Z"
---

# Review holds in Workbench

Learn how to review and manage revenue and transfer holds in Workbench, either from a central point or for individual revenue contracts.

After a revenue hold or transfer hold is applied to a line, POB, or revenue contract, you can review holds from a central point or for an individual revenue contract from Workbench.

## Review holds from a central point

Complete the following steps to review all the holds that are pending or released in the system:

1.  Navigate to Workbench > Holds. The Holds page gets displayed in a list.
2.  From the Hold Level list, select the desired hold level to narrow down the displayed holds.
3.  From the Status list, select whether you want to view the pending holds or released holds.
4.  (Optional): To review the revenue contract containing a specific hold, hover the mouse over the hold line and click the Review RC icon . The Review Revenue Contract page gets displayed.

## Review holds for an individual RC

Complete the following steps to review holds applied to an individual revenue contract:

1.  Navigate to Workbench > Revenue Contracts and search for the target revenue contract.
2.  In the search result, hover the mouse over the contract line and click the View Revenue Contract icon The Revenue Contract Detail page gets displayed. The count of different holds applied to the current revenue contract is indicated by the Approvals/Holds button . Applying one hold to multiple lines is counted as one. A hold applied to a revenue contract impacts various lines or POBs in this contract.
3.  To review or release the RC-level holds applied to this revenue contract, complete the following steps:
    1.  Click Approvals/Holds. The Holds and Approvals window gets displayed.
    2.  Click the RC Holds tab. It lists the RC-level holds to be released in the Current Holds section. The released holds are listed in the Holds History section.
    3.  (Optional): To release the RC-level holds, in the Current Holds section, select the checkbox at the beginning of each hold line, enter the release comments, select the release reason, and then click Release Holds.
4.  To review the POB level or line-level hold applied to this revenue contract, complete the following steps:
    1.  On the Contracts/Orders tab, switch to the POB view or the line view by selecting POB View or Line View from the view list.
    2.  From the Status list, select whether you want to review the pending holds, released holds, or both.
    3.  From the Hold list, select the name of the hold to be displayed. The POB or line that has the specified hold applied gets displayed. If there is no data display for the list for selection, it means the selected hold of the selected status does not exist.
    4.  (Optional): To release holds in the current view for a specific line, hover the mouse over the line , click (...) in the Actions column, and then click Line Actions > Holds - Release. In the Current Holds section of the Release Holds window, select the checkbox at the beginning of each hold line, enter the release comments, select the release reason, and then click Release.
