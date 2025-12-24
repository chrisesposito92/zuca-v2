---
title: "Contact"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/contact"
product: "zuora-platform"
scraped_at: "2025-12-24T05:40:31.786Z"
---

# Contact

The Contact object defines the customer who holds an account or who is otherwise a person to contact about an account.

An `Account` object requires a contact for the BillToId and SoldToId fields before the account can be active. The Contact object provides the attributes that these Account object fields need.

## Supported calls

You can use this object with the following calls:

-   create()

-   query()

-   update()

-   delete()


Here's more information we think you might like to have about some of these fields. Use the Comments form at the bottom of this page if you have more questions.

## Additional field detail

Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the Contact object is `ContactId` .
