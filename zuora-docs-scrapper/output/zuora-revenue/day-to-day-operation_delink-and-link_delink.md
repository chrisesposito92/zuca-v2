---
title: "Delink"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/delink-and-link/delink"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:32:27.102Z"
---

# Delink

Learn how to delink a revenue contract, POB, or transaction line.

Make sure that the target RCs, POBs, or transaction lines are eligible to be delinked:

-   If the revenue contract is already posted, you must unfreeze the revenue contract before you can delink the revenue contract, POBs, or transaction lines.
-   If a POB is already released in a revenue contract, to delink a transaction line from the POB, you must defer revenue for the POB first.
-   If you try to delink a line that is the leading line for the POB, the leading line must switch to another line in the POB.

You can delink one or more POB lines or transaction lines from one revenue contract to make them orphan lines. After that, you can link them to another RC or create a new RC. You can also delink a revenue contract and then link it to another one. Anytime a manual delink action is performed, the systematic grouping rules are not applicable thereafter on the RC.

1.  On the Revenue Contract Detail page, click the menu icon next to Switch to POB and then click Delink.

    Note: Alternatively, if you want to delink a specific POB or transaction line, select the line in the Contracts/Orders table, click the menu icon on that line, and then skip to Step 4.

2.  From the Delink Method list, select the appropriate level that you want to delink within the revenue contract.
3.  Complete one of the following steps depending on the level that you selected in the previous step:

    -   To delink the revenue contract, click Delink.
    -   To delink one or more POBs, select the checkbox in front of the POB name and then click Delink.
    -   To delink one or more transaction lines, select the checkbox in front of the sales order number and then click Delink.

    Note: If there are many POBs or transaction lines, to narrow down the scope, you can click Add Filters and then define filters.

4.  In the Delink Comments window, provide the comment and click OK.

The selected revenue contracts, POBs, or transaction lines are delinked and reallocation occurs. The delinked items (RC, POB, or transaction line) are listed on the Orphan Transactions page in Workbench or in the Orphan Transactions Report.

If a revenue contract is delinked, the revenue contract number becomes a negative value. For example, after the revenue contract 1000 is delinked, the revenue contract number becomes -1000. All POB lines in this revenue contract are listed in the Orphan Transactions Report. You can undo delinking for a revenue contract from the Orphan Transactions Report by clicking the revenue contract number in the report and then using the Undo Delink menu option.
