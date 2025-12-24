---
title: "Using barcodes in templates for invoices"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/billing-document-templates-configuration/create-word-templates-for-invoices/using-barcodes-in-templates-for-invoices"
product: "zuora-billing"
scraped_at: "2025-12-24T05:50:36.531Z"
---

# Using barcodes in templates for invoices

Explore how to incorporate barcodes into your invoice templates using barcode merge fields, with support for up to five fields per template.

To have a barcode on your invoice, you need to use a barcode merge field in your template. Currently, Zuora supports up to five barcode merge fields per invoice template.

Use the following format for your barcode merge field:

`{MERGEFIELD "Image:{BarCode field}, Value:[{Value}], CodeTextPosition:{CodeTextPosition}, ImageWidth:{image width in point}, ImageHeight: {image height in point}, DpiX:{dpi value horizontally}, DpiY:{dpi value vertically}" * MERGEFORMAT}`

| Parameter | Possible values |
| --- | --- |
| BarCode field | BarCode.Code128BarCode.AustraliaPostBarCode.Code39BarCode.Code39ExtendedBarCode.ITF6BarCode.ITF14 |
| Value | This can contain a string, a Customer Account or Invoice custom field, or a merge field from:Customer Account FieldsBill To Contact FieldsSold To Contact FieldsInvoice Fields |
| CodeTextPosition | This is an optional field that defines the text position of the barcode:Below (default)AboveNone |
| ImageWidth | The width of the barcode, measured by points (1/72 inch).The value is an integer not greater than 3,200. |
| ImageHeight | The hight of the barcode, measured by points (1/72 inch).The value is an integer not greater than 3,200. |
| DpiX | The horizontal resolution of the barcode, measured by dots per inch (DPI).The value is an integer not greater than 500. |
| DpiY | The vertical resolution of the barcode, measured by dots per inch (DPI).The value is an integer not greater than 500. |

## Example

The following example will return a barcode of the bill to contact's postal code:

`{MERGEFIELD “Image:BarCode.Code128, Value:[{MERGEFIELD BillToContact.PostalCode \* MERGEFORMAT}]” \* MERGEFORMAT}`

Example invoice template:

![Invoice template example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5337b69f-6ec8-45d3-b78f-11552fc80efe?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjUzMzdiNjlmLTZlYzgtNDVkMy1iNzhmLTExNTUyZmM4MGVmZSIsImV4cCI6MTc2NjY0MTgzMywianRpIjoiZDA1NDg0YzhlZDMzNDY5ZmFiNzJjOGQwMTgwMTJkMmMiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.kv23H1S-NaV6Q14tTe6yPnD5R4ld6Ef6g6GHNPUEc6c)

Returned example invoice:

![Invoice example](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/d81935fb-8720-4f2a-90c0-ed6483bf9a02?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImQ4MTkzNWZiLTg3MjAtNGYyYS05MGMwLWVkNjQ4M2JmOWEwMiIsImV4cCI6MTc2NjY0MTgzMywianRpIjoiMzg5NGNiNmZhNTYyNGM2N2JhNTRlZTQxM2JlYzQwY2MiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.GaqS0X8RYfbBS-3gj2GdGda9SD5srC-dPn6EhIX3aRU)
