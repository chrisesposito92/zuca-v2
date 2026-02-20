---
title: "Configure layouts for transfer accounting review"
url: "https://docs.zuora.com/en/zuora-revenue/data-management/configure-the-layout-for-transfer-accounting-review/configure-layouts-for-transfer-accounting-review"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:18:28.188Z"
---

# Configure layouts for transfer accounting review

Learn how to configure a layout to display selected fields for transfer accounting review, including creating, managing, and setting default layouts.

Complete the following steps to configure a layout to display only the selected fields for transfer accounting review:

1.  Navigate to Accounting > Transfer Accounting . This page lists all the transfer batches. The configurable layout is applicable only to the batches whose status is TRANSFERRED or READY TO TRANSFER.
2.  Hover the mouse over the batch line and click the Summary Download icon or the Detail Download icon .
3.  In the pop-up window, click Manage Layout . The Manage Layout window is displayed listing all the configured transfer summary or transfer details layouts.
4.  To add a new layout, click the New Layout icon .
5.  In the New Layout window, type a name for the layout in the Layout Name field and optionally a short description in the Layout Description field.
6.  Specify who can view or edit this layout by selecting one of the following items for Accessible to field:

    -   All: Everyone can view and edit this layout.

    -   All (Readonly): Everyone can view this layout but only the layout creator can edit it.

    -   Owner: Only the layout creator can view and edit this layout.


7.  Click the save icon at the upper-right corner. The layout under the specified name is created. Some fields are by default added for the layout, which is displayed on the right-side list.
8.  In the same window, configure the fields that you want to display when you are viewing the transfer data. ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/648429ae-6e85-4643-9e68-5f6a9f9e9de2?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY0ODQyOWFlLTZlODUtNDY0My05ZTY4LTVmNmE5ZjllOWRlMiIsImV4cCI6MTc3MTcwODcwMywianRpIjoiNWE0MzQxZjUwZDQ4NDhkZjllY2ZmMzE1MTEzNjMxNzgiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.OU5uOL0ZbyotOhga6CSuwlTXBkd8taAEw86LirSSUrQ)

    -   The listed label names are defined on the Setups > Application > Labels page under the Transfer Accounting Review Report data category.

    -   To clear all the fields that are added by default upon creation, click the double left arrow (<< ).

    -   To add the field to the layout, select the field from the list on the left, and use the right arrow (>) to move your selection to the list on the right. You can select more than one field and move them all together.

    -   The selected field is highlighted in grey. To clear the selection, click the highlighted field again.

    -   To adjust the sequence of the selected fields, click the field on the right side, and then use the up arrow () or down arrow. You can select more than one field and move them together.

    -   Use the search line to quickly locate the target field. The displayed fields will dynamically change based on the characters that you type on the search line.


9.  When you are done configuring the fields for the layout, click the save icon and close the window.
10.  To set the layout as default to use for the current user or for the system, in the Manage Layouts window, hover the mouse over the target layout line, and click the Make It User Default or Make It System Default icon . ![](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/da035629-1c08-45bb-885c-68a1e51c5f5b?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRhMDM1NjI5LTFjMDgtNDViYi04ODVjLTY4YTFlNTFjNWY1YiIsImV4cCI6MTc3MTcwODcwMywianRpIjoiNTU0ZTA0ZTU5MTJiNDIzNDkxOTkwZGE3ZDljYTliNTQiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJPbkFzQUJUb1lNdVNnalRaVHpuUCJ9.z4xIKCxs7yUVgbHYM71gN8poOBxtBIYSVMm7keV-i6k)

After the configured layout is saved, it will be displayed on the available layout list for your selection. Use the layout drop-down list to select the layout to display the transferred accounting data.
