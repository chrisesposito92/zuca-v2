---
title: "Get a specific setting - Billing Rules"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-tutorials/billing-rule-settings/get-a-specific-setting---billing-rules"
product: "zuora-platform"
scraped_at: "2025-12-24T05:06:43.150Z"
---

# Get a specific setting - Billing Rules

Learn how to retrieve the Billing Rules settings by the Settings API.

1.  Use the [List all settings](https://developer.zuora.com/v1-api-reference/api/operation/GET_ListAllSettings/) operation to retrieve all the available settings and supported operations of them.
2.  Search for "Billing Rules" and find the following information from the response body of the "List all settings" call.

    { "settings": \[ ..., { "key": "BillingRules", "description": "Billing Rules settings", "context": "Entity", "pathPattern": "/billing-rules", "httpOperations": \[ { "method": "GET", "url": "/settings/billing-rules", "parameters": \[\], "responseType": { "$ref": "#/definitions/BillingRules", "definitions": { "BillingRules": { "additionalProperties": false, "type": "object", "properties": { "includeNegativeInvoice": { "type": "boolean" }, "prorationUnit": { "type": "string", "enum": \[ "ProrateByDay", "ProrateByMonthFirst" \] }, "prorateUsageWeeklyCharges": { "type": "boolean" }, "preGenerateInvoicePdf": { "type": "boolean" }, "notSendZeroItemsForTax": { "type": "boolean" }, "availableToCreditValidationLevel": { "type": "string" }, "timeOfDailyInvoice": { "maximum": 23, "type": "integer", "minimum": 0 }, "invoicePastEndOfTerm": { "description": "Invoice Past End-of-Term when Auto-Renew is OFF", "type": "boolean" }, "oneTimeCreditBack": { "type": "boolean" }, "taxInclusiveRoundingRule": { "type": "string", "enum": \[ "RoundingNetAmount", "RoundingTaxAmount" \] }, "billToTermEndWhenAutoRenew": { "description": "Invoice Past End-of-Term when Auto-Renew is ON", "type": "boolean" }, "includeChildUsage": { "type": "boolean" }, "allowAutoPostBillRun": { "type": "boolean" }, "taxAddressOwner": { "type": "string", "enum": \[ "SubscriptionOwner", "InvoiceOwner" \] }, "recurringChargeStyle": { "type": "string", "enum": \[ "Advanced", "Arrears", "DependsOnRatePlan" \] }, "prorateUsageMonthlyCharges": { "type": "boolean" }, "takeContactSnapshot": { "type": "boolean" }, "autoPostBillRunDefaultValue": { "type": "boolean" }, "prorateRecurringMonthlyCharges": { "type": "boolean" }, "proratePeriodOfRecurringCharge": { "description": "Prorate recurring charges for partial period", "type": "boolean" }, "daysInMonth": { "type": "string", "enum": \[ "Assume30Days", "UseActualDays" \] }, "legalDocumentGeneratingRule": { "type": "string", "enum": \[ "GroupbyChargedAmountSign", "GroupByOriginalSRPC", "GroupByTotalAmountSign" \] }, "prorateRecurringWeeklyCharges": { "type": "boolean" }, "transactionOnSubscription": { "type": "boolean" }, "numberAssignmentTiming": { "type": "string" }, "taxRateChangeOption": { "type": "string" }, "rateUsageIndividually": { "type": "boolean" } } } } } }, ... \] } \] }

    You can find the following information about the Billing Rules setting:

    -   GET operation endpoint of for Billing Rules setting: `"url": "/settings/billing-rules"`

    -   The response schema:

        "BillingRules": { "additionalProperties": false, "type": "object", "properties": { "includeNegativeInvoice": { "type": "boolean" }, "prorationUnit": { "type": "string", "enum": \[ "ProrateByDay", "ProrateByMonthFirst" \] }, "prorateUsageWeeklyCharges": { "type": "boolean" }, "preGenerateInvoicePdf": { "type": "boolean" }, "notSendZeroItemsForTax": { "type": "boolean" }, "availableToCreditValidationLevel": { "type": "string" }, "timeOfDailyInvoice": { "maximum": 23, "type": "integer", "minimum": 0 }, "invoicePastEndOfTerm": { "description": "Invoice Past End-of-Term when Auto-Renew is OFF", "type": "boolean" }, "oneTimeCreditBack": { "type": "boolean" }, "taxInclusiveRoundingRule": { "type": "string", "enum": \[ "RoundingNetAmount", "RoundingTaxAmount" \] }, "billToTermEndWhenAutoRenew": { "description": "Invoice Past End-of-Term when Auto-Renew is ON", "type": "boolean" }, "includeChildUsage": { "type": "boolean" }, "allowAutoPostBillRun": { "type": "boolean" }, "taxAddressOwner": { "type": "string", "enum": \[ "SubscriptionOwner", "InvoiceOwner" \] }, "recurringChargeStyle": { "type": "string", "enum": \[ "Advanced", "Arrears", "DependsOnRatePlan" \] }, "prorateUsageMonthlyCharges": { "type": "boolean" }, "takeContactSnapshot": { "type": "boolean" }, "autoPostBillRunDefaultValue": { "type": "boolean" }, "prorateRecurringMonthlyCharges": { "type": "boolean" }, "proratePeriodOfRecurringCharge": { "description": "Prorate recurring charges for partial period", "type": "boolean" }, "daysInMonth": { "type": "string", "enum": \[ "Assume30Days", "UseActualDays" \] }, "legalDocumentGeneratingRule": { "type": "string", "enum": \[ "GroupbyChargedAmountSign", "GroupByOriginalSRPC", "GroupByTotalAmountSign" \] }, "prorateRecurringWeeklyCharges": { "type": "boolean" }, "transactionOnSubscription": { "type": "boolean" }, "numberAssignmentTiming": { "type": "string" }, "taxRateChangeOption": { "type": "string" }, "rateUsageIndividually": { "type": "boolean" } } }

3.  Make GET call at the endpoint `/settings/billing-rules`.

    HTTP request:

    `GET https://rest.zuora.com/settings/billing-rules`

    Response body:

    See the following example for the 200 response body.

    { "oneTimeCreditBack": false, "proratePeriodOfRecurringCharge": true, "prorateRecurringWeeklyCharges": true, "prorateRecurringMonthlyCharges": true, "prorateUsageMonthlyCharges": true, "prorateUsageWeeklyCharges": true, "daysInMonth": "UseActualDays", "prorationUnit": "ProrateByDay", "allowAutoPostBillRun": true, "autoPostBillRunDefaultValue": true, "includeNegativeInvoice": true, "includeChildUsage": true, "rateUsageIndividually": true, "transactionOnSubscription": true, "taxAddressOwner": "SubscriptionOwner", "takeContactSnapshot": true, "taxInclusiveRoundingRule": "RoundingNetAmount", "legalDocumentGeneratingRule": "GroupByOriginalSRPC", "recurringChargeStyle": "Advanced", "preGenerateInvoicePdf": false, "timeOfDailyInvoice": 0, "notSendZeroItemsForTax": false, "taxRateChangeOption": "OneTaxItem", "availableToCreditValidationLevel": "HeaderLevel", "invoicePastEndOfTerm": false, "billToTermEndWhenAutoRenew": true, "zuoraTaxRoundingDiffDispersion": false, "numberAssignmentTiming": "Generating", "creditMemoMirroringInvoiceItemsRule": "YesExceptForZeroItems", "debookRebookSupportable": false, "allowIndistinctMapping": false, "invoiceSplit": false, "sequentialInvoiceNumber": false, "consolidateInvoices": false, "discountCreditProration": false, "zuoraNumberFormatForMergeField": false }
