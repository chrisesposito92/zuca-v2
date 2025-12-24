---
title: "Billing rules"
url: "https://docs.zuora.com/en/zuora-platform/system-management/settings-api/settings-api-field-name-and-ui-text-comparison-table/billing-rules"
product: "zuora-platform"
scraped_at: "2025-12-24T05:06:24.948Z"
---

# Billing rules

This reference lists billing rule settings in the Settings API and their corresponding texts in the Zuora UI.

API Key: `BillingRules`

UI Location:

| API field name | UI text |
| --- | --- |
| oneTimeCreditBack | Enable credit back for removing or canceling one time charges? |
| prorateRecurringMonthlyCharges | Bill recurring charges for partial month (with monthly based billing periods)? |
| prorateRecurringWeeklyCharges | Bill recurring charges for partial week (with weekly based billing periods)? |
| prorateUsageMonthlyCharges | Bill usage charges for partial month (with monthly based billing periods)? |
| prorateUsageWeeklyCharges | Bill usage charges for partial week (with weekly based billing periods)? |
| daysInMonth | When prorating a month, assume 30 days in a month or use actual days? |
| prorationUnit | When prorating periods greater than a month, prorate by month first, or by day? |
| allowAutoPostBillRun | Support bill run auto-post? |
| autoPostBillRunDefaultValue | Default bill run to auto-post? |
| includeNegativeInvoice | Include invoices with negative totals in the Account Balance (included associated Debit Memos)? |
| transactionOnSubscription | How should errors be handled when generating multiple invoices for a single account via bill run? |
| takeContactSnapshot | Preserve snapshot of bill-to and sold-to contacts when billing documents are posted? |
| sequentialInvoiceNumber | Enable Sequential Billing Document Number? |
| numberAssignmentTiming | Setting determines when the document will be assigned a number from the official document sequence |
| invoicePastEndOfTerm | Invoice Past End-of-Term when Auto-Renew is OFF? |
| billToTermEndWhenAutoRenew | Invoice Past End-of-Term when Auto-Renew is ON? |
| taxAddressOwner | Calculate taxes using information from Customer Account of: |
| taxInclusiveRoundingRule | Zuora Tax rounding rule for inclusive tax calculation |
| taxRateChangeOption | When service period of an invoice item crosses multiple tax rate period, it will generate: |
| notSendZeroItemsForTax | Do not send $0 items to external tax engines |
| useAvalaraTaxCalculationForIIA | Use Avalara to calculate taxes for invoice item adjustments? |
| allowIndistinctMapping | Allow indistinct mapping from Memo / Invoice Item Adjustment tax item to invoice item tax |
| zuoraNumberFormatForMergeField | Format numeric merge fields based on communication profile locales? |
| copyBillingAttributesFromAccountForStandaloneInvoice | Copy billing attributes from accounts to billing documents when no attributes are specified on subscriptions. |
| preGenerateInvoicePdf | Proactively generate Invoice PDF files? |
| availableToCreditValidationLevel | vailable to credit validation for credit memos |
| timeOfDailyInvoice | Approximate time of day to generate daily invoices |
| debookRebookSupportable | Apply new tax rate for additional units purchased and old tax rate for returns? |
| includeChildUsage | Include usage from child accounts when billing? |
| recurringChargeStyle | Invoice recurring charges in advance or arrears? |
| proratePeriodOfRecurringCharge | Prorate recurring charges for partial period? |
| creditMemoMirroringInvoiceItemsRule | Create credit memos mirroring invoice items |
| legalDocumentGeneratingRule | Invoice/Credit Memo generation rule |
| zuoraTaxRoundingDiffDispersion | Redistribute Zuora Tax rounding differences |
| rateUsageIndividually | Round and determine a price for usage records individually when rating usage charges? |
| invoiceSplit | Allow invoice splitting? |
| consolidateInvoices | Allow to consolidate subscriptions, order line items and standalone invoice items into a single invoice? |
| discountCreditProration | Credit for Prorated Discounts (Fixed-amount Discount Charge Only) |
| useSystemDefaultSuffixForCreditItems | Use system default suffix for credit items |
| autoRenewalBillRun | Default bill run to automatically renew auto-renew subscriptions that are up for renewal |
| catchUpBillRun | Enable catch-up bill run |
| copyBillingAttributesFromAccount | Copy billing attributes from accounts to billing documents when no attributes are specified on subscriptions. |
| customerHierarchy | Enable Customer Hierarchy |
| recurringCreditProrationOption | When bill credit for recurring charges, based on billed period or credit period |
| taxPreview | Enable tax preview with external tax engines during generation of invoice and credit memo? |
| discountConsolidated | Send external engine consolidated discount and regular charge |
| availableToCreditIncludingRbeCreditMemo | Available to credit validation for credit memos |
| stackedDiscountClassApplyRule | Should the stacked percentage discount ignore or follow discount class? |
