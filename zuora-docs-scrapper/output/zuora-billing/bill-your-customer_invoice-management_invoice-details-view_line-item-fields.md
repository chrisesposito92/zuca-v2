---
title: "Line item fields"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-details-view/line-item-fields"
product: "zuora-billing"
scraped_at: "2025-12-24T08:31:09.766Z"
---

# Line item fields

This topic outlines the fields displayed for line items in invoices, including SKU, name, service period, charge date, and more.

The following fields are displayed for line items in invoices.

| Field | Description |
| --- | --- |
| SKU | The SKU number for the product or service being billed. |
| Name | The name of the product rate plan charge.If a charge is billed for a partial month or period, the charge name ends with Proration.For a charge that is credited back, the suffix appended to the charge name depends on the setting of the Use system default suffix for credit items billing rule:Yes : If a charge is partially credited back, the charge name ends with Proration Credit.Yes : If a charge is fully credited back, the charge name ends with Credit.No : If a charge is partially credited back, the charge name ends with Proration.No : If a charge is fully credited back, the charge name does not have any suffix. |
| Service Period | The period being billed. |
| Charge Date | The date for the charge. |
| UOM | The unit of measure. |
| QTY | The quantity for the product or service being billed. The value is always 1 for the Delivery Pricing charges. |
| Number of Deliveries | The number of deliveries dedicated to the Delivery Pricing charges. To view this field, you must configure this page and add this field first. |
| Subtotal | The total before applying any taxes or adjustments. |
| Discount | The discount amount, the value is negative. |
