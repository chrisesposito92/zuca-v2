---
title: "POB dependency"
url: "https://docs.zuora.com/en/zuora-revenue/getting-started/policy-management/performance-obligations-processing/pob-dependency"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:24:27.387Z"
---

# POB dependency

Zuora Revenue's POB dependency feature allows the revenue of one performance obligation to be released only when another has started, supporting sequential obligations in revenue contracts.

Zuora Revenue supports the revenue of one performance obligation to be amortized only when another performance obligation in the revenue contract has started releasing the revenue. This feature is called POB dependency.

The POB dependency feature is to support the scenarios where some of the performance obligations in the revenue contract are sequential in nature. It means one obligation that starts performing will lead to the start of other obligations.

## Configuration requirements

When you are creating or editing a POB template, define its POB dependency by using the POB Dependency tab. To add one parent POB template for the current template, add one row in this tab and specify the fields as necessary. Each POB template can have more than one parent POB template defined in this tab.

| Field | Description |
| --- | --- |
| Parent POB Template | This is a required field. Select the template of the parent POB from the drop-down list. |
| Dependency Type | This is a required field. It specifies the trigger point to release the dependency.Currently, you can only select Upon Start in Zuora Revenue. This dependency type means the child POB will start to release the revenue only when the assigned parent POB starts to release the revenue. If the release percentage of the parent POB is 0, no revenue can be released for the child POB. |
| Link Identifier | This is an optional field. It specifies a particular field as the linking identifier between the parent POB and the child POB.For example, if you select the Product Family field as the link identifier, the system will link the RC line of the parent POB and the RC line of the child POB with the same Product Family value. |
| System Mapping | If you do not select a particular field as the linking identifier, the System Mapping checkbox will be selected by default. When it is selected, the system will automatically link the RC line of the parent POB and the RC line of the child POB based on field values that they have in common.If you already select a particular field for Link Identifier and also select the System Mapping checkbox, the field selected for Link Identifier will take precedence over system mapping. |

## Accounting impact

The dependency that you defined between the parent POB and the child POB does not impact the creation of initial accounting entries. However, there will not be any amortization entries for the child line if the release percentage of the parent line is 0.

If the release event of the child POB line is Upon Booking, it will be in the deferred state until the parent POB line is released. After the parent POB line is released, the child POB line will be released through the POB Immediate Release program.

## POB dependency in Workbench

To view the POB dependency in Workbench, switch to the POB view on the Revenue Contract Detail page. If a POB line has associated with POB dependency, it is indicated by the POB Dependency column. Hover the mouse over the POB line, click the menu icon. and then click View Dependencies . The POB Dependencies window is displayed and lists the parent POB name and the dependency type.
