---
title: "Objects that support custom fields in Zuora"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/objects-that-support-custom-fields-in-zuora"
product: "zuora-platform"
scraped_at: "2025-12-24T05:21:36.160Z"
---

# Objects that support custom fields in Zuora

This reference lists objects that supports custom fields, and also objects that support setting and retrieving custom field values via API operations.

## Objects that support creating custom fields from Zuora UI

Zuora enables you to create custom fields in the following objects from the Zuora UI:

-   Orders objects:

    -   Order

    -   Order Action

    -   Order Line Item

-   Billing objects:

    -   Account

    -   Amendment

    -   Contact

    -   Subscription

    -   Product

    -   Feature

    -   Price Book Item

    -   Product Rate Plan

    -   Product Rate Plan Charge

    -   Subscription Rate Plan

    -   Subscription Rate Plan Charge

    -   Product Feature

    -   Subscription Product Feature

    -   Invoice Item Adjustment

    -   Invoice Adjustment (This object is deprecated on Production)

    -   Invoice

    -   Invoice Item ("Invoice Detail")

    -   Credit Memo

    -   Debit Memo

    -   Credit Memo Item

    -   Debit Memo Item

    -   Taxation Item ("Invoice Tax")

    -   Credit Memo Taxation Item ("Credit Memo Tax")

    -   Debit Memo Taxation Item ("Debit Memo Tax")

    -   Usages

-   Payments objects:

    -   Refund

    -   Payment

    -   Payment Method

    -   Credit Balance Adjustment

    -   Payment Schedule

    -   Payment Schedule Item

-   Finance objects:

    -   Accounting Period

    -   Accounting Code

    -   Revenue Schedule

    -   Revenue Event

    -   Journal Entry

    -   Journal Entry Item

    -   Revenue Event Item

    -   Revenue Schedule Item


You can also set values to the custom fields in these objects.

Note that for the custom field defined in Zuora Billing that has revenue impact, after the object data has synced to Zuora Revenue, any update to the custom fields in Zuora Billing cannot be automatically interfaced to Zuora Revenue.

## Objects that support setting values to custom fields

After creating a custom field in the Zuora UI, you can set the value to this field using either UI or API. Setting values to custom fields is available to all the listed objects from the Zuora UI, but is restricted to only some objects via API.

The following table describes the mapping relationship between objects and the supported custom field operations via API:

| Object | Set value to custom fields via API | Retrieve value of custom fields via API |
| --- | --- | --- |
| Order |  |  |
| Order Action |  |  |
| Account |  |  |
| Amendment |  |  |
| Contact |  |  |
| Contact Snapshot |  |  |
| Subscription |  |  |
| Product |  |  |
| Feature |  |  |
| Price Book Item |  |  |
| Product Rate Plan |  |  |
| Product Rate Plan Charge |  |  |
| Subscription Rate Plan |  |  |
| Subscription Rate Plan Charge |  |  |
| Product Feature |  |  |
| Subscription Product Feature |  |  |
| Invoice Item Adjustment |  |  |
| Invoice Adjustment (This object is deprecated on Production) |  |  |
| Invoice |  |  |
| Invoice Item ("Invoice Detail") |  |  |
| Credit Memo |  |  |
| Debit Memo |  |  |
| Credit Memo Item |  |  |
| Debit Memo Item |  |  |
| Taxation Item ("Invoice Tax") |  |  |
| Credit Memo Taxation Item ("Credit Memo Tax") |  |  |
| Debit Memo Taxation Item ("Debit Memo Tax") |  |  |
| Usage |  |  |
| Refund |  |  |
| Payment |  |  |
| Credit Balance Adjustment |  |  |
| Payment Method |  |  |
| Accounting Period |  |  |
| Accounting Code |  |  |
| Revenue Schedule |  |  |
| Revenue Event |  |  |
| Journal Entry |  |  |
| Journal Entry Item |  |  |
| Revenue Event Item |  |  |
| Revenue Schedule Item |  |  |
