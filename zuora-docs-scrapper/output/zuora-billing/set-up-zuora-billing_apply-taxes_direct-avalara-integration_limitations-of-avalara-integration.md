---
title: "Limitations of Avalara integration"
url: "https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/direct-avalara-integration/limitations-of-avalara-integration"
product: "zuora-billing"
scraped_at: "2025-12-24T05:10:31.925Z"
---

# Limitations of Avalara integration

The Avalara integration has limitations including tax exemption issues in inclusive tax mode, a maximum of 1000 invoice items, invalid address handling in U.S. territories, and inconsistencies in tax calculations for draft and posted documents.

There are currently some limitations to bear in mind when using the Avalara integration. Some of these are limitations of Avalara's service, some are design choices made by Zuora, and others are features that are currently in development.

## Tax exemption ignored when using inclusive tax mode

The Avalara integration does not currently account for customers who are tax exempt when generating billing documents (invoices , credit and debit memos ) for charges that use the inclusive tax mode. If a taxable product rate plan charge is set to inclusive mode, the tax is still included in the billing documents, regardless of whether they are tax exempt or not.

## Maximum of 1000 invoice items per invoice

A maximum of 1000 Avalara relevant items is allowed on a billing document. This is an Avalara limitation. If a billing document contains more than 1000 items and is sent to Avalara, the tax calculation request will fail and an error will be returned.

Note: By default, the limit per invoice is 1,000 line items, which can be increased to a maximum of 15,000. If a higher limit is needed, please contact Avalara directly to request an increase. Zuora does not coordinate this adjustment.

Submit a request at Zuora Global Support if you require additional assistance.

## Invalid addresses in U.S. territories will not return tax details

If an address is passed to Avalara with an invalid address in a U.S. territory, Avalara will not return tax details for the bill run. The error will result in blank cells where there would normally be tax details in the Avalara AvaTax Admin Console.

Zuora recommends correcting all invalid addresses whenever possible, but suggests two alternatives to continue the bill run to completion:

-   Remove any invalid street address and only use the city, state, and postal code, or

-   Enter `General Delivery` in Address 2

    -   Note: `General` `Delivery` can only resolve the issue of invalid address. The correct state and city is always required.

    -   If you have the correct postal code, then you don't need to provide an accurate address. You can input `General` `Delivery` in Address 2 and Avalara will use the postal code to calculate tax.

    -   If you do not have the correct postal code, then you need to provide an accurate address registered in USPS or Canada Post. You can not use `General Delivery` in this case.


![Address](https://zuora.deploy.heretto.com/v4/deployments/QPAZk6lsgXwvotedNERE/object/bb3f72b5-b45d-499a-9357-50d522f3ff24?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2pvcnNlay5jb20vZXpkX29yZ2FuaXphdGlvbiI6Inp1b3JhIiwiaHR0cHM6Ly9qb3JzZWsuY29tL2V6ZC9vYmplY3RfdXVpZCI6ImJiM2Y3MmI1LWI0NWQtNDk5YS05MzU3LTUwZDUyMmYzZmYyNCIsImV4cCI6MTc2NjYzOTQyOSwianRpIjoiYjQ5ZDllNTU0NmIwNDU4Y2FiM2RmOTczODg5ZTU4ZjAiLCJodHRwczovL2pvcnNlay5jb20vZXpkX2ZpbGVzZXQiOiJWZHdCeUJjM0lBa01wRU9LSFdxZCJ9.CmakY_dqA_VTKkh12JVJ-VsmLkFwRoofDnfw0OLvcCU)

See Edit customer accounts for more information on how to update contact information.

## Zuora limitations - Taxes calculated for draft and posted billing documents

When creating or posting billing documents, the tax rate on invoice date or memo date is applied to all charges.

Possible inconsistency between tax amounts on draft and posted billing documents

If tax conditions change during the period between the creation of a draft and a posted billing document, the tax amounts on the two documents may be inconsistent. For example, if the SoldTo contact address of an invoice is modified or the tax rules in Avalara are updated after a draft invoice is created and before an invoice is posted, the tax amounts on the two invoices may be different. The same inconsistency may occur when a (negative) credit invoice item is created to return funds to the customer, as the tax conditions may have changed since the original invoice item was created. Avalara are updated after a draft invoice is created and before an invoice is posted, the tax amounts on the two invoices may be different. The same inconsistency may occur when a (negative) credit invoice item is created to return funds to the customer, as the tax conditions may have changed since the original invoice item was created.

## Known issues

Tax item level rounding

Zuora receives Avalara's taxation item amount then does the item level rounding before displaying the rounding value in the Zuora UI. There might be a discrepancy between the Avalara UI and the Zuora UI.

Brazilian taxation not yet supported.

Zuora does not support Avalara Brazil at this time.

Draft amendment previews in Zuora UI Taxes on previews of draft amendments in the Zuora UI is not yet implemented. The value displayed for Tax is always 0.00. This issue only happens when the draft amendment preview is viewed in the Zuora UI.

Note:

Calls using the amend API with the preview option enabled return the correct values.

Draft subscription previews in the Zuora application show incorrect taxes Previews of draft subscriptions in the Zuora application show incorrect tax values when the following conditions are true:

-   The subscription contains at least one taxable rate plan charge that uses the inclusive tax mode.

-   The draft subscription preview is viewed in the Zuora application.


Note:

Calls to the subscribe API with the preview option enabled return the correct values.
