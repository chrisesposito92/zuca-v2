---
title: "SSP direct upload"
url: "https://docs.zuora.com/en/zuora-revenue/day-to-day-operation/ssp-direct-upload"
product: "zuora-revenue"
scraped_at: "2025-12-24T04:31:15.665Z"
---

# SSP direct upload

Zuora Revenue supports uploading externally estimated SSP through predefined templates.

If SSP can be estimated outside Zuora Revenue, you can upload it as a spreadsheet to Zuora Revenue based on your defined SSP templates.

## Procedure

Before your SSP data can be uploaded to Zuora Revenue, an SSP template must be defined. The SSP data is uploaded as an SSP batch that is created based on the SSP template.

Complete the following steps to upload SSP to Zuora Revenue:

1.  [Create an SSP template and download the template](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/D_Day_to_day_operation/topics/crearte_and_download_ssp_template.dita).
2.  Fill in your SSP data in the downloaded file.
3.  [Create an SSP batch based on that template to upload the file](/db/organizations/zuora/repositories/prod-sitemap/content/documents/external_publications/revenue/D_Day_to_day_operation/topics/crearte_and_download_ssp_template.dita).

## Result

After the SSP data is approved by a superuser, it will be applied to incoming transactions to determine the SSP value. You can review the SSP stratification by clicking the View Stratification icon.

## What to do next

Optionally, you can assign the defined SSP template to an existing RC grouping template. So that the SSP rules can be applied to the related revenue contracts. To do it, edit the RC grouping template and select this SSP template in the SSP Hierarchy tab. For more information, see [Create RC Grouping Template](/zuora-revenue/getting-started/policy-management/rc-grouping-template/create-rc-grouping-template).

## Example

The following example shows an SSP template that will be used to upload the SSP value as percent.

![ssp-upload-template.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/5e4da8ff-e8b6-4752-bd77-b6d84525b01e?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjVlNGRhOGZmLWU4YjYtNDc1Mi1iZDc3LWI2ZDg0NTI1YjAxZSIsImV4cCI6MTc2NjYzNzA3MywianRpIjoiNjNlYmQxYTg1Njc1NDkxZGFlYzg3YWMxNTU3OTljN2QiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.29jQRgBfvBk1H3dgucnDpW0Rg0Wrarmetic_1grAGHM)

The following spreadsheet is created based on the above SSP template and uploaded to Zuora Revenue.

![ssp-upload-file.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/658e69e1-765b-453f-a395-9c893f5717d0?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6IjY1OGU2OWUxLTc2NWItNDUzZi1hMzk1LTljODkzZjU3MTdkMCIsImV4cCI6MTc2NjYzNzA3MywianRpIjoiY2RiZWRjNzM0NmM0NGNhN2EzY2EwZmQ0ZjhmYjEwYzkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.rTEVo3QJdn4ghvRuOp0JAdMABpvApIWrdwZTTQA0Lmg)
