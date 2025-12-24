---
title: "Objects and fields supported by Custom Logic"
url: "https://docs.zuora.com/en/zuora-platform/extensibility/custom-logic/objects-and-fields-supported-by-custom-logic"
product: "zuora-platform"
scraped_at: "2025-12-24T05:22:22.007Z"
---

# Objects and fields supported by Custom Logic

Lists objects and fields supported by the Custom Logic feature.

You can use fields from both base and joined objects, up to two levels deep, in decision tables, decision trees, or functions. The available objects and fields depend on the custom logic and object type.

For example, when creating a decision table for the Invoice object, you can define conditions or mutations not only on Invoice fields but also on fields from the related Account object.

## Supported base and joined objects

The following table lists the supported base and joined objects of each custom logic type:

| Base object | Joined object | Decision table | Decision tree | Function |
| --- | --- | --- | --- | --- |
| Account | Parent AccountBill To ContactSold To Contact |  |  |  |
| Contact | (N/A) |  |  |  |
| Credit Memo | AccountParent AccountBill To ContactSold To ContactInvoiceAccountBill To ContactSold To Contact |  |  |  |
| Debit Memo | AccountParent AccountBill To ContactSold To ContactInvoiceAccountBill To ContactSold To Contact |  |  |  |
| Invoice | AccountParent AccountBill To ContactSold To ContactBill To ContactSold To Contact |  |  |  |
| Order Line Item | (N/A) |  |  |  |
| Payment | AccountParent AccountBill To ContactSold To Contact |  |  |  |
| Rate Plan | SubscriptionAccountBill To ContactSold To Contact |  |  |  |
| Rate Plan Charge (also known as Subscription Rate Plan Charge) | Product Rate Plan ChargeRate Plan |  |  |  |
| Refund | AccountParent AccountBill To ContactSold To Contact |  |  |  |
| Subscription | AccountParent AccountBill To ContactSold To ContactBill To ContactSold To Contact |  |  |  |
| (Custom objects) | (N/A) |  |  |  |

## Supported fields

Refer to the respective articles for details about the supported fields of each base or joined object. For example, see the Account fields supported by Custom Logic article for the supported fields of the Account and Parent Account objects.

The following table lists the circumstances under which object fields are used in custom logic, including where fields appear in each custom logic.

|  | Decision table | Decision tree | Function |
| --- | --- | --- | --- |
| Define conditions | In Condition | In Condition | In function bodies |
| Mutate field values | In Result | In Result | In function returnsApplies only to formula functions. |

Custom Logic supports custom fields on all objects under both circumstances. However, certain standard fields on standard objects are not supported under one or either of these circumstances. For a complete list of supported standard fields of each standard object, see the object detail page by clicking the object name in the "Supported objects" section of this article.
