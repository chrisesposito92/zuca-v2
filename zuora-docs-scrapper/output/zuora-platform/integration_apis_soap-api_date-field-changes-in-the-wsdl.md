---
title: "Date field changes in the WSDL"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/date-field-changes-in-the-wsdl"
product: "zuora-platform"
scraped_at: "2025-12-24T05:37:42.701Z"
---

# Date field changes in the WSDL

Describes the date field changes and provides guidelines on how to check your SOAP API integrations.

In WSDL 68 and earlier, Zuora treats 56 SOAP API [date fields as dateTime fields](/zuora-platform/system-management/additional-tenant-management-settings/dates-in-zuora/date-and-datetime-formats). From WSDL 69 and later, Zuora treats these fields as date fields. These fields are no longer compatible with dateTime values.

After checking and updating your integrations, you are ready to download and use [WSDL 69](/zuora-platform/integration/apis/soap-api/zuora-wsdl) or later.​

## SOAP API

Before downloading and using WSDL 69, check your SOAP API integration to see if you are passing or receiving any dateTime values to or from date fields.

## AQuA API

The date field changes described in this article also apply to AQuA API versions 69 and later. This is because the API version of AQuA is based on the corresponding version of the Zuora WSDL—for example, API version 69 is based on WSDL version 69.

-   If you want to use API version 69 or later, check your AQuA integration to ensure that you are not passing in or expecting to receive any dateTime values from date fields.

-   If you don't want to use API version 69 or later, ensure that you specify the version you do want to use in the `apiVersion` field of your AQuA queries. Otherwise, AQuA will use the latest version by default, which will result in a different date field format and may cause your existing integration to break.


## Zuora CPQ

If you use Zuora CPQ, review the affected [date fields](/zuora-platform/integration/apis/soap-api/date-field-changes-in-the-wsdl), and check and update your integration code.

## Changes in date fields since WSDL 69

To use WSDL 69 or later, check your Zuora SOAP API integration for date fields that send or receive dateTime values. The response from a date field will only be a date. The response from a dateTime field will only be a dateTime. If you try to pass a dateTime to a date field when using WSDL 69 or later, you will get an `INVALID_VALUE` error message.

To become compliant:

-   Remove any time and time zone offset components from values you use with a SOAP API date field.

-   Change your Zuora integration to expect that time and time zone offset components are not returned from a date field.


For example:

-   2015-02-28T23:23:23 becomes 2015-02-28

-   2015-02-28T23:23:23-08:00 becomes 2015-02-28


As an example, from WSDL 69 and later, `ContractEffectiveDate` is a date field and will only accept or return a date value:

![date.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/ed6ac3cb-9334-45fa-9d08-2bfd1cd6cd41?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImVkNmFjM2NiLTkzMzQtNDVmYS05ZDA4LTJiZmQxY2Q2Y2Q0MSIsImV4cCI6MTc2NjY0MTA2MCwianRpIjoiYjA4M2ExZjY1ZGFhNDg4ZDhhOWU0YzQ5ZDIyM2I3YzciLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.efDvomIV972brTPvPZjYcNl3b7eD_jqAaDNLFBbON_8)

In WSDL 68 and earlier, `ContractEffectiveDate` is a dateTime field and will accept or return a dateTime value:

![datetime.png](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/df7e9e33-7c15-4980-b324-98344800ab98?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImRmN2U5ZTMzLTdjMTUtNDk4MC1iMzI0LTk4MzQ0ODAwYWI5OCIsImV4cCI6MTc2NjY0MTA2MCwianRpIjoiZmZiNjI3YjRmMzY3NDdhYzlmMmRkZDc5Njg2OTA0YTkiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.LsGj_QmH2rs1KDJLESg-IgKDdqhv5hZu4RTEBrV4Fu8)

## Date fields you need to check

After you change your date fields, you need to check the following fields in your SOAP API integration:

| Object | Field |
| --- | --- |
| Account | LastInvoiceDateTaxExemptEffectiveDateTaxExemptExpirationDate |
| AccountingPeriod | EndDateStartDate |
| Amendment | ContractEffectiveDateCustomerAcceptanceDateEffectiveDateServiceActivationDateTermStartDate |
| BillRun | InvoiceDateTargetDate |
| BillingPreviewRequest | TargetDate |
| BillingPreviewRun | TargetDate |
| ChargeMetrics | UpToDate |
| CreditBalanceAdjustment | AdjustmentDate |
| ExternalPaymentOptions | EffectiveDate |
| Invoice | DueDateInvoiceDateTargetDate |
| InvoiceAdjustmentNote: This object is deprecated on Production in WSDL version 64.0. | RevRecStartDate |
| InvoiceItem | RevRecStartDateServiceEndDateServiceStartDate |
| InvoiceItemAdjustment | AdjustmentDateServiceEndDateServiceStartDate |
| InvoiceSplitItem | InvoiceDate |
| Payment | EffectiveDate |
| PaymentMethod | MandateCreationDateMandateUpdateDate |
| PaymentMethodSnapshot | MandateCreationDateMandateUpdateDate |
| Product | EffectiveEndDateEffectiveStartDate |
| ProductRatePlan | EffectiveEndDateEffectiveStartDate |
| RatePlanCharge | ChargedThroughDateEffectiveEndDateEffectiveStartDateProcessedThroughDateTriggerDate |
| Refund | RefundDate |
| SubscribeInvoiceProcessingOptions | InvoiceDateInvoiceTargetDate |
| Subscription | CancelledDateContractAcceptanceDateContractEffectiveDateServiceActivationDateSubscriptionEndDateSubscriptionStartDateTermEndDateTermStartDate |
| TaxationItem | TaxDate |

## Querying SOAP API objects using ZOQL

Using WSDL 68 or earlier, you can filter date or dateTime fields with date or dateTime values.

When using WSDL 69 or later, you must use a dateTime value to filter a dateTime field. You can only use a date value to filter a date field.

For example you must use a date value to filter `ContractEffectiveDate` :

select AutoRenew from subscription where ContractEffectiveDate = '2015-02-28'

See [Zuora Object Query Language (ZOQL)](/zuora-platform/data/legacy-query-methods/zoql) for more information.

## Data Source export actions

In WSDL 68 and earlier, the output format of dates and dateTimes in data source exports depends on how data was entered into Zuora. Integrations that use data source exports in WSDL 68 or earlier may need to accommodate both date and dateTime values for the same field.

From WSDL 69 and later, the output from dateTime fields is a dateTime and the output from date fields is a date. For example:

-   A value of `2015-02-13T23:18:00-08:00` will be exported as `2015-02-13T23:18:00-08:00`

-   A value of `2015-02-13` will be exported as `2015-02-13`


See Data Exports introduction for more information.
