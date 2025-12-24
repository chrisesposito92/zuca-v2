---
title: "TaxableItemSnapshot"
url: "https://docs.zuora.com/en/zuora-platform/integration/apis/soap-api/soap-api-object-reference/taxableitemsnapshot"
product: "zuora-platform"
scraped_at: "2025-12-24T05:44:27.257Z"
---

# TaxableItemSnapshot

The TaxableItemSnapshot object holds a taxable item snapshot for an individual invoice item or an individual invoice item adjustment.

Note:

This feature is in the Early Adopter phase.

You can create and query snapshots using the TaxableItemSnapshot object.

## Supported calls

You can use this object with the following calls:

-   create()

-   query()

-   delete()


You are not allowed to update the TaxableItemSnapshot object. You can delete the snapshot and create a new one.

## Example

The following is a sample SOAP request for creating a taxable item snapshot.

<ns1:create> <ns1:zObjects xsi:type\="ns2:TaxableItemSnapshot"\> <ns2:DestAddressCountry>US</ns2:DestAddressCountry> <ns2:ItemType>InvoiceItem</ns2:ItemType> <ns2:TaxableItemId>4028902a58bd5d130158bebbe1b9036b</ns2:TaxableItemId> <ns2:TaxCodeName>TaxCode2</ns2:TaxCodeName> <ns2:TaxDate>2019-12-02</ns2:TaxDate> <ns2:TaxMode>TaxExclusive</ns2:TaxMode> </ns1:zObjects> </ns1:create>
