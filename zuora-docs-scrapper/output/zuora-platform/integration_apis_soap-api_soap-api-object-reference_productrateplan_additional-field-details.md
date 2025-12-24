---
title: "Additional field details"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/productrateplan/additional-field-details"
product: "zuora-platform"
scraped_at: "2025-12-24T05:43:10.816Z"
---

# Additional field details

Additional details of the fields of the ProductRatePlan object.

## ActiveCurrencies

Queries

You can query the contents of the `ActiveCurrencies` field and the `id` field, using a WHERE clause that specifies the rate plan `id`, as shown here:

`Select id,ActiveCurrencies from ProductRatePlan where id='402892b43d909624013d90ae7f030002'`

In effect, this allows you to discover the active currencies for the specified rate plan. However, you cannot query `ActiveCurrencies` and any other fields (besides `id`) at the same time.

Number of currencies

There is no practical limit on the number of active currencies (or the size of the `ActiveCurrencies` field), but the maximum number of codes that can be changed in a single call is four. For instance, in a single call you could activate four currencies, or deactivate four currencies, or activate two and deactivate two. To make more than four changes always requires more than one call.

The create() call creates a new ProductRatePlan with up to four active currencies. A query() at any time returns the current list of active currencies. And if an update() call includes the `ActiveCurrencies` field, that field should include the desired list of active currencies, always remembering that the new list can never have more than four differences from the existing list.

The update() call expects the full list of active currencies you want, not just incremental changes. For each active currency update, provide the following currencies in your list:

`Current active currencies + up to four changes (additions or deletions)`

SOAP API Example

If you have four existing active currencies (AED, AFN, ALL, AMD) and you want to add four more currencies (BAM, BBD, BDT, BGN), the call would look like this:

<ns1:update> <ns1:zObjects xsi:type\="ns2:ProductRatePlan"\> <ns2:Id>4028e6963087b8f201308cdbddc04228</ns2:Id> <ns2:ActiveCurrencies>AED,AFN,ALL,AMD,BAM,BBD,BDT,BGN﻿</ns2:ActiveCurrencies> </ns1:zObjects> </ns1:update>

The following table shows an example for a series of calls and the result.

| Call | Operation | ActiveCurrencies field value | Active currencies after the call |
| --- | --- | --- | --- |
| create() | Create a new DataRatePlan object with 4 active currencies | AED, AFN, ALL, AMD | AED, AFN, ALL, AMD |
| update() | Activate 4 more currencies | AED, AFN, ALL, AMD, BAM, BBD, BDT, BGN | AED, AFN, ALL, AMD, BAM, BBD, BDT, BGN |
| update() | Deactivate 2, and activate 2 more | AED, AFN, ALL, BAM, BBD, BDT, CAD, CDF | AED, AFN, ALL, BAM, BBD, BDT, CAD, CDF |

## id

The `id` field contains the unique ID of this object, automatically assigned by Zuora upon creation. You use this ID later when you work with the object. For example, if you send an amend() call to modify an existing subscription, then you need to include the specific Subscription object's ID with the call.

The ID for the ProductRatePlan object is `ProductRatePlanId` .
