---
title: "BillingPreviewRequest"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-complex-types/soap-api-complex-types/billingpreviewrequest"
product: "zuora-platform"
scraped_at: "2025-12-24T05:45:00.866Z"
---

# BillingPreviewRequest

The BillingPreviewRequest object is used with a billingPreview call to request a preview of invoice items for a single customer account.

As of Zuora R181, WSDL version 61.0, the feature formerly known as forecast API was renamed to Billing Preview API. Zuora recommends that you upgrade to this latest version as soon as possible. Download WSDL version 61.0+ to use the Billing Preview API. See [Zuora WSDL](/zuora-platform/integration/apis/soap-api/zuora-wsdl) for information about downloading the current version.

## Supported calls

You can use this complex type with the [billingPreview](/zuora-platform/integration/apis/soap-api/soap-api-calls/billingpreview) call.

## Walkthroughs and use cases

The BillingPreviewRequest complex type is used to request an invoice item preview for a single customer account. To use this complex type:

1.  Request an invoice item billing preview for a single customer account by using a BillingPreviewRequest complex type as the argument to a billingPreview call.

2.  Results are returned synchronously as an array of InvoiceItem objects in a BillingPreviewResult complex type.


## Field descriptions

| Name | Required? | Allowed operations | Description |
| --- | --- | --- | --- |
| AssumeRenewal | optional | Create | Indicates whether to generate a preview of future invoice items with the assumption that the subscriptions are renewed.Type: stringCharacter limit: 50Version notes: WSDL 81.0+Values: Set one of the following values in this field to decide how the assumption is applied in the billing preview.All: The assumption is applied to all the subscriptions. Zuora generates preview invoice item data from the first day of the customer's next billing period to the target date.None: (Default) The assumption is not applied to the subscriptions. Zuora generates preview invoice item data based on the current term end date and the target date.If the target date is later than the current term end date: Zuora generates preview invoice item data from the first day of the customer's next billing period to the current term end date.If the target date is earlier than the current term end date: Zuora generates preview invoice item data from the first day of the customer's next billing period to the target date.Autorenew: The assumption is applied to the subscriptions that have auto-renew enabled. Zuora generates preview invoice item data from the first day of the customer's next billing period to the target date.Note: This field can only be used if the subscription renewal term is not set to 0. |
| AccountId | required | Create | The ID of the customer account to which the billing preview applies.Type: stringCharacter limit: 25Version notes: WSDL 61.0+Values: ID of the customer account to which the billing preview applies. |
| ChargeTypeToExclude | optional | Create | The charge types to exclude from the billing preview.Type: stringCharacter limit: 50Version notes: WSDL 61.0+Values: OneTime, Recurring, Usage including any comma-separated combination of these values. |
| TargetDate | required | Create | The target date for the billingPreview call. The billingPreview call generates preview invoice item data from the first day of the customer's next billing period to the TargetDate.If the TargetDate is later than the subscription current term end date, the preview invoice item data is generated from the first day of the customer's next billing period to the current term end date. If you want to generate preview invoice item data past the end of the subscription current term, specify the AssumeRenewal field in the request.Type:date: Supported as of WSDL version 69+dateTime: Supported through WSDL version 68Character limit: 29Version notes: WSDL 61.0+Values: a valid date and time value |
| IncludingEvergreenSubscription | optional | Create | Indicates if evergreen subscriptions are included in the billingPreview call.Type: booleanCharacter limit: 5Version notes: WSDL 61.0+Values: FALSE (default), TRUE |

## TargetDate

The target date for the call. The forecast call generates preview invoice item data from the first day of the customer's next billing period to the TargetDate specified in the BillingPreviewtRequest complex type.

The customer's next billing period is the period for which the customer has yet to be invoiced. The date this period begins is particular to each customer, and can start in the past or the future depending on the target date of the customer's last bill run.
