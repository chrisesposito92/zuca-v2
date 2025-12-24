---
title: "TaxationItem"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/taxationitem"
product: "zuora-platform"
scraped_at: "2025-12-24T05:44:22.507Z"
---

# TaxationItem

The TaxationItem object is used to add a tax amount to an invoice item.

In the typical use-case, the tax amount that you specify in the object is calculated by Zuora Tax or a third-party tax engine such as Avalara or Configurable Tax apps.

Changes that you make with this object affect the product charges in your product catalog, but not the charges in existing subscriptions. To change taxes in existing subscriptions, you need to amend the subscription - remove the existing charge and replace it with the modified charge.

Zuora Tax and third-party tax engines such as Avalara or Configurable Tax apps can create TaxationItem objects. Before you use the TaxationItem object, you have to configure Zuora Tax, Avalara, or Configurable Tax apps, as the object's fields rely on the values you create during the configuration process.

## Supported calls

You can use this object with the following calls:

-   create()

-   query()


Typically, third-party applications use the create() call, and API users use the query() call to show tax information outside of the Zuora web-based UI or invoice PDF.

## Additional field details

Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an amend() call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the TaxationItem object is `TaxationItemId`
