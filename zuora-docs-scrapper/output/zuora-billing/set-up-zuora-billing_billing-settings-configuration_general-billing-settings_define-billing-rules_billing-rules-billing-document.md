---
title: "Billing Rules - Billing Document"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/billing-settings-configuration/general-billing-settings/define-billing-rules/billing-rules---billing-document"
product: "zuora-billing"
scraped_at: "2025-12-24T05:03:16.914Z"
---

# Billing Rules - Billing Document

The Billing Document section outlines rules for generating and configuring billing documents, including subscription and order line item consolidation, invoice and credit memo generation, tax preview, and credit validation.

The Billing Document section contains billing rules specific to billing document generation and configurations.

Note:

These billing rules only affect billing documents generated for subscription charges but do not affect billing documents generated for order line items. Only the billing rule Allow to consolidate subscriptions, order line items and standalone invoice items into a single invoice affects billing documents generated for order line items.

## Include invoices with negative totals in the Account Balance (included associated Debit Memos)

Specify whether to include invoices with negative totals. If you select No, only invoices with positive totals will be included in the account balance.

## Invoice/Credit Memo generation rule

Note:

This feature is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see Invoice Settlement Enablement and Checklist Guide for more information.

Select whether to split all negative charges to credit memo or to create credit memos only for net negative billing.

-   Create credit memos for net negative invoice totals without grouping charges (default)

-   Create credit memos for net negative invoice totals

-   Put all negative charges on a credit memo

-   Put all negative charges and zero credit charges on a credit memo


For detailed information, see Rules for generating invoices and credit memos .

## Enable tax preview with external tax engines during generation of invoice and credit memo

Select whether to determine the document type (invoice or credit memo) through the tax preview to external tax vendors. The purpose is to prevent negative billing documents, including negative invoices and negative credit memos, when you use the Invoice Settlement feature.

This billing rule is available only if you have the Taxation and Invoice Settlement features enabled.

The following options are available:

-   Yes - The tax preview is performed when you use external tax vendors for tax calculation, for example, direct Avalara integration or configurable tax apps.

-   No - The tax preview is not performed when you use external tax vendors for tax calculation. However, the tax preview is always performed when you use Zuora Tax as the tax solution.


For more information, see Tax preview to prevent negative billing documents .

## Create credit memos mirroring invoice items

Note:

This feature is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see Invoice Settlement Enablement and Checklist Guide for more information.

Select whether and how to create credit memo items for discount invoice items or zero-balance invoice items. You cannot write off a zero-balance invoice.

The following options are provided:

-   Yes - You can create credit memo items of the Discount processing type, and can also create credit memo items for invoice items or taxation items with zero balance, covering the following scenarios: Credit memo items of the Discount processing type are created for discount invoice items in both of the following operations:

    -   The invoice items have no discount charges, and have been fully paid with payments or credit memos. The balance of both invoice items and their taxation items is zero.

    -   The invoice items have discount charges without taxation items, and have been fully discounted or fully paid with payments or credit memos. The balance of the invoice items is zero.

    -   The invoice items have discount charges with taxation items, and have been fully paid with payments or credit memos. The balance of the invoice items is zero, but the balance of taxation items and discount taxation items is not zero.


    -   Creating credit memos from invoices

    -   Invoice write-off or reversal

-   Yes but do not create for zero balance invoice items - You can create credit memo items of the Discount processing type, but cannot create credit memo items for invoice items or taxation items with zero balance in the following scenarios: You can still create credit memo items for invoice items even if they have zero balance in the following scenarios: Credit memo items of the Discount processing type are created for discount invoice items in both of the following operations:

    -   The invoice items have no discount charges, and have been fully paid with payments or credit memos. The balance of both invoice items and their taxation items is zero.


    -   The invoice items have discount charges without taxation items, and have been fully discounted or fully paid with payments or credit memos. The balance of the invoice items is zero.

    -   The invoice items have discount charges with taxation items, and have been fully paid with payments or credit memos. The balance of the invoice items is zero, but the balance of taxation items and discount taxation items is not zero.


    -   Creating credit memos from invoices

    -   Invoice write-off or reversal

-   No - You cannot create credit memo items of the Discount processing type, and cannot create credit memo items for invoice items or taxation items with zero balance in the following scenarios: You can still create credit memo items for invoice items even if they have zero balance in the following scenario: The behavior differs in the following operations:

    -   The invoice items have no discount charges, and have been fully paid with payments or credit memos. The balance of both invoice items and their taxation items is zero.

    -   The invoice items have discount charges without taxation items, and have been fully discounted or fully paid by payments or credit memos. The balance of invoice items are zero.


    -   The invoice items have discount charges with taxation items, and have been fully paid with payments or credit memos. The balance of the invoice items is zero, but the balance of taxation items and discount taxation items is not zero.


    -   Creating credit memos from invoices: Credit memo items of the Charge processing type are created for discount invoice items.

    -   Invoice write-off or reversal: When the discount invoice item has a tax item, a credit memo item with zero amount from the discount invoice item is created, and its processing type is set to Charge. A credit memo taxation item is created and is attached to the zero amount credit memo item.


By default, this billing rule is set to Yes. The default setting is recommended.

For the tenants that have Invoice Settlement enabled starting from Zuora Billing Release 280, the default value of this billing rule is Yes. For the tenants that have the Invoice Settlement enabled before Zuora Billing Release 280, the current value of this billing rule remains unchanged.

To learn about the common use cases of invoice write-off or reversal, see Invoice write-off use cases and Invoice reversal use cases .

## Available to credit validation for credit memos

Note:

This feature is only available if you have Invoice Settlement enabled. The Invoice Settlement feature is generally available as of Zuora Billing Release 296 (March 2021). This feature includes Unapplied Payments, Credit and Debit Memos, and Invoice Item Settlement. If you want to have access to the feature, see Invoice Settlement Enablement and Checklist Guide for more information.

Select whether and how to validate the "Available to Credit" amount of invoices when creating credit memos from the invoices.

The following options are provided:

-   Header-level only Zuora validates the "Available to Credit" amount of invoices only at the header level when creating credit memos from the invoices.

-   Header and Item-level Zuora validates the "Available to Credit" amount of invoices at both the header level and item level when creating credit memos from the invoices.


Note:

If Header and Item-level is selected, and you create a credit memo from an invoice , the validation logic is different when the Tax Auto Calculation check box is selected or cleared. See Preventing over-crediting for tax .

-   None Zuora does not validate the Available to Credit amount of invoices when creating credit memos from the invoices.


By default, this billing rule is set to Header-level only. Zuora validates the "Available to Credit" amount of invoices only at the header level when creating credit memos from the invoices.

This billing rule controls the credit validation during the creation of credit memos from invoices to ensure that your customers are not over-credited for the invoices. However, credit memos are always created by a bill run or billing API operations after subscriptions have been canceled or charges have been removed. For example, suppose a contract is $1,200 for the entire year starting on January 1st and the end customer is initially charged $1,200, but a $200 ad-hoc credit is issued against the charge. In that case, the prorated credit should only be $1,000. However, the bill run still generates a credit memo with an amount of $1,200.

See Understand Available to credit and invoice balance for more information.

## Include billing engine credits in total available credit

This billing rule is only available when the billing rule Available to credit validation for credit memos is set to either Header and Item-level or Header-level only, and thus has the same enablement prerequisites as the billing rule Available to credit validation for credit memos.

When creating ad hoc credit memos or delivery adjustments after the billing engine generates credit memos, you can set this billing rule to Yes or No to take into account the existing billing engine-generated credit memos in over-crediting validation and prevention or not, as follows:

-   If you set the billing rule Include billing engine credits in total available credit to Yes, depending on the setting of the billing rule Available to credit validation for credit memos, Zuora’s behaviors are different as follows:

    -   When Header-level only is selected, Zuora counts both the billing engine-generated credit memos and credit memos generated from other sources in the Total Available To Credit amount of the whole invoice.

    -   When Header and Item-level is selected, Zuora counts both the billing engine-generated credit memos and credit memos generated from other sources in the Available to Credit amount of an invoice item.

-   If you set this billing rule to No, Zuora does not take into account the billing engine-generated credit memos in over-crediting validation.


For more information, see Enable preventing over-crediting .

## Preserve snapshot of bill-to and sold-to contacts when billing documents are posted

Select whether to take snapshots for the bill-to contact and sold-to contact when the invoices are posted.

If you enable this billing rule, Zuora captures snapshots automatically when invoices are posted. The contact snapshots are available for queries using the SOAP API and Data Sources:

-   SOAP API: The ContactSnapshot object

-   Data sources: The BillToContactSnapshot and SoldToContactSnapshot joins on objects in the Invoice and Invoice Item data sources


## Enable Sequential Billing Document Number

Use this billing rule to specify whether to enable the Sequential Billing Document Number feature, indicating whether and when Zuora assigns sequential numbers to billing documents, including invoices, credit memos, and debit memos.

This billing rule is set to No by default, indicating that Zuora assigns sequential numbers to billing documents upon document generation.

With the Enable Sequential Billing Document Number feature enabled, you can use the Setting determine when the document will be assigned a number from the official document sequence billing rule to select when Zuora assigns a sequential number to a billing document.

If the Sequential Billing Document Number feature is enabled, the integration ID mapping between Zuora and Avalara becomes different. See [Integration ID mapping between Zuora and Avalara](/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/overview-of-direct-avalara-integration#concept-rjutaovt__title-2429) for more information.

## Setting determine when the document will be assigned a number from the official document sequence

Note:

You can edit this billing rule only if you have the Sequential Billing Document Number feature enabled. To enable the Sequential Billing Document Number feature, set the Enable Sequential Billing Document Number billing rule to Yes .

Select when Zuora assigns a sequential number to a billing document. Billing documents include invoices, credit memos, and debit memos.

The following options are provided:

-   Upon document generation (default) If this option is selected, a billing document has a unique formal number upon generation. For example, INV00000003.

-   Upon document posting If this option is selected, a billing document in Draft status only has a temporary number, which consists of a prefix and a document number. For example, TMP-INV-00000004. The prefix is "TMP-INV-" for invoices, "TMP-CM-" for credit memos, and "TMP-DM-" for debit memos. Upon being posted, the temporary number of the billing document is changed to a formal number, for example, INV00000004. If you unpost a billing document in Posted status, the billing document number does not change back to a temporary number. If this option is selected, PDF file generation is automatically triggered when posting a billing document. Because the first version of the PDF file has a temporary number, a new version is generated upon posting to reflect the number change.


## Invoice Past End-of-Term when Auto-Renew is OFF

Select whether to invoice charges for an entire billing period when the end of the billing period is past the end of the subscription term, specifically when Auto Renew is set to No for corresponding subscriptions.

This billing rule might be applicable when you have a subscription that includes a free trial period upfront (for one month) and the actual subscription charge begins in month two. In this example, an annual subscription fee would be charged at month two. However, at the end of the subscription term, the subscription would have a credit of one month.

If the subscription is not renewed by the customer's next bill cycle date following the term end, then there will be a credit given for the service period that was billed past End-of-Term.

By default, this billing rule is set to Yes: deprecated for all previously existing subscriptions. Zuora does not recommend that you use the Yes: deprecated option because it might cause incompatibility with ASC 606 revenue recognition.

Note that the Invoice Past End-of-Term billing rule cannot be supported by the Order to Revenue feature or the Billing - Revenue Integration feature. Do not enable this billing rule if you are a Zuora Revenue user, because it might cause incompatibility with ASC 606 revenue recognition.

## Invoice Past End-of-Term when Auto-Renew is ON

Select whether to invoice charges for an entire billing period when the end of the billing period is past the end of the subscription term, specifically when Auto Renew is set to Yes for corresponding subscriptions.

This billing rule might be applicable when you have a subscription that includes a free trial period upfront (for one month) and the actual subscription charge begins in month two. In this example, an annual subscription fee would be charged at month two. However, at the end of the subscription term, the subscription would have a credit of one month.

If the subscription is not renewed by the customer's next bill cycle date following the term end, then there will be a credit given for the service period that was billed past End-of-Term.

By default, this billing rule is set to Yes: deprecated. Note that the Invoice Past End-of-Term billing rule cannot be supported by the Order to Revenue feature or the Billing - Revenue Integration feature. Do not enable this billing rule if you are a Zuora Revenue user, because it might cause incompatibility with ASC 606 revenue recognition.

If you want to set this billing rule to No , ensure that all the following billing rules are set to Yes:

-   Prorate recurring charges for partial period?

-   Bill recurring charges for partial month (with monthly based billing periods)?

-   Bill recurring charges for partial week (with weekly based billing periods)?


## Ignore Invoice Past End-of-Term when charge's end date is on or before term end

Select whether to ignore the following Invoice Past End-of-Term billing rules when a charge’s end date is on or before the subscription term end date:

-   Invoice Past End-of-Term when Auto-Renew is OFF

-   Invoice Past End-of-Term when Auto-Renew is ON


The following options are available:

-   Yes : Zuora will bill a prorated billing period, regardless of the settings of the Invoice Past End-of-Term billing rules.

-   No (default): Charges will be billed according to the settings of the Invoice Past End-of-Term billing rules.


Note that this billing rule cannot be supported by the Order to Revenue feature or the Billing - Revenue Integration feature.

## Allow invoice splitting

Select whether to use the invoice splitting feature.

The following options are provided:

-   No (default)

-   Yes: You can split an invoice into multiple ones with different payment schedules on a percentage basis. You can input decimal percentages for each entry.


See Splitting invoices for more information.

## Allow to consolidate subscriptions, order line items and standalone invoice items into a single invoice

Select whether to consolidate subscriptions, order line items, and standalone invoice items under the same account into a single invoice.

-   Yes (default) Zuora consolidates subscriptions, order line items, and standalone invoice items under the same account into a single invoice in the following approaches:

    -   Through bill runs

    -   Calling the [Generate billing documents by account ID](https://www.zuora.com/developer/api-references/api/operation/POST_GenerateBillingDocuments) operation

    -   Calling the [Invoice and collect](https://www.zuora.com/developer/api-references/api/operation/POST_TransactionInvoicePayment) operation

    -   Calling the [Generate](https://www.zuora.com/developer/api-references/older-api/operation/Action_POSTgenerate) action (not recommended)

-   No Zuora separates subscriptions, order line items, and standalone invoice items under the same account into different invoices based on their origins.


For examples and limitations when order line items and subscription charges are billed, see Limitations for interaction with Invoice Settlement .

Note: If the Invoice Subscription Separately flag is set to Yes at the Subscription level, then it takes precedence over this Billing rule. Even if the OLI is linked to the subscription, separate invoices will be created.

## Use system default suffix for credit items

Select whether to append credit-related suffixes to the line item name of each charge that is credited back in invoices.

-   Yes (Default) Zuora automatically appends credit-related suffixes to the line item name of each charge that is credited back, for example, credit items generated because of subscription cancellation, early termination, and price changes.

    -   If a charge is partially credited back, the charge line item name ends with `Proration Credit` .

    -   If a charge is fully credited back, the charge line item name ends with `Credit` .

-   No Zuora does not append credit-related suffixes to the line item name of each charge that is credited back.

    -   If a charge is partially credited back, the charge line item name ends with `Proration` .

    -   If a charge is fully credited back, the charge line item name has no suffix.


## Format numeric merge fields based on communication profile locales

Select whether to format numeric merge fields based on the communication profile locales of your customers when defining templates for invoices, credit memos, and debit memos.

The following options are provided:

-   No (default). If you have not set a format pattern for merge fields in the templates, Zuora will format the numbers with a system default behavior; if you have set the format pattern, Zuora will format the numbers with the specific pattern.


-   Yes This option is available only if you have set a format pattern for merge fields in the templates. As to the locale to be used, it depends on the customer account setting. If the customer account has a communication profile, its locale will be used; otherwise, the tenant locale will be used.


See Define date and numeric formats for mail merge fields for more information.

## Copy billing attributes from accounts to billing documents when no attributes are specified on subscriptions

Select whether to automatically copy the account-level billing attributes to billing documents generated for subscriptions when no billing attributes are specified on such subscriptions. Billing documents include invoices, credit memos, and debit memos. Memos are available only if you have the Invoice Settlement feature enabled.

This billing rule is available only if you have the Flexible Billing Attributes feature enabled.

-   Yes (default) When billing documents are generated for subscriptions without specified billing attributes, the account-level billing attributes are automatically copied to billing documents. When the option is Yes , if any draft billing document exists for an account, you cannot modify the billing attributes on the account.

-   No When billing documents are generated for subscriptions without specified billing attributes, billing attributes are kept empty for billing documents. Later when you regenerate files for the billing documents, the files always use the default billing attributes from the corresponding accounts. When the option is No , even if any draft billing document exists for the account, you can still modify the billing attributes on the account.


By selecting the No option, you have the flexibility to keep the billing attributes empty for billing documents during their generation, and always use the latest account-level billing attributes in later file generation. This behavior ensures that the PDF files generated for billing documents always reflect the latest default billing attributes from the corresponding accounts, even if you make modifications to the billing attributes on the corresponding accounts.

If draft billing documents that have specific billing attributes exist for an account, you cannot change the billing rule from Yes to No . To proceed, cancel or post the draft billing documents first, and then change the billing rule option.

## Copy billing attributes from accounts to standalone invoices when no attributes are specified on standalone invoices

Select whether to assign the account-level billing attributes to standalone invoices when no billing attributes are specified during the creation of standalone invoices.

This billing rule is available only if you have the Flexible Billing Attributes feature enabled.

-   Yes Select Yes if you want to assign the latest account-level billing attributes to standalone invoices when no attributes are specified during the creation of standalone invoices.

-   No (default) Select No if you want to keep the billing attributes empty for standalone invoices and always use default billing attributes from the corresponding accounts.


## Default allocation rule for write-off

Select whether to set an allocation rule to write off debit memos and invoices. This rule enables the allocation of the write-off amount on the invoice or debit memo at the item level based on the selected option. The default value of this billing rule is proration.

The following options are provided:

-   FIFO: The amount is allocated to the invoice or debit memo item using the first in, first out method. Only after the previous item of the invoice or debit memo has been written off will the next item be allocated. The items of the invoice or debit memo are ordered randomly.

-   Proration : The write-off amount is prorated and allocated to an invoice or debit memo at the item level.


## When would you like the Rating Details to be generated?

Select this option when you would like the rating details to be generated. This option captures the full breakdown of charge calculations and billing information.

Choose After Invoice (asynchronous) to generate rating details shortly after the invoice is created.

Choose With Invoice (synchronous) to generate rating details at the same time as the invoice. Zuora recommends this option, if you want them shown on the invoice PDF. For more information see Configure RatingDetails in HTML template.

Note: If you select After bill run, the Rating Details will not be available immediately but rather sometime after the bill run. If you select During bill run, the rating details will be generated in the bill run process and it may affect the performance of the bill run.
