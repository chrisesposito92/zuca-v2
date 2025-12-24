---
title: "Invoice-level rounding"
url: "https://docs.zuora.com/en/zuora-billing/bill-your-customer/invoice-management/invoice-level-rounding"
product: "zuora-billing"
scraped_at: "2025-12-24T08:33:20.115Z"
---

# Invoice-level rounding

The invoice-level rounding feature allows rounding to be applied at the invoice total level, rather than on individual invoice items, ensuring more accurate final totals.

By default, Zuora applies the rounding increment against every invoice item. With this rule, every invoice and taxation item will be rounded separately. The invoice-level rounding feature allows you to apply the rounding increment once, at the invoice total level, instead of against each invoice item.

For example, with this feature enabled, invoice and taxation items can be rounded to the nearest 1 cent, but only the final invoice total will be rounded to the nearest 5 cents.

Note:

This feature is in the Early Adopter phase. If you want to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com).

## Impact on memo items

If you have enabled the Invoice Settlement feature, the invoice-level rounding feature will have impacts on memo items. The following scenarios are for your reference.

## Create memo items from rounding invoice items

When you write off or reverse an invoice, rounding invoice items will generate memo items with the same Rounding processing type. This behavior applies to these tasks:

-   [Write off an invoice through the Zuora UI](/zuora-billing/bill-your-customer/invoice-management/write-off-invoices)

-   [Write off an invoice through the REST API](https://www.zuora.com/developer/api-references/api/operation/PUT_WriteOffInvoice)

-   [Reverse an invoice through the Zuora UI](/zuora-billing/bill-your-customer/invoice-management/invoice-reversal/reverse-invoices-from-the-zuora-ui)

-   [Reverse an invoice through the REST API](https://www.zuora.com/developer/api-references/api/operation/PUT_ReverseInvoice)


When you create a credit or debit memo from an invoice, rounding invoice items are blocked from generating any memo items. You will receive an error message. This behavior applies to these tasks:

-   Create a credit or debit memo from an invoice through the Zuora UI

-   [Create a credit memo from an invoice through the REST API](https://www.zuora.com/developer/api-references/api/operation/POST_CreditMemoFromInvoice)

-   [Create a debit memo from an invoice through the REST API](https://www.zuora.com/developer/api-references/api/operation/POST_DebitMemoFromInvoice)


## Create taxation items from rounding memo items

You can expect to see rounding memo items if the invoice-level rounding feature is enabled, just like how rounding invoice items are created as previously mentioned.

When you create taxation items for a credit memo or debit memo, rounding memo items are blocked from generating any taxation items. This behavior applies to these tasks:

-   [Create taxation items for a credit memo through the REST API](https://www.zuora.com/developer/api-references/api/operation/POST_CM_TaxationItems)

-   [Create taxation items for a debit memo through the REST API](https://www.zuora.com/developer/api-references/api/operation/POST_DM_TaxationItems)


## Query the Rounding Amount in the Zuora API

As part of the invoice rounding feature, we have added a new value for `ProcessingType` of the InvoiceItem object. The value `4` represents a rounding object item.

If you want to use the Zuora API to query the rounding amount, you can use this value to query the invoice item ( `ProcessingType = '4'` ).

Because the `ChargeName` for the rounding item is hard-coded to `Rounding Amount` , you can also query the rounding amount by `ChargeName = 'Rounding Amount'` or `ChargeName like 'Rounding%'` .

## SOAP example

<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:api="http://api.zuora.com/"\> <soapenv:Header> <api:SessionHeader> <api:session> yE82OEz2ZC8RKgBl4T\_CBK-2wgFO2tkPV1KjCHbYdEquVr9NcGN\_WZag8JGaHT-WINNVqfNrl9QCwwCEH3IYXscjW9UM-YRQi\_IjFoky7RYiP-3FI8imkSWlao-YKE33VWNlfHh8w92nIbkMqcI0UTKGaly3O23QIhZHieOLuFCUxITa7c15LXi\_p7ytC1Lb </api:session> </api:SessionHeader> </soapenv:Header> <soapenv:Body> <api:query> <api:queryString> SELECT ChargeName, ChargeAmount FROM InvoiceItem </api:queryString> </api:query> </soapenv:Body> </soapenv:Envelope>

## Limitations

The following limitations apply to the invoice rounding feature:

-   If you want to export these rounding amounts using Zuora data sources, we recommend that you export Invoice Items and filter for those items with a `Processing Type` equal to `Rounding` .

-   If you re-generate a draft invoice (for example, to add new charges), Zuora will update the Rounding Amount on that invoice automatically. However, if you make manual edits or adjustments to an existing invoice, Zuora will not perform rounding automatically after such changes are made, so it is your responsibility in this case to also update the Rounding Amount to achieve a properly rounded invoice total.
