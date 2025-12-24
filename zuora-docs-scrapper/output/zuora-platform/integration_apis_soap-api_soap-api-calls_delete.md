---
title: "delete()"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-calls/delete"
product: "zuora-platform"
scraped_at: "2025-12-24T05:38:46.897Z"
---

# delete()

Use the delete() call to delete one or more objects of the same type.

You can specify different types in different delete calls, but each delete call must only apply to one type of object.

## Usage

You can call delete() with a string type of [zObject](/zuora-platform/integration/apis/soap-api/soap-api-object-reference/zobject) and a list of IDs of that type. It returns an array of `DeleteResult`, indicating the success or failure of deleting each object.

The following information applies to this call:

-   You need to first determine the IDs for the objects you want to delete.

-   You cannot pass in any null IDs.

-   All objects in a specific delete() call must be of the same type.


## Objects per call limits

50 objects are supported in a single call.

## Syntax and arguments

DeleteResult\[\] = delete(type, ID\[\]);

| Argument | Description |
| --- | --- |
| type | The type of object that you are deleting. |
| ids[] | A list of one or more IDs for the objects you want to delete. |

## Response

`DeleteResult`

## Faults

Possible faults are listed on the separate Faults page.

-   InvalidTypeFault

-   InvalidValueFault

-   UnexpectedErrorFault


## Sample code for Java

Delete delete = new Delete(); delete.setType("Account"); ID id = new ID(); id.setID("402881491bd3cc34011bd3eb0c300092"); delete.setIds(id); ServiceStub.DeleteResponse res = stub.delete(delete, header); ServiceStub.DeleteResult\[\] sr = res.getResult();

## Sample SOAP request to delete a single object

<ns1:delete> <ns1:type\>Usage</ns1:type\> <ns1:ids>4028e699235ea4de0123777131fd5d68</ns1:ids> </ns1:delete>

## Sample SOAP request to delete multiple objects

<ns1:delete> <ns1:type\>Usage</ns1:type\> <ns1:ids>4028e699235ea4de0123777131fd5d68</ns1:ids> <ns1:ids>4028e699235ea4de0123777132125d6b</ns1:ids> </ns1:delete>
