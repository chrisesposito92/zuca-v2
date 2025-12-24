---
title: "Communication Profile"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/communication-profile"
product: "zuora-platform"
scraped_at: "2025-12-24T05:40:26.626Z"
---

# Communication Profile

You can use the Zuora API to query the CommunicationProfile object, which is read-only.

A communication profile is a set of policies that determine how to communicate with the contacts associated with a particular account. You must use the web-based UI to specify these policies. See Communication profiles for more information.

WSDL version 30.0+ is required to use this object.

## Supported calls

You can use this object with the following call:

-   query()


## Additional field details

Id

The ID of this object. Every object has a unique identifier that Zuora automatically assigns upon creation. You use this ID later when you work with the object. For example, if you send an `amend()` call to modify an existing subscription, then you need to include the specific `Subscription` object's ID with the call.

The ID for the `CommunicationProfile` object is ``CommunicationProfile` Id` .
