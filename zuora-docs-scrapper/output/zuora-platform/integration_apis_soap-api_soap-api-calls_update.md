---
title: "update()"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/update"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:54.504Z"
---

# update()

Use the update() call to update the object information.

The update() call updates the information in one or more objects of the same type. You can specify different types of objects in different update() calls, but each specific update() call must apply to one type of object.

## Usage

You can call update() on an array of one or more [zObjects](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/zobject). It returns an array of SaveResults , indicating the success or failure of updating each object. The following information applies to this call:

-   You cannot pass in null zObjects.

-   You can pass in a maximum of 50 zObjects at a time.

-   All objects must be of the same type.

-   For each field in each object, you must determine that object's ID. Then populate the fields that you want update with the new information.

-   Zuora ignores unrecognized fields in update() calls. For example, if an optional field is spelled incorrectly or a field that does not exist is specified, Zuora ignores the field and continues to process the call. No error message is returned for unrecognized fields.

-   SaveResult should be in the Response section of update().


## Object limits

50 objects are supported in a single call.

## Syntax and argument

`SaveResult[] = update(zObject[])`

The call takes the following arguments.

| Argument | Description |
| --- | --- |
| zObject[] | An array of one or more objects of type zObject that you want to update. The objects must be of the same type. |

## Response

SaveResult

## Faults

-   InvalidTypeFault

-   UnexpectedErrorFault


## Example request

<ns1:update> <ns1:zObjects xsi:type\="ns2:Subscription"\> <ns2:Id>2c92c0f83f3beb33013f3f9ecb8009e9</ns2:Id> <ns2:ServiceActivationDate>2013-06-15T15:18:58.000-08:00</ns2:ServiceActivationDate> </ns1:zObjects> </ns1:update>
