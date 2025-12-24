---
title: "Get Accounting Rules - Billing Rules"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/billing-rule-settings/get-accounting-rules---billing-rules"
product: "zuora-platform"
scraped_at: "2025-12-24T05:06:48.490Z"
---

# Get Accounting Rules - Billing Rules

Learn how to retrieve the Accounting Rules settings by the Settings API.

To get accounting rules, see the following request and a sample of 200 response.

HTTP request:

`GET https://rest.zuora.com/settings/accounting-rules`

Response body:

{ "createJournalEntriesForPendingPayments": true/false, "allowBlankAccountingCodes": true, "allowCreationInClosedPeriod": true, "allowUsageInClosedPeriod": true, "allowRevenueScheduleNegativeAmounts": true, "differentCurrencies": true, "cashBasedAccountingStartDate": "2024-11-11" }
