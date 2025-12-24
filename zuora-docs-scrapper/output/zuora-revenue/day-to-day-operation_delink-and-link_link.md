---
title: "Link"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/delink-and-link/link"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:32:29.463Z"
---

# Link

Learn how to link orphan transaction lines, POBs, or revenue contracts to an existing revenue contract.

If the revenue contract that is to be linked to is already posted, you must unfreeze the revenue contract before you can link other revenue contracts, POBs, or transaction lines to it.

When there are orphan transaction lines, POBs, or revenue contracts, you can link them to an existing revenue contract.

Alternatively, you can manually create a new revenue contract to contain those items.

1.  On the Revenue Contract Detail page, click the menu icon next to Switch to POB and then click Link RC/POB/Lines.
2.  In the Link RC/POB/Lines window, click different tabs to select the target transaction lines, POBs, or revenue contract that you want to link to the current RC.

    Note: If you are linking the transaction line, on the Lines tab, specify whether the selected line is the leading line that drives revenue recognition in the Lead Line Checkbox column.

3.  After you complete the selection, click the save icon.
4.  In the Link Comments window, provide your comment and then click Link.

The selected RCs, POBs, or transaction lines are added to the existing revenue contract. Reallocation occurs.

Holds on the RC level or the POB level will be applied again to the target revenue contract. If the criteria of the line-level hold are met, it will also be applied to the target revenue contract.
