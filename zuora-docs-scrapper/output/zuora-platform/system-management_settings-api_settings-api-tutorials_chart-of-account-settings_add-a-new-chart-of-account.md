---
title: "Add a new Chart of Account"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/chart-of-account-settings/add-a-new-chart-of-account"
product: "zuora-platform"
scraped_at: "2025-12-24T05:06:53.461Z"
---

# Add a new Chart of Account

Learn how to add a new Chart of Account by the Settings API.

To add a new Chart of Account, see the following request and a sample of 200 response.

HTTP request:

`POST https://rest.zuora.com/settings/chart-of-accounts`

Request body:

{ "id": "8a90da067e331dd4017e3853a3a20bac", "category": "Revenue", "type": "SalesRevenue", "status": "Active", "notes": "Testing", "customFieldsValues": { "AccountingCodeCustomText\_\_c": "custom text", "AccountingCodeCustomDate\_\_c": "2022-02-02", "AccountingCodeCustomPickList\_\_c": "Alpha" }, "glaccountName": "", "glaccountNumber": "", "name": "2000 - Earned Revenue" }

Response body:

{ "id": "8a90da067e331dd4017e3853a3a20bac", "category": "Revenue", "type": "SalesRevenue", "status": "Active", "notes": "Testing", "customFieldsValues": { "AccountingCodeCustomText\_\_c": "custom text", "AccountingCodeCustomDate\_\_c": "2022-02-02", "AccountingCodeCustomPickList\_\_c": "Alpha" }, "glaccountName": "", "glaccountNumber": "", "name": "2000 - Earned Revenue" }
