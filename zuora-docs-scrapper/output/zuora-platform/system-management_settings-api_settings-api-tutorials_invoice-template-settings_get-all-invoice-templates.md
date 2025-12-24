---
title: "Get all Invoice Templates"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/invoice-template-settings/get-all-invoice-templates"
product: "zuora-platform"
scraped_at: "2025-12-24T05:07:14.103Z"
---

# Get all Invoice Templates

Learn how to retrieve all invoice templates by the Settings API.

You can list all Invoice Templates, Credit Memo Templates, and Debit Memo Templates by performing GET calls on the corresponding endpoints of the Settings API. This article describes how to list all Invoice Templates in a tenant.

To get all Invoice Templates, see the following request and a sample of 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/invoice-templates`

Response body:

\[ { "name": "System Default Template", "defaultTemplate": true, "suppressZeroValueLine": false, "templateFileName": "Zuora - Invoice Template - 2016 v1.0 - USD - English (1).doc", "templateCategory": "New", "associatedToBillingAccount": true }, { "name": "AllBrighter", "defaultTemplate": false, "suppressZeroValueLine": false, "templateFileName": "Allbrighter - Invoice Template - 2019 v1.1USD.doc", "templateCategory": "New", "id": "bd5d1b5ce21827df053fda6d43fb4ade" "associatedToBillingAccount": false } \]
