---
title: "Get Chart of Accounts"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/chart-of-account-settings/get-chart-of-accounts"
product: "zuora-platform"
scraped_at: "2025-12-24T05:06:50.617Z"
---

# Get Chart of Accounts

Learn how to retrieve all chart of accounts by the Settings API.

To get Chart of Accounts, see the following request and a sample of 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/chart-of-accounts`

Response body:

\[ { "id": "bd5d1b5cfa98062a8c4acb7761a638a5", "category": "Assets", "type": "AccountsReceivable", "status": "Active", "customFieldsValues": {}, "name": "Accounts Receivable" }, { "id": "bd5d1b5c5812b68a91d5a9ca7b9521ed", "category": "Assets", "type": "Cash", "status": "Active", "notes": "", "customFieldsValues": {}, "glaccountName": "Bank", "glaccountNumber": "1110", "name": "Bank" }, { "id": "bd5d1b5c208aecd2783f3f6a6116b148", "category": "Assets", "type": "Cash", "status": "Active", "notes": "", "customFieldsValues": {}, "glaccountName": "Cash On Hand", "glaccountNumber": "1130", "name": "Cash On Hand" } \]
