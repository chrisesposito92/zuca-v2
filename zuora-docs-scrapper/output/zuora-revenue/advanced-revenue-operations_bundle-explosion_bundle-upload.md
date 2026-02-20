---
title: "Bundle upload"
url: "https://docs.zuora.com/en/zuora-revenue/advanced-revenue-operations/bundle-explosion/bundle-upload"
product: "zuora-revenue"
scraped_at: "2026-02-20T21:19:44.004Z"
---

# Bundle upload

Upload a bundle definition in Zuora Revenue to split sales order lines into multiple transaction lines.

Before the sales order lines can be automatically split into children transaction lines, you must define how Zuora Revenue should expand or explode a single sales order line into multiple transaction lines. To do this, you must upload the bundle definition file to Zuora Revenue.

## Before you begin

Before you can upload bundle definitions to Zuora Revenue, ensure the following requirements are met:

-   POB templates are created for children lines of the bundle. For information, see [Create POB template](/zuora-revenue/getting-started/policy-management/performance-obligations-processing) .

-   Advanced rules are associated with the appropriate POB templates. For information, see [Advanced Rule](/zuora-revenue/getting-started/policy-management/performance-obligations-processing/define-pob-assignment-rules/define-and-apply-advance-rules) .

-   The Enable\_Bundle\_Upload profile is set to Yes on the Setups > Application > Profiles page.


## Procedure

The procedure to upload a bundle definition is provided [here](/zuora-revenue/advanced-revenue-operations/bundle-explosion/bundle-upload/upload-bundle-definitions).

## What to do next

In the Uploaded Files section on the Bundle page, you can view the file upload result. After the bundle definition file is uploaded to Zuora Revenue, the sales order file can be uploaded with one line (parent) and the total sales order value. Zuora Revenue will split the sales order line details into multiple children lines based on the bundle definition and POB templates.
