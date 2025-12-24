---
title: "create()"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/create"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:44.189Z"
---

# create()

Use the create() call to create one or more objects of a specific type.

You can specify different types in different create() calls, but each create() call must apply to only one type of object. This SOAP API reference includes syntax, call wrappers and container descriptions, requirements, and examples.

## Objects per call limits

50 objects are supported in a single call.

## Syntax and arguments

`SaveResult[] = create(zObject[])`

The call takes the following arguments:
| Argument | Description |
| --- | --- |
| zObject[] | An array of one or more objects of type zObject. |

## How to use this call

You can call create() on an array of one or more [zObjects](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/zobject). It returns an array of SaveResults , indicating the success or failure of creating each object. The following information applies to this call:

-   You cannot pass in null zObjects.

-   You can pass in a maximum of 50 zObjects at a time.

-   All objects must be of the same type.

-   SaveResult should be in the Response section of create().


## Using create() and subscribe()

Both the create() and subscribe() calls will create a new account. However, there are differences between the calls.

Use the create() call to create an account independent of a subscription.

Use the subscribe() to create the account with the subscription and the initial payment information.

See subscribe() for more information.

## Using create() and CallOptions

The CallOptions complex type is used when using the create() call with an amendment. It is only used in versions 25.0+ of the API, and is used when creating amendments in a single call. This insures that if one of the operations fails (either create or activate), the entire action will be rolled back.

Note:

Zuora recommends using the amend() call to create amendments.

See the CallOptions complex type for more information.

## Response

SaveResult

## Faults

-   InvalidTypeFault

-   UnexpectedErrorFault


## Sample code

// create account Account acc = new Account(); acc.setName("Test Account"); acc.setBatch("Batch1"); acc.setBillCycleDay(1); acc.setAllowInvoiceEdit(true); acc.setCurrency("USD"); acc.setStatus("Draft"); ZObject\[\] objs = new ZObject\[1\]; objs\[0\] = acc; Create create = new Create(); create.setZObjects(objs); CreateResponse resp = stub.create(create, this.header); SaveResult\[\] res = resp.getResult(); ID accountId = res\[0\].getId();
