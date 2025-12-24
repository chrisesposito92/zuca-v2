---
title: "Customization of units of measure"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/system-settings/customization-of-units-of-measure"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:50.229Z"
---

# Customization of units of measure

Learn how to customize units of measure (UOM) for your company, including creating, editing, and managing UOM settings.

You can customize the unit of measure (UOM) for your company to measure the use of your services, such as, minutes, people, seats, and licenses can all be units of measure.

## UOM settings

To create a new custom UOM, on the Customize Unit of Measures page, click Add New UOM at the bottom and enter information for the fields listed in the table below. All fields except for Displayed As are required. You can create as many custom UOMs as your company requires.

You can edit or delete the UOM by clicking Edit or Remove to the right of your UOM. However, you cannot delete a UOM or update its name if it is in use, such as in subscription rate plan charges or usage records.

| Setting | Description |
| --- | --- |
| Active | Select the Active box next to the UOM to activate the UOM for use in your product catalog. If you do not select Active, the UOM cannot be used in any new rate plans within your product catalog. |
| Name | The name of the UOM that you enter here is shown in labels and lists within Zuora Billing. For example, a name can be "clicks" or "seats." |
| Displayed As | Use the Displayed As option to enter a name for the UOM that you want displayed on your invoices. The Displayed As name can be the same as the name of your UOM (as entered in the Name field), or it can be different. |
| Decimal Places | This is the number of digits to the right of the decimal point that you want to use when displaying the UOM. The value in this field must be 0 or a positive integer. |
| Rounding | You can specify whether or not your usage value (if it has too many decimal places), should be rounded up or down. |
| Usage Log File Label | The text to look for in the column heading of the usage log file. |

Some tenants use the same value for the Name, Displayed As, and Usage Log File Label fields. After the name of a UOM is added, Zuora Billing will use that same name in the Displayed As and Usage Log File Label fields. You can edit the fields if necessary.
