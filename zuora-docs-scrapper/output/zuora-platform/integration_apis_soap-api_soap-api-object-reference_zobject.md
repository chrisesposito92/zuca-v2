---
title: "zObject"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/zobject"
product: "zuora-platform"
scraped_at: "2025-12-24T05:44:45.547Z"
---

# zObject

Describes the fields associated with the zObject base object.

zObject is the base object from which all other SOAP API objects are extended.

## Example Request

The following code segment requests to set the three fields to null for the account with the given Id.

<ns1:update> <ns1:zObjects xsi:type\="ns2:Account"\> <ns2:fieldsToNull>ParentId</ns2:fieldsToNull> <ns2:fieldsToNull>DefaultPaymentMethodId</ns2:fieldsToNull> <ns2:fieldsToNull>Notes</ns2:fieldsToNull> <ns2:Id>2c92c0f9501d4f2a0150247036462ca3</ns2:Id> </ns1:zObjects> </ns1:update>
